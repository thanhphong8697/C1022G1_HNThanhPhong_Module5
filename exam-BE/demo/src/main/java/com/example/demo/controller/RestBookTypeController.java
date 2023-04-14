package com.example.demo.controller;
import com.example.demo.dto.BookTypeDTO;
import com.example.demo.service.IBookTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookTypes")
@CrossOrigin("*")
public class RestBookTypeController {
    @Autowired
    private IBookTypeService iBookTypeService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public List<BookTypeDTO> getAllBookType(){
        return iBookTypeService.findAllType();
    }
}
