package com.example.chartbe.repository;

import com.example.chartbe.model.App;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IAppRepository extends JpaRepository<App, Integer> {
}
