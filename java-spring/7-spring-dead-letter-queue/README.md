### Açıklama 
RabbitMQ kurulumu ve Sprgin ile impelementasyonu aşağıdaki adresdedir.
[index için tıklayın](../1-spring-rabbit-mq-example/README.md)

### Açıklama
- Herhangi bir hata olmazsa produce edilen data direk consume edilerek Queue'ya ack mesajı gönderilip data Queue dan silinir.
- Bir exception oluşursa application.properties de belirtilen sayı/süre kadar tekrar consume edilmeye çalışlır. Bu süre/sayı aşımı durumunda data DLQ'ya taşınır.

 ### Properties dosyasının eklenmesi.
 ```
#rabbitmq connections
spring.rabbitmq.host=localhost
spring.rabbitmq.post=5672
spring.rabbitmq.username=guest
spring.rabbitmq.passowrd=guest
spring.rabbitmq.virtual-host=local
spring.rabbitmq.listener.simple.auto-startup=true
#queue params
rabbitmq.queue.name=DemoQueue1
rabbitmq.exchange.name=DemoExchange1
rabbitmq.routing.key=DemoRoutingKey1

rabbitmq.dlQueue.name=DeadLetterQueue1
rabbitmq.dlExchange.name=DeadLetterExchange1
rabbitmq.dlRouting.key=DeadLetterRoutingKey1

spring.rabbitmq.listener.simple.retry.enabled=true #Hata alındığında tekrar consume edilmesi için
spring.rabbitmq.listener.simple.retry.initial-interval=10s #Burada belirtilen aralıklarla tekrar consume denemesi yapılır
spring.rabbitmq.listener.simple.retry.max-attempts=3 #Max kaç kere consume edilmeye çalışılacağı
spring.rabbitmq.listener.simple.retry.max-interval=20s #consume işlemi sırasındaki timout süresi. Bu süre dolduğunda data direkt olarak DLQ'a taşınır
```
 
 ### Success CURL örneği
 ```
$ curl -X POST "http://localhost:8080/messages" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"id\": 123, \"name\": \"Test Message 1\", \"description\": \"Here is description1 \"}"
```
 
 ### Error CURL örneği (Exception)
 ```
$ curl -X POST "http://localhost:8080/messages" -H "accept: */*" -H "Content-Type: application/json" -d "{ \"id\": -1, \"name\": \"Test Error Message 1\", \"description\": \"Here is failed description1 \"}"
```
 


