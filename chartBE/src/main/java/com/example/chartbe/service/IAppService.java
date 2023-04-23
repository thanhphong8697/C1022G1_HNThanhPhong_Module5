package com.example.chartbe.service;

import com.example.chartbe.model.App;
import org.springframework.stereotype.Service;

import java.util.List;

public interface IAppService {
    List<App> listAll();
}
