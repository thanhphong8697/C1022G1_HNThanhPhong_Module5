package com.example.demo.service;


import com.example.demo.dto.BookDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBookService {

    Page<BookDTO> findAll(Pageable pageable, String name, String bookTypeId);

    void create(BookDTO bookDTO);

    void delete(Integer id);

    BookDTO findById(Integer id);

    void update(BookDTO bookDTO);
}
