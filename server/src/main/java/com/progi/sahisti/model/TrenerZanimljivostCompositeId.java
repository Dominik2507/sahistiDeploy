package com.progi.sahisti.model;

import java.io.Serializable;

public class TrenerZanimljivostCompositeId implements Serializable {

    private long zanimljivostId;

    private long osobaId;

    public long getZanimljivostId() {
        return zanimljivostId;
    }

    public void setZanimljivostId(long zanimljivostId) {
        this.zanimljivostId = zanimljivostId;
    }

    public long getOsobaId() {
        return osobaId;
    }

    public void setOsobaId(long osobaId) {
        this.osobaId = osobaId;
    }

}
