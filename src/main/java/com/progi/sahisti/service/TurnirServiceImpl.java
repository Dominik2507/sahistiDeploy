package com.progi.sahisti.service;

import com.progi.sahisti.model.Turnir;
import com.progi.sahisti.repository.TurnirRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TurnirServiceImpl implements TurnirService {

    @Autowired
    private TurnirRepository turnirRepository;

    @Override
    public List<Turnir> getAllTurnir() {return turnirRepository.findAll(); };
}
