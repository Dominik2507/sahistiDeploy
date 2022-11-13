package com.progi.sahisti.controller;

import com.progi.sahisti.model.Zanimljivost;
import com.progi.sahisti.service.ZanimljivostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/zanimljivost")
public class ZanimljivostController {

    @Autowired
    private ZanimljivostService zanimljivostService;

    @GetMapping("/getAll")
    public List<Zanimljivost> getAllZanimljivost() {
        return zanimljivostService.getAllZanimljivost();
    }

}
