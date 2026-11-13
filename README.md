## Online Book Requesting System

A full-stack web application developed for an Information Resource Center (IRC) to manage books, track availability, and allow employees to request new books.

## Project Overview

The Online Book Requesting System provides two types of access:

- **Admin:** Logs in to add books, manage availability, and view employee book requests.
- **Employee:** Can browse available books and submit book requests without registration or login.

## Features

### Admin
- Hardcoded admin login for the project demonstration.
- Add books with book name, author, technology, price, and availability status.
- View books and filter by technology.
- Update book availability.
- View employee book requests.
- Filter requests by technology.
- Protected admin operations and logout.

### Employee
- View books without login.
- Filter books by technology.
- Request new books without registration.
- Employee ID validation.
- Mandatory field validation.

## Home Page
<img width="1867" height="878" alt="Screenshot_13-11-2026_222030_localhost" src="https://github.com/user-attachments/assets/541af19a-d370-4b75-9428-58b2d4cdf96e" />
## Application Screenshots
# Home Page
<img width="1867" height="878" alt="Screenshot_13-11-2026_222030_localhost" src="https://github.com/user-attachments/assets/541af19a-d370-4b75-9428-58b2d4cdf96e" />

# Admin Login
<img width="1863" height="891" alt="image" src="https://github.com/user-attachments/assets/ee174e1e-6b58-431d-8f19-a003475e7741" />

# Admin Dashboard
<img width="1827" height="872" alt="image" src="https://github.com/user-attachments/assets/e0477193-5d86-47bc-b10a-f2060258ea8c" />

# Employee Book Requests
<img width="1850" height="910" alt="image" src="https://github.com/user-attachments/assets/d4598c33-98e2-4dbf-bf9d-596698f5d022" />

## 🛠️ Technologies Used

| Frontend | React.js |
| Backend | Java, Spring Boot |
| Database | MySQL |
| API | REST API |
| ORM  | Spring Data JPA, Hibernate |
| Build Tool | Maven |
| Development Tools | VS Code, Postman |
| Version Control | Git and GitHub |

## 📁 Project Structure
Online-Book-Requesting-System/
│
├── bookrequest/ 
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/irc/bookrequest/
│   │   │   │   ├── Controller/
│   │   │   │   ├── Repository/
│   │   │   │   ├── Service/
│   │   │   │   ├── config/
│   │   │   │   ├── entity/
│   │   │   │   └── exception/
│   │   │   └── resources/
│   │   └── test/
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── App.css
│   └── package.json
│
├── screenshots/
└── README.md
```

## ⚙️ Prerequisites

Install the following before running the project:

- Java 21 or later
- MySQL Server 8.0
- Node.js and npm
- Git

## 🚀 Installation and Setup

### 1. Clone the repository
git clone https://github.com/roshniguntuka-IT/Online-Book-Requesting-System.git

### 2. Create the MySQL database

Open the MySQL command line and run:
CREATE DATABASE book_request_db;


### 3. Configure the backend

Open:bookrequest/src/main/resources/application.properties`

Configure the database connection using your local MySQL settings. The password should be supplied through the `DB_PASSWORD` environment variable rather than committed to GitHub.

### 4. Start the Spring Boot backend

Open PowerShell:

cd bookrequest

Set the MySQL password securely for the current terminal session:
$secure = Read-Host "Enter MySQL password" -AsSecureString
$env:DB_PASSWORD = [System.Net.NetworkCredential]::new("", $secure).Passwor

Run the backend:
.\mvnw.cmd spring-boot:run


Backend URL: `http://localhost:8080`

### 5. Start the React frontend

Open another terminal:
cd frontend
npm install
npm run dev


Frontend URL: `http://localhost:5173`

## 🔗 Main API Endpoints

| Method | Endpoint | Description |

| POST |/api/admin/login            | Admin login |
| POST | /api/books`                | Add a book (admin) |
| GET | /api/books`                 | View all books |
| GET | /api/books/technology/{technology}     | Filter books |
| PUT | /api/books/{id}/status                 | Update book status (admin) |
| POST |/api/requests` | Submit a book request |
| GET | /api/requests` | View requests (admin) |
| GET | /api/requests/technology/{technology}` | Filter requests (admin) |

Admin-protected API operations require the authorization token returned by the login endpoint.

## 🎨 UI Design

The application uses a modern glassmorphism interface with:

- Dark navy-blue theme.
- Frosted-glass panels.
- Library background imagery.
- Gold accents.
- Responsive layouts.

## 🔒 Security Note

This project uses hardcoded admin credentials and a demonstration token as part of its project requirements. The authentication approach is intended for demonstration and is not suitable for production deployment.

Database passwords and other private credentials must not be committed to the repository.

## 👨‍💻 Author

**Roshni Guntuka**

GitHub: [roshniguntuka-IT](https://github.com/roshniguntuka-IT)

⭐ Thank you for visiting the Online Book Requesting System project!
