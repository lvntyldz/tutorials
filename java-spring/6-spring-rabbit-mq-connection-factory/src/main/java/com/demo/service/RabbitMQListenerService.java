package com.demo.service;

import com.demo.model.MessageData;
import com.demo.model.UserData;
import com.rabbitmq.client.Channel;
import java.io.IOException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Message;
import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Component;

@Component
@Slf4j
public class RabbitMQListenerService {

    @RabbitListener(queues = "${app.rabbitmq.messageDataQueue}")
    public void messageDataListener(MessageData data, Channel channel, Message message) throws IOException {
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

    @RabbitListener(queues = "${app.rabbitmq.userDataQueue}")
    public void userDataListener(UserData data, Channel channel, Message message) throws IOException {
        log.info("User from RabbitMQ : {}", data);

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
