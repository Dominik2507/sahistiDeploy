package com.progi.sahisti.service;

import com.progi.sahisti.model.Administrator;
import com.progi.sahisti.model.Trener;
import com.progi.sahisti.repository.TrenerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TrenerServiceImpl implements TrenerService {

    @Autowired
    private TrenerRepository trenerRepository;

    @Override
    public List<Trener> getAllTrener() {
        return trenerRepository.findAll();
    }

    @Override
    public Optional<Trener> getTrenerById(long id) {
        return trenerRepository.findById(id);
    }

}
