import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useTheme } from "../context/ThemeContext";
import Header from "./Header";
import Footer from "./Footer";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

// ─── Replace with your real Stripe publishable key ───────────────────────────
const stripePromise = loadStripe("pk_test_REPLACE_WITH_YOUR_STRIPE_PUBLISHABLE_KEY");

// ─── Nigerian states ──────────────────────────────────────────────────────────
const NG_STATES = [
  "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa","Benue","Borno",
  "Cross River","Delta","Ebonyi","Edo","Ekiti","Enugu","FCT","Gombe","Imo",
  "Jigawa","Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara","Lagos","Nasarawa",
  "Niger","Ogun","Ondo","Osun","Oyo","Plateau","Rivers","Sokoto","Taraba",
  "Yobe","Zamfara",
];

// ─── Inner form that uses Stripe hooks ───────────────────────────────────────
const CheckoutForm = ({ tokens, cartItems, subtotal, total }) => {
  const stripe = useStripe();
  const elements = useElements();
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const [step, setStep] = useState(1); // 1 = details, 2 = payment
  const [processing, setProcessing] = useState(false);
  const [cardError, setCardError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [stripeReady, setStripeReady] = useState({
    number: false,
    expiry: false,
    cvc: false,
  });

  const [billing, setBilling] = useState({
    firstName: "", lastName: "", company: "",
    address1: "", address2: "", city: "",
    state: "", postcode: "", phone: "", email: "",
  });
  const [shipDifferent, setShipDifferent] = useState(false);
  const [shipping, setShipping] = useState({
    firstName: "", lastName: "", company: "",
    address1: "", address2: "", city: "",
    state: "", postcode: "",
  });
  const [orderNotes, setOrderNotes] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [showCoupon, setShowCoupon] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  const handleBilling = (e) => setBilling(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleShipping = (e) => setShipping(p => ({ ...p, [e.target.name]: e.target.value }));

  // Stripe element appearance
  const stripeAppearance = {
    style: {
      base: {
        color: tokens.text,
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: "15px",
        fontWeight: "400",
        "::placeholder": { color: tokens.textMuted },
        iconColor: tokens.textMuted,
      },
      invalid: { color: "#e53935" },
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;
    if (!agreeTerms) { setCardError("Please agree to the terms and conditions."); return; }

    setProcessing(true);
    setCardError("");

    try {
      // In production: call your backend to create a PaymentIntent and get clientSecret
      // const res = await fetch("/api/create-payment-intent", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ amount: Math.round(total * 100), currency: "ngn" }),
      // });
      // const { clientSecret } = await res.json();
      //
      // const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      //   payment_method: {
      //     card: elements.getElement(CardNumberElement),
      //     billing_details: {
      //       name: `${billing.firstName} ${billing.lastName}`,
      //       email: billing.email,
      //       phone: billing.phone,
      //       address: {
      //         line1: billing.address1,
      //         city: billing.city,
      //         state: billing.state,
      //         country: "NG",
      //       },
      //     },
      //   },
      // });
      //
      // if (error) { setCardError(error.message); setProcessing(false); return; }
      // if (paymentIntent.status === "succeeded") { clearCart(); setOrderPlaced(true); }

      // ── Demo: simulate success after 2s ──
      await new Promise(r => setTimeout(r, 2000));
      clearCart();
      setOrderPlaced(true);
    } catch (err) {
      setCardError("Payment failed. Please try again.");
    }
    setProcessing(false);
  };

  // ── Order Success Screen ──────────────────────────────────────────────────
  if (orderPlaced) {
    return (
      <div style={{
        minHeight: "60vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: 24, padding: "60px 24px",
      }}>
        <div style={{
          width: 80, height: 80, borderRadius: "50%",
          background: "linear-gradient(135deg, #2e7d32, #66bb6a)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 38, boxShadow: "0 8px 32px rgba(46,125,50,0.3)",
        }}>✓</div>
        <h2 style={{ color: tokens.heading, fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 32, margin: 0 }}>
          Order Placed!
        </h2>
        <p style={{ color: tokens.textMuted, textAlign: "center", maxWidth: 400, lineHeight: 1.6 }}>
          Thank you, {billing.firstName || "valued customer"}. Your order has been received and is being processed.
          A confirmation will be sent to {billing.email || "your email"}.
        </p>
        <Link to="/shop" style={{
          marginTop: 8, padding: "14px 36px",
          background: tokens.btnOutlineBorder,
          color: tokens.pageBg,
          textDecoration: "none",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 15, letterSpacing: "0.08em",
          transition: "opacity 0.2s",
        }}>
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 420px",
        gap: 40,
        alignItems: "start",
      }}
        className="checkout-grid"
      >
        {/* ── LEFT COLUMN ── */}
        <div>
          {/* Step tabs */}
          <div style={{ display: "flex", gap: 0, marginBottom: 36, borderBottom: `1px solid ${tokens.border}` }}>
            {[
              { n: 1, label: "Billing & Shipping" },
              { n: 2, label: "Payment" },
            ].map(({ n, label }) => (
              <button
                key={n}
                type="button"
                onClick={() => n < step || step === 1 ? setStep(n) : null}
                style={{
                  background: "transparent",
                  border: "none",
                  borderBottom: step === n ? `2px solid ${tokens.text}` : "2px solid transparent",
                  color: step === n ? tokens.heading : tokens.textMuted,
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: 15,
                  letterSpacing: "0.06em",
                  padding: "12px 24px",
                  cursor: "pointer",
                  marginBottom: -1,
                  transition: "all 0.2s",
                }}
              >
                <span style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 22, height: 22, borderRadius: "50%",
                  background: step >= n ? tokens.text : "transparent",
                  border: `1px solid ${step >= n ? tokens.text : tokens.border}`,
                  color: step >= n ? tokens.pageBg : tokens.textMuted,
                  fontSize: 11, fontWeight: 700, marginRight: 10,
                  transition: "all 0.2s",
                }}>
                  {step > n ? "✓" : n}
                </span>
                {label}
              </button>
            ))}
          </div>

          {/* ── STEP 1: Billing Details ── */}
          {step === 1 && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              {/* Coupon toggle */}
              <div style={{
                padding: "14px 18px", marginBottom: 28,
                background: tokens.cardBg,
                border: `1px solid ${tokens.border}`,
                borderLeft: `3px solid ${tokens.text}`,
                fontSize: 13, color: tokens.textMuted,
              }}>
                Have a coupon?{" "}
                <button type="button" onClick={() => setShowCoupon(p => !p)}
                  style={{ background: "none", border: "none", color: tokens.text, cursor: "pointer", textDecoration: "underline", fontSize: 13 }}>
                  Click here to enter your code
                </button>
                {showCoupon && (
                  <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
                    <input
                      type="text" value={couponCode}
                      onChange={e => setCouponCode(e.target.value)}
                      placeholder="Coupon code"
                      style={inputStyle(tokens)}
                    />
                    <button type="button"
                      onClick={() => alert("Coupon feature coming soon!")}
                      style={outlineBtnStyle(tokens)}>
                      Apply
                    </button>
                  </div>
                )}
              </div>

              <SectionTitle tokens={tokens}>Billing Details</SectionTitle>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
                <Field label="First name *" required>
                  <input name="firstName" value={billing.firstName} onChange={handleBilling}
                    required style={inputStyle(tokens)} />
                </Field>
                <Field label="Last name *" required>
                  <input name="lastName" value={billing.lastName} onChange={handleBilling}
                    required style={inputStyle(tokens)} />
                </Field>
              </div>

              <Field label="Company name (optional)">
                <input name="company" value={billing.company} onChange={handleBilling} style={inputStyle(tokens)} />
              </Field>

              <Field label="Street address *" required>
                <input name="address1" value={billing.address1} onChange={handleBilling}
                  placeholder="House number and street name" required style={inputStyle(tokens)} />
                <input name="address2" value={billing.address2} onChange={handleBilling}
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  style={{ ...inputStyle(tokens), marginTop: 8 }} />
              </Field>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
                <Field label="Town / City *" required>
                  <input name="city" value={billing.city} onChange={handleBilling}
                    required style={inputStyle(tokens)} />
                </Field>
                <Field label="State *" required>
                  <select name="state" value={billing.state} onChange={handleBilling}
                    required style={inputStyle(tokens)}>
                    <option value="">Select a state…</option>
                    {NG_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
                <Field label="Phone *" required>
                  <input name="phone" value={billing.phone} onChange={handleBilling}
                    type="tel" required style={inputStyle(tokens)} />
                </Field>
                <Field label="Postcode (optional)">
                  <input name="postcode" value={billing.postcode} onChange={handleBilling} style={inputStyle(tokens)} />
                </Field>
              </div>

              <Field label="Email address *" required>
                <input name="email" value={billing.email} onChange={handleBilling}
                  type="email" required style={inputStyle(tokens)} />
              </Field>

              {/* Ship to different address */}
              <div style={{ marginTop: 32, marginBottom: 8 }}>
                <label style={{
                  display: "flex", alignItems: "center", gap: 10,
                  cursor: "pointer", color: tokens.heading,
                  fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 16,
                }}>
                  <input type="checkbox" checked={shipDifferent}
                    onChange={e => setShipDifferent(e.target.checked)}
                    style={{ width: 16, height: 16, cursor: "pointer", accentColor: tokens.text }} />
                  Ship to a different address?
                </label>
              </div>

              {shipDifferent && (
                <div style={{ padding: "20px 0 8px", animation: "fadeIn 0.3s ease" }}>
                  <SectionTitle tokens={tokens}>Shipping Details</SectionTitle>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
                    <Field label="First name *"><input name="firstName" value={shipping.firstName} onChange={handleShipping} required style={inputStyle(tokens)} /></Field>
                    <Field label="Last name *"><input name="lastName" value={shipping.lastName} onChange={handleShipping} required style={inputStyle(tokens)} /></Field>
                  </div>
                  <Field label="Company (optional)"><input name="company" value={shipping.company} onChange={handleShipping} style={inputStyle(tokens)} /></Field>
                  <Field label="Street address *">
                    <input name="address1" value={shipping.address1} onChange={handleShipping} placeholder="House number and street name" required style={inputStyle(tokens)} />
                    <input name="address2" value={shipping.address2} onChange={handleShipping} placeholder="Apt, suite, etc. (optional)" style={{ ...inputStyle(tokens), marginTop: 8 }} />
                  </Field>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
                    <Field label="Town / City *"><input name="city" value={shipping.city} onChange={handleShipping} required style={inputStyle(tokens)} /></Field>
                    <Field label="State *">
                      <select name="state" value={shipping.state} onChange={handleShipping} required style={inputStyle(tokens)}>
                        <option value="">Select a state…</option>
                        {NG_STATES.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </Field>
                  </div>
                </div>
              )}

              {/* Order notes */}
              <Field label="Order notes (optional)" style={{ marginTop: 12 }}>
                <textarea name="orderNotes" value={orderNotes}
                  onChange={e => setOrderNotes(e.target.value)}
                  placeholder="Notes about your order, e.g. special notes for delivery."
                  rows={4}
                  style={{ ...inputStyle(tokens), resize: "vertical", minHeight: 90 }} />
              </Field>

              <button
                type="button"
                onClick={() => {
                  if (!billing.firstName || !billing.lastName || !billing.address1 ||
                    !billing.city || !billing.state || !billing.phone || !billing.email) {
                    alert("Please fill in all required billing fields.");
                    return;
                  }
                  setStep(2);
                }}
                style={{
                  ...solidBtnStyle(tokens),
                  marginTop: 12,
                  width: "100%",
                }}
              >
                Continue to Payment →
              </button>
            </div>
          )}

          {/* ── STEP 2: Payment ── */}
          {step === 2 && (
            <div style={{ animation: "fadeIn 0.3s ease" }}>
              <SectionTitle tokens={tokens}>Payment Details</SectionTitle>

              {/* Stripe badge */}
              <div style={{
                display: "flex", alignItems: "center", gap: 10, marginBottom: 28,
                padding: "12px 16px",
                background: tokens.cardBg,
                border: `1px solid ${tokens.border}`,
                borderRadius: 4,
              }}>
                <svg width="42" height="18" viewBox="0 0 42 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 11.5C5 10.12 5.9 9.3 7.14 9.3C8 9.3 8.7 9.72 9.1 10.42L10.7 9.5C10.08 8.38 8.78 7.6 7.14 7.6C4.8 7.6 3 9.28 3 11.5C3 13.72 4.8 15.4 7.14 15.4C8.78 15.4 10.08 14.62 10.7 13.5L9.1 12.58C8.7 13.28 8 13.7 7.14 13.7C5.9 13.7 5 12.88 5 11.5Z" fill="#6772E5"/>
                  <path d="M16.5 7.6C15.34 7.6 14.36 8.1 13.7 8.96V7.8H11.8V15.2H13.7V11.1C13.7 9.9 14.48 9.2 15.52 9.2C16.56 9.2 17.2 9.88 17.2 11.1V15.2H19.1V10.7C19.1 8.9 18.02 7.6 16.5 7.6Z" fill="#6772E5"/>
                  <path d="M23.5 7.6C21.12 7.6 19.5 9.3 19.5 11.5C19.5 13.7 21.12 15.4 23.5 15.4C25.88 15.4 27.5 13.7 27.5 11.5C27.5 9.3 25.88 7.6 23.5 7.6ZM23.5 13.7C22.26 13.7 21.4 12.76 21.4 11.5C21.4 10.24 22.26 9.3 23.5 9.3C24.74 9.3 25.6 10.24 25.6 11.5C25.6 12.76 24.74 13.7 23.5 13.7Z" fill="#6772E5"/>
                  <path d="M32 7.6C29.62 7.6 28 9.3 28 11.5C28 13.7 29.62 15.4 32 15.4C33.38 15.4 34.52 14.82 35.2 13.86L33.64 12.94C33.28 13.42 32.7 13.7 32 13.7C30.88 13.7 30.06 12.96 29.94 11.9H35.6C35.64 11.62 35.66 11.36 35.66 11.08C35.66 9.18 34.24 7.6 32 7.6ZM29.96 10.6C30.12 9.6 30.9 9 32 9C33.04 9 33.76 9.56 33.88 10.6H29.96Z" fill="#6772E5"/>
                </svg>
                <span style={{ color: tokens.textMuted, fontSize: 12 }}>
                  Secured by Stripe · SSL encrypted
                </span>
                <div style={{ marginLeft: "auto", display: "flex", gap: 6 }}>
                  {["VISA", "MC", "AMEX"].map(brand => (
                    <span key={brand} style={{
                      fontSize: 9, fontWeight: 700,
                      padding: "3px 6px",
                      border: `1px solid ${tokens.border}`,
                      borderRadius: 3,
                      color: tokens.textMuted,
                      letterSpacing: "0.05em",
                    }}>{brand}</span>
                  ))}
                </div>
              </div>

              {/* Card Number */}
              <Field label="Card Number">
                <div style={stripeFieldWrapper(tokens, stripeReady.number)}>
                  <CardNumberElement
                    options={stripeAppearance}
                    onChange={e => setStripeReady(p => ({ ...p, number: e.complete }))}
                  />
                </div>
              </Field>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 20px" }}>
                <Field label="Expiry Date">
                  <div style={stripeFieldWrapper(tokens, stripeReady.expiry)}>
                    <CardExpiryElement
                      options={stripeAppearance}
                      onChange={e => setStripeReady(p => ({ ...p, expiry: e.complete }))}
                    />
                  </div>
                </Field>
                <Field label="CVC">
                  <div style={stripeFieldWrapper(tokens, stripeReady.cvc)}>
                    <CardCvcElement
                      options={stripeAppearance}
                      onChange={e => setStripeReady(p => ({ ...p, cvc: e.complete }))}
                    />
                  </div>
                </Field>
              </div>

              {/* Terms */}
              <label style={{
                display: "flex", alignItems: "flex-start", gap: 10, marginTop: 20,
                cursor: "pointer", color: tokens.textMuted, fontSize: 13, lineHeight: 1.5,
              }}>
                <input type="checkbox" checked={agreeTerms}
                  onChange={e => setAgreeTerms(e.target.checked)}
                  style={{ marginTop: 2, accentColor: tokens.text }} />
                I have read and agree to the website terms and conditions and privacy policy.
              </label>

              {cardError && (
                <div style={{
                  marginTop: 14, padding: "12px 16px",
                  background: "rgba(229,57,53,0.08)",
                  border: "1px solid rgba(229,57,53,0.3)",
                  color: "#e53935", fontSize: 13, borderRadius: 2,
                }}>
                  {cardError}
                </div>
              )}

              <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
                <button type="button" onClick={() => setStep(1)}
                  style={{ ...outlineBtnStyle(tokens), flex: "0 0 auto" }}>
                  ← Back
                </button>
                <button
                  type="submit"
                  disabled={processing || !stripe}
                  style={{
                    ...solidBtnStyle(tokens),
                    flex: 1,
                    opacity: processing ? 0.7 : 1,
                    cursor: processing ? "not-allowed" : "pointer",
                  }}
                >
                  {processing ? (
                    <span style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                      <span style={{
                        width: 16, height: 16, borderRadius: "50%",
                        border: `2px solid ${tokens.pageBg}`,
                        borderTopColor: "transparent",
                        display: "inline-block",
                        animation: "spin 0.8s linear infinite",
                      }} />
                      Processing…
                    </span>
                  ) : `Place Order — ₦${Number(total).toLocaleString()}`}
                </button>
              </div>

              <p style={{ color: tokens.textMuted, fontSize: 11, textAlign: "center", marginTop: 14, lineHeight: 1.5 }}>
                Your personal data will be used to process your order and support your experience throughout this website.
              </p>
            </div>
          )}
        </div>

        {/* ── RIGHT COLUMN: Order Summary ── */}
        <aside style={{
          position: "sticky", top: 100,
          background: tokens.cardBg,
          border: `1px solid ${tokens.border}`,
          transition: "background 0.3s ease",
        }}>
          <div style={{
            padding: "20px 24px 16px",
            borderBottom: `1px solid ${tokens.border}`,
          }}>
            <h3 style={{
              color: tokens.heading, margin: 0,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 20, letterSpacing: "0.05em",
            }}>
              Your Order
            </h3>
          </div>

          {/* Header row */}
          <div style={{
            display: "flex", justifyContent: "space-between",
            padding: "12px 24px",
            borderBottom: `1px solid ${tokens.border}`,
          }}>
            <span style={{ color: tokens.textMuted, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>Product</span>
            <span style={{ color: tokens.textMuted, fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase" }}>Subtotal</span>
          </div>

          {/* Items */}
          <div style={{ maxHeight: 320, overflowY: "auto" }}>
            {cartItems.map((item) => (
              <div key={item._id} style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "12px 24px",
                borderBottom: `1px solid ${tokens.borderFaint || tokens.border}`,
                gap: 12,
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0 }}>
                  {item.image && (
                    <img src={item.image} alt={item.name} style={{
                      width: 48, height: 48, objectFit: "cover",
                      border: `1px solid ${tokens.border}`,
                      flexShrink: 0,
                    }} />
                  )}
                  <div style={{ minWidth: 0 }}>
                    <div style={{
                      color: tokens.text, fontSize: 13,
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
                    }}>
                      {item.name}
                    </div>
                    <div style={{ color: tokens.textMuted, fontSize: 11 }}>
                      × {item.quantity}
                    </div>
                  </div>
                </div>
                <div style={{ color: tokens.text, fontSize: 13, whiteSpace: "nowrap", flexShrink: 0 }}>
                  ₦{Number(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          {/* Totals */}
          <div style={{ padding: "16px 24px 0" }}>
            <div style={{
              display: "flex", justifyContent: "space-between",
              padding: "12px 0",
              borderBottom: `1px solid ${tokens.border}`,
            }}>
              <span style={{ color: tokens.textMuted, fontSize: 13 }}>Subtotal</span>
              <span style={{ color: tokens.text, fontSize: 13 }}>₦{Number(subtotal).toLocaleString()}</span>
            </div>
            <div style={{
              display: "flex", justifyContent: "space-between",
              padding: "14px 0",
            }}>
              <span style={{
                color: tokens.heading, fontSize: 15,
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                letterSpacing: "0.04em",
              }}>Total</span>
              <span style={{
                color: tokens.heading, fontSize: 18, fontWeight: 600,
                fontFamily: "'Cormorant Garamond', Georgia, serif",
              }}>
                ₦{Number(total).toLocaleString()}
              </span>
            </div>
          </div>

          {/* Security note */}
          <div style={{
            padding: "14px 24px",
            borderTop: `1px solid ${tokens.border}`,
            display: "flex", alignItems: "center", gap: 8,
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={tokens.textMuted} strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
            </svg>
            <span style={{ color: tokens.textMuted, fontSize: 11, letterSpacing: "0.04em" }}>
              Secure SSL encrypted checkout
            </span>
          </div>
        </aside>
      </div>

      {/* Responsive styles */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (max-width: 900px) {
          .checkout-grid { grid-template-columns: 1fr !important; }
        }
        input:focus, select:focus, textarea:focus { outline: none; }
      `}</style>
    </form>
  );
};

// ── Helper components & style fns ─────────────────────────────────────────────
const SectionTitle = ({ tokens, children }) => (
  <h3 style={{
    color: tokens.heading,
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: 20, fontWeight: 500,
    letterSpacing: "0.06em",
    margin: "0 0 20px",
    paddingBottom: 10,
    borderBottom: `1px solid ${tokens.border}`,
  }}>
    {children}
  </h3>
);

const Field = ({ label, children, required, style }) => (
  <div style={{ marginBottom: 16, ...style }}>
    {label && (
      <label style={{
        display: "block", fontSize: 11,
        letterSpacing: "0.1em", textTransform: "uppercase",
        color: "inherit", marginBottom: 6, opacity: 0.7,
      }}>
        {label}
      </label>
    )}
    {children}
  </div>
);

const inputStyle = (tokens) => ({
  width: "100%",
  padding: "11px 14px",
  background: tokens.inputBg || tokens.pageBg,
  color: tokens.inputText || tokens.text,
  border: `1px solid ${tokens.inputBorder || tokens.border}`,
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: 15,
  transition: "border-color 0.2s, background 0.3s",
  boxSizing: "border-box",
  appearance: "none",
  borderRadius: 0,
});

const stripeFieldWrapper = (tokens, complete) => ({
  padding: "11px 14px",
  background: tokens.inputBg || tokens.pageBg,
  border: `1px solid ${complete ? tokens.text : (tokens.inputBorder || tokens.border)}`,
  transition: "border-color 0.2s",
});

const outlineBtnStyle = (tokens) => ({
  padding: "12px 24px",
  background: "transparent",
  color: tokens.btnOutlineText || tokens.text,
  border: `1px solid ${tokens.btnOutlineBorder || tokens.border}`,
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: 13, letterSpacing: "0.1em",
  cursor: "pointer",
  transition: "all 0.2s",
});

const solidBtnStyle = (tokens) => ({
  padding: "14px 28px",
  background: tokens.text,
  color: tokens.pageBg,
  border: "none",
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontSize: 14, letterSpacing: "0.12em",
  cursor: "pointer",
  transition: "opacity 0.2s",
});

// ── Main Checkout Component ───────────────────────────────────────────────────
const Checkout = () => {
  const { tokens } = useTheme();
  const { cartItems } = useCart();

  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * Number(item.quantity), 0
  );
  const total = subtotal;

  return (
    <div style={{ background: tokens.pageBg, transition: "background 0.3s ease", minHeight: "100vh" }}>
      <Header />

      {/* Page title */}
      <div
        style={{
          height: 189,
          backgroundColor: tokens.cardBgAlt || tokens.cardBg,
          position: "relative",
          display: "flex", alignItems: "flex-end",
          transition: "background 0.3s ease",
        }}
      >
        <div style={{ padding: "0 40px 24px", width: "100%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h5 style={{
              color: tokens.heading,
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 28, fontWeight: 400, letterSpacing: "0.08em",
              margin: "0 0 8px",
            }}>
              Checkout
            </h5>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: tokens.textMuted }}>
              <Link to="/" style={{ color: tokens.text, textDecoration: "none" }}>Home</Link>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" style={{ width: 8, stroke: tokens.textMuted, fill: "none" }}>
                <polyline points="0.4 0.4 3.6 4.2 0.4 8.1" />
                <polyline points="4.5 0.4 7.7 4.2 4.5 8.1" />
              </svg>
              <Link to="/cart" style={{ color: tokens.text, textDecoration: "none" }}>Cart</Link>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" style={{ width: 8, stroke: tokens.textMuted, fill: "none" }}>
                <polyline points="0.4 0.4 3.6 4.2 0.4 8.1" />
                <polyline points="4.5 0.4 7.7 4.2 4.5 8.1" />
              </svg>
              <span style={{ color: tokens.textMuted }}>Checkout</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "52px 40px 80px",
      }}>
        {cartItems.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 0" }}>
            <p style={{ color: tokens.textMuted, marginBottom: 20 }}>Your cart is empty.</p>
            <Link to="/shop" style={{
              ...outlineBtnStyle(tokens),
              textDecoration: "none", display: "inline-block",
            }}>
              Return to Shop
            </Link>
          </div>
        ) : (
          <Elements stripe={stripePromise}>
            <CheckoutForm
              tokens={tokens}
              cartItems={cartItems}
              subtotal={subtotal}
              total={total}
            />
          </Elements>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Checkout;
