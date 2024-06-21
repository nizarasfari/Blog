package com.example.server.Controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController

public class controllerResolver {

    @GetMapping("/api/test")
    public String test(){
        return  "Our Api Works";
    }
}
