package com.progi.sahisti.model;

import javax.persistence.*;

@Entity
@Table(name = "trener")
public class Trener {

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

    @Column(name = "titula")
    private String titula;

    public Trener() {}

    public Trener(Korisnik korisnik, String ime, String prezime, String titula) {
        this.korisnik = korisnik;
        this.ime = ime;
        this.prezime = prezime;
        this.titula = titula;
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

    public String getTitula() {
        return titula;
    }

    public void setTitula(String titula) {
        this.titula = titula;
    }

    @Override
    public String toString() {
        return "Trener{" +
                "korisnik=" + korisnik +
                ", ime='" + ime + '\'' +
                ", prezime='" + prezime + '\'' +
                ", titula='" + titula + '\'' +
                '}';
    }
}
