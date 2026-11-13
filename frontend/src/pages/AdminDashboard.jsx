
import { Link, useNavigate, Navigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  if (sessionStorage.getItem("adminLoggedIn") !== "true") {
    return <Navigate to="/admin-login" replace />;
  }

  const logout = () => {
    sessionStorage.removeItem("adminLoggedIn");
    sessionStorage.removeItem("adminToken");
    navigate("/");
  };

  return (
    <div className="container dashboard-container">

      <div className="dashboard-topbar">
        <button className="dashboard-logout" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="dashboard-heading">
        <p className="dashboard-welcome">Welcome, Admin!</p>
        <h1>Admin Dashboard</h1>
        <p className="dashboard-subtitle">
          Manage books, availability and employee requests.
        </p>
      </div>

      <div className="dashboard-actions">

        <Link to="/admin/add-book" className="dashboard-card">
          <span className="dashboard-icon">📚</span>
          <strong>Add Book</strong>
          <small>Add new books to the library</small>
        </Link>

        <Link to="/books" className="dashboard-card">
          <span className="dashboard-icon">📖</span>
          <strong>View Books</strong>
          <small>View and update book availability</small>
        </Link>

        <Link to="/admin/requests" className="dashboard-card">
          <span className="dashboard-icon">📋</span>
          <strong>View Book Requests</strong>
          <small>Manage employee requests</small>
        </Link>

      </div>
    </div>
  );
}

export default AdminDashboard;
