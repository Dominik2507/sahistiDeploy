package com.progi.sahisti.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "clan")
public class Clan {

    @Id
    private long osobaID;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "osobaID", referencedColumnName = "osobaID")
    private Korisnik korisnik;

    @Column(name = "ime")
    private String ime;

    @Column(name = "prezime")
    private String prezime;

    @Column(name = "clanod")
    private Date clanOd;

    @Column(name = "bodovi")
    private long bodovi;

    @Column(name = "suspendiran")
    private long suspendiran;

    public Clan() {}

    public Clan(long osobaID, String ime, String prezime, Date clanOd, long bodovi, long suspendiran) {
        this.osobaID = osobaID;
        this.ime = ime;
        this.prezime = prezime;
        this.clanOd = clanOd;
        this.bodovi = bodovi;
        this.suspendiran = suspendiran;
    }

    public Korisnik getKorisnik() {
        return korisnik;
    }

    public void setKorisnik(Korisnik korisnik) {
        this.korisnik = korisnik;
    }

    public long getOsobaID() {
        return osobaID;
    }

    public void setOsobaID(long osobaID) {
        this.osobaID = osobaID;
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

    public Date getClanOd() {
        return clanOd;
    }

    public void setClanOd(Date clanOd) {
        this.clanOd = clanOd;
    }

    public long getBodovi() {
        return bodovi;
    }

    public void setBodovi(long bodovi) {
        this.bodovi = bodovi;
    }

    public long getSuspendiran() {
        return suspendiran;
    }

    public void setSuspendiran(long suspendiran) {
        this.suspendiran = suspendiran;
    }

    @Override
    public String toString() {
        return "clan{" +
                "osobaID=" + osobaID +
                ", korisnik=" + korisnik +
                ", ime='" + ime + '\'' +
                ", prezime='" + prezime + '\'' +
                ", clanOd=" + clanOd +
                ", bodovi=" + bodovi +
                ", suspendiran=" + suspendiran +
                '}';
    }
}
