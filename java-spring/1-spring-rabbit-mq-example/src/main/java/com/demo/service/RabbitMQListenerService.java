package com.demo.service;

import com.demo.model.MessageData;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class RabbitMQListenerService {

    @RabbitListener(queues = "${rabbitmq.queue.name}")
    public void messageListener(MessageData message) {
        log.info("Message from RabbitMQ : {}", message);
    }
}
