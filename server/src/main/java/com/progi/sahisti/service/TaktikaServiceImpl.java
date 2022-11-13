package com.progi.sahisti.service;

import com.progi.sahisti.model.Taktika;
import com.progi.sahisti.repository.TaktikaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaktikaServiceImpl implements TaktikaService {

    @Autowired
    private TaktikaRepository taktikaRepository;

    @Override
    public List<Taktika> getAllTaktika() {
        return taktikaRepository.findAll();
    }

}
