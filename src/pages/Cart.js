import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";


import { useNavigate } from "react-router-dom";

const CheckoutButton = ({ tokens }) => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const user = (() => {
    try { return JSON.parse(localStorage.getItem("user")); } catch { return null; }
  })();

  const handleClick = () => {
    if (user) {
      navigate("/checkout");
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="checkout-button button alt wc-forward eltdf-btn-outline"
        style={{
          color: tokens.btnOutlineText,
          borderColor: tokens.btnOutlineBorder,
          background: "transparent",
          display: "inline-block",
          textDecoration: "none",
          cursor: "pointer",
          padding: "12px 24px",
          fontSize: 13,
          letterSpacing: "0.1em",
          fontFamily: "inherit",
          border: `1px solid ${tokens.btnOutlineBorder}`,
        }}
      >
        Proceed to checkout
      </button>

      {/* Modal */}
      {showModal && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99999,
          background: "rgba(0,0,0,0.5)",
          display: "flex", alignItems: "center", justifyContent: "center",
          padding: 24,
        }}
          onClick={() => setShowModal(false)}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: tokens.pageBg,
              border: `1px solid ${tokens.border}`,
              maxWidth: 420, width: "100%",
              padding: "40px 32px",
              position: "relative",
            }}
          >
            {/* Close */}
            <button
              onClick={() => setShowModal(false)}
              style={{
                position: "absolute", top: 16, right: 16,
                background: "none", border: "none",
                cursor: "pointer", color: tokens.textMuted,
                fontSize: 20, lineHeight: 1,
              }}
            >
              ×
            </button>

            {/* Icon */}
            <div style={{ textAlign: "center", marginBottom: 20 }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                stroke={tokens.text} strokeWidth="1">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
            </div>

            <h3 style={{
              color: tokens.heading, textAlign: "center",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 22, margin: "0 0 8px", fontWeight: 400,
            }}>
              Sign in to continue
            </h3>
            <p style={{
              color: tokens.textMuted, textAlign: "center",
              fontSize: 13, lineHeight: 1.6, margin: "0 0 28px",
            }}>
              Sign in or create an account to place your order and track it easily. Or continue as a guest — your order will still be processed.
            </p>

            {/* Sign in button */}
            <button
              onClick={() => {
                setShowModal(false);
                navigate("/my-account", { state: { from: "/checkout" } });
              }}
              style={{
                width: "100%", padding: "13px",
                background: tokens.text, color: tokens.pageBg,
                border: "none", cursor: "pointer",
                fontSize: 12, letterSpacing: "0.12em",
                fontFamily: "Josefin Sans, sans-serif",
                marginBottom: 10,
              }}
            >
              SIGN IN / CREATE ACCOUNT
            </button>

            {/* Guest button */}
            <button
              onClick={() => {
                setShowModal(false);
                navigate("/checkout");
              }}
              style={{
                width: "100%", padding: "13px",
                background: "transparent",
                border: `1px solid ${tokens.border}`,
                color: tokens.text,
                cursor: "pointer",
                fontSize: 12, letterSpacing: "0.12em",
                fontFamily: "Josefin Sans, sans-serif",
              }}
            >
              CONTINUE AS GUEST
            </button>

            <p style={{
              color: tokens.textMuted, textAlign: "center",
              fontSize: 11, marginTop: 16, lineHeight: 1.5,
            }}>
              Guest orders won't appear in "My Orders" history
            </p>
          </div>
        </div>
      )}
    </>
  );
};
const Cart = () => {
  const { tokens } = useTheme();
  // const { cartItems, cartTotal, updateQuantity, removeFromCart } = useCart();
const { cartItems, updateQuantity, removeFromCart } = useCart();

const cartTotal = cartItems.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0);
  const [couponCode, setCouponCode] = useState("");

  return (
    <div style={{ background: tokens.pageBg, transition: "background 0.3s ease" }}>
      <Header />

      {/* Back to top */}
      <a id="eltdf-back-to-top" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="43.047px" height="43.031px"
          viewBox="0 0 43.047 43.031" xmlSpace="preserve">
          <circle fill="none" stroke={tokens.text} strokeMiterlimit="10" cx="21.523" cy="21.531" r="20.986" />
          <circle fill="none" stroke={tokens.text} className="eltdf-popout" strokeMiterlimit="10" cx="21.523" cy="21.531" r="16.049" />
          <polyline fill="none" stroke={tokens.text} strokeMiterlimit="10" points="15.205,23.875 21.523,18.573 27.842,23.875" />
        </svg>
      </a>

      <div className="eltdf-content">
        <div className="eltdf-content-inner">

          {/* ── Page Title / Breadcrumb ── */}
          <div
            className="eltdf-title-holder eltdf-standard-with-breadcrumbs-type eltdf-title-va-header-bottom"
            style={{ height: "189px", backgroundColor: tokens.pageBg, transition: "background 0.3s ease" }}
            data-height="189"
          >
            <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
              {[1,2,3,4,5].map(n => (
                <div key={n} className={`eltdf-grid-line eltdf-grid-column-${n}`}
                  style={{ borderColor: tokens.borderFaint }} />
              ))}
            </div>
            <div className="eltdf-title-wrapper" style={{ height: "79px", paddingTop: "110px" }}>
              <div className="eltdf-title-inner">
                <div className="eltdf-grid">
                  <div className="eltdf-title-info">
                    <h5 className="eltdf-page-title entry-title" style={{ color: tokens.heading }}>
                      Cart {cartItems.length > 0 && (
                        <span style={{ fontSize: 14, color: tokens.textMuted, fontWeight: 400 }}>
                          ({cartItems.reduce((s, i) => s + i.quantity, 0)} items)
                        </span>
                      )}
                    </h5>
                  </div>
                  <div className="eltdf-breadcrumbs-info">
                    <div itemProp="breadcrumb" className="eltdf-breadcrumbs">
                      <Link to="/" style={{ color: tokens.text }}>Home</Link>
                      <span className="eltdf-delimiter">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5"
                          className="eltdf-breadcrumb-arrow" style={{ stroke: tokens.text }}>
                          <polyline points="0.4 0.4 3.6 4.2 0.4 8.1" />
                          <polyline points="4.5 0.4 7.7 4.2 4.5 8.1" />
                        </svg>
                      </span>
                      <span className="eltdf-current" style={{ color: tokens.textMuted }}>Cart</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Main Container ── */}
          <div className="eltdf-container eltdf-default-page-template"
            style={{ background: tokens.pageBg }}>
            <div className="eltdf-container-inner clearfix">

              <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
                {[1,2,3,4,5].map(n => (
                  <div key={n} className={`eltdf-grid-line eltdf-grid-column-${n}`}
                    style={{ borderColor: tokens.borderFaint }} />
                ))}
              </div>

              <div className="eltdf-grid-row">
                <div className="eltdf-page-content-holder eltdf-grid-col-12">
                  <div className="woocommerce">
                    <div className="woocommerce-notices-wrapper" />

                    {cartItems.length === 0 ? (

                      /* ── Empty cart ── */
                      <>
                        <div className="wc-empty-cart-message">
                          <div className="cart-empty woocommerce-info"
                            style={{
                              color: tokens.textMuted,
                              borderColor: tokens.border,
                              background: tokens.cardBg,
                              padding: "20px 24px",
                            }}>
                            Your cart is currently empty.
                          </div>
                        </div>
                        <p className="return-to-shop" style={{ marginTop: 20 }}>
                          <Link
                            to="/shop"
                            className="button wc-backward"
                            style={{
                              color: tokens.btnOutlineText,
                              borderColor: tokens.btnOutlineBorder,
                              background: "transparent",
                            }}
                          >
                            Return to shop
                          </Link>
                        </p>
                      </>

                    ) : (

                      /* ── Cart with products ── */
                      <>
                        <table
                          className="shop_table shop_table_responsive cart woocommerce-cart-form__contents"
                          cellSpacing="0"
                          style={{
                            borderColor: tokens.border,
                            background: tokens.pageBg,
                            transition: "all 0.3s ease",
                            width: "100%",
                          }}
                        >
                          <thead>
                            <tr style={{ borderBottom: `1px solid ${tokens.border}` }}>
                              {["Remove", "Image", "Product", "Price", "Quantity", "Subtotal"].map((h, i) => (
                                <th key={i}
                                  className={["product-remove","product-thumbnail","product-name","product-price","product-quantity","product-subtotal"][i]}
                                  style={{ color: tokens.heading, borderColor: tokens.border, padding: "12px 8px" }}>
                                  {i <= 1 ? <span className="screen-reader-text">{h}</span> : h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {cartItems.map((item) => (
                              <tr
                                key={item._id}
                                className="woocommerce-cart-form__cart-item cart_item"
                                style={{ borderBottom: `1px solid ${tokens.border}` }}
                              >
                                {/* Remove */}
                                <td className="product-remove" style={{ textAlign: "center" }}>
                                  <button
                                    aria-label={`Remove ${item.name}`}
                                    onClick={() => removeFromCart(item._id)}
                                    style={{
                                      color: tokens.text,
                                      background: "transparent",
                                      border: "none",
                                      fontSize: 20,
                                      cursor: "pointer",
                                      lineHeight: 1,
                                    }}
                                  >
                                    &times;
                                  </button>
                                </td>

                                {/* Thumbnail */}
                                <td className="product-thumbnail">
                                  <Link to={`/single/${item._id}`}>
                                    {item.image ? (
                                      <img
                                        src={item.image}
                                        alt={item.name}
                                        style={{
                                          width: 80, height: 80,
                                          objectFit: "cover",
                                          border: `1px solid ${tokens.border}`,
                                          display: "block",
                                        }}
                                      />
                                    ) : (
                                      <div style={{
                                        width: 80, height: 80,
                                        background: tokens.cardBg,
                                        border: `1px solid ${tokens.border}`,
                                        display: "flex", alignItems: "center", justifyContent: "center",
                                        fontSize: 10, color: tokens.textMuted,
                                      }}>
                                        NO IMG
                                      </div>
                                    )}
                                  </Link>
                                </td>

                                {/* Name */}
                                <td className="product-name" data-title="Product">
                                  <Link
                                    to={`/single/${item._id}`}
                                    style={{ color: tokens.heading, background: "transparent", textDecoration: "none" }}
                                  >
                                    {item.name}
                                  </Link>
                                    {item.litres && (
    <div style={{ fontSize: 12, color: tokens.textMuted, marginTop: 4 }}>
      Volume: <span style={{ color: tokens.body }}>{item.litres}L</span>
    </div>
  )}
  {/* Protein */}
  {item.protein && (
    <div style={{ fontSize: 12, color: tokens.textMuted, marginTop: 2 }}>
      Protein: <span style={{ color: tokens.body }}>{item.protein}</span>
    </div>
  )}
                                </td>

                                {/* Price */}
                                <td className="product-price" data-title="Price">
                                  <span className="woocommerce-Price-amount amount" style={{ color: tokens.text }}>
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">£</span>
                                      {Number(item.price).toLocaleString()}
                                    </bdi>
                                  </span>
                                </td>
{/* Quantity */}
{/* Quantity */}
<td className="product-quantity" data-title="Quantity">
  <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
    <button
      type="button"
      onClick={() => updateQuantity(item._id, Number(item.quantity) - 1)}
      style={{
        width: 28, height: 28,
        background: "transparent",
        border: `1px solid ${tokens.border}`,
        color: tokens.text,
        cursor: "pointer",
        fontSize: 16,
        display: "flex", alignItems: "center", justifyContent: "center",
        lineHeight: 1,
      }}
    >
      −
    </button>
    <input
      type="number"
      value={Number.isFinite(item.quantity) ? item.quantity : 1}
      min="1"
      aria-label="Qty"
      style={{
        background: tokens.inputBg,
        color: tokens.inputText,
        border: `1px solid ${tokens.inputBorder}`,
        textAlign: "center",
        width: 48,
        padding: "4px",
        fontSize: 14,
        transition: "background 0.3s ease",
      }}
      onChange={(e) => {
        const val = parseInt(e.target.value);
        if (!isNaN(val) && val >= 1) updateQuantity(item._id, val);
      }}
    />
    <button
      type="button"
      onClick={() => updateQuantity(item._id, Number(item.quantity) + 1)}
      style={{
        width: 28, height: 28,
        background: "transparent",
        border: `1px solid ${tokens.border}`,
        color: tokens.text,
        cursor: "pointer",
        fontSize: 16,
        display: "flex", alignItems: "center", justifyContent: "center",
        lineHeight: 1,
      }}
    >
      +
    </button>
  </div>
</td>

                                {/* Subtotal */}
                                <td className="product-subtotal" data-title="Subtotal">
                                  <span className="woocommerce-Price-amount amount" style={{ color: tokens.text }}>
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">£</span>
                                      {Number(item.price * item.quantity).toLocaleString()}
                                    </bdi>
                                  </span>
                                </td>
                              </tr>
                            ))}

                            {/* ── Coupon row ── */}
                            <tr style={{ borderTop: `1px solid ${tokens.border}` }}>
                              <td colSpan="6" className="actions" style={{ padding: "16px 8px" }}>
                                <div className="coupon" style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
                                  <input
                                    type="text"
                                    name="coupon_code"
                                    value={couponCode}
                                    placeholder="Coupon code"
                                    onChange={(e) => setCouponCode(e.target.value)}
                                    style={{
                                      background: tokens.inputBg,
                                      color: tokens.inputText,
                                      border: `1px solid ${tokens.inputBorder}`,
                                      padding: "10px 14px",
                                      fontSize: 13,
                                      outline: "none",
                                      transition: "background 0.3s ease",
                                    }}
                                  />
                                  <button
                                    type="button"
                                    className="button eltdf-btn-outline"
                                    style={{
                                      color: tokens.btnOutlineText,
                                      borderColor: tokens.btnOutlineBorder,
                                      background: "transparent",
                                      cursor: "pointer",
                                    }}
                                    onClick={() => alert("Coupon feature coming soon!")}
                                  >
                                    Apply coupon
                                  </button>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>

                        {/* ── Cart Totals ── */}
                        <div className="cart-collaterals" style={{ marginTop: 40 }}>
                          <div className="cart_totals">
                            <h2 style={{ color: tokens.heading }}>Cart totals</h2>
                            <table
                              cellSpacing="0"
                              className="shop_table shop_table_responsive"
                              style={{
                                borderColor: tokens.border,
                                background: tokens.cardBg,
                                transition: "all 0.3s ease",
                                width: "100%",
                                maxWidth: 480,
                              }}
                            >
                              <tbody>
                                <tr style={{ borderBottom: `1px solid ${tokens.border}` }}>
                                  <th style={{ color: tokens.textMuted, padding: "14px 16px", textAlign: "left" }}>
                                    Subtotal
                                  </th>
                                  <td style={{ padding: "14px 16px" }}>
                                    <span className="woocommerce-Price-amount amount" style={{ color: tokens.text }}>
                                      <bdi>
                                        <span className="woocommerce-Price-currencySymbol">£</span>
                                        {Number(cartTotal).toLocaleString()}
                                      </bdi>
                                    </span>
                                  </td>
                                </tr>
                                <tr>
                                  <th style={{ color: tokens.heading, padding: "14px 16px", textAlign: "left" }}>
                                    Total
                                  </th>
                                  <td style={{ padding: "14px 16px" }}>
                                    <strong>
                                      <span className="woocommerce-Price-amount amount" style={{ color: tokens.text }}>
                                        <bdi>
                                          <span className="woocommerce-Price-currencySymbol">£</span>
                                          {Number(cartTotal).toLocaleString()}
                                        </bdi>
                                      </span>
                                    </strong>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
{/* 
                            <div className="wc-proceed-to-checkout" style={{ marginTop: 24 }}>
                              <Link
                                to="/checkout"
                                className="checkout-button button alt wc-forward eltdf-btn-outline"
                                style={{
                                  color: tokens.btnOutlineText,
                                  borderColor: tokens.btnOutlineBorder,
                                  background: "transparent",
                                  display: "inline-block",
                                  textDecoration: "none",
                                }}
                              >
                                Proceed to checkout
                              </Link>
                            </div> */}
                              <div className="wc-proceed-to-checkout" style={{ marginTop: 24 }}>
      <CheckoutButton tokens={tokens} />
    </div>
                          </div>
                        </div>

                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
