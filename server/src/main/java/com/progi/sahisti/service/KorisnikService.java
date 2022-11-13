package com.progi.sahisti.service;

import com.progi.sahisti.model.Korisnik;

import java.util.List;

public interface KorisnikService {

    Korisnik saveKorisnik(Korisnik korisnik);
    List<Korisnik> getAllKorisnik();

    Korisnik getKorisnikByKorisnickoIme(String korisnickoIme);

}
