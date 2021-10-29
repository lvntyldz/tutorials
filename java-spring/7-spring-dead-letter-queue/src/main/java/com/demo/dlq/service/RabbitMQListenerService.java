package com.demo.dlq.service;

import com.demo.dlq.exception.BussinesRuleException;
import com.demo.dlq.model.MessageData;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class RabbitMQListenerService {

    @RabbitListener(queues = "${rabbitmq.queue.name}")
    public void messageListener(MessageData message) throws BussinesRuleException {
        log.info("Message from RabbitMQ : {}", message);

        if (message.getId() < 1) {
            throw new BussinesRuleException("Id must be greater than or equal to 1");
        }
    }
}
