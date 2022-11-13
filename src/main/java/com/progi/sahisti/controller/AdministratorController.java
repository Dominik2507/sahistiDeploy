package com.progi.sahisti.controller;

import com.progi.sahisti.model.Administrator;
import com.progi.sahisti.service.AdministratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/admin")
public class AdministratorController {

    @Autowired
    private AdministratorService administratorService;

    @GetMapping("/getAll")
    public List<Administrator> getAllAdministrator() {
        return administratorService.getAllAdministrator();
    }

}
