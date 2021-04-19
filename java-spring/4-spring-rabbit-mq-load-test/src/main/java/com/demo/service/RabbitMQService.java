package com.demo.service;


import com.demo.model.MessageData;
import com.demo.model.UserData;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
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

    @Value("${rabbitmq.send-message.ack.response.tmeout}")
    private Integer sendMessageAckResponseTimeout;

    public void sendMessage(MessageData messageData) {
        String correlationId = "MESSAGE_" + messageData.getId().toString();
        CorrelationData correlationData = new CorrelationData(correlationId);
        sendDataToMQService(messageData, correlationData);
    }

    public void addUser(UserData userData) {
        String correlationId = "USER_" + userData.getId().toString();
        CorrelationData correlationData = new CorrelationData(correlationId);
        sendDataToMQService(userData, correlationData);
    }

    private void sendDataToMQService(Object data, CorrelationData correlationData) {
        log.info("data is sending...");
        this.rabbitTemplate.convertAndSend(exchangeName, routngKey, data, correlationData);
        log.info("convert and send called!");
        Confirm confirm;
        try {
            confirm = correlationData.getFuture().get(sendMessageAckResponseTimeout, TimeUnit.SECONDS);
            if (!confirm.isAck()) {
                log.error("An error occured! Ack is not confirmed. Data could not sent to the RabbitMQ, data:{}", data);
            }
        } catch (InterruptedException e) {
            log.error("The process is not completed! data could not sent to the RabbitMQ, data:{}  e: {}",
                    data, e);
        } catch (ExecutionException e) {
            log.error("An error occured! data could not sent to the RabbitMQ, data:{}  e: {}", data, e);
        } catch (TimeoutException e) {
            log.error("Request time out! data could not sent to the RabbitMQ, data:{}  e: {}", data, e);
        }
        log.info("data is sent.");
    }
}
