import React from "react";

function SignupModal() {
  const handleSignup = () => {
    console.log("trying to sign up");
  };

  return (
    <div
      className="modal fade"
      id="signupModal"
      tabIndex="-1"
      aria-labelledby="signupModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header text-light bg-dark">
            <h5 className="modal-title" id="signupModalLabel">
              Create an account
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="inputEmailSignup" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmailSignup"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="inputPasswordSignup" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPasswordSignup"
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleSignup}
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupModal;
