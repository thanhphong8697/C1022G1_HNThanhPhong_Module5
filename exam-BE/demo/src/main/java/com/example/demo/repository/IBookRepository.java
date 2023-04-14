package com.example.demo.repository;


import com.example.demo.model.Book;
import org.aspectj.lang.JoinPoint;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;

public interface IBookRepository extends JpaRepository<Book, Integer> {
    @Query(value = "select * from books where name like %:name% and book_type_id like %:id% and is_delete = false ", nativeQuery = true)
    Page<Book> findByNameAndIsDelete(Pageable pageable, @Param("name") String name, @Param("id") String bookTypeId);

    @Modifying
    @Transactional
    @Query(value = "insert into books (code,`name`, `date`, quantity, book_type_id)" +
            "values (:code, :name, :date, :quantity, :bookTypeId)", nativeQuery = true)
    void createBook(@Param("code") String code,
                    @Param("name") String name,
                    @Param("date") String date,
                    @Param("quantity") Integer quantity,
                    @Param("bookTypeId") Integer bookTypeI);

    @Modifying
    @Transactional
    @Query(value = "delete from books where id = :id", nativeQuery = true)
    void deleteBook(@Param("id") Integer id);

    @Query(value = "select * from books where id = :id", nativeQuery = true)
    Book findBookById(@Param("id") Integer id);

    @Modifying
    @Transactional
    @Query(value = "update books set code = :code, `name` = :name, `date` = :date, quantity = :quantity, book_type_id = :bookTypeId where id = :id", nativeQuery = true)
    void editBook(@Param("code") String code,
                  @Param("name") String name,
                  @Param("date") String date,
                  @Param("quantity") Integer quantity,
                  @Param("bookTypeId") Integer bookTypeI,
                  @Param("id") Integer id);
}
