import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Banner.css";

const HeroSlider = () => {
  const [categories, setCategories] = useState([]);
  const [current, setCurrent] = useState(0);
  const [loading, setLoading] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/db/categories`)
      .then((res) => {
        const topLevel = res.data.filter((cat) => !cat.parent);
        setCategories(topLevel);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch categories:", err);
        setLoading(false);
      });
  }, []);

  // Auto-advance every 5 seconds
  useEffect(() => {
    if (categories.length === 0) return;
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % categories.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, [categories]);

  const goTo = (index) => {
    setCurrent(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % categories.length);
    }, 5000);
  };

  const goPrev = () => goTo((current - 1 + categories.length) % categories.length);
  const goNext = () => goTo((current + 1) % categories.length);

  // Split name into two words/groups like original:
  // "The Food Heaven" → ["The", "Food Heaven"] (first word separate, rest together)
  const splitName = (name = "") => {
    const words = name.trim().split(" ");
    if (words.length === 1) return ["", words[0]];
    // First word goes left (small), rest goes right (big) — matching "The" + "Best Dishes"
    return [words[0], words.slice(1).join(" ")];
  };

  if (loading) {
    return (
      <div style={{
        width: "100%", height: "100vh",
        background: "#0c1315",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <p style={{ color: "#C9AB81", fontSize: 16, letterSpacing: "0.2em", fontFamily: "Josefin Sans, sans-serif" }}>
          LOADING...
        </p>
      </div>
    );
  }

  if (categories.length === 0) {
    return (
      <div style={{
        width: "100%", height: "100vh",
        background: "#0c1315",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <p style={{ color: "#C9AB81", fontSize: 16, fontFamily: "Josefin Sans, sans-serif" }}>
          No categories found.
        </p>
      </div>
    );
  }

  const cat = categories[current];
  const [titleSmall, titleBig] = splitName(cat.name);

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>

      {/* ── Background slides ── */}
      {categories.map((c, i) => (
        <div
          key={c._id}
          style={{
            position: "absolute", inset: 0,
            backgroundImage: c.image ? `url(${c.image})` : "none",
            backgroundColor: "#0c1315",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: i === current ? 1 : 0,
            transition: "opacity 0.8s ease",
            zIndex: i === current ? 1 : 0,
          }}
        >
          {/* Dark overlay */}
          <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
        </div>
      ))}

      {/* ── Slide Content — matches original rs-layer order exactly ── */}
      <div style={{
        position: "absolute", inset: 0,
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 20px",
        gap: 0,
      }}>

        {/* LAYER 1 — small tagline above (Miniver font, gold, italic feel) 
            Original: "welcome to our delicious corner" / "take a sip..." 
            We use the category name's first word as intro, or a fixed welcome line */}
        <p style={{
          fontFamily: "'Miniver', cursive",
          color: "#C9AB81",
          fontSize: "clamp(16px, 2.2vw, 25px)",
          fontWeight: "normal",
          letterSpacing: "0.05em",
          margin: "0 0 18px 0",
          lineHeight: 1.4,
        }}>
          welcome to our delicious corner
        </p>

        {/* LAYER 0 + 4 + 5 — Big split title with decorative lines 
            Original layout: [deco-line]  "The"(Miniver small)  "BEST DISHES"(Metropolis big)  [deco-line] */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "clamp(8px, 1.5vw, 20px)",
          marginBottom: "30px",
          flexWrap: "wrap",
        }}>

          {/* Left decorative line */}
          <img
            src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/rev-img.png"
            alt=""
            style={{ width: 56, height: 10, opacity: 0.85 }}
          />

          {/* Small word (e.g. "The") — Miniver */}
          {titleSmall && (
            <span style={{
              fontFamily: "'Miniver', cursive",
              color: "#C9AB81",
              fontSize: "clamp(36px, 7vw, 120px)",
              fontWeight: "normal",
              letterSpacing: "0.12em",
              lineHeight: 1,
            }}>
              {titleSmall}
            </span>
          )}

          {/* Big words (e.g. "FOOD HEAVEN") — Metropolis */}
          <span style={{
            fontFamily: "'metropolis1920regular', sans-serif",
            color: "#C9AB81",
            fontSize: "clamp(36px, 7vw, 120px)",
            fontWeight: "normal",
            letterSpacing: "0.2em",
            lineHeight: 1,
            textTransform: "uppercase",
          }}>
            {titleBig}
          </span>

          {/* Right decorative line */}
          <img
            src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/rev-img.png"
            alt=""
            style={{ width: 56, height: 10, opacity: 0.85 }}
          />
        </div>

        {/* LAYER 2 — Description paragraph BELOW title 
            Original: "We have a proper passion for cooking..." 
            Josefin Sans, lighter weight, white/light color */}
        {cat.description && (
          <p style={{
            fontFamily: "'Josefin Sans', sans-serif",
            color: "rgba(255,255,255,0.9)",
            fontSize: "clamp(14px, 1.6vw, 23px)",
            fontWeight: 300,
            letterSpacing: "0.03em",
            lineHeight: 1.6,
            maxWidth: "680px",
            margin: "0 0 40px 0",
          }}>
            {cat.description}
          </p>
        )}

        {/* LAYER 3 — CTA Button */}
        <Link
          to="/our-menu"
          className="eltdf-btn eltdf-btn-large eltdf-btn-outline"
          style={{ textDecoration: "none" }}
        >
          <span className="eltdf-btn-text">View Menu Dishes</span>
        </Link>

      </div>

      {/* ── Prev Arrow ── */}
      <button
        onClick={goPrev}
        style={{
          position: "absolute", left: "20px", top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20, background: "none", border: "none",
          cursor: "pointer", color: "#C9AB81",
          fontSize: "48px", padding: "10px", opacity: 0.8,
          lineHeight: 1,
        }}
        aria-label="Previous slide"
      >
        &#8249;
      </button>

      {/* ── Next Arrow ── */}
      <button
        onClick={goNext}
        style={{
          position: "absolute", right: "20px", top: "50%",
          transform: "translateY(-50%)",
          zIndex: 20, background: "none", border: "none",
          cursor: "pointer", color: "#C9AB81",
          fontSize: "48px", padding: "10px", opacity: 0.8,
          lineHeight: 1,
        }}
        aria-label="Next slide"
      >
        &#8250;
      </button>

      {/* ── Pagination dots ── */}
      <div style={{
        position: "absolute", bottom: "30px", left: "50%",
        transform: "translateX(-50%)",
        zIndex: 20,
        display: "flex", gap: "12px", alignItems: "center",
      }}>
        {categories.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? "28px" : "8px",
              height: "8px",
              borderRadius: i === current ? "4px" : "50%",
              background: i === current ? "#C9AB81" : "rgba(201,171,129,0.4)",
              border: "none", cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

    </div>
  );
};

export default HeroSlider;
