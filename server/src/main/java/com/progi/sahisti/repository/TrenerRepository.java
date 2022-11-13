package com.progi.sahisti.repository;

import com.progi.sahisti.model.Trener;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrenerRepository extends JpaRepository<Trener, Long> {
}
