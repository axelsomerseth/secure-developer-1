import React from "react";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          <span>🎯</span>
          &nbsp;&nbsp;Resolutions
        </a>
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
          <ul className="navbar-nav ms-auto">
            <li>
              <button
                className="btn btn-outline-light"
                data-bs-toggle="modal"
                data-bs-target="#loginModal"
              >
                Log in
              </button>
            </li>
            <li className="ms-lg-3">
              <button
                className="btn btn-outline-light"
                data-bs-toggle="modal"
                data-bs-target="#signupModal"
              >
                Sign up
              </button>
            </li>
          </ul>
        </div>
      </div>
      <LoginModal />
      <SignupModal />
    </nav>
  );
}

export default Navbar;
