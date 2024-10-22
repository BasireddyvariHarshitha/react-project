import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Introduction from "./Introduction";
import AddCustomer from "./AddCustomer";
import ListCustomer from "./ListCustomer";
import "./index.css";

function App() {
  return (
    <Router>
      <div>
        <h1 className="title">Customer Management System</h1>
        <nav className="nav-links">
          <Link to="/introduction" className="link">
            Introduction
          </Link>

          <Link to="/add-customer" className="link">
            Add Customer
          </Link>

          <Link to="/list-customers" className="link">
            List Customers
          </Link>
        </nav>
        <div className="content-box">
          <Routes>
            <Route path="/introduction" element={<Introduction />} />
            <Route path="/add-customer" element={<AddCustomer />} />
            <Route path="/list-customers" element={<ListCustomer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
