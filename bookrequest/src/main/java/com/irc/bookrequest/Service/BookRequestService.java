
package com.irc.bookrequest.Service;

import com.irc.bookrequest.entity.BookRequest;
import com.irc.bookrequest.Repository.BookRequestRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookRequestService {

    private final BookRequestRepository repository;

    public BookRequestService(BookRequestRepository repository) {
        this.repository = repository;
    }

    public BookRequest addRequest(BookRequest request) {
        return repository.save(request);
    }

    public List<BookRequest> getAllRequests() {
        return repository.findAll();
    }

    public List<BookRequest> getRequestsByTechnology(String technology) {
        return repository.findByTechnologyIgnoreCase(technology);
    }
}
