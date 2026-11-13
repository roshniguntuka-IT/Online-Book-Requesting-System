
package com.irc.bookrequest.Controller;

import com.irc.bookrequest.entity.BookRequest;
import com.irc.bookrequest.Service.BookRequestService;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/requests")
@CrossOrigin(origins = "http://localhost:5173")
public class BookRequestController {

    private final BookRequestService service;

    public BookRequestController(BookRequestService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<BookRequest> addRequest(
            @Valid @RequestBody BookRequest request) {
        return ResponseEntity.ok(service.addRequest(request));
    }

    @GetMapping
    public ResponseEntity<List<BookRequest>> getAllRequests() {
        return ResponseEntity.ok(service.getAllRequests());
    }

    @GetMapping("/technology/{technology}")
    public ResponseEntity<List<BookRequest>> getByTechnology(
            @PathVariable String technology) {
        return ResponseEntity.ok(
                service.getRequestsByTechnology(technology));
    }
}
