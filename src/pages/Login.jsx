import React, {useState, useContext} from "react";
import Header2 from "./Header2";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import {toast} from "react-toastify";
import backgroundImg from "./media/back.jpg";
import Header from "./Header";
const Login = () => {
   const [email, setEmail]       = useState("");
  const [password, setPassword] = useState("");

  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error("Email and password are required");
      return;
    }

    dispatch({ type: "LOGIN_START" });

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/login`,
        { email, password }
      );

      dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
      localStorage.setItem("user", JSON.stringify(data.user));

      toast.success("Login successful!");

      navigate("/"); // redirect to home
    } catch (err) {
      const message = err.response?.data?.message || "Login failed";
      dispatch({ type: "LOGIN_FAILURE", payload: message });
      toast.error(message);
    }
  };
  return (
<body class="wp-singular page-template-default page page-id-19 wp-theme-papzi theme-papzi woocommerce-account woocommerce-page woocommerce-no-js my-account banners-effect-6 elementor-default elementor-kit-9482">
      <Header />

   	<div id="bwp-main" class="bwp-main">
					 <div 
            className="page-title bwp-title"  
            style={{
              backgroundImage: `url(${backgroundImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "300px",
              position: "relative",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center"
            }}
          >
            {/* Overlay */}
            <div style={{
              position: "absolute",
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.3)",
              zIndex: 1
            }} />
          
            <div className="container" style={{ position: "relative", zIndex: 2 }}>	
              <div className="content-title-heading">
                <h1 className="text-title-heading" style={{ color: "white", fontSize: "48px", fontWeight: "700", margin: "0 0 15px 0" }}>
                  MY Account
                </h1>
              </div>
              <div id="breadcrumb" className="breadcrumb">
                <div className="bwp-breadcrumb">
                  <Link to="/" style={{ color: "white" }}>Home</Link> 
                  <span style={{ color: "white", margin: "0 8px" }}>/</span> 
                  <span style={{ color: "white" }}>Wishlist</span>
                </div>
              </div>			
            </div>
          </div>
			<div class="container">
	<div class="row">
		<div class="col-lg-12 col-md-12">    
			<div id="main-content" class="main-content">
				<div id="primary" class="content-area">
					<div id="content" class="site-content" role="main">
						<article id="post-19" class="post-19 page type-page status-publish hentry">
		<div class="entry-content clearfix">
		<div class="woocommerce"><div class="woocommerce-notices-wrapper"></div><div class="col2-set row" id="customer_login">
	<div class="col-lg-6 col-md-6 col-sm-12">
		<div class="box-form-login">
			<h2>Login</h2>
			<div class="box-content">
				<div class="form-login">
					<form method="post" class="login">
												<div class="username">
							<label for="username">Username or email address <span class="required">*</span></label>
							<input type="text" class="input-text" name="username" id="username" />
						</div>
						<div class="password">
							<label for="password">Password <span class="required">*</span></label>
							<input class="input-text" type="password" name="password" id="password" />
						</div>
												<div class="rememberme-lost">
							<div class="rememberme">
								<input name="rememberme" type="checkbox" id="rememberme" value="forever" />
								<label for="rememberme" class="inline">Remember me</label>
							</div>
							<div class="lost_password">
								<a href="lost-password/index.html">Lost your password?</a>
							</div>
						</div>
						<div class="button-login">
							<input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="9576f6aae3" /><input type="hidden" name="_wp_http_referer" value="/my-account/" />							<input type="submit" class="button" name="login" value="Login" /> 
						</div>
											</form>
				</div>
			</div>
		</div>
	</div>
	<div class="col-lg-6 col-md-6 col-sm-12">
		<div class="box-form-login">
			<h2 class="register">Register</h2>
			<div class="box-content">
				<div class="form-register">
					<form method="post" class="register">
																		<div class="email">
							<label for="reg_email">Email address <span class="required">*</span></label>
							<input type="email" class="input-text" name="email" id="reg_email" value="" />
						</div>
													<div class="password">
								<label for="reg_password">Password <span class="required">*</span></label>
								<input type="password" class="input-text" name="password" id="reg_password" />
							</div>
												
						<div style={{left: "-999em", position: "absolute;"}}><label for="trap">Anti-spam</label><input type="text" name="email_2" id="trap" tabindex="-1" /></div>
						<wc-order-attribution-inputs></wc-order-attribution-inputs><div class="woocommerce-privacy-policy-text"></div>												<div class="button-register">
							<input type="hidden" id="woocommerce-register-nonce" name="woocommerce-register-nonce" value="30a81377c0" /><input type="hidden" name="_wp_http_referer" value="/my-account/" />							<input type="submit" class="button" name="register" value="Register" />
						</div>
											</form>
				</div>
			</div>
		</div>
	</div>
</div>
</div>
	</div>
</article>			</div>
				</div>
			</div>
		</div>   
    </div>
</div>
	</div>

      <Footer />
    </body>
  );
};

export default Login;
