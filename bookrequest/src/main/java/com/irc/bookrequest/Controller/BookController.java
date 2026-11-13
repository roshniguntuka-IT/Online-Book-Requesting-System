package com.irc.bookrequest.Controller;




import com.irc.bookrequest.entity.Book;
import com.irc.bookrequest.entity.BookStatus;
import com.irc.bookrequest.Service.BookService;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@CrossOrigin(origins = "http://localhost:5173")
public class BookController {

    private final BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @PostMapping
    public ResponseEntity<Book> addBook(@Valid @RequestBody Book book) {
        return ResponseEntity.ok(bookService.addBook(book));
    }

    @GetMapping
    public ResponseEntity<List<Book>> getAllBooks() {
        return ResponseEntity.ok(bookService.getAllBooks());
    }

    @GetMapping("/technology/{technology}")
    public ResponseEntity<List<Book>> getBooksByTechnology(
            @PathVariable String technology) {
        return ResponseEntity.ok(
                bookService.getBooksByTechnology(technology));
    }

    @PutMapping("/{id}/status")
    public ResponseEntity<Book> updateStatus(
            @PathVariable Long id,
            @RequestParam BookStatus status) {
        return ResponseEntity.ok(
                bookService.updateBookStatus(id, status));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteBook(@PathVariable Long id) {
        bookService.deleteBook(id);
        return ResponseEntity.ok("Book deleted successfully");
    }
}
