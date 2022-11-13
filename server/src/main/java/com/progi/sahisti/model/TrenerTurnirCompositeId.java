package com.progi.sahisti.model;

import java.io.Serializable;

public class TrenerTurnirCompositeId implements Serializable {

    private long turnirId;

    private long osobaId;

    public long getTurnirId() {
        return turnirId;
    }

    public void setTurnirId(long turnirId) {
        this.turnirId = turnirId;
    }

    public long getOsobaId() {
        return osobaId;
    }

    public void setOsobaId(long osobaId) {
        this.osobaId = osobaId;
    }

}
