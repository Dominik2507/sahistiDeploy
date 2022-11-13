package com.progi.sahisti.repository;

import com.progi.sahisti.model.Taktika;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaktikaRepository extends JpaRepository<Taktika, Long> {
}
