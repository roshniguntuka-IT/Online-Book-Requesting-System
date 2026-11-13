import { useEffect, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import api from "../services/api";

function ViewRequests() {
  const navigate = useNavigate();
  const [requests, setRequests] = useState([]);
  const [technology, setTechnology] = useState("");

  if (sessionStorage.getItem("adminLoggedIn") !== "true") {
  return <Navigate to="/admin-login" replace />;
}

  const loadRequests = async () => {
    try {
      const response = await api.get(
        technology
          ? `/requests/technology/${encodeURIComponent(technology)}`
          : "/requests"
      );
      setRequests(response.data);
    } catch {
      alert("Unable to load requests");
    }
  };

  useEffect(() => {
    loadRequests();
  }, [technology]);

  return (
    <div className="container">
      <h2>Employee Book Requests</h2>

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
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Book</th>
            <th>Author</th>
            <th>Technology</th>
          </tr>
        </thead>

        <tbody>
          {requests.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.employeeId}</td>
              <td>{item.employeeName}</td>
              <td>{item.bookName}</td>
              <td>{item.author}</td>
              <td>{item.technology}</td>
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

export default ViewRequests;