package com.progi.sahisti.controller;

import com.progi.sahisti.model.Clan;
import com.progi.sahisti.model.Korisnik;
import com.progi.sahisti.repository.ClanRepository;
import com.progi.sahisti.repository.KorisnikRepository;
import com.progi.sahisti.service.KorisnikServiceImpl;
import com.progi.sahisti.utils.RegistrationFormData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/")
public class RegistrationFormController {

    @Autowired
    private KorisnikRepository korisnikRepository;

    @Autowired
    private ClanRepository clanRepository;

    @PostMapping("/registracija")
    public ResponseEntity<ResponseBody> registration(@RequestBody RegistrationFormData registrationFormData) {
        System.out.println("Tryin to register with data..." + registrationFormData);

        Korisnik korisnikToSave = new Korisnik(registrationFormData.getUsername(), registrationFormData.getPassword(),
                registrationFormData.getEmail(), registrationFormData.getRole(), 0);

        //check if email or username already exists
        List<Korisnik> allKorisnik = korisnikRepository.findAll();
        boolean containsUsername = allKorisnik.stream()
                .map(Korisnik::getKorisnickoIme)
                .toList().contains(korisnikToSave.getKorisnickoIme());
        boolean containsEmail = allKorisnik.stream()
                .map(Korisnik::getEmail)
                .toList().contains(korisnikToSave.getEmail());

        //if username or email is already in DB, return a bad request
        if(containsUsername || containsEmail) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        System.out.println("Contains username => " + containsUsername);
        System.out.println("Contains email => " + containsEmail);

        //save korisnik into table Korisnik
        korisnikRepository.save(korisnikToSave);

        //fetch added Korisnik to add into role specific table
        Korisnik korisnikWithSetId = (new KorisnikServiceImpl(korisnikRepository))
                .getKorisnikByKorisnickoIme(korisnikToSave.getKorisnickoIme());

        Clan clanToAdd = new Clan(korisnikWithSetId.getOsobaID(), registrationFormData.getFirstName(),
                registrationFormData.getLastName(), new Date(), 0, 0);

        clanRepository.save(clanToAdd);

        System.out.println("Korisnik..." + korisnikWithSetId);

        return new ResponseEntity<>(HttpStatus.OK);

    }


}
