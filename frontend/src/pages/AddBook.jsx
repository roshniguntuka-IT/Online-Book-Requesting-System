import { useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import api from "../services/api";

function AddBook() {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    bookName: "",
    author: "",
    technology: "",
    price: "",
    status: "AVAILABLE",
  });

  const [message, setMessage] = useState("");

 if (sessionStorage.getItem("adminLoggedIn") !== "true") {
  return <Navigate to="/admin-login" replace />;
}
  const handleChange = (e) => {
    setBook({ ...book, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await api.post("/books", {
        ...book,
        price: Number(book.price),
      });

      setMessage("Book added successfully!");

      setBook({
        bookName: "",
        author: "",
        technology: "",
        price: "",
        status: "AVAILABLE",
      });
    } catch (error) {
      setMessage(
        Object.values(error.response?.data || {}).join(", ") ||
        "Failed to add book"
      );
    }
  };

  return (
    <div className="container">
      <h2>Add New Book</h2>

      <form onSubmit={handleSubmit}>
        <input name="bookName" placeholder="Book Name" value={book.bookName} onChange={handleChange} required />

        <input name="author" placeholder="Author" value={book.author} onChange={handleChange} required />

        <select name="technology" value={book.technology} onChange={handleChange} required>
          <option value="">Select Technology</option>
          <option>Java</option>
          <option>Spring Boot</option>
          <option>Python</option>
          <option>JavaScript</option>
          <option>React</option>
          <option>SQL</option>
          <option>Other</option>
        </select>

        <input name="price" type="number" min="0.01" step="0.01" placeholder="Price" value={book.price} onChange={handleChange} required />
        <select name="status" value={book.status} onChange={handleChange} required>
  <option value="AVAILABLE">AVAILABLE</option>
  <option value="NOT_AVAILABLE">NOT AVAILABLE</option>
</select>
        <button type="submit">Add Book</button>
      </form>

      {message && <p>{message}</p>}

      <button onClick={() => navigate("/admin-dashboard")}>Back</button>
    </div>
  );
}

export default AddBook;