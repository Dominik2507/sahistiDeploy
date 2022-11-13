package com.progi.sahisti.model;

import java.io.Serializable;

public class TrenerTreningCompositeId implements Serializable {

    private long treningId;

    private long osobaId;

    public long getTreningId() {
        return treningId;
    }

    public void setTreningId(long treningId) {
        this.treningId = treningId;
    }

    public long getOsobaId() {
        return osobaId;
    }

    public void setOsobaId(long osobaId) {
        this.osobaId = osobaId;
    }
}
