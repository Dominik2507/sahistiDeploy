package com.progi.sahisti.model;

import java.io.Serializable;

public class TrenerTaktikaCompositeId implements Serializable {

    private long taktikaId;

    private long osobaId;

    public long getTaktikaId() {
        return taktikaId;
    }

    public void setTaktikaId(long taktikaId) {
        this.taktikaId = taktikaId;
    }

    public long getOsobaId() {
        return osobaId;
    }

    public void setOsobaId(long osobaId) {
        this.osobaId = osobaId;
    }
}
