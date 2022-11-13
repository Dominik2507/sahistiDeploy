package com.progi.sahisti.repository;

import com.progi.sahisti.model.Trening;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TreningRepository extends JpaRepository<Trening, Long> {
}
