import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginModal from "../components/LoginModal";
import SignupModal from "../components/SignupModal";
import { getAuthState, logOut } from "../services/auth";

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAuthState((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        // console.log(user);
        setLoggedIn(() => true);
      } else {
        // User is signed out
        setLoggedIn(() => false);
      }
    });
  }, []);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
        // console.log("Log out successful");
        navigate("/", { replace: true });
      })
      .catch((error) => {
        // An error happened.
        console.error(error.code);
        console.error(error.message);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <span>🎯</span>
          &nbsp;&nbsp;Resolutions
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
          <ul className="navbar-nav me-auto">
            {loggedIn && (
              <li className="nav-item">
                <Link to="/profile" className="nav-link active">
                  Profile
                </Link>
              </li>
            )}
          </ul>
          <ul className="navbar-nav ms-auto">
            {loggedIn ? (
              <li>
                <button className="btn btn-danger" onClick={handleLogOut}>
                  Log out
                </button>
              </li>
            ) : (
              <>
                <li>
                  <button
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#loginModal"
                  >
                    Log in
                  </button>
                </li>
                <li className="ms-lg-3">
                  <button
                    className="btn btn-secondary"
                    data-bs-toggle="modal"
                    data-bs-target="#signupModal"
                  >
                    Sign up
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <LoginModal />
      <SignupModal />
    </nav>
  );
}

export default Navbar;
