import React, { useState, useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [regFullname, setRegFullname] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regLoading, setRegLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) return toast.error("Email and password are required");
    setLoginLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        { email: loginEmail, password: loginPassword }
      );
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
      toast.success("Login successful!");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Login failed");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!regFullname || !regEmail || !regPassword) return toast.error("All fields are required");
    if (regPassword.length < 8) return toast.error("Password must be at least 8 characters");
    setRegLoading(true);
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/signup`,
        { fullname: regFullname, email: regEmail, password: regPassword }
      );
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
      toast.success("Registration successful! Welcome 🎉");
      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setRegLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Header />

      <a id="eltdf-back-to-top" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="43.047px" height="43.031px" viewBox="0 0 43.047 43.031" xmlSpace="preserve">
          <circle fill="none" stroke="#BC9A6B" strokeMiterlimit="10" cx="21.523" cy="21.531" r="20.986"/>
          <circle fill="none" stroke="#BC9A6B" className="eltdf-popout" strokeMiterlimit="10" cx="21.523" cy="21.531" r="16.049"/>
          <polyline fill="none" stroke="#BC9A6B" strokeMiterlimit="10" points="15.205,23.875 21.523,18.573 27.842,23.875 "/>
        </svg>
      </a>

      <div className="eltdf-content" >
        <div className="eltdf-content-inner">

          {/* Page Title / Breadcrumb */}
          <div className="eltdf-title-holder eltdf-standard-with-breadcrumbs-type eltdf-title-va-header-bottom" style={{height: "189px", backgroundColor: "#0c1315"}} data-height="189">
            <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
              <div className="eltdf-grid-line eltdf-grid-column-1"></div>
              <div className="eltdf-grid-line eltdf-grid-column-2"></div>
              <div className="eltdf-grid-line eltdf-grid-column-3"></div>
              <div className="eltdf-grid-line eltdf-grid-column-4"></div>
              <div className="eltdf-grid-line eltdf-grid-column-5"></div>
            </div>
            <div className="eltdf-title-wrapper" style={{height: "79px", paddingTop: "110px"}}>
              <div className="eltdf-title-inner">
                <div className="eltdf-grid">
                  <div className="eltdf-title-info">
                    <h5 className="eltdf-page-title entry-title">My account</h5>
                  </div>
                  <div className="eltdf-breadcrumbs-info">
                    <div itemProp="breadcrumb" className="eltdf-breadcrumbs">
                      <a itemProp="url" href="../index.html">Home</a>
                      <span className="eltdf-delimiter">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-breadcrumb-arrow">
                          <polyline points="0.4 0.4 3.6 4.2 0.4 8.1 " />
                          <polyline points="4.5 0.4 7.7 4.2 4.5 8.1 " />
                        </svg>
                      </span>
                      <span className="eltdf-current">My account</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Container */}
          <div className="eltdf-container eltdf-default-page-template">
            <div className="eltdf-container-inner clearfix">
              <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
                <div className="eltdf-grid-line eltdf-grid-column-1"></div>
                <div className="eltdf-grid-line eltdf-grid-column-2"></div>
                <div className="eltdf-grid-line eltdf-grid-column-3"></div>
                <div className="eltdf-grid-line eltdf-grid-column-4"></div>
                <div className="eltdf-grid-line eltdf-grid-column-5"></div>
              </div>

              <div className="eltdf-grid-row">
                <div className="eltdf-page-content-holder eltdf-grid-col-12">
                  <div className="woocommerce">
                    <div className="woocommerce-notices-wrapper"></div>

                    {/* Login Form */}
                    <h2>Login</h2>
                    <form className="woocommerce-form woocommerce-form-login login" onSubmit={handleLogin}>
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="username">
                          Username or email address&nbsp;
                          <span className="required" aria-hidden="true">*</span>
                          <span className="screen-reader-text">Required</span>
                        </label>
                        <input
                          type="text"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="username"
                          id="username"
                          autoComplete="username"
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          required
                          aria-required="true"
                        />
                      </p>
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="password">
                          Password&nbsp;
                          <span className="required" aria-hidden="true">*</span>
                          <span className="screen-reader-text">Required</span>
                        </label>
                        <input
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          type="password"
                          name="password"
                          id="password"
                          autoComplete="current-password"
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          required
                          aria-required="true"
                        />
                      </p>
                      <p className="form-row">
                        <label className="woocommerce-form__label woocommerce-form__label-for-checkbox woocommerce-form-login__rememberme">
                          <input
                            className="woocommerce-form__input woocommerce-form__input-checkbox"
                            name="rememberme"
                            type="checkbox"
                            id="rememberme"
                            defaultValue="forever"
                          />
                          <span>Remember me</span>
                        </label>
                        <button
                          type="submit"
                          className="woocommerce-button button woocommerce-form-login__submit"
                          name="login"
                          disabled={loginLoading}
                        >
                          {loginLoading ? "Logging in..." : "Log in"}
                        </button>
                      </p>
                      <p className="woocommerce-LostPassword lost_password">
                        <a href="lost-password/index.html">Lost your password?</a>
                      </p>
                    </form>

                    {/* Register Form */}
                    <h2>Register</h2>
                    <form className="woocommerce-form woocommerce-form-register register" onSubmit={handleRegister}>
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="reg_fullname">
                          Full name&nbsp;
                          <span className="required" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="text"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="fullname"
                          id="reg_fullname"
                          autoComplete="name"
                          value={regFullname}
                          onChange={(e) => setRegFullname(e.target.value)}
                          required
                          aria-required="true"
                        />
                      </p>
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="reg_email">
                          Email address&nbsp;
                          <span className="required" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="email"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="email"
                          id="reg_email"
                          autoComplete="email"
                          value={regEmail}
                          onChange={(e) => setRegEmail(e.target.value)}
                          required
                          aria-required="true"
                        />
                      </p>
                      <p className="woocommerce-form-row woocommerce-form-row--wide form-row form-row-wide">
                        <label htmlFor="reg_password">
                          Password&nbsp;
                          <span className="required" aria-hidden="true">*</span>
                        </label>
                        <input
                          type="password"
                          className="woocommerce-Input woocommerce-Input--text input-text"
                          name="password"
                          id="reg_password"
                          autoComplete="new-password"
                          value={regPassword}
                          onChange={(e) => setRegPassword(e.target.value)}
                          required
                          aria-required="true"
                        />
                      </p>
                      <p className="form-row">
                        <button
                          type="submit"
                          className="woocommerce-button button woocommerce-form-register__submit"
                          name="register"
                          disabled={regLoading}
                        >
                          {regLoading ? "Registering..." : "Register"}
                        </button>
                      </p>
                    </form>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;