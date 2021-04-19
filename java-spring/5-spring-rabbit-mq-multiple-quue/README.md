### Açıklama 
- Bu çalışmada 2 farklı endpoint'e gelen HTTP requestleri farklı 2 Queue'ya yazılıp farkli 2 listener ile bu Queue dakı mesajlar tüketilmiştir.
- Yazının en altında paylaşılan user ve message requestleri iki farklı queue ve bunlarla ilişkili iki farklı exchange'e yazılmaktadır.
- Farklı Queue lara yazıldığı gibi Listener ları da ayrı ayrıdır.
 
### RabbitMQ'nun docker ile ayağa kaldırılması
```
$ docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 -e RABBITMQ_DEFAULT_VHOST=dev1 rabbitmq:3-management
```

### Configration eklenmesi
- RabbitMQ congiurasyonu **RabbitMQConfiguration.java** adlı dosyadadır.
- Önceki çalışmalardan farklı olarak bean oluştururken queue,exchange ve binding in duplicate edilmesidir.
- son hali aşağıdaki gibidir.
 ```
@Configuration
@Slf4j
public class RabbitMQConfiguration {

    @Autowired
    RabbitMQProperites mqProperites;

    @Bean
    public Queue userQueue() {
        return new Queue(mqProperites.getUserDataQueue(), true);
    }

    @Bean
    public Queue msgQueue() {
        return new Queue(mqProperites.getMessageDataQueue(), true);
    }

    @Bean
    public DirectExchange userExchange() {
        return new DirectExchange(mqProperites.getUserDataExchange());
    }

    @Bean
    public DirectExchange msgExchange() {
        return new DirectExchange(mqProperites.getMessageDataExchange());
    }

    @Bean
    public Binding binding(@Qualifier("userQueue") Queue queue, @Qualifier("userExchange") DirectExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with(mqProperites.getUserDataRoutingKey());
    }

    @Bean
    public Binding binding2(@Qualifier("msgQueue") Queue queue, @Qualifier("msgExchange") DirectExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with(mqProperites.getMessageDataRoutingKey());
    }

    @Bean
    public MessageConverter messageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(messageConverter());
        return rabbitTemplate;
    }
}
```

### Properties class'ının eklenmesi
- Application.properties dosyasındaki rabbitMQ ile alakalı alanlar için bir properties class'ı oluşturulmuştur. <br/>
class'ın tanımı aşağıdaki gibidir.
```
@Configuration
@ConfigurationProperties(prefix = "app.rabbitmq")
@Getter
@Setter
public class RabbitMQProperites {

    private String userDataQueue;
    private String userDataExchange;
    private String userDataRoutingKey;
    private String messageDataQueue;
    private String messageDataExchange;
    private String messageDataRoutingKey;
    private Integer ackResponseTimeout;

}
```

### Exchange ve Key  değerine göre mesaj publish etmek
method çağırma
```
sendDataToMQService(mqProperites.getUserDataExchange(), mqProperites.getUserDataRoutingKey(), userData,
        correlationData);
```

mesaj gönderme işlemi
```
this.rabbitTemplate.convertAndSend(exchangeName, routingKey, data, correlationData);
```

### Queue lar için ayrı ayrı listener eklenmesi
```
@RabbitListener(queues = "${app.rabbitmq.messageDataQueue}")
```

class'ın son hali 
```

@Component
@Slf4j
public class RabbitMQListenerService {

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

    @RabbitListener(queues = "${app.rabbitmq.userDataQueue}")
    public void userDataListener(UserData data, Channel channel, Message message) throws IOException {
        log.info("User from RabbitMQ : {}", data);

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
