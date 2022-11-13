package com.progi.sahisti.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "zanimljivost")
@IdClass(TrenerZanimljivostCompositeId.class)
public class Zanimljivost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "zanimljivostid")
    private long zanimljivostId;

    @Column(name = "datumobjave")
    private Date datumObjave;

    @Column(name = "opis")
    private String opis;

    @Column(name = "naslov")
    private String naslov;

    @Column(name = "aktivni")
    private long aktivni;

    @Id
    @Column(name = "osobaid", insertable = false, updatable = false)
    private long osobaId;

    @ManyToOne()
    @JoinColumn(name = "osobaid")
    private Trener trener;

    public Zanimljivost() {}

    public Zanimljivost(Date datumObjave, String opis, String naslov, long aktivni, Trener trener) {
        this.datumObjave = datumObjave;
        this.opis = opis;
        this.naslov = naslov;
        this.aktivni = aktivni;
        this.trener = trener;
    }

    public Date getDatumObjave() {
        return datumObjave;
    }

    public void setDatumObjave(Date datumObjave) {
        this.datumObjave = datumObjave;
    }

    public String getOpis() {
        return opis;
    }

    public void setOpis(String opis) {
        this.opis = opis;
    }

    public String getNaslov() {
        return naslov;
    }

    public void setNaslov(String naslov) {
        this.naslov = naslov;
    }

    public long getAktivni() {
        return aktivni;
    }

    public void setAktivni(long aktivni) {
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
        return null;
    }
}
