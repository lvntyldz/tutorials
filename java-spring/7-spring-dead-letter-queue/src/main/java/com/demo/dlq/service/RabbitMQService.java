package com.demo.dlq.service;

import com.demo.dlq.model.MessageData;
import lombok.extern.slf4j.Slf4j;
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
    private String routingKey;

    public void sendMessage(MessageData messageData) {
        log.info("Starting: Send Message to RabbitMQ.");
        rabbitTemplate.convertAndSend(exchangeName, routingKey, messageData);
        log.info("Sent Message to RabbitMQ with payload: {}", messageData);
    }
}
