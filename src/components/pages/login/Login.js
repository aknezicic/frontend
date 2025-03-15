import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const REACT_APP_URL = process.env.REACT_APP_URL;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    fetch(REACT_APP_URL + "wp-json/jwt-auth/v1/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setForm({
          username: "",
          password: "",
        });

        if (data?.code) {
          setError("Invalid data, please try again");
          return;
        }

        if (rememberMe) {
          localStorage.setItem("token", data.token);
          localStorage.setItem("username", data.user_display_name);
        } else {
          sessionStorage.setItem("token", data.token);
          sessionStorage.setItem("username", data.user_display_name);
        }

        navigate("/");
        window.location.reload();
      })
      .catch((error) => {
        setIsLoading(false);
        setError("An error occurred. Please try again.");
      });
  };

  return (
    <>
      <div className="body-login">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center align-items-center min-vh-100 login-intro">
              <div className="login-intro-background border rounded">
                <div className="p-4 border rounded shadow login-form">
                  <div className="form-content-noblur">
                    <h1>Welcome to MNTN</h1>
                    <h2 className="mb-4">Be prepared for the Mountains and beyond!</h2>
                    <h3 className="text-center mb-4">Login</h3>

                    <form className={isLoading ? "loading" : ""} onSubmit={handleLogin}>
                      <label>E-mail or phone number</label>
                      <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                        placeholder="Type your e-mail or phone number"
                        className="mb-4"
                      />
                      <label>Password</label>
                      <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        placeholder="Type your password"
                      />
                      
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <div>
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="rememberMe"
                            checked={rememberMe}
                            onChange={handleRememberMe}
                          />
                          <label className="form-check-label ms-2" htmlFor="rememberMe">
                            Remember me
                          </label>
                        </div>
                        <p className="mb-0 text-nowrap">
                          <Link to="/forgot-password">Forgot Password?</Link>
                        </p>
                      </div>

                      {error && <p className="alert alert-danger mt-3">{error}</p>}

                      <button type="submit" className="mt-3">Sign In</button>
                      <div className="sign-up">
                        <p>Don’t have an account?</p>
                        <Link to="/register" data-discover="true">Sign Up</Link>
                      </div>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
