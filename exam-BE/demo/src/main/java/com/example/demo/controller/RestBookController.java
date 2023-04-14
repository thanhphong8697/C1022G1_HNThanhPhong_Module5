package com.example.demo.controller;
import com.example.demo.dto.BookDTO;
import com.example.demo.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/books")
@CrossOrigin("*")
public class RestBookController {
    @Autowired
    private IBookService iBookService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Page<BookDTO> bookDTOPage(
            @PageableDefault(size = 5)Pageable pageable,
            @RequestParam(required = false, defaultValue = "") String name,
            @RequestParam(required = false, defaultValue = "") String bookTypeId
            ){
        Page<BookDTO> bookDTOPage = iBookService.findAll(pageable, name, bookTypeId);
        for (BookDTO book : bookDTOPage.getContent()){
            SimpleDateFormat initialDateFormat = new SimpleDateFormat("yyyy-MM-dd");
            SimpleDateFormat newDateFormat = new SimpleDateFormat("dd/MM/yyyy");
            String date = book.getDate();
            String dateInNewFormat = "";
            try {
                Date date1 = initialDateFormat.parse(date);
                dateInNewFormat = newDateFormat.format(date1);
            } catch (ParseException e) {
                e.printStackTrace();
            }
            book.setDate(dateInNewFormat);
        }
        return bookDTOPage;
    }

    @PostMapping("")
    public ResponseEntity<?> createBook (@Validated @RequestBody BookDTO bookDTO, BindingResult bindingResult){
        if (!bindingResult.hasErrors()){
            iBookService.create(bookDTO);
        }else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> errors = bindingResult.getFieldErrors();
            for (FieldError error : errors){
                if (!map.containsKey(error.getField())){
                    map.put(error.getField(),error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteBook(@PathVariable Integer id){
        iBookService.delete(id);
    }

    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public  BookDTO bookDetail(@PathVariable Integer id){
        return iBookService.findById(id);
    }

    @PutMapping("")
    public ResponseEntity<?> editBook (@Validated @RequestBody BookDTO bookDTO, BindingResult bindingResult){
        if (!bindingResult.hasErrors()){
            iBookService.update(bookDTO);
        }else {
            Map<String, String> map = new LinkedHashMap<>();
            List<FieldError> errors = bindingResult.getFieldErrors();
            for (FieldError error : errors){
                if (!map.containsKey(error.getField())){
                    map.put(error.getField(),error.getDefaultMessage());
                }
            }
            return new ResponseEntity<>(map, HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
