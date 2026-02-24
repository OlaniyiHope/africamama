import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

// ── Audience config ──────────────────────────────────────────────
const AUDIENCES = [
  {
    key: "families",
    label: "Families",
    tagline: "Meals for Families",
    description: "Family-friendly meals that make everyone feel at home.",
    fallbackBg: "#1a2a1a",
    icon: "🏠",
    link: "/our-menu?tag=family",
  },
  {
    key: "students",
    label: "Students",
    tagline: "Meals for Students",
    description:
      "Affordable, tasty plates that keep you fuelled through lectures and late nights.",
    fallbackBg: "#1a1a2a",
    icon: "📚",
    link: "/our-menu?tag=student",
  },
  {
    key: "professionals",
    label: "Working Professionals",
    tagline: "Meals for Professionals",
    description:
      "Convenient, flavour-packed meals for busy days.",
    fallbackBg: "#2a1a1a",
    icon: "💼",
    link: "/our-menu?tag=professional",
  },
];

// ── Styles ───────────────────────────────────────────────────────
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Josefin+Sans:wght@300;400&display=swap');

  .audience-section {
    background: #0c1315;
    padding: 90px 0 100px;
    font-family: 'Josefin Sans', sans-serif;
  }

  /* ── Section header ── */
  .audience-header {
    text-align: center;
    margin-bottom: 60px;
    padding: 0 20px;
  }

  .audience-header__tagline {
    display: block;
    font-family: 'Miniver', cursive;
    color: #C9AB81;
    font-size: clamp(14px, 1.6vw, 18px);
    letter-spacing: 0.12em;
    margin-bottom: 14px;
  }

  .audience-header__decor {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    margin-bottom: 14px;
  }

  .audience-header__line {
    width: 50px;
    height: 1px;
    background: #C9AB81;
    opacity: 0.5;
  }

  .audience-header__title {
    font-family: 'Cormorant Garamond', serif;
    color: #f0e6d3;
    font-size: clamp(28px, 3.5vw, 46px);
    font-weight: 300;
    letter-spacing: 0.04em;
    margin: 0;
    font-style: italic;
  }

  /* ── Card grid ── */
  .audience-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
  }

  @media (max-width: 900px) {
    .audience-grid {
      grid-template-columns: 1fr;
      padding: 0 20px;
      gap: 24px;
    }
  }

  /* ── Each card ── */
  .audience-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    display: block;
    text-decoration: none;
    aspect-ratio: 3 / 4;
    /* staggered border trick */
  }

  .audience-card:not(:last-child) {
    border-right: 1px solid rgba(201, 171, 129, 0.15);
  }

  /* Background image / colour layer */
  .audience-card__bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    filter: brightness(0.45);
  }

  .audience-card:hover .audience-card__bg {
    transform: scale(1.07);
    filter: brightness(0.55);
  }

  /* Gradient overlay always present, deepens on hover */
  .audience-card__overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.85) 0%,
      rgba(0, 0, 0, 0.3) 55%,
      rgba(0, 0, 0, 0.1) 100%
    );
    transition: background 0.4s ease;
  }

  .audience-card:hover .audience-card__overlay {
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0%,
      rgba(0, 0, 0, 0.4) 55%,
      rgba(0, 0, 0, 0.15) 100%
    );
  }

  /* Gold top border that slides in on hover */
  .audience-card__top-border {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #C9AB81;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
    z-index: 3;
  }

  .audience-card:hover .audience-card__top-border {
    transform: scaleX(1);
  }

  /* Text content pinned to bottom */
  .audience-card__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 32px 28px;
    z-index: 2;
    transform: translateY(0);
    transition: transform 0.4s ease;
  }

  .audience-card__icon {
    display: block;
    font-size: 28px;
    margin-bottom: 12px;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s;
  }

  .audience-card:hover .audience-card__icon {
    opacity: 1;
    transform: translateY(0);
  }

  .audience-card__tagline {
    display: block;
    font-family: 'Miniver', cursive;
    color: #C9AB81;
    font-size: 13px;
    letter-spacing: 0.15em;
    margin-bottom: 8px;
    text-transform: lowercase;
  }

  .audience-card__title {
    font-family: 'Cormorant Garamond', serif;
    color: #f0e6d3;
    font-size: clamp(22px, 2.5vw, 32px);
    font-weight: 300;
    letter-spacing: 0.04em;
    margin: 0 0 12px 0;
    line-height: 1.2;
  }

  .audience-card__desc {
    font-family: 'Josefin Sans', sans-serif;
    color: rgba(240, 230, 211, 0.75);
    font-size: 13px;
    font-weight: 300;
    letter-spacing: 0.06em;
    line-height: 1.7;
    margin: 0 0 20px 0;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    transition: max-height 0.4s ease, opacity 0.35s ease 0.05s;
  }

  .audience-card:hover .audience-card__desc {
    max-height: 120px;
    opacity: 1;
  }

  /* CTA link */
  .audience-card__cta {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #C9AB81;
    font-size: 11px;
    font-weight: 400;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    opacity: 0;
    transform: translateY(6px);
    transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s;
  }

  .audience-card__cta::after {
    content: '→';
    transition: transform 0.2s ease;
  }

  .audience-card:hover .audience-card__cta {
    opacity: 1;
    transform: translateY(0);
  }

  .audience-card:hover .audience-card__cta::after {
    transform: translateX(4px);
  }

  /* Loading skeleton */
  .audience-card__skeleton {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, #1a2020 25%, #243030 50%, #1a2020 75%);
    background-size: 200% 100%;
    animation: shimmer 1.6s infinite;
  }

  @keyframes shimmer {
    0%   { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  /* Number label */
  .audience-card__number {
    position: absolute;
    top: 24px;
    right: 24px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 11px;
    font-weight: 300;
    color: rgba(201, 171, 129, 0.5);
    letter-spacing: 0.1em;
    z-index: 2;
  }
`;

// ── Component ────────────────────────────────────────────────────
const AudienceSection = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/db/products/best-sellers`
        );
        setBestSellers(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Error fetching best sellers:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchBestSellers();
  }, []);

  // Assign best-seller product images as card backgrounds (cycle if fewer than 3)
  const getCardBg = (index) => {
    if (bestSellers.length === 0) return null;
    const product = bestSellers[index % bestSellers.length];
    // Support both single image string and images array
    return product?.images?.[0] || product?.image || null;
  };

  return (
    <>
      <style>{styles}</style>

      <section className="audience-section">
        {/* ── Header ── */}
        <div className="audience-header">
          <span className="audience-header__tagline">who we cook for</span>
          <div className="audience-header__decor">
            <span className="audience-header__line" />
            <h2 className="audience-header__title">
              A table for everyone
            </h2>
            <span className="audience-header__line" />
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="audience-grid">
          {AUDIENCES.map((audience, i) => {
            const bgImage = getCardBg(i);

            return (
              <Link
                key={audience.key}
                to={audience.link}
                className="audience-card"
              >
                {/* Number label */}
                <span className="audience-card__number">0{i + 1}</span>

                {/* Top hover border */}
                <div className="audience-card__top-border" />

                {/* Background */}
                {loading ? (
                  <div className="audience-card__skeleton" />
                ) : (
                  <div
                    className="audience-card__bg"
                    style={{
                      backgroundImage: bgImage
                        ? `url(${bgImage})`
                        : "none",
                      backgroundColor: bgImage
                        ? "transparent"
                        : audience.fallbackBg,
                    }}
                  />
                )}

                {/* Gradient overlay */}
                <div className="audience-card__overlay" />

                {/* Text */}
                <div className="audience-card__content">
                  <span className="audience-card__icon">{audience.icon}</span>
                  <span className="audience-card__tagline">{audience.tagline}</span>
                  <h3 className="audience-card__title">{audience.label}</h3>
                  <p className="audience-card__desc">{audience.description}</p>
                  <span className="audience-card__cta">Explore meals</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AudienceSection;
