package com.progi.sahisti.controller;

import com.progi.sahisti.model.Clan;
import com.progi.sahisti.service.ClanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/clan")
public class ClanController {

    @Autowired
    private ClanService clanService;

    @GetMapping("/getAll")
    public List<Clan> getAllClan(){
        return clanService.getAllClan();
    }
}
