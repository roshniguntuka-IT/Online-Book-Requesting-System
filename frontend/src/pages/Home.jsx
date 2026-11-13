
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container home-container">
      <h1>Information Resource Center</h1>

      <h2>Online Book Requesting System</h2>

      <p className="home-description">
        Discover books, explore technology resources, and request
        the books you need.
      </p>

      <div className="home-actions">
        <Link to="/books" className="home-card">
          <strong>View Books</strong>
          <span>Explore available books</span>
        </Link>

        <Link to="/request-book" className="home-card">
          <strong>Request a Book</strong>
          <span>Submit a new book request</span>
        </Link>

        <Link to="/admin-login" className="home-card">
          <strong>Admin Login</strong>
          <span>Manage books and requests</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
