package com.progi.sahisti.controller;

import com.progi.sahisti.model.Taktika;
import com.progi.sahisti.service.TaktikaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/taktika")
public class TaktikaController {

    @Autowired
    private TaktikaService taktikaService;

    @GetMapping("/getAll")
    public List<Taktika> getAllTaktika() {
        return taktikaService.getAllTaktika();
    }

}
