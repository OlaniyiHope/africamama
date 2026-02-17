
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import "./mycss.css";
import { Link, useLocation } from "react-router-dom";

const Header = ({ cartCount = 1 }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const { cartItems } = useCart();
const { pathname } = useLocation();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/api/db/categories`);
        setCategories(res.data);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };
    fetchCategories();
  }, []);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
  }, [menuOpen]);

  return (
    <div>
      <div className="hfeed page-wrapper" style={{ backgroundColor: "white" }}>
        <header
          id="bwp-header"
          className={`bwp-header header-v3${scrolled ? " scrolled" : ""}`}
          style={{
            backgroundColor: "white",
            position: "sticky",
            top: 0,
            zIndex: 1000,
            boxShadow: scrolled ? "0 2px 10px rgba(0,0,0,0.1)" : "none",
            transition: "box-shadow 0.3s"
          }}
        >

          {/* ========== MOBILE HEADER ========== */}
          <div className="header-mobile">
            <div className="container">
              <div className="row">
                <div className="col-sm-3 col-3 header-left">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle" onClick={toggleMenu}>
                      <span>Menu</span>
                    </button>
                  </div>
                </div>
                <div className="col-sm-6 col-6 header-center">
                  <div className="wpbingoLogo">
                    <Link to="/"><img src="https://papzi.wpbingosite.com/wp-content/uploads/2022/01/logo.png" alt="Papzi" /></Link>
                  </div>
                </div>
                <div className="col-sm-3 col-3 header-right">
                  <div className="papzi-topcart dropdown">
                    <Link className="cart-icon" to="/cart">
                      <div className="icons-cart">
                        <i className="icon-Cart"></i>
                        <span className="cart-count">{totalItems}</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="header-mobile-fixed">
              <div className="shop-page"><Link to="/shop"><i className="wpb-icon-shop"></i></Link></div>
              <div className="my-account"><div className="login-header"><Link to="/my-account"><i className="wpb-icon-user"></i></Link></div></div>
              <div className="search-box"><div className="search-toggle"><i className="wpb-icon-magnifying-glass"></i></div></div>
              <div className="wishlist-box"><Link to="/wishlist"><i className="wpb-icon-heart"></i></Link></div>
            </div> */}

            <div className="header-mobile-fixed">

  {/* Shop */}
  <div className={`shop-page${pathname === "/shop" ? " active" : ""}`}>
    <Link to="/shop">
      <i className="wpb-icon-shop"></i>
      {/* Uncomment the line below to show labels: */}
      {/* <span className="nav-label">Shop</span> */}
    </Link>
  </div>

  {/* Account */}
  <div className={`my-account${pathname === "/my-account" ? " active" : ""}`}>
    <div className="login-header">
      <Link to="/my-account">
        <i className="wpb-icon-user"></i>
        {/* <span className="nav-label">Account</span> */}
      </Link>
    </div>
  </div>

  {/* Search */}
  <div className="search-box">
    <div className="search-toggle">
      <i className="wpb-icon-magnifying-glass"></i>
      {/* <span className="nav-label">Search</span> */}
    </div>
  </div>

  {/* Wishlist */}
  <div className={`wishlist-box${pathname === "/wishlist" ? " active" : ""}`}>
    <Link to="/wishlist">
      <i className="wpb-icon-heart"></i>
      {/* <span className="nav-label">Wishlist</span> */}
    </Link>
  </div>

</div>

          </div>

          {/* ========== MOBILE SIDEBAR ========== */}
          <div className={`mobile-sidebar${menuOpen ? " open" : ""}`}>
            <button className="close-menu-btn" onClick={closeMenu}>×</button>
            <ul className="mobile-menu-list">
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/shop" onClick={closeMenu}>Shop</Link></li>
             
              <li><Link to="/about-us" onClick={closeMenu}>About</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
              <li><Link to="/faq" onClick={closeMenu}>Faq</Link></li>
              {/* <li>
                <span className="mobile-menu-label">Page</span>
                <ul className="mobile-sub-menu">
                  <li><Link to="/about-us" onClick={closeMenu}>About Us</Link></li>
                  <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                  <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
                  <li><Link to="/404" onClick={closeMenu}>Page 404</Link></li>
                </ul>
              </li> */}
              <li><Link to="/cart" onClick={closeMenu}>Cart ({totalItems})</Link></li>
              <li><Link to="/wishlist" onClick={closeMenu}>Wishlist</Link></li>
              <li><Link to="/my-account" onClick={closeMenu}>My Account</Link></li>
            </ul>
          </div>

          {menuOpen && <div className="mobile-menu-overlay" onClick={closeMenu} />}

          {/* ========== DESKTOP HEADER ========== */}
          <div className="header-desktop">
            <div className="header-wrapper">
              <div className="container">
                <div className="row desktop-row">

                  {/* LEFT: Logo + Phone */}
                  <div className="col-xl-4 col-lg-4 header-left desktop-col-left">
                    <div className="wpbingoLogo">
                      <Link to="/"><img src="https://papzi.wpbingosite.com/wp-content/uploads/2022/01/logo.png" alt="Papzi" /></Link>
                    </div>
                    <div className="phone">
                      <a href="tel:934595876">934595876</a>
                    </div>
                  </div>

                  {/* CENTER: Nav */}
                  <div className="col-xl-4 col-lg-4 text-center desktop-col-center">
                    <nav className="desktop-nav">
                      <ul className="desktop-menu">
                        <li className="desktop-menu-item"><Link to="/">Home</Link></li>
                        <li className="desktop-menu-item"><Link to="/shop">Shop</Link></li>
                        <li className="desktop-menu-item"><Link to="/about-us">About Us</Link></li>
                        <li className="desktop-menu-item"><Link to="/contact">Contact</Link></li>
                        <li className="desktop-menu-item"><Link to="/faq">Faq</Link></li>
                        {/* <li className="desktop-menu-item has-dropdown">
                          <a href="#">Page</a>
                          <ul className="desktop-dropdown">
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/faq">Faq</Link></li>
                            <li><Link to="/404">Page 404</Link></li>
                          </ul>
                        </li> */}
                      </ul>
                    </nav>
                  </div>

                  {/* RIGHT: Icons */}
                  <div className="col-xl-4 col-lg-4 header-right desktop-col-right">
                    <div className="header-page-link">
                      <div className="search-box">
                        <div className="search-toggle"><i className="icon-Search"></i></div>
                      </div>
                      <div className="login-header">
                        <Link className="active-login" to="/my-account"><i className="icon-Login"></i></Link>
                      </div>
                      <div className="wishlist-box">
                        <Link to="/wishlist"><i className="icon-Heart"></i></Link>
                        <span className="count-wishlist">0</span>
                      </div>
                      <div className="papzi-topcart dropdown light">
                        <Link className="cart-icon" to="/cart">
                          <div className="icons-cart">
                            <i className="icon-Cart"></i>
                            <span className="cart-count">{totalItems}</span>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

        </header>
      </div>

      <style>{`
        /* ===== RESPONSIVE TOGGLE ===== */
        .header-mobile  { display: block; }
        .header-desktop { display: none;  }
        .mobile-sidebar { display: none;  }

        @media (min-width: 992px) {
          .header-mobile          { display: none !important; }
          .mobile-sidebar,
          .mobile-menu-overlay    { display: none !important; }
          .header-desktop         { display: block; }
        }
        @media (max-width: 991px) {
          .mobile-sidebar         { display: block; }
        }

        /* ===== DESKTOP ROW — KEY HEIGHT FIX ===== */
        .desktop-row {
          display: flex !important;
          align-items: center;
          flex-wrap: nowrap;
          min-height: 60px;   /* ← was 80px, now compact */
          height: 60px;       /* ← lock the height */
        }
        .desktop-col-left  { display: flex; align-items: center; gap: 12px; }
        .desktop-col-center{ display: flex; align-items: center; justify-content: center; }
        .desktop-col-right { display: flex; align-items: center; justify-content: flex-end; }

        /* Logo image size */
        .wpbingoLogo img {
          height: 36px;      /* ← constrains logo to fit compact header */
          width: auto;
        }

        /* ===== DESKTOP NAV ===== */
        .desktop-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 60px;      /* ← match row height */
        }
        .desktop-menu {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          align-items: center;
          height: 60px;
        }
        .desktop-menu-item { position: relative; height: 60px; display: flex; align-items: center; }
        .desktop-menu-item > a {
          display: flex;
          align-items: center;
          padding: 0 14px;
          height: 60px;      /* ← was line-height: 80px */
          color: #333;
          font-size: 13px;
          font-weight: 600;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
          transition: color 0.2s;
        }
        .desktop-menu-item > a:hover { color: #e74c3c; }

        /* Dropdown */
        .desktop-dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: white;
          list-style: none;
          margin: 0;
          padding: 10px 0;
          min-width: 160px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.12);
          z-index: 9999;
          border-top: 2px solid #e74c3c;
        }
        .desktop-menu-item.has-dropdown:hover .desktop-dropdown { display: block; }
        .desktop-dropdown li a {
          display: block;
          padding: 9px 20px;
          color: #555;
          font-size: 13px;
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
        }
        .desktop-dropdown li a:hover { color: #e74c3c; background: #fafafa; }

        /* Right icons row */
        .desktop-col-right .header-page-link {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        /* ===== MOBILE SIDEBAR ===== */
        .mobile-sidebar {
          position: fixed;
          top: 0;
          left: -100%;
          width: 280px;
          max-width: 85vw;
          height: 100vh;
          background: white;
          z-index: 9999;
          transition: left 0.3s ease;
          overflow-y: auto;
          box-shadow: 2px 0 20px rgba(0,0,0,0.2);
          padding-top: 60px;
        }
        .mobile-sidebar.open { left: 0; }

        .close-menu-btn {
          position: absolute;
          top: 12px;
          right: 15px;
          background: none;
          border: none;
          font-size: 30px;
          cursor: pointer;
          color: #333;
          line-height: 1;
        }

        .mobile-menu-list { list-style: none; margin: 0; padding: 0; }
        .mobile-menu-list > li > a,
        .mobile-menu-label {
          display: block;
          padding: 14px 20px;
          color: #333;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          border-bottom: 1px solid #eee;
        }
        .mobile-menu-label { color: #999; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
        .mobile-sub-menu { list-style: none; padding: 0; margin: 0; background: #f8f8f8; }
        .mobile-sub-menu li a {
          display: block;
          padding: 11px 20px 11px 35px;
          color: #666;
          font-size: 14px;
          text-decoration: none;
          border-bottom: 1px solid #efefef;
        }
        .mobile-menu-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.5);
          z-index: 9998;
        }
      `}</style>
    </div>
  );
};

export default Header;