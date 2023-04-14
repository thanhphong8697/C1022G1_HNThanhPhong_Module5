package com.example.demo.repository;


import com.example.demo.model.BookType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IBookTypeRepository extends JpaRepository<BookType, Integer> {
    @Query(value = "select * from book_types", nativeQuery = true)
    List<BookType> findAllBookType();

    @Query(value = "select * from book_types where  id = :id", nativeQuery = true)
    BookType findBookTypeById(@Param("id") Integer id);
}
