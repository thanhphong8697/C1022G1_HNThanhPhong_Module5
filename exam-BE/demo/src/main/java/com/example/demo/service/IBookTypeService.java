package com.example.demo.service;



import com.example.demo.dto.BookTypeDTO;

import java.util.List;

public interface IBookTypeService {
    List<BookTypeDTO> findAllType();
}
