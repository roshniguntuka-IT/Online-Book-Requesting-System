package com.irc.bookrequest.Repository;

import com.irc.bookrequest.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRepository extends JpaRepository<Book, Long> {

    List<Book> findByTechnologyIgnoreCase(String technology);

}
