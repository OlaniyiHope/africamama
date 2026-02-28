
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useTheme } from "../context/ThemeContext";

// // ── Audience config ──────────────────────────────────────────────
// const AUDIENCES = [
//   {
//     key: "families",
//     label: "Families",
//     tagline: "Meals for Families",
//     description: "Family-friendly meals that make everyone feel at home.",
//     fallbackBgDark: "#1a2a1a",
//     fallbackBgLight: "#e8f0e8",
//     icon: "🏠",
//     link: "/shop?tag=family",
//   },
//   {
//     key: "students",
//     label: "Students",
//     tagline: "Meals for Students",
//     description:
//       "Affordable, tasty plates that keep you fuelled through lectures and late nights.",
//     fallbackBgDark: "#1a1a2a",
//     fallbackBgLight: "#e8e8f0",
//     icon: "📚",
//     link: "/shop?tag=student",
//   },
//   {
//     key: "professionals",
//     label: "Working Professionals",
//     tagline: "Meals for Professionals",
//     description: "Convenient, flavour-packed meals for busy days.",
//     fallbackBgDark: "#2a1a1a",
//     fallbackBgLight: "#f0e8e8",
//     icon: "💼",
//     link: "/shop?tag=professional",
//   },
// ];

// // ── Component ────────────────────────────────────────────────────
// const AudienceSection = () => {
//   const { tokens, theme } = useTheme();
//   const [bestSellers, setBestSellers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBestSellers = async () => {
//       try {
//         const { data } = await axios.get(
//           `${process.env.REACT_APP_API_URL}/api/db/products/best-sellers`
//         );
//         setBestSellers(Array.isArray(data) ? data : []);
//       } catch (err) {
//         console.error("Error fetching best sellers:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchBestSellers();
//   }, []);

//   const getCardBg = (index) => {
//     if (bestSellers.length === 0) return null;
//     const product = bestSellers[index % bestSellers.length];
//     return product?.images?.[0] || product?.image || null;
//   };

//   // Derived values that change with theme
//   const isDark = theme === "dark";
//   const overlayFrom = isDark ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.65)";
//   const overlayMid  = isDark ? "rgba(0,0,0,0.30)" : "rgba(0,0,0,0.20)";
//   const overlayTop  = isDark ? "rgba(0,0,0,0.10)" : "rgba(0,0,0,0.05)";
//   const skeletonA   = isDark ? "#1a2020" : "#e0d8d0";
//   const skeletonB   = isDark ? "#243030" : "#ece4da";
//   const cardTitleColor = isDark ? "#f0e6d3" : tokens.heading;
//   const cardDescColor  = isDark ? "rgba(240,230,211,0.75)" : tokens.textMuted;
//   const cardBorderColor = tokens.border;

//   // Dynamic CSS injected as a style tag — uses theme values
//   const css = `
//     @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Josefin+Sans:wght@300;400&display=swap');

//     .audience-section {
//       background: ${tokens.cardBg};
//       padding: 90px 0 100px;
//       font-family: 'Josefin Sans', sans-serif;
//       transition: background 0.3s ease;
//     }

//     .audience-header {
//       text-align: center;
//       margin-bottom: 60px;
//       padding: 0 20px;
//     }

//     .audience-header__tagline {
//       display: block;
//       font-family: 'Miniver', cursive;
//       color: ${tokens.tagline};
//       font-size: clamp(14px, 1.6vw, 18px);
//       letter-spacing: 0.12em;
//       margin-bottom: 14px;
//       transition: color 0.3s ease;
//     }

//     .audience-header__decor {
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       gap: 18px;
//       margin-bottom: 14px;
//     }

//     .audience-header__line {
//       width: 50px;
//       height: 1px;
//       background: ${tokens.text};
//       opacity: 0.5;
//       transition: background 0.3s ease;
//     }

//     .audience-header__title {
//       font-family: 'Cormorant Garamond', serif;
//       color: ${tokens.heading};
//       font-size: clamp(28px, 3.5vw, 46px);
//       font-weight: 300;
//       letter-spacing: 0.04em;
//       margin: 0;
//       font-style: italic;
//       transition: color 0.3s ease;
//     }

//     .audience-grid {
//       display: grid;
//       grid-template-columns: repeat(3, 1fr);
//       gap: 0;
//       max-width: 1200px;
//       margin: 0 auto;
//       padding: 0 40px;
//     }

//     @media (max-width: 900px) {
//       .audience-grid {
//         grid-template-columns: 1fr;
//         padding: 0 20px;
//         gap: 24px;
//       }
//     }

//     .audience-card {
//       position: relative;
//       overflow: hidden;
//       cursor: pointer;
//       display: block;
//       text-decoration: none;
//       aspect-ratio: 3 / 4;
//     }

//     .audience-card:not(:last-child) {
//       border-right: 1px solid ${cardBorderColor};
//     }

//     .audience-card__bg {
//       position: absolute;
//       inset: 0;
//       background-size: cover;
//       background-position: center;
//       transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//       filter: ${isDark ? "brightness(0.45)" : "brightness(0.6)"};
//     }

//     .audience-card:hover .audience-card__bg {
//       transform: scale(1.07);
//       filter: ${isDark ? "brightness(0.55)" : "brightness(0.7)"};
//     }

//     .audience-card__overlay {
//       position: absolute;
//       inset: 0;
//       background: linear-gradient(
//         to top,
//         ${overlayFrom} 0%,
//         ${overlayMid} 55%,
//         ${overlayTop} 100%
//       );
//       transition: background 0.4s ease;
//     }

//     .audience-card:hover .audience-card__overlay {
//       background: linear-gradient(
//         to top,
//         rgba(0,0,0,0.90) 0%,
//         rgba(0,0,0,0.45) 55%,
//         rgba(0,0,0,0.15) 100%
//       );
//     }

//     .audience-card__top-border {
//       position: absolute;
//       top: 0;
//       left: 0;
//       right: 0;
//       height: 2px;
//       background: ${tokens.text};
//       transform: scaleX(0);
//       transform-origin: left;
//       transition: transform 0.4s ease;
//       z-index: 3;
//     }

//     .audience-card:hover .audience-card__top-border {
//       transform: scaleX(1);
//     }

//     .audience-card__content {
//       position: absolute;
//       bottom: 0;
//       left: 0;
//       right: 0;
//       padding: 32px 28px;
//       z-index: 2;
//     }

//     .audience-card__icon {
//       display: block;
//       font-size: 28px;
//       margin-bottom: 12px;
//       opacity: 0;
//       transform: translateY(10px);
//       transition: opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s;
//     }

//     .audience-card:hover .audience-card__icon {
//       opacity: 1;
//       transform: translateY(0);
//     }

//     .audience-card__tagline {
//       display: block;
//       font-family: 'Miniver', cursive;
//       color: ${tokens.text};
//       font-size: 13px;
//       letter-spacing: 0.15em;
//       margin-bottom: 8px;
//       text-transform: lowercase;
//       transition: color 0.3s ease;
//     }

//     .audience-card__title {
//       font-family: 'Cormorant Garamond', serif;
//       color: ${cardTitleColor};
//       font-size: clamp(22px, 2.5vw, 32px);
//       font-weight: 300;
//       letter-spacing: 0.04em;
//       margin: 0 0 12px 0;
//       line-height: 1.2;
//       transition: color 0.3s ease;
//     }

//     .audience-card__desc {
//       font-family: 'Josefin Sans', sans-serif;
//       color: ${cardDescColor};
//       font-size: 13px;
//       font-weight: 300;
//       letter-spacing: 0.06em;
//       line-height: 1.7;
//       margin: 0 0 20px 0;
//       max-height: 0;
//       overflow: hidden;
//       opacity: 0;
//       transition: max-height 0.4s ease, opacity 0.35s ease 0.05s, color 0.3s ease;
//     }

//     .audience-card:hover .audience-card__desc {
//       max-height: 120px;
//       opacity: 1;
//     }

//     .audience-card__cta {
//       display: inline-flex;
//       align-items: center;
//       gap: 8px;
//       color: ${tokens.text};
//       font-size: 11px;
//       font-weight: 400;
//       letter-spacing: 0.2em;
//       text-transform: uppercase;
//       opacity: 0;
//       transform: translateY(6px);
//       transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s, color 0.3s ease;
//     }

//     .audience-card__cta::after {
//       content: '→';
//       transition: transform 0.2s ease;
//     }

//     .audience-card:hover .audience-card__cta {
//       opacity: 1;
//       transform: translateY(0);
//     }

//     .audience-card:hover .audience-card__cta::after {
//       transform: translateX(4px);
//     }

//     .audience-card__skeleton {
//       position: absolute;
//       inset: 0;
//       background: linear-gradient(90deg, ${skeletonA} 25%, ${skeletonB} 50%, ${skeletonA} 75%);
//       background-size: 200% 100%;
//       animation: shimmer 1.6s infinite;
//     }

//     @keyframes shimmer {
//       0%   { background-position: 200% 0; }
//       100% { background-position: -200% 0; }
//     }

//     .audience-card__number {
//       position: absolute;
//       top: 24px;
//       right: 24px;
//       font-family: 'Cormorant Garamond', serif;
//       font-size: 11px;
//       font-weight: 300;
//       color: ${tokens.textMuted};
//       letter-spacing: 0.1em;
//       z-index: 2;
//       transition: color 0.3s ease;
//     }
//   `;

//   return (
//     <>
//       <style>{css}</style>

//       <section className="audience-section">
//         {/* ── Header ── */}
//         <div className="audience-header">
//           <span className="audience-header__tagline">who we cook for</span>
//           <div className="audience-header__decor">
//             <span className="audience-header__line" />
//             <h2 className="audience-header__title">A table for everyone</h2>
//             <span className="audience-header__line" />
//           </div>
//         </div>

//         {/* ── Cards ── */}
//         <div className="audience-grid">
//           {AUDIENCES.map((audience, i) => {
//             const bgImage = getCardBg(i);
//             const fallbackBg = isDark ? audience.fallbackBgDark : audience.fallbackBgLight;

//             return (
//               <Link key={audience.key} to={audience.link} className="audience-card">
//                 <span className="audience-card__number">0{i + 1}</span>
//                 <div className="audience-card__top-border" />

//                 {loading ? (
//                   <div className="audience-card__skeleton" />
//                 ) : (
//                   <div
//                     className="audience-card__bg"
//                     style={{
//                       backgroundImage: bgImage ? `url(${bgImage})` : "none",
//                       backgroundColor: bgImage ? "transparent" : fallbackBg,
//                     }}
//                   />
//                 )}

//                 <div className="audience-card__overlay" />

//                 <div className="audience-card__content">
//                   <span className="audience-card__icon">{audience.icon}</span>
//                   <span className="audience-card__tagline">{audience.tagline}</span>
//                   <h3 className="audience-card__title">{audience.label}</h3>
//                   <p className="audience-card__desc">{audience.description}</p>
//                   <span className="audience-card__cta">Explore meals</span>
//                 </div>
//               </Link>
//             );
//           })}
//         </div>
//       </section>
//     </>
//   );
// };

// export default AudienceSection;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

// ── Audience config ──────────────────────────────────────────────
// Each card has its own dedicated static image so it always shows something beautiful.
// `link` is null for cards that shouldn't navigate anywhere.
const AUDIENCES = [
  {
    key: "families",
    label: "Families",
    tagline: "Meals for Families",
    description: "Family-friendly meals that make everyone feel at home. Browse our full menu for something everyone will love.",
    fallbackBgDark: "#1a2a1a",
    fallbackBgLight: "#e8f0e8",
    staticImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    icon: "🏠",
    link: null,  // ← no navigation
  },
  {
    key: "students",
    label: "Students",
    tagline: "Meals for Students",
    description: "Affordable, tasty plates that keep you fuelled through lectures and late nights.",
    fallbackBgDark: "#1a1a2a",
    fallbackBgLight: "#e8e8f0",
    staticImage: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    icon: "📚",
    link: "/shop?tag=student",  // ← navigates to student meals
  },
  {
    key: "professionals",
    label: "Working Professionals",
    tagline: "Meals for Professionals",
    description: "Convenient, flavour-packed meals for busy days. Order ahead and pick up on your lunch break.",
    fallbackBgDark: "#2a1a1a",
    fallbackBgLight: "#f0e8e8",
    staticImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    icon: "💼",
    link: null,  // ← no navigation
  },
];

// ── Component ────────────────────────────────────────────────────
const AudienceSection = () => {
  const { tokens, theme } = useTheme();
  const [bestSellers, setBestSellers] = useState([]);

  // We still fetch best sellers so if they exist they override the static images
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/db/products/best-sellers`)
      .then(({ data }) => setBestSellers(Array.isArray(data) ? data : []))
      .catch(() => {}); // silently fall back to static images
  }, []);

  // Pick the best available image: real product image → static Unsplash fallback
  const getCardImage = (audience, index) => {
    if (bestSellers.length > 0) {
      const product = bestSellers[index % bestSellers.length];
      const productImg = product?.images?.[0] || product?.image || null;
      if (productImg) return productImg;
    }
    return audience.staticImage;
  };

  const isDark = theme === "dark";
  const overlayFrom   = isDark ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0.65)";
  const overlayMid    = isDark ? "rgba(0,0,0,0.30)" : "rgba(0,0,0,0.20)";
  const overlayTop    = isDark ? "rgba(0,0,0,0.10)" : "rgba(0,0,0,0.05)";
  const skeletonA     = isDark ? "#1a2020" : "#e0d8d0";
  const skeletonB     = isDark ? "#243030" : "#ece4da";
  const cardTitleColor = isDark ? "#f0e6d3" : tokens.heading;
  const cardDescColor  = isDark ? "rgba(240,230,211,0.75)" : tokens.textMuted;

  const css = `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Josefin+Sans:wght@300;400&display=swap');

    .audience-section {
      background: ${tokens.cardBg};
      padding: 90px 0 100px;
      font-family: 'Josefin Sans', sans-serif;
      transition: background 0.3s ease;
    }
    .audience-header {
      text-align: center;
      margin-bottom: 60px;
      padding: 0 20px;
    }
    .audience-header__tagline {
      display: block;
      font-family: 'Miniver', cursive;
      color: ${tokens.tagline};
      font-size: clamp(14px, 1.6vw, 18px);
      letter-spacing: 0.12em;
      margin-bottom: 14px;
      transition: color 0.3s ease;
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
      background: ${tokens.text};
      opacity: 0.5;
      transition: background 0.3s ease;
    }
    .audience-header__title {
      font-family: 'Cormorant Garamond', serif;
      color: ${tokens.heading};
      font-size: clamp(28px, 3.5vw, 46px);
      font-weight: 300;
      letter-spacing: 0.04em;
      margin: 0;
      font-style: italic;
      transition: color 0.3s ease;
    }
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

    /* ── Base card (no link, not clickable) ── */
    .audience-card {
      position: relative;
      overflow: hidden;
      display: block;
      text-decoration: none;
      aspect-ratio: 3 / 4;
    }
    .audience-card:not(:last-child) {
      border-right: 1px solid ${tokens.border};
    }

    /* Only cards that are links get pointer + hover effects */
    .audience-card--clickable {
      cursor: pointer;
    }
    .audience-card--static {
      cursor: default;
    }

    .audience-card__bg {
      position: absolute;
      inset: 0;
      background-size: cover;
      background-position: center;
      transition: transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
      filter: ${isDark ? "brightness(0.45)" : "brightness(0.6)"};
    }
    .audience-card--clickable:hover .audience-card__bg {
      transform: scale(1.07);
      filter: ${isDark ? "brightness(0.55)" : "brightness(0.7)"};
    }

    .audience-card__overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, ${overlayFrom} 0%, ${overlayMid} 55%, ${overlayTop} 100%);
      transition: background 0.4s ease;
    }
    .audience-card--clickable:hover .audience-card__overlay {
      background: linear-gradient(to top, rgba(0,0,0,0.90) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.15) 100%);
    }

    /* Gold top border only slides in on clickable cards */
    .audience-card__top-border {
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: ${tokens.text};
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.4s ease;
      z-index: 3;
    }
    .audience-card--clickable:hover .audience-card__top-border {
      transform: scaleX(1);
    }

    .audience-card__content {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      padding: 32px 28px;
      z-index: 2;
    }
    .audience-card__icon {
      display: block;
      font-size: 28px;
      margin-bottom: 12px;
      opacity: 0;
      transform: translateY(10px);
      transition: opacity 0.35s ease 0.05s, transform 0.35s ease 0.05s;
    }
    .audience-card--clickable:hover .audience-card__icon {
      opacity: 1;
      transform: translateY(0);
    }
    .audience-card__tagline {
      display: block;
      font-family: 'Miniver', cursive;
      color: ${tokens.text};
      font-size: 13px;
      letter-spacing: 0.15em;
      margin-bottom: 8px;
      text-transform: lowercase;
      transition: color 0.3s ease;
    }
    .audience-card__title {
      font-family: 'Cormorant Garamond', serif;
      color: ${cardTitleColor};
      font-size: clamp(22px, 2.5vw, 32px);
      font-weight: 300;
      letter-spacing: 0.04em;
      margin: 0 0 12px 0;
      line-height: 1.2;
      transition: color 0.3s ease;
    }
    .audience-card__desc {
      font-family: 'Josefin Sans', sans-serif;
      color: ${cardDescColor};
      font-size: 13px;
      font-weight: 300;
      letter-spacing: 0.06em;
      line-height: 1.7;
      margin: 0 0 20px 0;
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      transition: max-height 0.4s ease, opacity 0.35s ease 0.05s, color 0.3s ease;
    }
    .audience-card--clickable:hover .audience-card__desc,
    .audience-card--static:hover .audience-card__desc {
      max-height: 120px;
      opacity: 1;
    }
    .audience-card__cta {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: ${tokens.text};
      font-size: 11px;
      font-weight: 400;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      opacity: 0;
      transform: translateY(6px);
      transition: opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s, color 0.3s ease;
    }
    .audience-card__cta::after {
      content: '→';
      transition: transform 0.2s ease;
    }
    .audience-card--clickable:hover .audience-card__cta {
      opacity: 1;
      transform: translateY(0);
    }
    .audience-card--clickable:hover .audience-card__cta::after {
      transform: translateX(4px);
    }

    .audience-card__skeleton {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, ${skeletonA} 25%, ${skeletonB} 50%, ${skeletonA} 75%);
      background-size: 200% 100%;
      animation: shimmer 1.6s infinite;
    }
    @keyframes shimmer {
      0%   { background-position: 200% 0; }
      100% { background-position: -200% 0; }
    }
    .audience-card__number {
      position: absolute;
      top: 24px; right: 24px;
      font-family: 'Cormorant Garamond', serif;
      font-size: 11px;
      font-weight: 300;
      color: ${tokens.textMuted};
      letter-spacing: 0.1em;
      z-index: 2;
      transition: color 0.3s ease;
    }

    /* "Browse menu" hint badge on non-clickable cards */
    .audience-card__browse-hint {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      color: ${isDark ? "rgba(201,171,129,0.55)" : "rgba(74,48,16,0.45)"};
      font-size: 10px;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      margin-top: 4px;
      opacity: 0;
      transition: opacity 0.3s ease 0.1s;
    }
    .audience-card--static:hover .audience-card__browse-hint {
      opacity: 1;
    }
  `;

  return (
    <>
      <style>{css}</style>

      <section className="audience-section">
        {/* ── Header ── */}
        <div className="audience-header">
          <span className="audience-header__tagline">who we cook for</span>
          <div className="audience-header__decor">
            <span className="audience-header__line" />
            <h2 className="audience-header__title">A table for everyone</h2>
            <span className="audience-header__line" />
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="audience-grid">
          {AUDIENCES.map((audience, i) => {
            const bgImage = getCardImage(audience, i);
            const isClickable = !!audience.link;
            const cardClass = `audience-card ${isClickable ? "audience-card--clickable" : "audience-card--static"}`;

            const cardContent = (
              <>
                <span className="audience-card__number">0{i + 1}</span>
                <div className="audience-card__top-border" />

                {/* Background image */}
                <div
                  className="audience-card__bg"
                  style={{
                    backgroundImage: bgImage ? `url(${bgImage})` : "none",
                    backgroundColor: bgImage ? "transparent"
                      : (isDark ? audience.fallbackBgDark : audience.fallbackBgLight),
                  }}
                />

                <div className="audience-card__overlay" />

                <div className="audience-card__content">
                  <span className="audience-card__icon">{audience.icon}</span>
                  <span className="audience-card__tagline">{audience.tagline}</span>
                  <h3 className="audience-card__title">{audience.label}</h3>
                  <p className="audience-card__desc">{audience.description}</p>

                  {/* Show "Explore meals →" only on the clickable student card */}
                  {isClickable && (
                    <span className="audience-card__cta">Explore meals</span>
                  )}
                  {/* Show subtle "browse our menu" hint on static cards */}
                  {!isClickable && (
                    <span className="audience-card__browse-hint">Browse our menu</span>
                  )}
                </div>
              </>
            );

            // Render as <Link> only for students, plain <div> for others
            return isClickable ? (
              <Link key={audience.key} to={audience.link} className={cardClass}>
                {cardContent}
              </Link>
            ) : (
              <div key={audience.key} className={cardClass}>
                {cardContent}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AudienceSection;
