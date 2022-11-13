package com.progi.sahisti.model;

import javax.persistence.*;

@Entity
@Table(name = "korisnik")
public class Korisnik {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long osobaID;

    @Column(name = "korisnickoime")
    private String korisnickoIme;

    @Column(name = "lozinka")
    private String lozinka;

    @Column(name = "email")
    private String email;

    @Column(name = "uloga")
    private String uloga;

    @Column(name = "blokiran")
    private int blokiran;


    public Korisnik() {};

    public Korisnik(String korisnickoIme, String lozinka, String email, String uloga, int blokiran) {
        this.korisnickoIme = korisnickoIme;
        this.lozinka = lozinka;
        this.email = email;
        this.uloga = uloga;
        this.blokiran = blokiran;
    }

    public long getOsobaID() {
        return osobaID;
    }

    public String getKorisnickoIme() {
        return korisnickoIme;
    }

    public String getLozinka() {
        return lozinka;
    }

    public String getEmail() {
        return email;
    }

    public String getUloga() {
        return uloga;
    }

    public int getBlokiran() {
        return blokiran;
    }

    public void setKorisnickoIme(String korisnickoIme) {
        this.korisnickoIme = korisnickoIme;
    }

    public void setLozinka(String lozinka) {
        this.lozinka = lozinka;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setUloga(String uloga) {
        this.uloga = uloga;
    }

    public void setBlokiran(int blokiran) {
        this.blokiran = blokiran;
    }

    @Override
    public String toString() {
        return "Korisnik{" +
                "korisničkoIme='" + korisnickoIme + '\'' +
                ", uloga='" + uloga + '\'' +
                '}';
    }
}
