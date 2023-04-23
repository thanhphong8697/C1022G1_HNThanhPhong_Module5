package com.example.chartbe.controller;

import com.example.chartbe.model.App;
import com.example.chartbe.service.IAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/apps")
@CrossOrigin("*")
public class RestAppController {
    @Autowired
    private IAppService iAppService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public List<App> appList(){
        return iAppService.listAll();
    }
}
