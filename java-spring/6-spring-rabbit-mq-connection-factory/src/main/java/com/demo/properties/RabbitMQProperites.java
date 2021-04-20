package com.demo.properties;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "app.rabbitmq")
@Getter
@Setter
public class RabbitMQProperites {

    private String userDataQueue;
    private String userDataExchange;
    private String userDataRoutingKey;
    private String messageDataQueue;
    private String messageDataExchange;
    private String messageDataRoutingKey;

    private String host;
    private Integer port;
    private String username;
    private String passowrd;
    private String virtualHost;
}
