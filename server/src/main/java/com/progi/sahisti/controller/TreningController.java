package com.progi.sahisti.controller;

import com.progi.sahisti.model.Trening;
import com.progi.sahisti.service.TreningService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/trening")
public class TreningController {

    @Autowired
    private TreningService treningService;

    @GetMapping("/getAll")
    public List<Trening> getAllTrening() {
        return treningService.getAllTrening();
    }
}
