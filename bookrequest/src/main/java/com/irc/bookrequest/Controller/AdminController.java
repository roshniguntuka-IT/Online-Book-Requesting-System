package com.irc.bookrequest.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:5173")
public class AdminController {

    private static final String ADMIN_USERNAME = "admin";
    private static final String ADMIN_PASSWORD = "admin123";
    private static final String ADMIN_TOKEN = "IRC_ADMIN_TOKEN_2026";

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> credentials) {

        String username = credentials.get("username");
        String password = credentials.get("password");

        if (ADMIN_USERNAME.equals(username) && ADMIN_PASSWORD.equals(password)) {
            return ResponseEntity.ok(
                    Map.of(
                            "message", "Login successful",
                            "success", true,
                            "token", ADMIN_TOKEN
                    )
            );
        }

        return ResponseEntity.status(401).body(
                Map.of("message", "Invalid username or password", "success", false)
        );
    }
}