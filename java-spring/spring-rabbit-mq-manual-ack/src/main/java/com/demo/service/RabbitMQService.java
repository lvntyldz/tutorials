package com.demo.service;


import com.demo.model.MessageData;
import java.util.concurrent.TimeUnit;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.connection.CorrelationData;
import org.springframework.amqp.rabbit.connection.CorrelationData.Confirm;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class RabbitMQService {

    @Autowired
    RabbitTemplate rabbitTemplate;

    @Value(("${rabbitmq.exchange.name}"))
    private String exchangeName;

    @Value("${rabbitmq.routing.key}")
    private String routngKey;

    public void sendMessage(MessageData messageData) throws Exception {
        CorrelationData correlationData = new CorrelationData("Correlation for message 1");
        this.rabbitTemplate.convertAndSend(exchangeName, routngKey, messageData, correlationData);
        Confirm confirm = correlationData.getFuture().get(20, TimeUnit.MILLISECONDS);
        System.out.println("Confirm received, ack = " + confirm.isAck());
    }

}
