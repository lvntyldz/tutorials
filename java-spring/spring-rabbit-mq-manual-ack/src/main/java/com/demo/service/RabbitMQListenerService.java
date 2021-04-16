package com.demo.service;

import com.demo.model.MessageData;
import com.rabbitmq.client.Channel;
import java.io.IOException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class RabbitMQListenerService {

    @Value("${rabbitmq.queue.name}")
    private String queueName;

    @Value(("${rabbitmq.exchange.name}"))
    private String exchangeName;

    @Value("${rabbitmq.routing.key}")
    private String routngKey;

    @RabbitListener(queues = "${rabbitmq.queue.name}")
    public void messageListener(MessageData data, Channel channel, Message message) throws IOException {
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
}
