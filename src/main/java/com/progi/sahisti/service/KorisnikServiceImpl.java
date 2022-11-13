package com.progi.sahisti.service;

import com.progi.sahisti.model.Korisnik;
import com.progi.sahisti.repository.KorisnikRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class KorisnikServiceImpl implements KorisnikService{

    @Autowired
    private KorisnikRepository korisnikRepository;

    public KorisnikServiceImpl(KorisnikRepository korisnikRepository) {
        this.korisnikRepository = korisnikRepository;
    }

    @Override
    public Korisnik saveKorisnik(Korisnik korisnik) {
        return korisnikRepository.save(korisnik);
    }

    @Override
    public List<Korisnik> getAllKorisnik() {
        return korisnikRepository.findAll();
    }

    @Override
    public Korisnik getKorisnikByKorisnickoIme(String korisnickoIme) {
        List<Korisnik> listOfKorisnik = getAllKorisnik();
        //listOfKorisnik.stream().forEach(System.out::println);
        Korisnik result = listOfKorisnik
                .stream()
                .filter(korisnik -> korisnik.getKorisnickoIme().equals(korisnickoIme))
                .findAny().orElse(null);
        return result;
    }
}
