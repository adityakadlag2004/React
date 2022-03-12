import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">
          iNoteBook
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/Home" ? "active" : ""
                }`}
                aria-current="page"
                to="/Home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/addNote" ? "active" : ""
                }`}
                aria-current="page"
                to="/addNote"
              >
                Add Note
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/about" ? "active" : ""
                }`}
                to="/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/fullview" ? "active" : ""
                }`}
                to="/fullview"
              >
                FullView
              </Link>
            </li>
          </ul>

          <form className="d-flex">
            <Link className="btn btn-primary mx-1" role="button" to="/login">
              Login
            </Link>
            <Link className="btn btn-primary mx-1" role="button" to="/signup">
              SignUp
            </Link>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
