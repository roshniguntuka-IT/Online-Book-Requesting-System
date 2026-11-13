package com.irc.bookrequest.config;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;

@Component
public class AdminAuthInterceptor implements HandlerInterceptor {

    private static final String ADMIN_TOKEN = "IRC_ADMIN_TOKEN_2026";

    @Override
    public boolean preHandle(
            HttpServletRequest request,
            HttpServletResponse response,
            Object handler) throws Exception {

        String method = request.getMethod();
        String path = request.getRequestURI();

        boolean adminOperation =
                (path.startsWith("/api/books") &&
                        (method.equals("POST") || method.equals("PUT") || method.equals("DELETE")))
                ||
                (path.startsWith("/api/requests") && method.equals("GET"));

        if (!adminOperation) {
            return true;
        }

        String token = request.getHeader("Authorization");

        if (ADMIN_TOKEN.equals(token)) {
            return true;
        }

        response.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
        response.setContentType("application/json");
        response.getWriter().write(
                "{\"error\":\"Unauthorized admin access\"}"
        );

        return false;
    }
}