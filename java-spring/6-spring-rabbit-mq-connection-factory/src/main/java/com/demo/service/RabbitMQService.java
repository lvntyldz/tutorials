package com.demo.service;


import com.demo.model.MessageData;
import com.demo.model.UserData;
import com.demo.properties.RabbitMQProperites;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.AmqpException;
import org.springframework.amqp.rabbit.connection.CorrelationData;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class RabbitMQService {

    private final RabbitTemplate rabbitTemplate;
    private final RabbitMQProperites props;

    public void sendMessage(MessageData messageData) {
        String correlationId = "MESSAGE_" + messageData.getId().toString();
        CorrelationData correlationData = new CorrelationData(correlationId);
        sendToRabbitMQ(props.getMessageDataExchange(), props.getMessageDataRoutingKey(), messageData, correlationData);
    }

    public void addUser(UserData userData) {
        String correlationId = "USER_" + userData.getId().toString();
        CorrelationData correlationData = new CorrelationData(correlationId);
        sendToRabbitMQ(props.getUserDataExchange(), props.getUserDataRoutingKey(), userData, correlationData);
    }

    private void sendToRabbitMQ(String exchange, String key, Object data, CorrelationData correlationData) {
        log.info("data is sending...");
        try {
            this.rabbitTemplate.convertAndSend(exchange, key, data, correlationData);
        } catch (AmqpException e) {
            log.error("An error occured! Data could not sent to the RabbitMQ, data:{}", data);
        }
        log.info("data is sent.");
    }
}
