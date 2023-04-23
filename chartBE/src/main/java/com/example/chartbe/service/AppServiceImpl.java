package com.example.chartbe.service;

import com.example.chartbe.model.App;
import com.example.chartbe.repository.IAppRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class AppServiceImpl implements IAppService{
    @Autowired
    private IAppRepository iAppRepository;
    @Override
    public List<App> listAll() {
        List<App> appList = iAppRepository.findAll();
        return appList;
    }
}
