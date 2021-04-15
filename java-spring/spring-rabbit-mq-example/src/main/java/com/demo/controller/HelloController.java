package com.demo.controller;

import com.demo.model.MessageData;
import com.demo.service.RabbitMQService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@Slf4j
public class HelloController {

    @Autowired
    RabbitMQService rabbitMQService;

    @GetMapping("hi")
    public String sayHello() {
        return "Hello from controller";
    }

    @PostMapping(value = "/messages")
    public String sendMessage(@RequestBody MessageData messageData) {
        log.info("Message received... message: {}", messageData);

        rabbitMQService.sendMessage(messageData);
        return "Message is sent";
    }
}
