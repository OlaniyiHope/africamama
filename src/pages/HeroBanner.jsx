import { useState, useEffect, useRef } from "react";

// ─── YOUR LOCAL IMAGES ────────────────────────────────────────────────────────
import friedImg  from "./media/fried.png";          // /src/media/fried.png
import saladImg  from "../pages/media/fried.png";   // /src/pages/media/salad.png
// Add more imports here as needed:
// import comboImg  from "./media/combo.png";
// ─────────────────────────────────────────────────────────────────────────────

const slides = [
  {
    id: 1,
    bg: "#e8360c",
    badge: { label: "Only", price: "$12.9", color: "#00a950" },
    // The tag + first headline word appear on the SAME LINE (like the original)
    tagText: "New",
    headlineInline: "CHICKEN",   // word that sits right of the tag on line 1
    headline2: "ORDER ONLINE",   // full second line
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
    foodImg: friedImg,           // swap with comboImg once you have it
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

        /* ── reset scoped to banner ── */
        .ppz *, .ppz *::before, .ppz *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        /* ════════════════════════════════════════
           BANNER SHELL
        ════════════════════════════════════════ */
        .ppz {
          position: relative;
          width: 100%;
          height: 580px;
          background: var(--bg, #e8360c);
          overflow: hidden;
          font-family: 'Nunito', sans-serif;
          transition: background 0.5s ease;
        }

        /* ════════════════════════════════════════
           SLIDE — two-column grid
        ════════════════════════════════════════ */
        .ppz__slide {
          position: absolute;
          inset: 0;
          display: grid;
          /* Left column text ~45%, right column image ~55% */
          grid-template-columns: 45% 55%;
          align-items: center;
          z-index: 2;
          /* Transition */
          opacity: 1;
          transform: translateX(0px);
          transition: opacity 0.35s ease, transform 0.35s ease;
        }
        .ppz__slide--out {
          opacity: 0;
          transform: translateX(-50px);
        }

        /* ════════════════════════════════════════
           LEFT: TEXT BLOCK
        ════════════════════════════════════════ */
        .ppz__text {
          padding: 0 24px 0 80px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        /* ── Row 1: [parallelogram tag] [headline word] ── */
        .ppz__title-row1 {
          display: flex;
          align-items: center;
          gap: 14px;
          flex-wrap: nowrap;
        }

        /* Parallelogram tag — yellow skewed slab exactly like original */
        .ppz__tag {
          display: inline-block;
          background: #ffb219;
          transform: skewX(-13deg);
          padding: 7px 22px;
          flex-shrink: 0;
          border-radius: 2px;
        }
        .ppz__tag span {
          display: inline-block;
          transform: skewX(13deg);  /* undo skew so text stays upright */
          font-size: 18px;
          font-weight: 900;
          color: #1a1a1a;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }

        /* First headline word sitting inline with the tag */
        .ppz__h-inline {
          font-size: clamp(36px, 4.5vw, 66px);
          font-weight: 900;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.5px;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* ── Row 2: full-width headline line ── */
        .ppz__h2 {
          font-size: clamp(36px, 4.5vw, 66px);
          font-weight: 900;
          color: #fff;
          line-height: 1;
          letter-spacing: -0.5px;
          text-transform: uppercase;
          margin-top: -8px;
        }

        /* ── Sub-text ── */
        .ppz__sub {
          font-size: clamp(13px, 1.2vw, 16px);
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.6;
          max-width: 360px;
        }

        /* ── CTA button ── */
        .ppz__btn {
          display: inline-block;
          width: fit-content;
          padding: 14px 46px;
          background: transparent;
          border: 2px solid rgba(255, 255, 255, 0.88);
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
          transform: scale(1.05);
        }

        /* ════════════════════════════════════════
           RIGHT: FOOD IMAGE COLUMN
        ════════════════════════════════════════ */
        .ppz__food-col {
          position: relative;
          height: 100%;
          /* No overflow:hidden — let image bleed up */
        }

        /* Food image sits from top, bleeds beyond banner height */
        .ppz__food-img {
          position: absolute;
          /* Bleed above the banner top */
          top: -40px;
          /* Push toward right edge */
          right: -20px;
          /* ~120% of banner height = feels massive */
          height: 120%;
          width: auto;
          object-fit: contain;
          /* Nice shadow to lift it off the red bg */
          filter: drop-shadow(-20px 20px 40px rgba(0, 0, 0, 0.28));
          /* Subtle float animation */
          animation: foodFloat 4s ease-in-out infinite;
        }

        @keyframes foodFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }

        /* ─ Price badge ─ */
        .ppz__price {
          position: absolute;
          top: 52px;
          right: 60px;
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: var(--badge-color);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #fff;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
          z-index: 6;
          /* Re-animate on slide change via key */
          animation: badgeSpin 0.55s cubic-bezier(0.34, 1.56, 0.64, 1) both;
        }
        .ppz__price-label { font-size: 11px; font-weight: 700; letter-spacing: 1px; opacity: 0.9; }
        .ppz__price-amt   { font-size: 22px; font-weight: 900; line-height: 1.1; }

        @keyframes badgeSpin {
          from { opacity: 0; transform: rotate(-120deg) scale(0.3); }
          to   { opacity: 1; transform: rotate(0deg) scale(1); }
        }

        /* ════════════════════════════════════════
           NAV — vertical PREV / NEXT side tabs
        ════════════════════════════════════════ */
        .ppz__nav {
          position: absolute;
          top: 50%;
          z-index: 20;
          background: rgba(0, 0, 0, 0.18);
          border: none;
          color: rgba(255,255,255,0.80);
          font-family: 'Nunito', sans-serif;
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 3px;
          text-transform: uppercase;
          writing-mode: vertical-rl;
          padding: 22px 12px;
          cursor: pointer;
          transition: background 0.2s, color 0.2s;
          backdrop-filter: blur(4px);
        }
        .ppz__nav:hover {
          background: rgba(0, 0, 0, 0.38);
          color: #fff;
        }
        .ppz__nav--prev {
          left: 0;
          transform: translateY(-50%) rotate(180deg);
          border-radius: 0 6px 6px 0;
        }
        .ppz__nav--next {
          right: 0;
          transform: translateY(-50%);
          border-radius: 6px 0 0 6px;
        }

        /* ════════════════════════════════════════
           DOT NAVIGATION
        ════════════════════════════════════════ */
        .ppz__dots {
          position: absolute;
          bottom: 22px;
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
          background: rgba(255, 255, 255, 0.38);
          cursor: pointer;
          padding: 0;
          transition: background 0.25s, transform 0.25s;
        }
        .ppz__dot--active {
          background: #fff;
          transform: scale(1.4);
        }

        /* ════════════════════════════════════════
           RESPONSIVE
        ════════════════════════════════════════ */
        @media (max-width: 720px) {
          .ppz { height: auto; min-height: 460px; }
          .ppz__slide {
            grid-template-columns: 1fr;
            align-content: start;
          }
          .ppz__text {
            padding: 44px 24px 16px;
            gap: 14px;
          }
          .ppz__food-col {
            height: 300px;
            overflow: hidden;
          }
          .ppz__food-img {
            top: 0; right: -10px;
            height: 100%;
          }
          .ppz__price {
            top: 12px; right: 16px;
            width: 72px; height: 72px;
          }
          .ppz__price-amt { font-size: 16px; }
          .ppz__h-inline, .ppz__h2 {
            font-size: clamp(28px, 7vw, 44px);
          }
        }
      `}</style>

      <div
        className="ppz"
        style={{
          "--bg": s.bg,
          "--badge-color": s.badge.color,
        }}
      >
        {/* ── SLIDE ── */}
        <div className={`ppz__slide${animOut ? " ppz__slide--out" : ""}`}>

          {/* ═══ LEFT TEXT ═══ */}
          <div className="ppz__text">

            {/* Row 1: [skewed NEW slab] [CHICKEN] on same line */}
            <div className="ppz__title-row1">
              <div className="ppz__tag">
                <span>{s.tagText}</span>
              </div>
              <span className="ppz__h-inline">{s.headlineInline}</span>
            </div>

            {/* Row 2: ORDER ONLINE */}
            <div className="ppz__h2">{s.headline2}</div>

            <p className="ppz__sub">{s.sub}</p>

            <button className="ppz__btn">Order Now</button>
          </div>

          {/* ═══ RIGHT FOOD IMAGE ═══ */}
          <div className="ppz__food-col">
            {/* Price badge */}
            <div className="ppz__price" key={`badge-${current}`}>
              <span className="ppz__price-label">{s.badge.label}</span>
              <span className="ppz__price-amt">{s.badge.price}</span>
            </div>

            {/* Food image — massive, bleeds up */}
            <img
              className="ppz__food-img"
              src={s.foodImg}
              alt={s.foodAlt}
            />
          </div>
        </div>

        {/* ── PREV / NEXT TABS ── */}
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
