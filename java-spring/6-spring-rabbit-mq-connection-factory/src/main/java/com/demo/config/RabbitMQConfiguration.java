package com.demo.config;

import com.demo.properties.RabbitMQProperites;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;
import org.springframework.amqp.rabbit.connection.CachingConnectionFactory;
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
    public ConnectionFactory connectionFactory() throws KeyManagementException, NoSuchAlgorithmException {
        CachingConnectionFactory connectionFactory = new CachingConnectionFactory();
        connectionFactory.setHost(mqProperites.getHost());
        connectionFactory.setUsername(mqProperites.getUsername());
        connectionFactory.setPassword(mqProperites.getPassowrd());
        connectionFactory.setVirtualHost(mqProperites.getVirtualHost());
        connectionFactory.setPort(mqProperites.getPort());
        //connectionFactory.getRabbitConnectionFactory().useSslProtocol();
        return connectionFactory;
    }

    @Bean
    public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate rabbitTemplate = new RabbitTemplate(connectionFactory);
        rabbitTemplate.setMessageConverter(messageConverter());
        return rabbitTemplate;
    }
}
