package com.progi.sahisti.utils;

public class FetchBodyData {
    private String userId;
    private String role;

    public FetchBodyData(String userId, String role) {
        this.userId = userId;
        this.role = role;
    }

    public String getUserId() {
        return userId;
    }

    public String getRole() {
        return role;
    }

    @Override
    public String toString() {
        return "FetchBodyData{" +
                "userId='" + userId + '\'' +
                ", role='" + role + '\'' +
                '}';
    }
}
