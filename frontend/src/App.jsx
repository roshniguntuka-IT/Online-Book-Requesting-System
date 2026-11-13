import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import ViewBooks from "./pages/ViewBooks";
import AddBook from "./pages/AddBook";
import BookRequest from "./pages/BookRequest";
import ViewRequests from "./pages/ViewRequests";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/books" element={<ViewBooks />} />
        <Route path="/admin/add-book" element={<AddBook />} />
        <Route path="/request-book" element={<BookRequest />} />
        <Route path="/admin/requests" element={<ViewRequests />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;