### Açıklama 
RabbitMQ kurulumu ve Sprgin ile impelementasyonu aşağıdaki adresdedir. 
[index için tıklayın](../spring-rabbit-mq-example/README.md)

### Configration eklenmesi
Connection factory'i içeren RabbitTransactionManager aşağıdaki gibi Bean olarak yaratılır.
```
@Bean
public PlatformTransactionManager transactionManager(ConnectionFactory connectionFactory) {
    return new RabbitTransactionManager(connectionFactory);
}
```
### RabbitMQService class'ının oluşturulması
- Configurasyonunda RabbitTransactionManager'ı da barındıran Spring @Transactional anotasyonuyla RabbitMQ işlemlerini takip eder.
- Bir Exception oluşması durumunda spring RabbitMQ dan gönderdiği mesajı geri alacaktır.
- Aşağıdaki şekilde transactional olarak tanımlanmış sendMessage(...) çağrılarak durum incelenebilir.
```
@Transactional
public void sendMessage(MessageData messageData) {
    this.rabbitTemplate.convertAndSend(exchangeName, routngKey, messageData);

    if (messageData.getId() < 100) {
        throw new RuntimeException("ID must be greater than 100");
    }
}
```

### Durable(Restart'a dayanıklı) Queue oluşturmak
com.demo.config.RabbitMQConfiguration class'ında Queue oluştururken constructor'a verilen ikinci parametre Queue yi durable(kaybolmayan) yapmak içindir. 
```
@Bean
public Queue queue() {
    return new Queue(queueName, true);
}
```

### CURL örneği
 ```
$ curl -X POST "http://localhost:8080/messages" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"id\": 123, \"name\": \"Test Message 123\", \"description\": \"Here is description123 \"}"
```
 
### Hatalı CURL örneği(@Transactional)
 ```
$ curl -X POST "http://localhost:8080/messages" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"id\": 12, \"name\": \"Test Message 12\", \"description\": \"Here is description12 \"}"
```
 
### NOT
Burada listener RabbitMQ üzerindeki mesajları hemen tüketmesin diye listener methodu comment out yapılmıştır.
```
//@RabbitListener(queues = "${rabbitmq.queue.name}")
public void messageListener(MessageData message) {
    log.info("Message from RabbitMQ : {}", message);
}
```


