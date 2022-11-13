package com.progi.sahisti.service;

import com.progi.sahisti.model.Zanimljivost;
import com.progi.sahisti.repository.ZanimljivostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ZanimljivostServiceImpl implements ZanimljivostService{

    @Autowired
    private ZanimljivostRepository zanimljivostRepository;

    @Override
    public List<Zanimljivost> getAllZanimljivost() {
        return zanimljivostRepository.findAll();
    }

}
