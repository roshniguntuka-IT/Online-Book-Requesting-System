
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/admin/login", {
        username,
        password,
      });

      if (response.data.success) {
        sessionStorage.setItem("adminLoggedIn", "true");
        sessionStorage.setItem("adminToken", response.data.token);
        navigate("/admin-dashboard");
      }
    } catch {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="login-page">
      <header className="login-header">
        <h2>Information Resource Center</h2>
        <p>Online Book Requesting System</p>
      </header>

      <div className="login-background">
        <div className="login-glass">
          <h1>Admin Login</h1>
          <p className="login-subtitle">
            Welcome back! Sign in to manage the library.
          </p>

          <form onSubmit={login}>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>

          {error && <p className="login-error">{error}</p>}

          <button
            className="login-back"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
