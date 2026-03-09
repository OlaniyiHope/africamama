// Success.jsx - Replace your entire Success.jsx with this file
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header from "./Header";
import Footer from "./Footer";

const Success = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useCart();
  const [visible, setVisible] = useState(false);
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    // Clear the cart on successful payment
    if (clearCart) clearCart();
    const t1 = setTimeout(() => setVisible(true), 100);
    const t2 = setTimeout(() => setParticlesReady(true), 300);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 2}s`,
    duration: `${2 + Math.random() * 2}s`,
    size: `${6 + Math.random() * 10}px`,
    color: ["#c8a97e", "#8b5e3c", "#2d6a4f", "#e9c46a", "#f4a261"][Math.floor(Math.random() * 5)],
  }));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

        .success-page {
          min-height: 100vh;
          background: #faf7f2;
          font-family: 'Jost', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .success-bg-pattern {
          position: fixed;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 20%, rgba(200,169,126,0.08) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(45,106,79,0.06) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        .success-particle {
          position: fixed;
          top: -20px;
          border-radius: 50%;
          animation: fall linear infinite;
          opacity: 0;
          z-index: 1;
          pointer-events: none;
        }

        @keyframes fall {
          0%   { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }

        .success-container {
          position: relative;
          z-index: 2;
          max-width: 680px;
          margin: 0 auto;
          padding: 80px 24px 120px;
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }

        .success-container.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .success-checkmark-wrap {
          width: 96px;
          height: 96px;
          margin: 0 auto 36px;
          position: relative;
        }

        .success-checkmark-circle {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          border: 2px solid #c8a97e;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: pulse-ring 2s ease infinite;
        }

        @keyframes pulse-ring {
          0%, 100% { box-shadow: 0 0 0 0 rgba(200,169,126,0.3); }
          50%       { box-shadow: 0 0 0 14px rgba(200,169,126,0); }
        }

        .success-checkmark-circle svg {
          width: 42px;
          height: 42px;
          stroke: #c8a97e;
          stroke-width: 2.5;
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: draw-check 1s ease 0.4s forwards;
          fill: none;
        }

        @keyframes draw-check {
          to { stroke-dashoffset: 0; }
        }

        .success-tagline {
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #c8a97e;
          margin-bottom: 16px;
        }

        .success-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(36px, 6vw, 56px);
          font-weight: 300;
          color: #1a1a1a;
          line-height: 1.15;
          margin-bottom: 20px;
          letter-spacing: -0.5px;
        }

        .success-title em {
          font-style: italic;
          color: #8b5e3c;
        }

        .success-divider {
          width: 60px;
          height: 1px;
          background: #c8a97e;
          margin: 24px auto;
        }

        .success-text {
          font-family: 'Jost', sans-serif;
          font-size: 15px;
          font-weight: 300;
          color: #666;
          line-height: 1.8;
          max-width: 440px;
          margin: 0 auto 48px;
        }

        .success-card {
          background: #fff;
          border: 1px solid rgba(200,169,126,0.25);
          border-radius: 4px;
          padding: 32px 40px;
          margin: 0 auto 48px;
          max-width: 480px;
          text-align: left;
          box-shadow: 0 4px 32px rgba(0,0,0,0.04);
        }

        .success-card-row {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 0;
          border-bottom: 1px solid #f0ebe3;
          font-size: 14px;
          color: #555;
          font-weight: 300;
        }

        .success-card-row:last-child { border-bottom: none; }

        .success-card-icon {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: #faf7f2;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 15px;
        }

        .success-card-label {
          font-weight: 500;
          color: #1a1a1a;
          font-size: 13px;
        }

        .success-btns {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .success-btn-primary {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: #1a1a1a;
          color: #fff;
          border: none;
          padding: 16px 36px;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
          text-decoration: none;
          display: inline-block;
        }

        .success-btn-primary:hover {
          background: #8b5e3c;
          transform: translateY(-2px);
          color: #fff;
        }

        .success-btn-outline {
          font-family: 'Jost', sans-serif;
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 2px;
          text-transform: uppercase;
          background: transparent;
          color: #1a1a1a;
          border: 1px solid #c8a97e;
          padding: 16px 36px;
          cursor: pointer;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
        }

        .success-btn-outline:hover {
          background: #c8a97e;
          color: #fff;
          transform: translateY(-2px);
        }

        .success-footnote {
          margin-top: 56px;
          font-size: 12px;
          color: #aaa;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .success-emoji-row {
          font-size: 28px;
          margin-bottom: 24px;
          letter-spacing: 6px;
          animation: bounce-in 0.6s ease 0.8s both;
        }

        @keyframes bounce-in {
          0%   { opacity: 0; transform: scale(0.5); }
          70%  { transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <Header />

      <div className="success-page">
        <div className="success-bg-pattern" />

        {/* Confetti particles */}
        {particlesReady && particles.map(p => (
          <div key={p.id} className="success-particle" style={{
            left: p.left,
            width: p.size,
            height: p.size,
            background: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }} />
        ))}

        <div className={`success-container ${visible ? "visible" : ""}`}>
          {/* Animated checkmark */}
          <div className="success-checkmark-wrap">
            <div className="success-checkmark-circle">
              <svg viewBox="0 0 52 52">
                <polyline points="14,27 22,35 38,17" />
              </svg>
            </div>
          </div>

          <div className="success-emoji-row">🎉</div>

          <p className="success-tagline">Order Confirmed</p>

          <h1 className="success-title">
            Payment <em>Successful!</em>
          </h1>

          <div className="success-divider" />

          <p className="success-text">
            Your order has been placed successfully. We're preparing your African feast with love.
            You'll receive a confirmation email shortly.
          </p>

          {/* Info card */}
          <div className="success-card">
            <div className="success-card-row">
              <div className="success-card-icon">📧</div>
              <div>
                <div className="success-card-label">Confirmation Email</div>
                <div>Check your inbox — a receipt is on its way</div>
              </div>
            </div>
            <div className="success-card-row">
              <div className="success-card-icon">🍲</div>
              <div>
                <div className="success-card-label">Your Order</div>
                <div>Our kitchen is getting it ready for you</div>
              </div>
            </div>
            <div className="success-card-row">
              <div className="success-card-icon">📞</div>
              <div>
                <div className="success-card-label">Need Help?</div>
                <div>Contact us at hello@africamamaput.co.uk</div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="success-btns">
            <button className="success-btn-primary" onClick={() => navigate("/")}>
              Back to Home
            </button>
            <button className="success-btn-outline" onClick={() => navigate("/shop")}>
              Continue Shopping
            </button>
          </div>

          <p className="success-footnote">
            Thank you for choosing Africa Mama Put · Chester, UK 🇬🇧
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Success;