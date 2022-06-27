import React, { useState, useRef } from "react";
import { login } from "../services/auth";

function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const closeButtonRef = useRef("");

  const handleLogin = () => {
    const response = login(email, password);
    response
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        closeButtonRef.current.click();
        resetForm();
      })
      .catch((error) => {
        console.error(error.code, error.message);
      });
  };

  const resetForm = () => {
    setEmail(() => "");
    setPassword(() => "");
  };

  return (
    <div
      className="modal fade"
      id="loginModal"
      tabIndex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header text-light bg-dark">
            <h5 className="modal-title" id="loginModalLabel">
              Log in to your account
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form id="loginForm">
              <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              ref={closeButtonRef}
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
