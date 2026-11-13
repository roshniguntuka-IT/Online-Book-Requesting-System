
package com.irc.bookrequest.Repository;

import com.irc.bookrequest.entity.BookRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookRequestRepository
        extends JpaRepository<BookRequest, Long> {

    List<BookRequest> findByTechnologyIgnoreCase(String technology);
}
