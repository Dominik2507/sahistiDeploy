package com.progi.sahisti.utils;

public class ResponseBody {
    private String sessionId;
    private String userId;
    private String role;

    public ResponseBody(String sessionId, String userId, String role) {
        this.sessionId = sessionId;
        this.userId = userId;
        this.role = role;
    }

    public String getSessionId() {
        return sessionId;
    }

    public String getUserId() {
        return userId;
    }

    public String getRole() {
        return role;
    }
}
