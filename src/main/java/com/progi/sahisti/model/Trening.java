package com.progi.sahisti.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "trening")
@IdClass(TrenerTreningCompositeId.class)
public class Trening {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "treningid")
    private long treningId;

    @Column(name = "mjesto")
    private String mjesto;

    @Column(name = "datumtreninga")
    private Date datumTreninga;

    @Column(name = "vrijemetreninga")
    private String vrijemeTreninga;

    @Column(name = "trajanje")
    private int trajanje;

    @Column(name = "aktivni")
    private int aktivni;

    @Id
    @Column(name = "osobaid", insertable = false, updatable = false)
    private long osobaId;

    @ManyToOne()
    @JoinColumn(name = "osobaid")
    private Trener trener;

    public Trening() {}

    public Trening(String mjesto, Date datumTreninga, String vrijemeTreninga, int trajanje, int aktivni, Trener trener) {
        this.mjesto = mjesto;
        this.datumTreninga = datumTreninga;
        this.vrijemeTreninga = vrijemeTreninga;
        this.trajanje = trajanje;
        this.aktivni = aktivni;
        this.trener = trener;
    }

    public String getMjesto() {
        return mjesto;
    }

    public void setMjesto(String mjesto) {
        this.mjesto = mjesto;
    }

    public Date getDatumTreninga() {
        return datumTreninga;
    }

    public void setDatumTreninga(Date datumTreninga) {
        this.datumTreninga = datumTreninga;
    }

    public String getVrijemeTreninga() {
        return vrijemeTreninga;
    }

    public void setVrijemeTreninga(String vrijemeTreninga) {
        this.vrijemeTreninga = vrijemeTreninga;
    }

    public int getTrajanje() {
        return trajanje;
    }

    public void setTrajanje(int trajanje) {
        this.trajanje = trajanje;
    }

    public int getAktivni() {
        return aktivni;
    }

    public void setAktivni(int aktivni) {
        this.aktivni = aktivni;
    }

    public Trener getTrener() {
        return trener;
    }

    public void setTrener(Trener trener) {
        this.trener = trener;
    }

    @Override
    public String toString() {
        return "Trening{" +
                "mjesto='" + mjesto + '\'' +
                ", datumTreninga=" + datumTreninga +
                ", vrijemeTreninga='" + vrijemeTreninga + '\'' +
                ", trajanje=" + trajanje +
                ", aktivni=" + aktivni +
                ", trener=" + trener +
                '}';
    }
}
