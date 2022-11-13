package com.progi.sahisti.controller;

import com.progi.sahisti.model.Turnir;
import com.progi.sahisti.service.TurnirService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/turnir")
public class TurnirController {

    @Autowired
    private TurnirService turnirService;

    @GetMapping("/getAll")
    public List<Turnir> getAllTurnir() { return turnirService.getAllTurnir(); };

}
