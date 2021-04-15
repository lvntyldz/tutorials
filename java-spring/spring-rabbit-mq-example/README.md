### Açıklama 

### Rabbit MQ docker üzerinde ayağa kaldırılır.
```
$ docker run -it --rm --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
```
Kurulumdan sonra aşağıdaki adresten Web UI'a erişilir: <br/>
http://localhost:15672 
<br/>
username: **guest**
password: **guest**

RabbitMQ indirme linki : https://www.rabbitmq.com/download.html

### Maven ile spring boot projesi oluşturulur.
- Projeye maven desteğinin eklenmesi [doküman için tıklayın](https://github.com/lvntyldz/bank-workshop/blob/master/springboot-example/documentation/addMavenSupportToProject.md)
- Projenin SpringBoot uygulamasına dönüştürülmesi [doküman için tıklayın](https://github.com/lvntyldz/bank-workshop/blob/master/springboot-example/documentation/convertProjectToSpringBootApp.md)
- İlk REST endpoint'in eklenmesi [doküman için tıklayın](https://github.com/lvntyldz/bank-workshop/blob/master/springboot-example/documentation/createFirstRestController.md)

### Lombok pom.xml'e eklenir.
```
<dependency>
    <groupId>org.projectlombok</groupId>
    <artifactId>lombok</artifactId>
    <optional>true</optional>
</dependency>
```

### RabbitMQ pom.xml'e eklenir.
```
<dependency>
  <artifactId>spring-boot-starter-amqp</artifactId>
  <groupId>org.springframework.boot</groupId>
</dependency>
```

### RabbitMQ için projede configuration bean'i oluşturulur.
Properties dosyasından değişkenleri alarak rabbitMq bağlantısı yapan ve ilgili beanleri oluşturan configuration dosyası aşağıdaki gibi olacaktır.
```
@Configuration
@Slf4j
public class RabbitMQConfiguration {

    @Value("${rabbitmq.queue.name}")
    private String queueName;

    @Value(("${rabbitmq.exchange.name}"))
    private String exchangeName;

    @Value("${rabbitmq.routing.key}")
    private String routngKey;

    @Bean
    public Queue queue() {
        return new Queue(queueName, false);
    }

    @Bean
    public DirectExchange exchange() {
        return new DirectExchange(exchangeName);
    }

    @Bean
    public Binding binding(Queue queue, DirectExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with(routngKey);
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
### RabbitMQ için listener oluşturulur.
RabbitMQ ya gelecek ilgli queue daki tüm mesajlar aşağıdaki şekilde alınır. 
 
 ```
@Component
@Slf4j
public class RabbitMQListenerService {

    @RabbitListener(queues = "${rabbitmq.queue.name}")
    public void messageListener(MessageData message) {
        log.info("Message from RabbitMQ : {}", message);
    }
}
```
 
 ### Controller oluşturulması.
Dıraşırdan POST ile gelecek olan isteklerin alınıp RabbitMQ'ya iletilemsi için bir endpoint oluşturulur.
```
@Autowired
RabbitMQService rabbitMQService;

@PostMapping(value = "/messages")
public String sendMessage(@RequestBody MessageData messageData) {
    log.info("Message received... message: {}", messageData);

    rabbitMQService.sendMessage(messageData);
    return "Message is sent";
}
```
>
 ### Properties dosyasının eklenmesi.
 ```
#rabbitmq connections
spring.rabbitmq.host=localhost
spring.rabbitmq.post=5672
spring.rabbitmq.username=guest
spring.rabbitmq.passowrd=guest
#queue params
rabbitmq.queue.name=DemoQueue1
rabbitmq.exchange.name=DemoExchange1
rabbitmq.routing.key=DemoRoutingKey1
```
 
 ### CURL örneği
 ```
$ curl -X POST "http://localhost:8080/messages" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"id\": 123, \"name\": \"Test Message 1\", \"description\": \"Here is description1 \"}"
```
 


