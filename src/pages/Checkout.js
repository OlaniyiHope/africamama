import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header from "./Header";
import Footer from "./Footer";
// import "./style.css";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  // Form states
  const [showLogin, setShowLogin] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("bacs");

  // Billing details
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "NG",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
    email: ""
  });

  // Shipping details
  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "NG",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: ""
  });

  // Login details
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
    rememberMe: false
  });

  const [couponCode, setCouponCode] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [accountPassword, setAccountPassword] = useState("");

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal;

  // Redirect if cart is empty
  // useEffect(() => {
  //   if (cartItems.length === 0) {
  //     navigate("/cart");
  //   }
  // }, [cartItems, navigate]);

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order placement logic here
    console.log("Order placed:", {
      billingDetails,
      shippingDetails: shipToDifferentAddress ? shippingDetails : billingDetails,
      paymentMethod,
      orderNotes,
      cartItems,
      total
    });
    
    // Navigate to order confirmation or success page
    // clearCart();
    // navigate("/order-confirmation");
  };

  // if (cartItems.length === 0) {
  //   return null;
  // }

  return (
    <body className="wp-singular page-template-default page page-id-18 wp-theme-papzi theme-papzi woocommerce-checkout woocommerce-page woocommerce-no-js">
      <Header />
      
      <div id="bwp-main" className="bwp-main" style={{paddingTop: "200px"}}>
        <div 
          data-bg_default="https://papzi.wpbingosite.com/wp-content/uploads/2022/02/Image-9-1.jpg" 
          className="page-title bwp-title" 
          style={{backgroundImage: "url(https://papzi.wpbingosite.com/wp-content/uploads/2022/02/Image-9-1.jpg)"}}
        >
          <div className="container">
            <div className="content-title-heading">
              <span className="back-to-shop">Shop</span>
              <h1 className="text-title-heading">Checkout</h1>
            </div>
            <div id="breadcrumb" className="breadcrumb">
              <div className="bwp-breadcrumb">
                <Link to="/">Home</Link> 
                <span className="delimiter"></span> 
                <span className="current">Checkout</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div id="main-content" className="main-content">
                <div id="primary" className="content-area">
                  <div id="content" className="site-content" role="main">
                    <article id="post-18" className="post-18 page type-page status-publish hentry">
                      <div className="entry-content clearfix">
                        <div className="woocommerce">
                          <div className="woocommerce-notices-wrapper"></div>
                          
                          {/* Page Header */}
                          <div className="woocommerce-page-header">
                            <ul>
                              <li className="shopping-cart-link line-hover">
                                <Link to="/cart">
                                  Shopping Cart<span className="cart-count">({cartItems.length})</span>
                                </Link>
                              </li>
                              <li className="checkout-link line-hover active">
                                <Link to="/checkout">Checkout</Link>
                              </li>
                              <li className="order-tracking-link">
                                <Link to="/order-tracking">Order Tracking</Link>
                              </li>
                            </ul>
                          </div>

                          {/* Checkout Top Section */}
                          <div className="checkout-top">
                            {/* Login Section */}
                            <div className="content-left-checkout">
                              <div className="woocommerce-form-login-toggle">
                                <div className="woocommerce-info">
                                  Returning customer? 
                                  <a 
                                    href="#" 
                                    className="showlogin"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setShowLogin(!showLogin);
                                    }}
                                  >
                                    Click here to login
                                  </a>
                                </div>
                              </div>
                              
                              <form 
                                method="post" 
                                className="woocommerce-form woocommerce-form-login logins"
                                style={{display: showLogin ? 'block' : 'none'}}
                                onSubmit={(e) => e.preventDefault()}
                              >
                                <div className="description">
                                  <p>If you have shopped with us before, please enter your details below. If you are a new customer, please proceed to the Billing section.</p>
                                </div>
                                <div className="username">
                                  <input 
                                    type="text" 
                                    className="input-text" 
                                    placeholder="Username or email *" 
                                    name="username" 
                                    id="username"
                                    value={loginDetails.username}
                                    onChange={(e) => setLoginDetails({...loginDetails, username: e.target.value})}
                                  />
                                </div>
                                <div className="password">
                                  <input 
                                    className="input-text" 
                                    type="password" 
                                    placeholder="Password *" 
                                    name="password" 
                                    id="password"
                                    value={loginDetails.password}
                                    onChange={(e) => setLoginDetails({...loginDetails, password: e.target.value})}
                                  />
                                </div>
                                <div className="rememberme-lost">
                                  <div className="rememberme">
                                    <input 
                                      name="rememberme" 
                                      type="checkbox" 
                                      id="rememberme" 
                                      checked={loginDetails.rememberMe}
                                      onChange={(e) => setLoginDetails({...loginDetails, rememberMe: e.target.checked})}
                                    />
                                    <label htmlFor="rememberme" className="inline">Remember me</label>
                                  </div>
                                </div>
                                <div className="button-login">
                                  <input type="submit" className="button" name="login" value="Login" />
                                </div>
                              </form>
                            </div>

                            {/* Coupon Section */}
                            <div className="content-right-checkout">
                              <div className="woocommerce-form-coupon-toggle">
                                <div className="woocommerce-info">
                                  Have a coupon? 
                                  <a 
                                    href="#" 
                                    className="showcoupon"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setShowCoupon(!showCoupon);
                                    }}
                                  >
                                    Click here to enter your code
                                  </a>
                                </div>
                              </div>

                              <form 
                                className="checkout_coupon woocommerce-form-coupon" 
                                method="post" 
                                style={{display: showCoupon ? 'block' : 'none'}}
                                onSubmit={(e) => e.preventDefault()}
                              >
                                <div className="description">If you have a coupon code, please apply it below.</div>
                                <div className="input-button">
                                  <input 
                                    type="text" 
                                    name="coupon_code" 
                                    className="input-text" 
                                    placeholder="Coupon code" 
                                    id="coupon_code" 
                                    value={couponCode}
                                    onChange={(e) => setCouponCode(e.target.value)}
                                  />
                                  <button type="submit" className="button" name="apply_coupon">
                                    Apply coupon
                                  </button>
                                </div>
                                <div className="clear"></div>
                              </form>
                            </div>
                          </div>

                          {/* Main Checkout Form */}
                          <form 
                            name="checkout" 
                            method="post" 
                            className="checkout woocommerce-checkout" 
                            onSubmit={handleSubmit}
                          >
                            <div className="row">
                              {/* Left Column - Billing Details */}
                              <div className="col-xl-8 col-lg-7 col-md-12 col-12">
                                <div className="row" id="customer_details">
                                  <div className="col-12">
                                    <div className="woocommerce-billing-fields">
                                      <h3>Billing details</h3>

                                      <div className="woocommerce-billing-fields__field-wrapper">
                                        {/* First Name */}
                                        <p className="form-row form-row-first validate-required">
                                          <label htmlFor="billing_first_name" className="required_field">
                                            First name&nbsp;<span className="required">*</span>
                                          </label>
                                          <span className="woocommerce-input-wrapper">
                                            <input 
                                              type="text" 
                                              className="input-text" 
                                              name="firstName" 
                                              id="billing_first_name"
                                              value={billingDetails.firstName}
                                              onChange={handleBillingChange}
                                              required
                                            />
                                          </span>
                                        </p>

                                        {/* Last Name */}
                                        <p className="form-row form-row-last validate-required">
                                          <label htmlFor="billing_last_name" className="required_field">
                                            Last name&nbsp;<span className="required">*</span>
                                          </label>
                                          <span className="woocommerce-input-wrapper">
                                            <input 
                                              type="text" 
                                              className="input-text" 
                                              name="lastName" 
                                              id="billing_last_name"
                                              value={billingDetails.lastName}
                                              onChange={handleBillingChange}
                                              required
                                            />
                                          </span>
                                        </p>

                                        {/* Company Name */}
                                        <p className="form-row form-row-wide">
                                          <label htmlFor="billing_company">
                                            Company name&nbsp;<span className="optional">(optional)</span>
                                          </label>
                                          <span className="woocommerce-input-wrapper">
                                            <input 
                                              type="text" 
                                              className="input-text" 
                                              name="company" 
                                              id="billing_company"
                                              value={billingDetails.company}
                                              onChange={handleBillingChange}
                                            />
                                          </span>
                                        </p>

                                        {/* Country */}
                                        <p className="form-row form-row-wide address-field validate-required">
                                          <label htmlFor="billing_country" className="required_field">
                                            Country / Region&nbsp;<span className="required">*</span>
                                          </label>
                                          <span className="woocommerce-input-wrapper">
                                            <select 
                                              name="country" 
                                              id="billing_country" 
                                              className="country_to_state country_select"
                                              value={billingDetails.country}
                                              onChange={handleBillingChange}
                                              required
                                            >
                                              <option value="">Select a country / region…</option>
                                              <option value="NG">Nigeria</option>
                                              <option value="US">United States (US)</option>
                                              <option value="GB">United Kingdom (UK)</option>
                                              <option value="CA">Canada</option>
                                              {/* Add more countries as needed */}
                                            </select>
                                          </span>
                                        </p>

                                        {/* Street Address */}
                                        <p className="form-row address-field validate-required form-row-wide">
                                          <label htmlFor="billing_address_1" className="required_field">
                                            Street address&nbsp;<span className="required">*</span>
                                          </label>
                                          <span className="woocommerce-input-wrapper">
                                            <input 
                                              type="text" 
                                              className="input-text" 
                                              name="address1" 
                                              id="billing_address_1" 
                                              placeholder="House number and street name"
                                              value={billingDetails.address1}
                                              onChange={handleBillingChange}
                                              required
                                            />
                                          </span>
                                        </p>

                                        {/* Address Line 2 */}
                                        <p className="form-row address-field form-row-wide">
                                          <label htmlFor="billing_address_2" className="screen-reader-text">
                                            Apartment, suite, unit, etc.&nbsp;<span className="optional">(optional)</span>
                                          </label>
                                          <span className="woocommerce-input-wrapper">
                                            <input 
                                              type="text" 
                                              className="input-text" 
                                              name="address2" 
                                              id="billing_address_2" 
                                              placeholder="Apartment, suite, unit, etc. (optional)"
                                              value={billingDetails.address2}
                                              onChange={handleBillingChange}
                                            />
                                          </span>
                                        </p>

                                        {/* City */}
                                        <p className="form-row address-field validate-required form-row-wide">
                                          <label htmlFor="billing_city" className="required_field">
                                            Town / City&nbsp;<span className="required">*</span>
                                          </label>
                                          <span className="woocommerce-input-wrapper">
                                            <input 
                                              type="text" 
                                              className="input-text" 
                                              name="city" 
                                              id="billing_city"
                                              value={billingDetails.city}
                                              onChange={handleBillingChange}
                                              required
                                            />
                                          </span>
                                        </p>

                                        {/* State */}
                                        <p className="form-row address-field validate-required form-row-wide">
                                          <label htmlFor="billing_state" className="required_field">
                                            State&nbsp;<span className="required">*</span>
                                          </label>
                                          <span className="woocommerce-input-wrapper">
                                            <select 
                                              name="state" 
                                              id="billing_state" 
                                              className="state_select"
                                              value={billingDetails.state}
                                              onChange={handleBillingChange}
                                              required
                                            >
                                              <option value="">Select an option…</option>
                                              <option value="LA">Lagos</option>
                                              <option value="AB">Abia</option>
                                              <option value="FC">Abuja</option>
                                              <option value="AN">Anambra</option>
                                              {/* Add more states */}
                                            </select>
                                          </span>
                                        </p>

                                        {/* Phone */}
                                        <p className="form-row form-row-wide validate-required validate-phone">
                                          <label htmlFor="billing_phone" className="required_field">
                                            Phone&nbsp;<span className="required">*</span>
                                          </label>
                                          <span className="woocommerce-input-wrapper">
                                            <input 
                                              type="tel" 
                                              className="input-text" 
                                              name="phone" 
                                              id="billing_phone"
                                              value={billingDetails.phone}
                                              onChange={handleBillingChange}
                                              required
                                            />
                                          </span>
                                        </p>

                                        {/* Email */}
                                        <p className="form-row form-row-wide validate-required validate-email">
                                          <label htmlFor="billing_email" className="required_field">
                                            Email address&nbsp;<span className="required">*</span>
                                          </label>
                                          <span className="woocommerce-input-wrapper">
                                            <input 
                                              type="email" 
                                              className="input-text" 
                                              name="email" 
                                              id="billing_email"
                                              value={billingDetails.email}
                                              onChange={handleBillingChange}
                                              required
                                            />
                                          </span>
                                        </p>
                                      </div>
                                    </div>

                                    {/* Create Account */}
                                    <div className="woocommerce-account-fields">
                                      <p className="form-row form-row-wide create-account">
                                        <label className="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
                                          <input 
                                            className="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" 
                                            id="createaccount" 
                                            type="checkbox" 
                                            name="createaccount"
                                            checked={createAccount}
                                            onChange={(e) => setCreateAccount(e.target.checked)}
                                          />
                                          <span>Create an account?</span>
                                        </label>
                                      </p>

                                      <div className="create-account" style={{display: createAccount ? 'block' : 'none'}}>
                                        <p className="form-row validate-required">
                                          <label htmlFor="account_password" className="required_field">
                                            Create account password&nbsp;<span className="required">*</span>
                                          </label>
                                          <span className="woocommerce-input-wrapper password-input">
                                            <input 
                                              type="password" 
                                              className="input-text" 
                                              name="account_password" 
                                              id="account_password" 
                                              placeholder="Password"
                                              value={accountPassword}
                                              onChange={(e) => setAccountPassword(e.target.value)}
                                            />
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Shipping Address */}
                                  <div className="col-12">
                                    <div className="woocommerce-shipping-fields">
                                      <h3 id="ship-to-different-address">
                                        <label className="woocommerce-form__label woocommerce-form__label-for-checkbox checkbox">
                                          <input 
                                            id="ship-to-different-address-checkbox" 
                                            className="woocommerce-form__input woocommerce-form__input-checkbox input-checkbox" 
                                            type="checkbox" 
                                            name="ship_to_different_address"
                                            checked={shipToDifferentAddress}
                                            onChange={(e) => setShipToDifferentAddress(e.target.checked)}
                                          />
                                          <span>Ship to a different address?</span>
                                        </label>
                                      </h3>

                                      <div className="shipping_address" style={{display: shipToDifferentAddress ? 'block' : 'none'}}>
                                        <div className="woocommerce-shipping-fields__field-wrapper">
                                          {/* Similar fields as billing but for shipping */}
                                          <p className="form-row form-row-first validate-required">
                                            <label htmlFor="shipping_first_name" className="required_field">
                                              First name&nbsp;<span className="required">*</span>
                                            </label>
                                            <span className="woocommerce-input-wrapper">
                                              <input 
                                                type="text" 
                                                className="input-text" 
                                                name="firstName" 
                                                id="shipping_first_name"
                                                value={shippingDetails.firstName}
                                                onChange={handleShippingChange}
                                              />
                                            </span>
                                          </p>

                                          <p className="form-row form-row-last validate-required">
                                            <label htmlFor="shipping_last_name" className="required_field">
                                              Last name&nbsp;<span className="required">*</span>
                                            </label>
                                            <span className="woocommerce-input-wrapper">
                                              <input 
                                                type="text" 
                                                className="input-text" 
                                                name="lastName" 
                                                id="shipping_last_name"
                                                value={shippingDetails.lastName}
                                                onChange={handleShippingChange}
                                              />
                                            </span>
                                          </p>

                                          {/* Add other shipping fields similarly */}
                                        </div>
                                      </div>
                                    </div>

                                    {/* Order Notes */}
                                    <div className="woocommerce-additional-fields">
                                      <div className="woocommerce-additional-fields__field-wrapper">
                                        <p className="form-row notes">
                                          <label htmlFor="order_comments">
                                            Order notes&nbsp;<span className="optional">(optional)</span>
                                          </label>
                                          <span className="woocommerce-input-wrapper">
                                            <textarea 
                                              name="order_comments" 
                                              className="input-text" 
                                              id="order_comments" 
                                              placeholder="Notes about your order, e.g. special notes for delivery." 
                                              rows="2" 
                                              cols="5"
                                              value={orderNotes}
                                              onChange={(e) => setOrderNotes(e.target.value)}
                                            ></textarea>
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Right Column - Order Review */}
                              <div className="col-xl-4 col-lg-5 col-md-12 col-12">
                                <div id="order_review" className="woocommerce-checkout-review-order">
                                  <div className="checkout-review-order-table-wrapper">
                                    <div className="shop_table woocommerce-checkout-review-order-table">
                                      <div className="title-product-name">Product</div>

                                      {/* Cart Items */}
                                      {cartItems.map((item) => (
                                        <div key={item.id} className="cart_item">
                                          <div className="info-product">
                                            <div className="product-thumble">
                                              <img 
                                                width="600" 
                                                height="600" 
                                                src={item.image || "https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-22-600x600.jpg"} 
                                                className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" 
                                                alt={item.name}
                                              />
                                            </div>
                                            <div className="product-name">
                                              {item.name}&nbsp;
                                              <strong className="product-quantity">QTY : {item.quantity}</strong>
                                            </div>
                                          </div>
                                          <div className="product-total">
                                            <span className="woocommerce-Price-amount amount">
                                              <bdi>
                                                <span className="woocommerce-Price-currencySymbol">$</span>
                                                {(item.price * item.quantity).toFixed(2)}
                                              </bdi>
                                            </span>
                                          </div>
                                        </div>
                                      ))}

                                      {/* Subtotal */}
                                      <div className="cart-subtotal">
                                        <h2>Subtotal</h2>
                                        <div className="subtotal-price">
                                          <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                              <span className="woocommerce-Price-currencySymbol">$</span>
                                              {subtotal.toFixed(2)}
                                            </bdi>
                                          </span>
                                        </div>
                                      </div>

                                      {/* Shipping */}
                                      <div className="woocommerce-shipping-totals shipping">
                                        <h2>Shipping</h2>
                                        <div data-title="Shipping">
                                          <ul id="shipping_method" className="woocommerce-shipping-methods">
                                            <li>
                                              <input 
                                                type="hidden" 
                                                name="shipping_method[0]" 
                                                value="flat_rate:2" 
                                                className="shipping_method"
                                              />
                                              <label>Flat rate</label>
                                            </li>
                                          </ul>
                                        </div>
                                      </div>

                                      {/* Total */}
                                      <div className="order-total">
                                        <h2>Total</h2>
                                        <div className="total-price">
                                          <strong>
                                            <span className="woocommerce-Price-amount amount">
                                              <bdi>
                                                <span className="woocommerce-Price-currencySymbol">$</span>
                                                {total.toFixed(2)}
                                              </bdi>
                                            </span>
                                          </strong>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Payment Methods */}
                                    <div id="payment" className="woocommerce-checkout-payment">
                                      <ul className="wc_payment_methods payment_methods methods">
                                        <li className="wc_payment_method payment_method_bacs">
                                          <input 
                                            id="payment_method_bacs" 
                                            type="radio" 
                                            className="input-radio" 
                                            name="payment_method" 
                                            value="bacs"
                                            checked={paymentMethod === "bacs"}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                          />
                                          <label htmlFor="payment_method_bacs">Direct bank transfer</label>
                                          <div className="payment_box payment_method_bacs" style={{display: paymentMethod === "bacs" ? 'block' : 'none'}}>
                                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                                          </div>
                                        </li>

                                        <li className="wc_payment_method payment_method_cheque">
                                          <input 
                                            id="payment_method_cheque" 
                                            type="radio" 
                                            className="input-radio" 
                                            name="payment_method" 
                                            value="cheque"
                                            checked={paymentMethod === "cheque"}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                          />
                                          <label htmlFor="payment_method_cheque">Check payments</label>
                                          <div className="payment_box payment_method_cheque" style={{display: paymentMethod === "cheque" ? 'block' : 'none'}}>
                                            <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                          </div>
                                        </li>

                                        <li className="wc_payment_method payment_method_cod">
                                          <input 
                                            id="payment_method_cod" 
                                            type="radio" 
                                            className="input-radio" 
                                            name="payment_method" 
                                            value="cod"
                                            checked={paymentMethod === "cod"}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                          />
                                          <label htmlFor="payment_method_cod">Cash on delivery</label>
                                          <div className="payment_box payment_method_cod" style={{display: paymentMethod === "cod" ? 'block' : 'none'}}>
                                            <p>Pay with cash upon delivery.</p>
                                          </div>
                                        </li>

                                        <li className="wc_payment_method payment_method_paypal">
                                          <input 
                                            id="payment_method_paypal" 
                                            type="radio" 
                                            className="input-radio" 
                                            name="payment_method" 
                                            value="paypal"
                                            checked={paymentMethod === "paypal"}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                          />
                                          <label htmlFor="payment_method_paypal">
                                            PayPal 
                                            <img src="https://www.paypalobjects.com/webstatic/mktg/Logo/AM_mc_vs_ms_ae_UK.png" alt="PayPal acceptance mark" />
                                          </label>
                                          <div className="payment_box payment_method_paypal" style={{display: paymentMethod === "paypal" ? 'block' : 'none'}}>
                                            <p>Pay via PayPal; you can pay with your credit card if you don't have a PayPal account.</p>
                                          </div>
                                        </li>
                                      </ul>

                                      {/* Place Order Button */}
                                      <div className="form-row place-order">
                                        <div className="woocommerce-terms-and-conditions-wrapper">
                                          <div className="woocommerce-privacy-policy-text"></div>
                                        </div>
                                        
                                        <button 
                                          type="submit" 
                                          className="button alt" 
                                          name="woocommerce_checkout_place_order" 
                                          id="place_order"
                                        >
                                          Place order
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </article>
                  </div>
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

export default Checkout;