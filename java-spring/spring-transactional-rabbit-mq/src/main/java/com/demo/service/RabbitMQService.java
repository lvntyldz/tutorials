package com.demo.service;


import com.demo.model.MessageData;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Slf4j
public class RabbitMQService {

    @Autowired
    RabbitTemplate rabbitTemplate;

    @Value(("${rabbitmq.exchange.name}"))
    private String exchangeName;

    @Value("${rabbitmq.routing.key}")
    private String routngKey;

    @Transactional
    public void sendMessage(MessageData messageData) {
        this.rabbitTemplate.convertAndSend(exchangeName, routngKey, messageData);

        if (messageData.getId() < 100) {
            throw new RuntimeException("ID must be greater than 100");
        }
    }
}
