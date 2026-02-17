// // import React, { useState, useEffect, useContext } from "react";
// // import axios from "axios";
// // import { useCart } from "../context/CartContext";
// // import { Link, useNavigate } from "react-router-dom";
// // import { AuthContext } from "../context/AuthContext";
// // import "./mycss.css";

// // const Header3 = ({ cartCount = 1 }) => {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [categories, setCategories] = useState([]);
// //   const { cartItems } = useCart();
// //   const totalItems = cartItems.length;

// //   const { user, dispatch } = useContext(AuthContext);
// //   const navigate = useNavigate();

// //   const handleLogout = () => {
// //     dispatch({ type: "LOGOUT" });
// //     localStorage.removeItem("user");
// //     navigate("/");
// //   };

// //   useEffect(() => {
// //     const fetchCategories = async () => {
// //       try {
// //         const res = await axios.get(
// //           `${process.env.REACT_APP_API_URL}/api/db/categories`
// //         );
// //         const topLevelCategories = res.data.filter((cat) => !cat.parent);
// //         setCategories(topLevelCategories);
// //       } catch (err) {
// //         console.error("Error fetching categories:", err);
// //       }
// //     };
// //     fetchCategories();
// //   }, []);

// //   const toggleMenu = () => setMenuOpen((prev) => !prev);
// //   const closeMenu = () => setMenuOpen(false);

// //   useEffect(() => {
// //     document.body.style.overflow = menuOpen ? "hidden" : "unset";
// //   }, [menuOpen]);

// //   return (
// //     <div id="page" className="hfeed page-wrapper">
// //       <h1 className="bwp-title hide">
// //         <a href="index.html" rel="home">Papzi</a>
// //       </h1>

// //       <header id="bwp-header" className="bwp-header header-v1" style={{ position: "sticky", top: 0, zIndex: 1000 }}>

// //         {/* ========== MOBILE HEADER ========== */}
// //         <div className="header-mobile">
// //           <div className="container">
// //             <div className="row">
// //               <div className="col-sm-3 col-3 header-left">
// //                 <div className="navbar-header">
// //                   <button
// //                     type="button"
// //                     className="navbar-toggle"
// //                     onClick={toggleMenu}
// //                     style={{ background: "none", border: "none", cursor: "pointer", padding: "8px" }}
// //                   >
// //                     <span style={{ display: "block", width: "22px", height: "2px", background: "white", margin: "5px 0" }}></span>
// //                     <span style={{ display: "block", width: "22px", height: "2px", background: "white", margin: "5px 0" }}></span>
// //                     <span style={{ display: "block", width: "22px", height: "2px", background: "white", margin: "5px 0" }}></span>
// //                   </button>
// //                 </div>
// //               </div>

// //               <div className="col-sm-6 col-6 header-center">
// //                 <div className="wpbingoLogo">
// //                   <Link to="/">
// //                     <img
// //                       src="https://papzi.wpbingosite.com/wp-content/uploads/2022/01/logo-white.png"
// //                       alt="Papzi"
// //                       style={{ height: "36px", width: "auto" }}
// //                     />
// //                   </Link>
// //                 </div>
// //               </div>

// //               <div className="col-sm-3 col-3 header-right" style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
// //                 <Link to="/cart" style={{ color: "white", position: "relative" }}>
// //                   <i className="icon-Cart" style={{ fontSize: "20px" }}></i>
// //                   <span className="cart-count" style={{
// //                     position: "absolute", top: "-8px", right: "-8px",
// //                     background: "#e74c3c", color: "white", borderRadius: "50%",
// //                     width: "16px", height: "16px", fontSize: "10px",
// //                     display: "flex", alignItems: "center", justifyContent: "center"
// //                   }}>{totalItems}</span>
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Mobile bottom icons bar */}
// //           <div className="header-mobile-fixed">
// //             <div className="shop-page">
// //               <Link to="/shop"><i className="wpb-icon-shop"></i></Link>
// //             </div>
// //             <div className="my-account">
// //               <div className="login-header">
// //                 <Link to="/my-account"><i className="wpb-icon-user"></i></Link>
// //               </div>
// //             </div>
// //             <div className="search-box">
// //               <div className="search-toggle"><i className="wpb-icon-magnifying-glass"></i></div>
// //             </div>
// //             <div className="wishlist-box">
// //               <Link to="/wishlist"><i className="wpb-icon-heart"></i></Link>
// //             </div>
// //           </div>
// //         </div>

// //         {/* ========== MOBILE SIDEBAR ========== */}
// //         <div className={`h2-mobile-sidebar${menuOpen ? " open" : ""}`}>
// //           <button className="h2-close-btn" onClick={closeMenu}>×</button>
// //           <ul className="h2-mobile-menu">
// //             <li><Link to="/" onClick={closeMenu}>Home</Link></li>
// //             <li><Link to="/shop" onClick={closeMenu}>Shop</Link></li>
// //             <li><Link to="/products" onClick={closeMenu}>Product</Link></li>
// //             <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
// //             <li>
// //               <span className="h2-menu-label">Page</span>
// //               <ul className="h2-mobile-submenu">
// //                 <li><Link to="/about-us" onClick={closeMenu}>About Us</Link></li>
// //                 <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
// //                 <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
// //                 <li><Link to="/404" onClick={closeMenu}>Page 404</Link></li>
// //               </ul>
// //             </li>
// //             <li><Link to="/cart" onClick={closeMenu}>Cart ({totalItems})</Link></li>
// //             <li><Link to="/wishlist" onClick={closeMenu}>Wishlist</Link></li>
// //             <li><Link to="/my-account" onClick={closeMenu}>My Account</Link></li>
// //             {user && (
// //               <li>
// //                 <button onClick={() => { handleLogout(); closeMenu(); }} className="h2-logout-btn">
// //                   Logout
// //                 </button>
// //               </li>
// //             )}
// //           </ul>
// //         </div>

// //         {menuOpen && <div className="h2-overlay" onClick={closeMenu} />}

// //         {/* ========== DESKTOP HEADER — unchanged original structure ========== */}
// //         <div className="header-desktop">
// //           <div className="header-wrapper" data-sticky_header="0">
// //             <div className="container">
// //               <div className="row">
// //                 <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 header-left">
// //                   <div className="wpbingoLogo">
// //                     <Link to="/">
// //                       <img src="https://papzi.wpbingosite.com/wp-content/uploads/2022/01/logo-white.png" alt="Papzi" />
// //                     </Link>
// //                   </div>
// //                   <div className="phone hidden-xs">
// //                     <a href="tel:934595876">934595876</a>
// //                   </div>
// //                 </div>

// //                 <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 header-right">
// //                   <div className="wpbingo-menu-mobile header-menu">
// //                     <div className="header-menu-bg">
// //                       <div className="wpbingo-menu-wrapper">
// //                         <div className="megamenu">
// //                           <nav className="navbar-default">
// //                             <div className="bwp-navigation primary-navigation navbar-mega" data-text_close="Close">
// //                               <div className="float-menu">
// //                                 <nav id="main-navigation" className="std-menu clearfix">
// //                                   <div className="menu-main-menu-container">
// //                                     <ul id="menu-main-menu" className="menu">
// //                                       <li className="level-0 menu-item menu-item-has-children std-menu">
// //                                         <Link to="/"><span className="menu-item-text">Home</span></Link>
// //                                       </li>
// //                                       <li className="level-0 menu-item menu-item-has-children mega-menu mega-menu-fullwidth-width">
// //                                         <Link to="/shop"><span className="menu-item-text">Shop</span></Link>
// //                                       </li>
// //                                       <li className="level-0 menu-item menu-item-has-children mega-menu mega-menu-fullwidth-width">
// //                                         <Link to="/products"><span className="menu-item-text">Product</span></Link>
// //                                       </li>
// //                                       <li className="level-0 menu-item menu-item-has-children mega-menu mega-menu-fullwidth-width">
// //                                         <Link to="/blog"><span className="menu-item-text">Blog</span></Link>
// //                                       </li>
// //                                       <li className="level-0 menu-item menu-item-has-children std-menu">
// //                                         <a href="#"><span className="menu-item-text">Page</span></a>
// //                                         <ul className="sub-menu">
// //                                           <li className="level-1 menu-item std-menu"><Link to="/about-us">About Us</Link></li>
// //                                           <li className="level-1 menu-item std-menu"><Link to="/contact">Contact</Link></li>
// //                                           <li className="level-1 menu-item std-menu"><Link to="/faq">Faq</Link></li>
// //                                           <li className="level-1 menu-item std-menu"><Link to="/404">Page 404</Link></li>
// //                                         </ul>
// //                                       </li>
// //                                     </ul>
// //                                   </div>
// //                                 </nav>
// //                               </div>
// //                             </div>
// //                           </nav>
// //                         </div>
// //                       </div>
// //                     </div>
// //                   </div>

// //                   <div className="header-page-link">
// //                     <div className="search-box">
// //                       <div className="search-toggle"><i className="icon-Search"></i></div>
// //                     </div>
// //                     <div className="login-header">
// //                       <Link className="active-login" to="/my-account"><i className="icon-Login"></i></Link>
// //                     </div>
// //                     <div className="wishlist-box">
// //                       <Link to="/wishlist"><i className="icon-Heart"></i></Link>
// //                       <span className="count-wishlist">1</span>
// //                     </div>
// //                     <div className="papzi-topcart dropdown light">
// //                       <Link className="cart-icon" to="/cart">
// //                         <div className="icons-cart">
// //                           <i className="icon-Cart"></i>
// //                           <span className="cart-count">{totalItems}</span>
// //                         </div>
// //                       </Link>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //       </header>

// //       <style>{`
// //         /* ===== SHOW/HIDE ===== */
// //         .header-mobile  { display: block; }
// //         .header-desktop { display: none;  }
// //         .h2-mobile-sidebar { display: none; }

// //         @media (min-width: 992px) {
// //           .header-mobile         { display: none !important; }
// //           .h2-mobile-sidebar,
// //           .h2-overlay            { display: none !important; }
// //           .header-desktop        { display: block; }
// //         }
// //         @media (max-width: 991px) {
// //           .h2-mobile-sidebar     { display: block; }
// //         }

// //         /* ===== MOBILE SIDEBAR ===== */
// //         .h2-mobile-sidebar {
// //           position: fixed;
// //           top: 0;
// //           left: -100%;
// //           width: 280px;
// //           max-width: 85vw;
// //           height: 100vh;
// //           background: #1a1a1a;
// //           z-index: 9999;
// //           transition: left 0.3s ease;
// //           overflow-y: auto;
// //           box-shadow: 2px 0 20px rgba(0,0,0,0.4);
// //           padding-top: 60px;
// //         }
// //         .h2-mobile-sidebar.open { left: 0; }

// //         .h2-close-btn {
// //           position: absolute;
// //           top: 12px;
// //           right: 15px;
// //           background: none;
// //           border: none;
// //           font-size: 30px;
// //           cursor: pointer;
// //           color: white;
// //           line-height: 1;
// //         }

// //         .h2-mobile-menu {
// //           list-style: none;
// //           margin: 0;
// //           padding: 0;
// //         }
// //         .h2-mobile-menu > li > a,
// //         .h2-menu-label {
// //           display: block;
// //           padding: 14px 20px;
// //           color: #fff;
// //           font-size: 14px;
// //           font-weight: 600;
// //           text-decoration: none;
// //           border-bottom: 1px solid rgba(255,255,255,0.1);
// //           text-transform: uppercase;
// //           letter-spacing: 0.5px;
// //         }
// //         .h2-mobile-menu > li > a:hover { color: #ffb219; }

// //         .h2-menu-label {
// //           color: rgba(255,255,255,0.4);
// //           font-size: 11px;
// //           padding-top: 18px;
// //           padding-bottom: 8px;
// //         }

// //         .h2-mobile-submenu {
// //           list-style: none;
// //           padding: 0;
// //           margin: 0;
// //           background: rgba(255,255,255,0.05);
// //         }
// //         .h2-mobile-submenu li a {
// //           display: block;
// //           padding: 11px 20px 11px 35px;
// //           color: rgba(255,255,255,0.7);
// //           font-size: 13px;
// //           text-decoration: none;
// //           border-bottom: 1px solid rgba(255,255,255,0.07);
// //         }
// //         .h2-mobile-submenu li a:hover { color: #ffb219; }

// //         .h2-logout-btn {
// //           display: block;
// //           width: 100%;
// //           text-align: left;
// //           padding: 14px 20px;
// //           background: none;
// //           border: none;
// //           border-bottom: 1px solid rgba(255,255,255,0.1);
// //           color: #e74c3c;
// //           font-size: 14px;
// //           font-weight: 600;
// //           cursor: pointer;
// //           text-transform: uppercase;
// //           letter-spacing: 0.5px;
// //         }

// //         .h2-overlay {
// //           position: fixed;
// //           inset: 0;
// //           background: rgba(0,0,0,0.6);
// //           z-index: 9998;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // };

// // export default Header3;
// import React, { useState, useEffect, useContext } from "react";
// import axios from "axios";
// import { useCart } from "../context/CartContext";
// import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";


// const Header3 = ({ cartCount = 1 }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const { cartItems } = useCart();
//   const totalItems = cartItems.length;

//   const { user, dispatch } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     dispatch({ type: "LOGOUT" });
//     localStorage.removeItem("user");
//     navigate("/");
//   };

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get(
//           `${process.env.REACT_APP_API_URL}/api/db/categories`
//         );
//         const topLevelCategories = res.data.filter((cat) => !cat.parent);
//         setCategories(topLevelCategories);
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//       }
//     };
//     fetchCategories();
//   }, []);

//   const toggleMenu = () => setMenuOpen((prev) => !prev);
//   const closeMenu = () => setMenuOpen(false);

//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "unset";
//   }, [menuOpen]);

//   return (
//     <div id="page" className="hfeed page-wrapper">
//       <h1 className="bwp-title hide">
//         <a href="index.html" rel="home">Papzi</a>
//       </h1>

//      <header id="bwp-header" className="bwp-header header-v1"
//   style={{ 
//     position: "sticky", 
//     top: 0, 
//     zIndex: 1000,
//     background: "transparent",   // ← ADD THIS
//     backgroundColor: "transparent"  // ← ADD THIS
//   }}>

//         {/* ========== MOBILE HEADER ========== */}
//         <div className="header-mobile">
//           <div className="container">
//             <div className="row">

//               {/* LEFT: Hamburger */}
//               <div className="col-sm-3 col-3 header-left">
//                 <div className="navbar-header">
//                   {/* ✅ KEY FIX: onClick={toggleMenu} wired up */}
//                   <button
//                     type="button"
//                     className="navbar-toggle"
//                     onClick={toggleMenu}
//                     style={{
//                       background: "none",
//                       border: "none",
//                       cursor: "pointer",
//                       padding: "8px",
//                       display: "flex",
//                       flexDirection: "column",
//                       justifyContent: "center",
//                       gap: "5px"
//                     }}
//                   >
//                     <span style={{ display: "block", width: "22px", height: "2px", background: "white" }}></span>
//                     <span style={{ display: "block", width: "22px", height: "2px", background: "white" }}></span>
//                     <span style={{ display: "block", width: "22px", height: "2px", background: "white" }}></span>
//                   </button>
//                 </div>
//               </div>

//               {/* CENTER: Logo */}
//               <div className="col-sm-6 col-6 header-center">
//                 <div className="wpbingoLogo">
//                   <Link to="/">
//                     <img
//                       src="https://papzi.wpbingosite.com/wp-content/uploads/2022/01/logo-white.png"
//                       alt="Papzi"
//                       style={{ height: "36px", width: "auto" }}
//                     />
//                   </Link>
//                 </div>
//               </div>

//               {/* RIGHT: Cart */}
//               <div className="col-sm-3 col-3 header-right"
//                 style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
//                 <Link to="/cart" style={{ color: "white", position: "relative" }}>
//                   <i className="icon-Cart" style={{ fontSize: "20px" }}></i>
//                   {totalItems > 0 && (
//                     <span style={{
//                       position: "absolute", top: "-8px", right: "-8px",
//                       background: "#e74c3c", color: "white", borderRadius: "50%",
//                       width: "16px", height: "16px", fontSize: "10px",
//                       display: "flex", alignItems: "center", justifyContent: "center"
//                     }}>{totalItems}</span>
//                   )}
//                 </Link>
//               </div>

//             </div>
//           </div>

//           {/* Bottom icon bar */}
//           <div className="header-mobile-fixed">
//             <div className="shop-page">
//               <Link to="/shop"><i className="wpb-icon-shop"></i></Link>
//             </div>
//             <div className="my-account">
//               <div className="login-header">
//                 <Link to="/my-account"><i className="wpb-icon-user"></i></Link>
//               </div>
//             </div>
//             <div className="search-box">
//               <div className="search-toggle"><i className="wpb-icon-magnifying-glass"></i></div>
//             </div>
//             <div className="wishlist-box">
//               <Link to="/wishlist"><i className="wpb-icon-heart"></i></Link>
//             </div>
//           </div>
//         </div>

//         {/* ========== MOBILE SIDEBAR ========== */}
//         {/* ✅ KEY FIX: This block was missing entirely from Header3 */}
//         <div className={`h3-mobile-sidebar${menuOpen ? " open" : ""}`}>
//           <button className="h3-close-btn" onClick={closeMenu}>×</button>
//           <ul className="h3-mobile-menu">
//             <li><Link to="/" onClick={closeMenu}>Home</Link></li>
//             <li><Link to="/shop" onClick={closeMenu}>Shop</Link></li>
//             <li><Link to="/products" onClick={closeMenu}>Product</Link></li>
//             <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
//             <li>
//               <span className="h3-menu-label">Page</span>
//               <ul className="h3-mobile-submenu">
//                 <li><Link to="/about-us" onClick={closeMenu}>About Us</Link></li>
//                 <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
//                 <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
//                 <li><Link to="/404" onClick={closeMenu}>Page 404</Link></li>
//               </ul>
//             </li>
//             <li><Link to="/cart" onClick={closeMenu}>Cart ({totalItems})</Link></li>
//             <li><Link to="/wishlist" onClick={closeMenu}>Wishlist</Link></li>
//             <li><Link to="/my-account" onClick={closeMenu}>My Account</Link></li>
//             {user && (
//               <li>
//                 <button onClick={() => { handleLogout(); closeMenu(); }} className="h3-logout-btn">
//                   Logout
//                 </button>
//               </li>
//             )}
//           </ul>
//         </div>

//         {/* ✅ KEY FIX: Overlay was also missing */}
//         {menuOpen && <div className="h3-overlay" onClick={closeMenu} />}

//         {/* ========== DESKTOP HEADER — completely unchanged ========== */}
//         <div className="header-desktop">
//           <div className="header-wrapper" data-sticky_header="0">
//             <div className="container">
//               <div className="row">
//                 <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 header-left">
//                   <div className="wpbingoLogo">
//                     <Link to="/">
//                       <img src="https://papzi.wpbingosite.com/wp-content/uploads/2022/01/logo-white.png" alt="Papzi" />
//                     </Link>
//                   </div>
//                   <div className="phone hidden-xs">
//                     <a href="tel:934595876">934595876</a>
//                   </div>
//                 </div>

//                 <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12 header-right">
//                   <div className="wpbingo-menu-mobile header-menu">
//                     <div className="header-menu-bg">
//                       <div className="wpbingo-menu-wrapper">
//                         <div className="megamenu">
//                           <nav className="navbar-default">
//                             <div className="bwp-navigation primary-navigation navbar-mega" data-text_close="Close">
//                               <div className="float-menu">
//                                 <nav id="main-navigation" className="std-menu clearfix">
//                                   <div className="menu-main-menu-container">
//                                     <ul id="menu-main-menu" className="menu">
//                                       <li className="level-0 menu-item menu-item-has-children std-menu">
//                                         <Link to="/"><span className="menu-item-text">Home</span></Link>
//                                       </li>
//                                       <li className="level-0 menu-item menu-item-has-children mega-menu">
//                                         <Link to="/shop"><span className="menu-item-text">Shop</span></Link>
//                                       </li>
//                                       <li className="level-0 menu-item menu-item-has-children mega-menu">
//                                         <Link to="/products"><span className="menu-item-text">Product</span></Link>
//                                       </li>
//                                       <li className="level-0 menu-item menu-item-has-children mega-menu">
//                                         <Link to="/blog"><span className="menu-item-text">Blog</span></Link>
//                                       </li>
//                                       <li className="level-0 menu-item menu-item-has-children std-menu">
//                                         <a href="#"><span className="menu-item-text">Page</span></a>
//                                         <ul className="sub-menu">
//                                           <li className="level-1 menu-item std-menu"><Link to="/about-us">About Us</Link></li>
//                                           <li className="level-1 menu-item std-menu"><Link to="/contact">Contact</Link></li>
//                                           <li className="level-1 menu-item std-menu"><Link to="/faq">Faq</Link></li>
//                                           <li className="level-1 menu-item std-menu"><Link to="/404">Page 404</Link></li>
//                                         </ul>
//                                       </li>
//                                     </ul>
//                                   </div>
//                                 </nav>
//                               </div>
//                             </div>
//                           </nav>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="header-page-link">
//                     <div className="search-box">
//                       <div className="search-toggle"><i className="icon-Search"></i></div>
//                     </div>
//                     <div className="login-header">
//                       <Link className="active-login" to="/my-account"><i className="icon-Login"></i></Link>
//                     </div>
//                     <div className="wishlist-box">
//                       <Link to="/wishlist"><i className="icon-Heart"></i></Link>
//                       <span className="count-wishlist">1</span>
//                     </div>
//                     <div className="papzi-topcart dropdown light">
//                       <Link className="cart-icon" to="/cart">
//                         <div className="icons-cart">
//                           <i className="icon-Cart"></i>
//                           <span className="cart-count">{totalItems}</span>
//                         </div>
//                       </Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//       </header>

// <style>{`
//   /* ===== NUCLEAR FIX: Override every possible white source ===== */
//   #bwp-header,
//   #bwp-header *,
//   #bwp-header .bwp-header,
//   #bwp-header .header-wrapper,
//   #bwp-header .header-desktop,
//   #bwp-header .header-mobile,
//   #bwp-header .wpbingo-menu-mobile,
//   #bwp-header .header-menu-bg,
//   #bwp-header .wpbingo-menu-wrapper,
//   #bwp-header .megamenu,
//   #bwp-header .navbar-default,
//   #bwp-header .bwp-navigation,
//   #bwp-header .float-menu,
//   #bwp-header nav {
//     background: transparent !important;
//     background-color: transparent !important;
//     box-shadow: none !important;
//   }

//   /* Override page-wrapper white background ONLY at header level */
//   .hfeed.page-wrapper {
//     background: transparent !important;
//     background-color: transparent !important;
//   }

//   /* ===== SHOW/HIDE ===== */
//   .header-mobile   { display: block; }
//   .header-desktop  { display: none;  }
//   .h3-mobile-sidebar { display: none; }

//   @media (min-width: 992px) {
//     .header-mobile          { display: none !important; }
//     .h3-mobile-sidebar,
//     .h3-overlay             { display: none !important; }
//     .header-desktop         { display: block; }
//   }
//   @media (max-width: 991px) {
//     .h3-mobile-sidebar      { display: block; }
//     .header-mobile {
//       background: transparent !important;
//       background-color: transparent !important;
//     }
//   }

//   /* ===== MOBILE SIDEBAR ===== */
//   .h3-mobile-sidebar {
//     position: fixed;
//     top: 0;
//     left: -100%;
//     width: 280px;
//     max-width: 85vw;
//     height: 100vh;
//     background: #1a1a1a;
//     z-index: 9999;
//     transition: left 0.3s ease;
//     overflow-y: auto;
//     box-shadow: 2px 0 20px rgba(0,0,0,0.4);
//     padding-top: 60px;
//   }
//   .h3-mobile-sidebar.open { left: 0; }

//   .h3-close-btn {
//     position: absolute;
//     top: 12px;
//     right: 15px;
//     background: none;
//     border: none;
//     font-size: 30px;
//     cursor: pointer;
//     color: white;
//     line-height: 1;
//   }

//   .h3-mobile-menu {
//     list-style: none;
//     margin: 0;
//     padding: 0;
//   }
//   .h3-mobile-menu > li > a,
//   .h3-menu-label {
//     display: block;
//     padding: 14px 20px;
//     color: #fff;
//     font-size: 14px;
//     font-weight: 600;
//     text-decoration: none;
//     border-bottom: 1px solid rgba(255,255,255,0.1);
//     text-transform: uppercase;
//     letter-spacing: 0.5px;
//   }
//   .h3-mobile-menu > li > a:hover { color: #ffb219; }

//   .h3-menu-label {
//     color: rgba(255,255,255,0.4);
//     font-size: 11px;
//     padding-top: 18px;
//     padding-bottom: 8px;
//   }

//   .h3-mobile-submenu {
//     list-style: none;
//     padding: 0;
//     margin: 0;
//     background: rgba(255,255,255,0.05);
//   }
//   .h3-mobile-submenu li a {
//     display: block;
//     padding: 11px 20px 11px 35px;
//     color: rgba(255,255,255,0.7);
//     font-size: 13px;
//     text-decoration: none;
//     border-bottom: 1px solid rgba(255,255,255,0.07);
//   }
//   .h3-mobile-submenu li a:hover { color: #ffb219; }

//   .h3-logout-btn {
//     display: block;
//     width: 100%;
//     text-align: left;
//     padding: 14px 20px;
//     background: none;
//     border: none;
//     border-bottom: 1px solid rgba(255,255,255,0.1);
//     color: #e74c3c;
//     font-size: 14px;
//     font-weight: 600;
//     cursor: pointer;
//     text-transform: uppercase;
//     letter-spacing: 0.5px;
//   }

//   .h3-overlay {
//     position: fixed;
//     inset: 0;
//     background: rgba(0,0,0,0.6);
//     z-index: 9998;
//   }
// `}</style>
//     </div>
//   );
// };

// export default Header3;