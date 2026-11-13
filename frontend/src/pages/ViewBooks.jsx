import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function ViewBooks() {
  const [books, setBooks] = useState([]);
  const [technology, setTechnology] = useState("");

  const loadBooks = async () => {
    try {
      const response = await api.get(
        technology
          ? `/books/technology/${encodeURIComponent(technology)}`
          : "/books"
      );
      setBooks(response.data);
    } catch {
      alert("Unable to load books");
    }
  };

  useEffect(() => {
    loadBooks();
  }, [technology]);

  const updateStatus = async (id, status) => {
    try {
      await api.put(`/books/${id}/status?status=${status}`);
      loadBooks();
    } catch {
      alert("Unable to update status");
    }
  };

  return (
    <div className="container">
      <h2>Available Books</h2>

      <select value={technology} onChange={(e) => setTechnology(e.target.value)}>
        <option value="">All Technologies</option>
        <option>Java</option>
        <option>Spring Boot</option>
        <option>Python</option>
        <option>JavaScript</option>
        <option>React</option>
        <option>SQL</option>
      </select>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Book</th>
            <th>Author</th>
            <th>Technology</th>
            <th>Price</th>
            <th>Status</th>
            {sessionStorage.getItem("adminLoggedIn") === "true" && <th>Action</th>}
          </tr>
        </thead>

        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.bookName}</td>
              <td>{book.author}</td>
              <td>{book.technology}</td>
              <td>{book.price}</td>
              <td>{book.status}</td>
              {sessionStorage.getItem("adminLoggedIn") === "true" && (
                <td>
                  <button onClick={() => updateStatus(
                    book.id,
                    book.status === "AVAILABLE" ? "NOT_AVAILABLE" : "AVAILABLE"
                  )}>
                    Change Status
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => window.history.back()}>
  Back
</button>
    </div>
  );
}

export default ViewBooks;