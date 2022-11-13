package com.progi.sahisti.model;

import javax.persistence.*;

@Entity
@Table(name = "taktika")
@IdClass(TrenerTaktikaCompositeId.class)
public class Taktika {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "taktikaid")
    private long taktikaId;

    @Column(name = "datumtaktika")
    private int datumTaktika;

    @Column(name = "maxbodova")
    private int maxBodova;

    @Column(name = "ispravnorjesenje")
    private String ispravnoRjesenje;

    @Column(name = "aktivna")
    private int aktivna;

    @Column(name = "avgocjena")
    private double avgOcjena;

    @Id
    @Column(name = "osobaid", insertable = false, updatable = false)
    private long osobaId;

    @ManyToOne()
    @JoinColumn(name = "osobaID")
    private Trener trener;

    public Taktika() {}

    public Taktika(int datumTaktika, int maxBodova, String ispravnoRjesenje, int aktivna, double avgOcjena, Trener trener) {
        this.datumTaktika = datumTaktika;
        this.maxBodova = maxBodova;
        this.ispravnoRjesenje = ispravnoRjesenje;
        this.aktivna = aktivna;
        this.avgOcjena = avgOcjena;
        this.trener = trener;
    }

    public int getDatumTaktika() {
        return datumTaktika;
    }

    public void setDatumTaktika(int datumTaktika) {
        this.datumTaktika = datumTaktika;
    }

    public int getMaxBodova() {
        return maxBodova;
    }

    public void setMaxBodova(int maxBodova) {
        this.maxBodova = maxBodova;
    }

    public String getIspravnoRjesenje() {
        return ispravnoRjesenje;
    }

    public void setIspravnoRjesenje(String ispravnoRjesenje) {
        this.ispravnoRjesenje = ispravnoRjesenje;
    }

    public int getAktivna() {
        return aktivna;
    }

    public void setAktivna(int aktivna) {
        this.aktivna = aktivna;
    }

    public double getAvgOcjena() {
        return avgOcjena;
    }

    public void setAvgOcjena(double avgOcjena) {
        this.avgOcjena = avgOcjena;
    }

    public Trener getTrener() {
        return trener;
    }

    public void setTrener(Trener trener) {
        this.trener = trener;
    }

    @Override
    public String toString() {
        return "Taktika{" +
                "datumTaktika=" + datumTaktika +
                ", maxBodova=" + maxBodova +
                ", ispravnoRjesenje='" + ispravnoRjesenje + '\'' +
                ", aktivna=" + aktivna +
                ", avgOcjena=" + avgOcjena +
                ", trener=" + trener +
                '}';
    }
}
