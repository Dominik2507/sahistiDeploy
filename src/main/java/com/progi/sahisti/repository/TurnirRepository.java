package com.progi.sahisti.repository;

import com.progi.sahisti.model.Turnir;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TurnirRepository extends JpaRepository<Turnir, Long> {
}
