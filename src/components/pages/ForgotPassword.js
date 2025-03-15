import React, { useState } from "react";
import "./ForgotPassword.css"; 
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const REACT_APP_URL = process.env.REACT_APP_URL;

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsLoading(true);

    fetch(REACT_APP_URL + "wp-json/custom/v1/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);

        if (data?.success) {
          setMessage("Check your email for reset instructions.");
          setEmail("");
        } else {
          setError(data?.message || "An error occurred. Please try again.");
        }
      })
      .catch(() => {
        setIsLoading(false);
        setError("Something went wrong. Please try again.");
      });
  };

  return (
    <div className="forgot-password-container">
      <div className="forgot-password-box">
        <h2>Forgot Password?</h2>
        <p>Enter your email below and we'll send you reset instructions.</p>

        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="back-to-login">
          <Link to="/login">Back to Login</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
