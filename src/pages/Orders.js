import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

const MyOrders = () => {
  const { tokens } = useTheme();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  const user = (() => {
    try { return JSON.parse(localStorage.getItem("user")); } catch { return null; }
  })();

  useEffect(() => {
    if (!user?.email) { setLoading(false); return; }
    fetch(`${process.env.REACT_APP_API_URL}/api/payment/orders/user/${encodeURIComponent(user.email)}`)
      .then(res => res.json())
      .then(data => { setOrders(Array.isArray(data) ? data : []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  return (
    <>
      <Header />

      <a id="eltdf-back-to-top" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="43.047px" height="43.031px"
          viewBox="0 0 43.047 43.031" xmlSpace="preserve">
          <circle fill="none" stroke={tokens.text} strokeMiterlimit="10" cx="21.523" cy="21.531" r="20.986" />
          <circle fill="none" stroke={tokens.text} className="eltdf-popout" strokeMiterlimit="10" cx="21.523" cy="21.531" r="16.049" />
          <polyline fill="none" stroke={tokens.text} strokeMiterlimit="10" points="15.205,23.875 21.523,18.573 27.842,23.875" />
        </svg>
      </a>

      <div className="eltdf-content" style={{ background: tokens.pageBg, transition: "background 0.3s ease" }}>
        <div className="eltdf-content-inner">

          {/* Page Title */}
          <div
            className="eltdf-title-holder eltdf-standard-with-breadcrumbs-type eltdf-title-va-header-bottom"
            style={{ height: "189px", backgroundColor: tokens.cardBgAlt || tokens.cardBg, transition: "background 0.3s ease" }}
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
                      My Orders
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
                      <span className="eltdf-current" style={{ color: tokens.textMuted }}>My Orders</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="eltdf-container eltdf-default-page-template" style={{ background: tokens.pageBg }}>
            <div className="eltdf-container-inner clearfix">
              <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
                {[1,2,3,4,5].map(n => (
                  <div key={n} className={`eltdf-grid-line eltdf-grid-column-${n}`}
                    style={{ borderColor: tokens.borderFaint }} />
                ))}
              </div>

              <div style={{ padding: "52px 0 80px", maxWidth: 860, margin: "0 auto" }}>

                {/* Not logged in */}
                {!user && (
                  <div style={{ textAlign: "center", padding: "60px 24px" }}>
                    <p style={{ color: tokens.textMuted, marginBottom: 20, fontSize: 15 }}>
                      Please sign in to view your orders.
                    </p>
                    <Link to="/my-account" style={{
                      padding: "12px 32px",
                      background: tokens.text, color: tokens.pageBg,
                      textDecoration: "none", fontSize: 12,
                      letterSpacing: "0.1em", fontFamily: "Josefin Sans, sans-serif",
                    }}>
                      SIGN IN
                    </Link>
                  </div>
                )}

                {/* Loading */}
                {user && loading && (
                  <p style={{ color: tokens.textMuted, textAlign: "center", padding: "60px 0", letterSpacing: "0.15em" }}>
                    LOADING YOUR ORDERS...
                  </p>
                )}

                {/* No orders */}
                {user && !loading && orders.length === 0 && (
                  <div style={{ textAlign: "center", padding: "60px 24px" }}>
                    <p style={{ color: tokens.textMuted, marginBottom: 20, fontSize: 15 }}>
                      You haven't placed any orders yet.
                    </p>
                    <Link to="/shop" style={{
                      padding: "12px 32px",
                      background: tokens.text, color: tokens.pageBg,
                      textDecoration: "none", fontSize: 12,
                      letterSpacing: "0.1em", fontFamily: "Josefin Sans, sans-serif",
                    }}>
                      START ORDERING
                    </Link>
                  </div>
                )}

                {/* Orders list */}
                {user && !loading && orders.length > 0 && (
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>

                    {/* Summary header */}
                    <p style={{ color: tokens.textMuted, fontSize: 13, marginBottom: 8 }}>
                      {orders.length} order{orders.length !== 1 ? "s" : ""} found for <strong style={{ color: tokens.text }}>{user.email}</strong>
                    </p>

                    {orders.map(order => (
                      <div key={order._id} style={{
                        border: `1px solid ${tokens.border}`,
                        background: tokens.cardBg,
                        transition: "background 0.3s ease",
                      }}>

                        {/* Order header row */}
                        <div style={{
                          display: "flex", alignItems: "center", justifyContent: "space-between",
                          flexWrap: "wrap", gap: 12,
                          padding: "16px 24px",
                          borderBottom: expandedId === order._id ? `1px solid ${tokens.border}` : "none",
                        }}>
                          <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
                            <div>
                              <div style={{ fontSize: 10, letterSpacing: "0.1em", color: tokens.textMuted, textTransform: "uppercase", marginBottom: 3 }}>Order</div>
                              <div style={{ fontSize: 13, color: tokens.heading, fontFamily: "monospace" }}>
                                #{order._id.slice(-8).toUpperCase()}
                              </div>
                            </div>
                            <div>
                              <div style={{ fontSize: 10, letterSpacing: "0.1em", color: tokens.textMuted, textTransform: "uppercase", marginBottom: 3 }}>Date</div>
                              <div style={{ fontSize: 13, color: tokens.text }}>
                                {new Date(order.createdAt).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                              </div>
                            </div>
                            <div>
                              <div style={{ fontSize: 10, letterSpacing: "0.1em", color: tokens.textMuted, textTransform: "uppercase", marginBottom: 3 }}>Total</div>
                              <div style={{ fontSize: 13, color: tokens.text, fontWeight: 600 }}>
                                £{Number(order.total).toLocaleString()}
                              </div>
                            </div>
                            <div>
                              <div style={{ fontSize: 10, letterSpacing: "0.1em", color: tokens.textMuted, textTransform: "uppercase", marginBottom: 3 }}>Payment</div>
                              <span style={{
                                fontSize: 11, padding: "3px 10px",
                                borderRadius: 20,
                                background: order.paymentStatus === "paid" ? "rgba(76,175,80,0.1)" : "rgba(255,152,0,0.1)",
                                color: order.paymentStatus === "paid" ? "#4caf50" : "#ff9800",
                                border: `1px solid ${order.paymentStatus === "paid" ? "#4caf50" : "#ff9800"}`,
                              }}>
                                {order.paymentStatus}
                              </span>
                            </div>
                            <div>
                              <div style={{ fontSize: 10, letterSpacing: "0.1em", color: tokens.textMuted, textTransform: "uppercase", marginBottom: 3 }}>Status</div>
                              <span style={{
                                fontSize: 11, padding: "3px 10px",
                                borderRadius: 20,
                                background: order.status === "processing" ? "rgba(33,150,243,0.1)" :
                                            order.status === "delivered" ? "rgba(76,175,80,0.1)" :
                                            order.status === "cancelled" ? "rgba(244,67,54,0.1)" : "rgba(158,158,158,0.1)",
                                color: order.status === "processing" ? "#2196f3" :
                                       order.status === "delivered" ? "#4caf50" :
                                       order.status === "cancelled" ? "#f44336" : "#9e9e9e",
                                border: `1px solid currentColor`,
                              }}>
                                {order.status}
                              </span>
                            </div>
                          </div>

                          {/* Toggle details */}
                          <button
                            onClick={() => setExpandedId(expandedId === order._id ? null : order._id)}
                            style={{
                              background: "transparent",
                              border: `1px solid ${tokens.border}`,
                              color: tokens.text, cursor: "pointer",
                              padding: "7px 16px", fontSize: 11,
                              letterSpacing: "0.08em",
                              fontFamily: "Josefin Sans, sans-serif",
                              transition: "all 0.2s",
                            }}
                          >
                            {expandedId === order._id ? "HIDE DETAILS" : "VIEW DETAILS"}
                          </button>
                        </div>

                        {/* Expanded order details */}
                        {expandedId === order._id && (
                          <div style={{ padding: "20px 24px" }}>

                            {/* Items */}
                            <div style={{ marginBottom: 20 }}>
                              <div style={{ fontSize: 11, letterSpacing: "0.1em", color: tokens.textMuted, textTransform: "uppercase", marginBottom: 12 }}>
                                Items Ordered
                              </div>
                              {order.items?.map((item, i) => (
                                <div key={i} style={{
                                  display: "flex", alignItems: "center", gap: 14,
                                  padding: "12px 0",
                                  borderBottom: i < order.items.length - 1 ? `1px solid ${tokens.borderFaint || tokens.border}` : "none",
                                }}>
                                  {item.image && (
                                    <img src={item.image} alt={item.name} style={{
                                      width: 56, height: 56, objectFit: "cover",
                                      border: `1px solid ${tokens.border}`, flexShrink: 0,
                                    }} />
                                  )}
                                  <div style={{ flex: 1 }}>
                                    <div style={{ color: tokens.heading, fontSize: 14 }}>{item.name}</div>
                                    <div style={{ color: tokens.textMuted, fontSize: 12, marginTop: 2 }}>
                                      Qty: {item.quantity}
                                      {item.litres && <span> · {item.litres}L</span>}
                                      {item.protein && <span> · {item.protein}</span>}
                                    </div>
                                  </div>
                                  <div style={{ color: tokens.text, fontSize: 13, fontWeight: 600 }}>
                                    £{Number(item.price * item.quantity).toLocaleString()}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Delivery address */}
                            {order.billingAddress && (
                              <div style={{
                                padding: "14px 18px",
                                background: tokens.pageBg,
                                border: `1px solid ${tokens.border}`,
                              }}>
                                <div style={{ fontSize: 11, letterSpacing: "0.1em", color: tokens.textMuted, textTransform: "uppercase", marginBottom: 8 }}>
                                  Delivery Address
                                </div>
                                <div style={{ color: tokens.text, fontSize: 13, lineHeight: 1.8 }}>
                                  {order.billingAddress.firstName} {order.billingAddress.lastName}<br />
                                  {order.billingAddress.address1}{order.billingAddress.address2 ? `, ${order.billingAddress.address2}` : ""}<br />
                                  {order.billingAddress.city}, {order.billingAddress.state}
                                  {order.billingAddress.postcode ? ` ${order.billingAddress.postcode}` : ""}
                                </div>
                              </div>
                            )}

                            {/* Order total */}
                            <div style={{
                              display: "flex", justifyContent: "flex-end",
                              paddingTop: 16, marginTop: 16,
                              borderTop: `1px solid ${tokens.border}`,
                            }}>
                              <div style={{ textAlign: "right" }}>
                                <div style={{ color: tokens.textMuted, fontSize: 12 }}>Order Total</div>
                                <div style={{ color: tokens.heading, fontSize: 20, fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 600 }}>
                                  £{Number(order.total).toLocaleString()}
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default MyOrders;