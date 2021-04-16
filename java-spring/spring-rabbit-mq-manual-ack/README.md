### Açıklama 
- Bu çalışmada Spring üzerinden RabbitMQ'ya gönderilen mesajların ulaşıp ulaşmadığı incelenmiştir.
- Aynı zamanda RabbitMQ dan mesajlar tüketilirken bir sorun olması durumunda mesaj yeniden rabbitMQ'ya kuyruklanmıştır.
- RabbitMQ kurulumu ve Sprgin ile impelementasyonu aşağıdaki adresdedir. 
[index için tıklayın](../spring-rabbit-mq-example/README.md)


### Configration eklenmesi
RabbitMQ'ya Mesaj gönderirken  başarılı ve başarısız işlemlerin ele alınabileceği callback fonksiyonları aşağıdaki gibi configuration class'a eklenir.

```
rabbitTemplate.setReturnCallback((message, replyCode, replyText, exchange, routingKey) -> {
    System.out.println("Message sending failed");
});

rabbitTemplate.setConfirmCallback((correlationData, ack, cause) -> {
    if (ack) {
        System.out.println("Message sent to RabbitMQ exchanger");
    } else {
        System.out.println("Message not sent to RabbitMQ exchanger");
    }
});
```

### Properties dosyasının güncellenmesi
Uygulamanın mesajı aldığını RabbitMQ'ya otomotik olarak bildirmemeis için properties dosyasında acknowledge-mode:manual olarak işaretlenir.
```
spring.rabbitmq.listener.simple.acknowledge-mode:manual
```

Gönderilen mesajların responselarına bakmak için confirm-type=correlated olarak işaretlenir. <br/>
Ayrıca publisher'ın response beklediğini belirtmek için publisher-returns=true ve mandatory=true parametreleri properties file'a eklenir.
```
spring.rabbitmq.publisher-confirm-type=correlated
spring.rabbitmq.publisher-returns=true
spring.rabbitmq.template.mandatory=true
```

### Gönderilen mesajın responsunun alınması
Daha önceki örneklerde rabbitTemplate.convertAndSend(...) requestlerinde correlation objesini parametre oarak geçmemiştik. <br/>
Ancak burada bir response beklenildiği için methoda CorrelationData dan bir instance oluştururak parametre olarak verilir. <br/>
Son olarak bir timeout süresi tanımlanır ve confirm objesinin isAck() methodu çağrılarak mesajın sunucuya ulaşıp ulaşmadığı anlaşılır.

```
public void sendMessage(MessageData messageData) throws Exception {
    CorrelationData correlationData = new CorrelationData("Correlation for message 1");
    this.rabbitTemplate.convertAndSend(exchangeName, routngKey, messageData, correlationData);
    Confirm confirm = correlationData.getFuture().get(20, TimeUnit.MILLISECONDS);
    System.out.println("Confirm received, ack = " + confirm.isAck());
}
```

### Consumer'ın ACK yada NACK ile sunucuya bilgi vermesi
Gönderilen mesajları tüketmek için aşağıdaki şekilde bir listenir oluşturulur. <br/>
properties dosyasında acknowledge-mode:manual olarak işaretlendiği için burada ack yada nack yollanmazsa mesaj queue dan silinmez. <br/>
mesajın alındığını sunucuya bildirmek için channel üzerinden ack komutu gönderilir. <br/>
mesaj işleme esnasında bir hata olursa sunucunun mesajı yeniden kuyruklaması için nack komutu yine channel üzerinden gönderilir.
mesajın kuyruğa alınmadan silinmesinin istenmesi durumunda ise recjt gönderilmeldiir. 

**NOT:** Mesaj listenera geldiği anda queue da mesaj Unacked statusune alınır. acknowledge-mode:manual olduğu için mesaj kuyruktan silinmez.
Eğer burada ack ve nack gönderilmezse sunucuda mesaj Unacked olarak kalacaktır. 
ack göndermemiz durumunda mesaj kuyruktan silinir. nack göndermemiz durumunda ise tekrar aynı mesaj consumer lara gönderilecektir.

```
@RabbitListener(queues = "${rabbitmq.queue.name}")
public void messageListener(MessageData data, Channel channel, Message message) throws IOException {
    log.info("Message from RabbitMQ : {}", data);

    if (data.getId() > 100) {
        channel.basicAck(message.getMessageProperties().getDeliveryTag(), false);
        return;
    }

    if (data.getId() == 0) {
        channel.basicReject(message.getMessageProperties().getDeliveryTag(), false);
        return;
    }

    //requeue
    channel.basicNack(message.getMessageProperties().getDeliveryTag(), false, true);
}
```

**NOT2:** Eğer cluster yapısı yoksa ve sadece tek bir consumer varsa mesjaj reject edilmediği sürece RabbitMQ aynı mesajı gönderecektir.


### CURL örneği (manual ACK)
 ```
$ curl -X POST "http://localhost:8080/messages" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"id\": 123, \"name\": \"Test Message 123\", \"description\": \"Here is description123 \"}"
```
 
### CURL örneği(manual NACK)
 ```
$ curl -X POST "http://localhost:8080/messages" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"id\": 12, \"name\": \"Test Message 12\", \"description\": \"Here is description12 \"}"
```
 
### CURL örneği(manual REJECT)
 ```
$ curl -X POST "http://localhost:8080/messages" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"id\": 0, \"name\": \"Test Message 12\", \"description\": \"Here is description12 \"}"
```
 
### NOT
Burada listener RabbitMQ üzerindeki mesajları hemen tüketmesin diye listener methodu comment out yapılmıştır.
```
//@RabbitListener(queues = "${rabbitmq.queue.name}")
public void messageListener(MessageData message) {
    log.info("Message from RabbitMQ : {}", message);
}
```


