package com.progi.sahisti.model;

import javax.persistence.*;

@Entity
@Table(name = "administrator")
public class Administrator {

    @Id
    @Column(name = "osobaID")
    private long osobaId;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "osobaID", referencedColumnName = "osobaID")
    private Korisnik korisnik;

    @Column(name = "ime")
    private String ime;

    @Column(name = "prezime")
    private String prezime;

    public Administrator() {}

    public Administrator(Korisnik korisnik, String ime, String prezime) {
        this.korisnik = korisnik;
        this.ime = ime;
        this.prezime = prezime;
    }

    public Korisnik getKorisnik() {
        return korisnik;
    }

    public void setKorisnik(Korisnik korisnik) {
        this.korisnik = korisnik;
    }

    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getPrezime() {
        return prezime;
    }

    public void setPrezime(String prezime) {
        this.prezime = prezime;
    }

    @Override
    public String toString() {
        return "Administrator{" +
                "korisnik=" + korisnik +
                ", ime='" + ime + '\'' +
                ", prezime='" + prezime + '\'' +
                '}';
    }
}
