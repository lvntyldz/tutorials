package com.demo.config;

import com.demo.properties.RabbitMQProperites;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.ConnectionFactory;
import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.amqp.support.converter.Jackson2JsonMessageConverter;
import org.springframework.amqp.support.converter.MessageConverter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@Slf4j
public class RabbitMQConfiguration {

    @Autowired
    RabbitMQProperites mqProperites;

    @Bean
    public Queue userQueue() {
        return new Queue(mqProperites.getUserDataQueue(), true);
    }

    @Bean
    public Queue msgQueue() {
        return new Queue(mqProperites.getMessageDataQueue(), true);
    }

    @Bean
    public DirectExchange userExchange() {
        return new DirectExchange(mqProperites.getUserDataExchange());
    }

    @Bean
    public DirectExchange msgExchange() {
        return new DirectExchange(mqProperites.getMessageDataExchange());
    }

    @Bean
    public Binding userBinding(@Qualifier("userQueue") Queue queue,
            @Qualifier("userExchange") DirectExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with(mqProperites.getUserDataRoutingKey());
    }

    @Bean
    public Binding msgBinding(@Qualifier("msgQueue") Queue queue, @Qualifier("msgExchange") DirectExchange exchange) {
        return BindingBuilder.bind(queue).to(exchange).with(mqProperites.getMessageDataRoutingKey());
    }

    @Bean
    public MessageConverter messageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(messageConverter());
        return rabbitTemplate;
    }
}
