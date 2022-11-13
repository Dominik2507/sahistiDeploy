package com.progi.sahisti.service;

import com.progi.sahisti.model.Trener;

import java.util.List;
import java.util.Optional;

public interface TrenerService {

    List<Trener> getAllTrener();

    Optional<Trener> getTrenerById(long id);

}
