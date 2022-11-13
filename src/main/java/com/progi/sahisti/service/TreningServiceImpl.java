package com.progi.sahisti.service;

import com.progi.sahisti.model.Trening;
import com.progi.sahisti.repository.TreningRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TreningServiceImpl implements TreningService {

    @Autowired
    private TreningRepository treningRepository;

    @Override
    public List<Trening> getAllTrening() {
        return treningRepository.findAll();
    }
}
