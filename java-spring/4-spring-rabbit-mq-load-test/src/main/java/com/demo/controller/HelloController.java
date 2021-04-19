package com.demo.controller;

import com.demo.model.MessageData;
import com.demo.model.UserData;
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
    public String sayHello() throws Exception {
        log.info("We are in sayHello(...)");
        return "Hello from controller";
    }

    @PostMapping(value = "/messages")
    public String sendMessage(@RequestBody MessageData messageData) throws Exception {
        log.info("Message received... message: {}", messageData);

        rabbitMQService.sendMessage(messageData);
        return "Message is sent";
    }

    @PostMapping(value = "/users")
    public String addUser(@RequestBody UserData userData) throws Exception {
        log.info("User received... userData: {}", userData);

        rabbitMQService.addUser(userData);
        return "User is sent";
    }
}
