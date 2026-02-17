import { useState, useEffect, useRef } from "react";

// ─── YOUR LOCAL IMAGES ────────────────────────────────────────────────────────
import friedImg from "./media/fried.png";
import saladImg from "../pages/media/fried.png";
// import comboImg from "./media/combo.png";
// ─────────────────────────────────────────────────────────────────────────────

const slides = [
  {
    id: 1,
    bg: "#e8360c",
    badge: { label: "Only", price: "$12.9", color: "#00a950" },
    tagText: "New",
    headlineInline: "CHICKEN",
    headline2: "ORDER ONLINE",
    sub: "Buy any 2 large pizzas and get a 1.5L Pepsi Free",
    foodImg: friedImg,
    foodAlt: "Fried Chicken & Fries",
  },
  {
    id: 2,
    bg: "#e8360c",
    badge: { label: "Offer", price: "$14.9", color: "#f1252b" },
    tagText: "New",
    headlineInline: "PIZZA",
    headline2: "ITALIANO POCA",
    sub: "Buy any 2 large pizzas and get a 1.5L Pepsi Free",
    foodImg: saladImg,
    foodAlt: "Salad Bowl",
  },
  {
    id: 3,
    bg: "#e8360c",
    badge: { label: "Offer", price: "$14.9", color: "#ffb219" },
    tagText: "New",
    headlineInline: "FASTFOOD",
    headline2: "COMBO DEAL",
    sub: "Buy any 2 pizzas and get a 1.5L Pepsi",
    foodImg: friedImg,
    foodAlt: "Combo Meal",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [animOut, setAnimOut] = useState(false);
  const timerRef = useRef(null);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go((current + 1) % slides.length), 6000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [current]);

  function go(idx) {
    if (idx === current) return;
    setAnimOut(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimOut(false);
    }, 350);
    clearInterval(timerRef.current);
  }

  const s = slides[current];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;800;900&display=swap');

        .ppz *, .ppz *::before, .ppz *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* ════════ BANNER SHELL ════════ */
        .ppz {
          position: relative;
          width: 100%;
          height: 560px;
          background: var(--bg, #e8360c);
          overflow: hidden;
          font-family: 'Nunito', sans-serif;
          transition: background 0.5s ease;
        }

        /* ════════ INNER CONTAINER — limits content width like original ════════ */
        /* The WordPress original has a max-width container so text doesn't stretch full page */
        .ppz__inner {
          max-width: 1200px;
          margin: 0 auto;
          height: 100%;
          position: relative;
        }

        /* ════════ SLIDE GRID ════════ */
        .ppz__slide {
          position: absolute;
          inset: 0;
          display: grid;
          grid-template-columns: 44% 56%;
          align-items: center;
          opacity: 1;
          transform: translateX(0);
          transition: opacity 0.35s ease, transform 0.35s ease;
          /* Padding left matches original ~230px indent from left edge */
          padding: 0 0 0 80px;
        }
        .ppz__slide--out {
          opacity: 0;
          transform: translateX(-40px);
        }

        /* ════════ LEFT TEXT ════════ */
        .ppz__text {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding-right: 20px;
        }

        /* Row 1 — [parallelogram NEW] [CHICKEN] inline */
        .ppz__row1 {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: nowrap;
        }

        /* Parallelogram yellow tag — skewX exactly like original */
        .ppz__tag {
          display: inline-block;
          background: #ffb219;
          transform: skewX(-13deg);
          padding: 8px 24px;
          border-radius: 2px;
          flex-shrink: 0;
        }
        .ppz__tag span {
          display: inline-block;
          transform: skewX(13deg);
          font-size: 17px;
          font-weight: 900;
          color: #1a1a1a;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* Headline word on same line as tag */
        .ppz__h-inline {
          font-size: clamp(38px, 4.8vw, 68px);
          font-weight: 900;
          color: #fff;
          line-height: 1;
          letter-spacing: -1px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* Full second headline line */
        .ppz__h2 {
          font-size: clamp(38px, 4.8vw, 68px);
          font-weight: 900;
          color: #fff;
          line-height: 1;
          letter-spacing: -1px;
          text-transform: uppercase;
          margin-top: -6px;
        }

        .ppz__sub {
          font-size: clamp(13px, 1.2vw, 16px);
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.6;
          max-width: 380px;
        }

        .ppz__btn {
          display: inline-block;
          width: fit-content;
          padding: 13px 44px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.85);
          border-radius: 30px;
          color: #fff;
          font-family: 'Nunito', sans-serif;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          cursor: pointer;
          transition: background 0.22s, color 0.22s, transform 0.18s;
        }
        .ppz__btn:hover {
          background: #fff;
          color: var(--bg, #e8360c);
          transform: scale(1.04);
        }

        /* ════════ RIGHT: FOOD IMAGE ════════ */
        .ppz__food-col {
          position: relative;
          height: 100%;
          /* image is fully visible — no overflow clipping */
          overflow: visible;
        }

        /* 
          Image fills column height and is vertically centered.
          We use object-fit: contain so it NEVER gets cut.
          The image sits slightly above center to match original (bleeds upward).
        */
        .ppz__food-img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -52%);   /* shift slightly up */
          height: 105%;                        /* a hair taller than banner for the bleed-top look */
          width: auto;
          max-width: 100%;
          object-fit: contain;
          filter: drop-shadow(-16px 16px 32px rgba(0, 0, 0, 0.25));
          animation: foodFloat 4s ease-in-out infinite;
        }

        @keyframes foodFloat {
          0%, 100% { transform: translate(-50%, -52%); }
          50%       { transform: translate(-50%, -56%); }
        }

        /* Price badge — top right of image column, like original */
        .ppz__price {
          position: absolute;
          top: 48px;
          right: 48px;
          width: 88px;
          height: 88px;
          border-radius: 50%;
          background: var(--badge-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.22);
          z-index: 6;
          animation: badgePop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .ppz__price-label { font-size: 10px; font-weight: 700; letter-spacing: 1px; opacity: 0.9; }
        .ppz__price-amt   { font-size: 20px; font-weight: 900; line-height: 1.15; }

        @keyframes badgePop {
          from { opacity: 0; transform: rotate(-120deg) scale(0.3); }
          to   { opacity: 1; transform: rotate(0deg) scale(1); }
        }

        /* ════════ PREV / NEXT — WHITE PILL SHAPE (matches original exactly) ════════ */
        .ppz__nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          /* WHITE background with rounded right/left edges — pill tab shape */
          background: #ffffff;
          border: none;
          color: #333;
          font-family: 'Nunito', sans-serif;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 3px;
          text-transform: uppercase;
          /* vertical text */
          writing-mode: vertical-rl;
          padding: 20px 10px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s, box-shadow 0.2s;
          box-shadow: 2px 0 12px rgba(0,0,0,0.12);
        }
        .ppz__nav:hover {
          background: #f5f5f5;
          box-shadow: 2px 0 16px rgba(0,0,0,0.2);
        }

        /* PREV — left side, text reads bottom-to-top */
        .ppz__nav--prev {
          left: 0;
          border-radius: 0 20px 20px 0;   /* curved on the right side only */
          text-orientation: mixed;
          /* rotate so PREV reads upward on left edge */
          transform: translateY(-50%) rotate(180deg);
        }

        /* NEXT — right side, text reads top-to-bottom */
        .ppz__nav--next {
          right: 0;
          border-radius: 20px 0 0 20px;  /* curved on the left side only */
        }

        /* ════════ DOT NAV ════════ */
        .ppz__dots {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 9px;
          z-index: 20;
        }
        .ppz__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.40);
          cursor: pointer;
          padding: 0;
          transition: background 0.25s, transform 0.25s;
        }
        .ppz__dot--active {
          background: #fff;
          transform: scale(1.45);
        }

        /* ════════ RESPONSIVE ════════ */
        @media (max-width: 768px) {
          .ppz { height: auto; min-height: 500px; }
          .ppz__slide {
            grid-template-columns: 1fr;
            padding: 40px 20px 70px;
            gap: 20px;
          }
          .ppz__food-col { height: 280px; }
          .ppz__food-img {
            height: 100%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          @keyframes foodFloat {
            0%, 100% { transform: translate(-50%, -50%); }
            50%       { transform: translate(-50%, -55%); }
          }
          .ppz__price { top: 10px; right: 10px; width: 70px; height: 70px; }
          .ppz__price-amt { font-size: 16px; }
          .ppz__h-inline, .ppz__h2 { font-size: clamp(30px, 8vw, 48px); }
        }
      `}</style>

      <div
        className="ppz"
        style={{ "--bg": s.bg, "--badge-color": s.badge.color }}
      >
        {/* ── SLIDE (uses ppz__inner for max-width centering) ── */}
        <div className={`ppz__slide${animOut ? " ppz__slide--out" : ""}`}>

          {/* LEFT TEXT */}
          <div className="ppz__text">
            <div className="ppz__row1">
              <div className="ppz__tag"><span>{s.tagText}</span></div>
              <span className="ppz__h-inline">{s.headlineInline}</span>
            </div>

            <div className="ppz__h2">{s.headline2}</div>
            <p className="ppz__sub">{s.sub}</p>
            <button className="ppz__btn">Order Now</button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="ppz__food-col">
            <div className="ppz__price" key={`badge-${current}`}>
              <span className="ppz__price-label">{s.badge.label}</span>
              <span className="ppz__price-amt">{s.badge.price}</span>
            </div>

            <img
              className="ppz__food-img"
              src={s.foodImg}
              alt={s.foodAlt}
            />
          </div>
        </div>

        {/* ── WHITE CURVED PREV/NEXT ── */}
        <button
          className="ppz__nav ppz__nav--prev"
          onClick={() => go((current - 1 + slides.length) % slides.length)}
        >PREV</button>
        <button
          className="ppz__nav ppz__nav--next"
          onClick={() => go((current + 1) % slides.length)}
        >NEXT</button>

        {/* ── DOTS ── */}
        <div className="ppz__dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`ppz__dot${i === current ? " ppz__dot--active" : ""}`}
              onClick={() => go(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
