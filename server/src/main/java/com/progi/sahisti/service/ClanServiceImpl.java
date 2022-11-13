package com.progi.sahisti.service;

import com.progi.sahisti.model.Clan;
import com.progi.sahisti.repository.ClanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClanServiceImpl implements ClanService{

    @Autowired
    private ClanRepository clanRepository;

    @Override
    public List<Clan> getAllClan(){
        return clanRepository.findAll();
    }

    @Override
    public Optional<Clan> getClanById(long id) {
        return clanRepository.findById(id);
    }
}
