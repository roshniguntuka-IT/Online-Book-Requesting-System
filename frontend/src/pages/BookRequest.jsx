import { useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";

function BookRequest() {
  const [request, setRequest] = useState({
    employeeId: "",
    employeeName: "",
    bookName: "",
    author: "",
    technology: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setRequest({ ...request, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!/^[0-9]+$/.test(request.employeeId)) {
      setMessage("Employee ID must contain only numbers");
      return;
    }

    try {
      await api.post("/requests", request);
      setMessage("Book request submitted successfully!");

      setRequest({
        employeeId: "",
        employeeName: "",
        bookName: "",
        author: "",
        technology: "",
      });
    } catch (error) {
      setMessage(
        Object.values(error.response?.data || {}).join(", ") ||
        "Request submission failed"
      );
    }
  };

  return (
    <div className="container">
      <h2>Request a New Book</h2>

      <form onSubmit={handleSubmit}>
        <input name="employeeId" placeholder="Employee ID" value={request.employeeId} onChange={handleChange} required />

        <input name="employeeName" placeholder="Employee Name" value={request.employeeName} onChange={handleChange} required />

        <input name="bookName" placeholder="Book Name" value={request.bookName} onChange={handleChange} required />

        <input name="author" placeholder="Author" value={request.author} onChange={handleChange} required />

        <select name="technology" value={request.technology} onChange={handleChange} required>
          <option value="">Select Technology</option>
          <option>Java</option>
          <option>Spring Boot</option>
          <option>Python</option>
          <option>JavaScript</option>
          <option>React</option>
          <option>SQL</option>
          <option>Other</option>
        </select>

        <button type="submit">Submit Request</button>
      </form>

      {message && <p>{message}</p>}

      <Link to="/">Back Home</Link>
    </div>
  );
}

export default BookRequest;