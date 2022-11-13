package com.progi.sahisti.controller;

import com.progi.sahisti.model.Trener;
import com.progi.sahisti.service.TrenerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/trener")
public class TrenerController {

    @Autowired
    private TrenerService trenerService;

    @GetMapping("/getAll")
    public List<Trener> getAllTrener() {
        return trenerService.getAllTrener();
    }

}
