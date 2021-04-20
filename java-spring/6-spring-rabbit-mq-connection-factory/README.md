### Açıklama 
- Bu çalışmada RabbitMQ connection factory bean'inin aldığı parametreler configuration classından verilmiştir.
- Önceki örneklerdeki gibi 2 farklı queue kullanılmıştır.
- çalışma manuel ACK/NACK gönderimini içermektedir.
- Uygulama ayağa kalkarken otomotik olarak exchange ve queue ları oluşturmaktadır.
- RabbitMQ da yetki ve kategori işlemleri için kullanılan vhost özelliğinden faydalanılmıştır. 

 
### RabbitMQ'nun docker ile ayağa kaldırılması
```
$ docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 -e RABBITMQ_DEFAULT_VHOST=local rabbitmq:3-management
```

### Configration eklenmesi
önceki çalışmalardan farklı olarak ConnectionFactoryBean'i aşağıdaki şekilde oluşturulur.
```
@Bean
public ConnectionFactory connectionFactory() throws KeyManagementException, NoSuchAlgorithmException {
    CachingConnectionFactory connectionFactory = new CachingConnectionFactory();
    connectionFactory.setHost(mqProperites.getHost());
    connectionFactory.setUsername(mqProperites.getUsername());
    connectionFactory.setPassword(mqProperites.getPassowrd());
    connectionFactory.setVirtualHost(mqProperites.getVirtualHost());
    connectionFactory.setPort(mqProperites.getPort());
    //connectionFactory.getRabbitConnectionFactory().useSslProtocol();
    return connectionFactory;
}
```

### Publisher örneği
```
private void sendToRabbitMQ(String exchange, String key, Object data, CorrelationData correlationData) {
    log.info("data is sending...");
    try {
        this.rabbitTemplate.convertAndSend(exchange, key, data, correlationData);
    } catch (AmqpException e) {
        log.error("An error occured! Data could not sent to the RabbitMQ, data:{}", data);
    }
    log.info("data is sent.");
}
```

### Listener örneği
```
@RabbitListener(queues = "${app.rabbitmq.messageDataQueue}")
public void messageDataListener(MessageData data, Channel channel, Message message) throws IOException {
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

### CURL örneği (Manual User ACK)
 ```
$ curl -X POST "http://localhost:8080/users" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"id\": 123, \"name\": \"Jhon\", \"age\": 20, \"email\": \"aa@bb.cc \"}"
```
 
### CURL örneği (manual Message ACK)
 ```
$ curl -X POST "http://localhost:8080/messages" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"id\": 123, \"name\": \"Test Message 123\", \"description\": \"Here is description123 \"}"
```
 
### CURL örneği(manual Message NACK)
 ```
$ curl -X POST "http://localhost:8080/messages" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"id\": 12, \"name\": \"Test Message 12\", \"description\": \"Here is description12 \"}"
```
 
### CURL örneği(manual Message REJECT)
 ```
$ curl -X POST "http://localhost:8080/messages" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"id\": 0, \"name\": \"Test Message 12\", \"description\": \"Here is description12 \"}"
```
