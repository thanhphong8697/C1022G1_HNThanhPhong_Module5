package com.example.chartbe.model;

import javax.persistence.*;

@Entity
@Table(name = "apps")
public class App {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String year;
    private Integer userGain;
    private Integer userLost;

    public App() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public Integer getUserGain() {
        return userGain;
    }

    public void setUserGain(Integer userGain) {
        this.userGain = userGain;
    }

    public Integer getUserLost() {
        return userLost;
    }

    public void setUserLost(Integer userLost) {
        this.userLost = userLost;
    }
}
