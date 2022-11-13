package com.progi.sahisti.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "turnir")
@IdClass(TrenerTurnirCompositeId.class)
public class Turnir {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "turnirid")
    private long turnirId;

    @Column(name = "naziv")
    private String naziv;

    @Column(name = "datumturnira")
    private Date datumTurnira;

    @Column(name = "mjesto")
    private String mjesto;

    @Column(name = "vrijemeturnir")
    private int vrijemeTurnir;

    @Column(name = "aktivni")
    private int aktivni;

    @Column(name = "kapacitet")
    private int kapacitet;

    @Id
    @Column(name = "osobaid", insertable = false, updatable = false)
    private long osobaId;

    @ManyToOne()
    @JoinColumn(name = "osobaid")
    private Trener trener;

    public Turnir() {}

    public Turnir(String naziv, Date datumTurnira, String mjesto, int vrijemeTurnir, int aktivni, int kapacitet, Trener trener) {
        this.naziv = naziv;
        this.datumTurnira = datumTurnira;
        this.mjesto = mjesto;
        this.vrijemeTurnir = vrijemeTurnir;
        this.aktivni = aktivni;
        this.kapacitet = kapacitet;
        this.trener = trener;
    }

    public String getNaziv() {
        return naziv;
    }

    public void setNaziv(String naziv) {
        this.naziv = naziv;
    }

    public Date getDatumTurnira() {
        return datumTurnira;
    }

    public void setDatumTurnira(Date datumTurnira) {
        this.datumTurnira = datumTurnira;
    }

    public String getMjesto() {
        return mjesto;
    }

    public void setMjesto(String mjesto) {
        this.mjesto = mjesto;
    }

    public long getVrijemeTurnir() {
        return vrijemeTurnir;
    }

    public void setVrijemeTurnir(int vrijemeTurnir) {
        this.vrijemeTurnir = vrijemeTurnir;
    }

    public long getAktivni() {
        return aktivni;
    }

    public void setAktivni(int aktivni) {
        this.aktivni = aktivni;
    }

    public long getKapacitet() {
        return kapacitet;
    }

    public void setKapacitet(int kapacitet) {
        this.kapacitet = kapacitet;
    }

    public Trener getTrener() {
        return trener;
    }

    public void setTrener(Trener trener) {
        this.trener = trener;
    }


    @Override
    public String toString() {
        return null;
    }

}
