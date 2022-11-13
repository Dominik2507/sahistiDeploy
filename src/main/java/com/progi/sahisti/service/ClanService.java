package com.progi.sahisti.service;

import com.progi.sahisti.model.Clan;

import java.util.List;
import java.util.Optional;

public interface ClanService {
    List<Clan> getAllClan();

    Optional<Clan> getClanById(long id);
}
