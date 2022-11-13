package com.progi.sahisti.utils;

public class UserInfo {
    private String ime;
    private String prezime;
    private String titula;
    private String clanOd;
    private String bodovi;

    public UserInfo(String ime, String prezime, String titula, String clanOd, String bodovi) {
        this.ime = ime;
        this.prezime = prezime;
        this.titula = titula;
        this.clanOd = clanOd;
        this.bodovi = bodovi;
    }

    public String getIme() {
        return ime;
    }

    public String getPrezime() {
        return prezime;
    }

    public String getTitula() {
        return titula;
    }

    public String getClanOd() {
        return clanOd;
    }

    public String getBodovi() {
        return bodovi;
    }

    @Override
    public String toString() {
        return "UserInfo{" +
                "ime='" + ime + '\'' +
                ", prezime='" + prezime + '\'' +
                ", titula='" + titula + '\'' +
                ", clanOd='" + clanOd + '\'' +
                ", bodovi='" + bodovi + '\'' +
                '}';
    }
}
