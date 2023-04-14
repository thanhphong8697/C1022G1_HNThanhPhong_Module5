package com.example.demo.service;
import com.example.demo.dto.BookDTO;
import com.example.demo.dto.BookTypeDTO;
import com.example.demo.model.Book;
import com.example.demo.repository.IBookRepository;
import com.example.demo.repository.IBookTypeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BookServiceImpl implements IBookService {
    @Autowired
    private IBookRepository iBookRepository;

    @Autowired
    private IBookTypeRepository iBookTypeRepository;

    @Override
    public Page<BookDTO> findAll(Pageable pageable, String name, String bookTypeId) {
        Page<Book> bookPage = iBookRepository.findByNameAndIsDelete(pageable, name, bookTypeId);
        List<BookDTO> bookDTOList = new ArrayList<>();
        BookDTO bookDTO;
        for (Book books : bookPage){
            bookDTO = new BookDTO();
            bookDTO.setBookTypeDTO(new BookTypeDTO());
            BeanUtils.copyProperties(books.getBookTypeId(), bookDTO.getBookTypeDTO());
            BeanUtils.copyProperties(books, bookDTO);
            bookDTOList.add(bookDTO);
        }
        return new PageImpl<>(bookDTOList, pageable, bookPage.getTotalElements());
    }

    @Override
    public void create(BookDTO bookDTO) {
        Book book = new Book();
        book.setBookTypeId(iBookTypeRepository.findBookTypeById(bookDTO.getBookTypeDTO().getId()));
        BeanUtils.copyProperties(bookDTO, book);
        iBookRepository.createBook(book.getCode(),
                book.getName(),
                book.getDate(),
                book.getQuantity(),
                book.getBookTypeId().getId());
    }

    @Override
    public void delete(Integer id) {
        iBookRepository.deleteBook(id);
    }

    @Override
    public BookDTO findById(Integer id) {
        Book book = iBookRepository.findBookById(id);
        BookDTO bookDTO = new BookDTO();
        bookDTO.setBookTypeDTO(new BookTypeDTO());
        BeanUtils.copyProperties(book.getBookTypeId(), bookDTO.getBookTypeDTO());
        BeanUtils.copyProperties(book, bookDTO);
        return bookDTO;
    }

    @Override
    public void update(BookDTO bookDTO) {
        Book book = new Book();
        book.setBookTypeId(iBookTypeRepository.findBookTypeById(bookDTO.getBookTypeDTO().getId()));
        BeanUtils.copyProperties(bookDTO,book);
        iBookRepository.editBook(book.getCode(),
                book.getDate(),
                book.getName(),
                book.getQuantity(),
                book.getBookTypeId().getId(),
                book.getId());
    }


}
