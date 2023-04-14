package com.example.demo.service;


import com.example.demo.dto.BookTypeDTO;
import com.example.demo.model.BookType;
import com.example.demo.repository.IBookTypeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookTypeService implements IBookTypeService{
    @Autowired
    private IBookTypeRepository iBookTypeRepository;

    @Override
    public List<BookTypeDTO> findAllType() {
        List<BookType> bookTypeList = iBookTypeRepository.findAllBookType();
        List<BookTypeDTO> bookTypeDTOList = new ArrayList<>();
        BookTypeDTO bookTypeDTO;
        for (BookType bookType: bookTypeList){
            bookTypeDTO = new BookTypeDTO();
            BeanUtils.copyProperties(bookType, bookTypeDTO);
            bookTypeDTOList.add(bookTypeDTO);
        }
        return bookTypeDTOList;
    }
}
