
import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import "./Header.css";
import logo from "./media/logo.png";
/* ─── SVG Components ─── */
const LogoSVG = () => (
  <img src={logo} alt="Laurent Restaurant" style={{ width: 50, height: "auto" }} />
);

const MenuOpenerSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 25.2" className="eltdf-menu-opener"
	style={{width: 37, height: 25.2, display: "block", stroke: "#C9AB81", strokeWidth: 1, fill: "none"}}>
	<line y1="7.6" x2="24" y2="7.6"/>
	<line x1="4.1" y1="0.5" x2="28.1" y2="0.5"/>
	<line x1="10.1" y1="24.6" x2="34.1" y2="24.6"/>
	<line x1="13" y1="17.6" x2="37" y2="17.6"/>
  </svg>
);

const CloseMenuSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
	style={{width: 24, height: 24, display: "block", stroke: "#C9AB81", strokeWidth: 1.5, fill: "none"}}>
	<line x1="2" y1="2" x2="22" y2="22"/>
	<line x1="22" y1="2" x2="2" y2="22"/>
  </svg>
);

const ArrowSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-menu-arrow"
	style={{width: 8, height: 9, display: "inline-block", marginLeft: 6, fill: "none", stroke: "currentColor", strokeWidth: 1}}>
	<polyline points="0.4 0.4 3.6 4.2 0.4 8.1"/>
	<polyline points="4.5 0.4 7.7 4.2 4.5 8.1"/>
  </svg>
);

const CartSVG = ({ count }) => (
  <span style={{position: "relative", display: "inline-flex", alignItems: "center"}}>
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37 34" style={{width: 28, height: 26, fill: "none", stroke: "#C9AB81", strokeWidth: 1.2}}>
	  <path d="M1 1h5l3.5 18h18l3.5-12H8"/>
	  <circle cx="14" cy="30" r="2" fill="#C9AB81" stroke="none"/>
	  <circle cx="27" cy="30" r="2" fill="#C9AB81" stroke="none"/>
	</svg>
	{count > 0 && (
	  <span style={{
		position: "absolute", top: -8, right: -10,
		background: "transparent", border: "1px solid #C9AB81",
		color: "#C9AB81", fontSize: 10, width: 18, height: 18,
		borderRadius: "50%", display: "flex", alignItems: "center",
		justifyContent: "center", lineHeight: 1
	  }}>{count}</span>
	)}
  </span>
);

/* ─── Nav Data ─── */
const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Menu",
    href: "/our-menu",
  },
  {
    label: "Order",
    href: "/shop",
  },
  {
    label: "Blog",
    href: "/blog-standard",
  },
  {
    label: "Shop",
    href: "/shop",
  },
  {
    label: "Account",
    href: "/my-account",
  },
];

/* ─── Desktop Nav Item ─── */
const DesktopNavItem = ({ item, isActive }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
	const handleClick = (e) => {
	  if (ref.current && !ref.current.contains(e.target)) setOpen(false);
	};
	document.addEventListener("mousedown", handleClick);
	return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
	<li
	  ref={ref}
	  className={`menu-item${item.children ? " has_sub" : ""}${isActive ? " eltdf-active-item" : ""}`}
	  style={{position: "relative", listStyle: "none"}}
	  onMouseEnter={() => item.children && setOpen(true)}
	  onMouseLeave={() => item.children && setOpen(false)}
	>
	  <a
		href={item.href}
		onClick={(e) => { if (item.href === "#") e.preventDefault(); }}
		style={{
		  display: "inline-block", padding: "0 18px",
		  color: "#C9AB81",
		  textDecoration: "none", fontSize: 11,
		  letterSpacing: "0.18em", fontFamily: "inherit",
		  position: "relative"
		}}
	  >
		<span className="item_outer">
		  <span className="item_text">{item.label.toUpperCase()}</span>
		</span>
		{isActive && (
		  <span style={{
			position: "absolute", bottom: -6, left: "50%",
			transform: "translateX(-50%)", width: 30,
			height: 1, background: "#C9AB81", display: "block"
		  }}/>
		)}
	  </a>

	  {item.children && open && (
		<div className="second" style={{
		  position: "absolute", top: "100%", left: "50%",
		  transform: "translateX(-50%)",
		  background: "#0c1315", minWidth: 200,
		  padding: "10px 0", zIndex: 9999,
		  boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
		}}>
		  <ul style={{listStyle: "none", margin: 0, padding: 0}}>
			{item.children.map((child, ci) => (
			  <DesktopDropdownItem key={ci} child={child} />
			))}
		  </ul>
		</div>
	  )}
	</li>
  );
};

const DesktopDropdownItem = ({ child }) => {
  const [open, setOpen] = useState(false);

  return (
	<li
	  style={{position: "relative", listStyle: "none"}}
	  onMouseEnter={() => child.subChildren && setOpen(true)}
	  onMouseLeave={() => child.subChildren && setOpen(false)}
	>
	  <a
		href={child.href}
		onClick={(e) => { if (child.href === "#") e.preventDefault(); }}
		style={{
		  display: "flex", alignItems: "center", justifyContent: "space-between",
		  padding: "8px 20px", color: "#C9AB81", textDecoration: "none",
		  fontSize: 11, letterSpacing: "0.12em",
		  borderBottom: "1px solid rgba(201,171,129,0.08)"
		}}
	  >
		<span>{child.label}</span>
		{child.subChildren && <ArrowSVG />}
	  </a>

	  {child.subChildren && open && (
		<ul style={{
		  position: "absolute", top: 0, left: "100%",
		  background: "#0c1315", minWidth: 180,
		  padding: "10px 0", listStyle: "none", margin: 0,
		  boxShadow: "4px 4px 20px rgba(0,0,0,0.5)", zIndex: 9999
		}}>
		  {child.subChildren.map((sub, si) => (
			<li key={si} style={{listStyle: "none"}}>
			  <a href={sub.href} style={{
				display: "block", padding: "8px 20px",
				color: "#C9AB81", textDecoration: "none",
				fontSize: 11, letterSpacing: "0.12em",
				borderBottom: "1px solid rgba(201,171,129,0.08)"
			  }}>{sub.label}</a>
			</li>
		  ))}
		</ul>
	  )}
	</li>
  );
};

/* ─── Mobile Nav Item ─── */
const MobileNavItem = ({ item, depth = 0 }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children || item.subChildren;
  const children = item.children || item.subChildren;

  return (
	<li style={{listStyle: "none", borderBottom: "1px solid rgba(201,171,129,0.12)"}}>
	  <div style={{display: "flex", alignItems: "center", justifyContent: "space-between",
		paddingLeft: depth * 16}}>
		<a
		  href={item.href}
		  onClick={(e) => { if (item.href === "#") e.preventDefault(); }}
		  style={{
			display: "block", padding: "13px 20px",
			color: "#C9AB81", textDecoration: "none",
			fontSize: 11, letterSpacing: "0.15em", flex: 1
		  }}
		>
		  {item.label.toUpperCase()}
		</a>
		{hasChildren && (
		  <button
			onClick={() => setOpen(!open)}
			style={{
			  background: "none", border: "none", cursor: "pointer",
			  padding: "13px 20px", color: "#C9AB81",
			  transform: open ? "rotate(90deg)" : "none",
			  transition: "transform 0.2s"
			}}
		  >
			<ArrowSVG />
		  </button>
		)}
	  </div>
	  {hasChildren && open && (
		<ul style={{listStyle: "none", margin: 0, padding: 0, background: "rgba(0,0,0,0.2)"}}>
		  {children.map((child, ci) => (
			<MobileNavItem key={ci} item={child} depth={depth + 1} />
		  ))}
		</ul>
	  )}
	</li>
  );
};

/* ─────────────────────────────────────────────────────────
   SIDE MENU PANEL — Contact info only, NO nav links
───────────────────────────────────────────────────────── */
const SideMenuPanel = ({ open, onClose }) => (
  <>
	{/* Overlay */}
	{open && (
	  <div
		onClick={onClose}
		style={{
		  position: "fixed", inset: 0,
		  background: "rgba(0,0,0,0.5)",
		  zIndex: 10000
		}}
	  />
	)}

	{/* Panel */}
	<div style={{
	  position: "fixed", top: 0, right: 0,
	  width: 340, height: "100vh",
	  background: "#0c1315",
	  borderLeft: "1px solid rgba(201,171,129,0.15)",
	  transform: open ? "translateX(0)" : "translateX(100%)",
	  transition: "transform 0.35s ease",
	  zIndex: 10001,
	  display: "flex",
	  flexDirection: "column",
	  alignItems: "center",
	  padding: "36px 30px 50px",
	  overflowY: "auto",
	}}>

	  {/* Close button — top right */}
	  <button
		onClick={onClose}
		style={{
		  background: "none", border: "none", cursor: "pointer",
		  alignSelf: "flex-end", padding: 0, marginBottom: 60,
		}}
	  >
		<CloseMenuSVG />
	  </button>

	  {/* Logo */}
	  <div style={{ marginBottom: 50 }}>
		<LogoSVG />
	  </div>

	  {/* Restaurant name */}
	  <p style={{
		color: "#C9AB81", fontSize: 14,
		letterSpacing: "0.05em", textAlign: "center",
		margin: "0 0 10px", fontWeight: 300,
	  }}>
		Laurent Fine dining,
	  </p>

	  {/* Address */}
	  <p style={{
		color: "rgba(201,171,129,0.8)", fontSize: 13,
		letterSpacing: "0.04em", textAlign: "center",
		margin: "0 0 6px", fontWeight: 300,
	  }}>
		107 Duncan Avenue, New York
	  </p>

	  {/* Phone */}
	  <p style={{
		color: "rgba(201,171,129,0.8)", fontSize: 13,
		letterSpacing: "0.04em", textAlign: "center",
		margin: "0 0 6px", fontWeight: 300,
	  }}>
		914-309-7030,
	  </p>

	  {/* Hours */}
	  <p style={{
		color: "rgba(201,171,129,0.8)", fontSize: 13,
		letterSpacing: "0.04em", textAlign: "center",
		margin: "0 0 60px", fontWeight: 300,
	  }}>
		Open: 09:00 am – 01:00 pm
	  </p>

	  {/* Social links */}
	  {["Facebook", "Instagram", "Trip Advisor"].map((social) => (
		<div key={social} style={{ marginBottom: 28, textAlign: "center" }}>
		  <a
			href="#"
			onClick={(e) => e.preventDefault()}
			style={{
			  color: "#C9AB81",
			  textDecoration: "none",
			  fontSize: 13,
			  letterSpacing: "0.1em",
			  fontWeight: 300,
			}}
		  >
			{social}
		  </a>
		  {/* Underline decoration */}
		  <div style={{
			width: 60, height: 1,
			background: "rgba(201,171,129,0.4)",
			margin: "6px auto 0",
		  }} />
		</div>
	  ))}

	</div>
  </>
);

/* ─── Main Header Component ─── */
const Header = () => {
  const [sideMenuOpen, setSideMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const { cartItems } = useCart();
  const { dispatch } = useContext(AuthContext);
  const { pathname } = useLocation();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
	const handleScroll = () => setScrolled(window.scrollY > 50);
	window.addEventListener("scroll", handleScroll);
	return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
	const handleResize = () => setIsMobile(window.innerWidth <= 1024);
	window.addEventListener("resize", handleResize);
	return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
	document.body.style.overflow = (sideMenuOpen || mobileNavOpen) ? "hidden" : "";
	return () => { document.body.style.overflow = ""; };
  }, [sideMenuOpen, mobileNavOpen]);

  const handleLogout = () => {
	localStorage.removeItem("token");
	localStorage.removeItem("user");
	dispatch({ type: "LOGOUT" });
  };

  const headerStyle = {
	position: "fixed", top: 0, left: 0, right: 0,
	zIndex: 1000,
	background: scrolled ? "rgba(12,19,21,0.97)" : "#0c1315",
	transition: "background 0.3s ease",
	borderBottom: "1px solid rgba(201,171,129,0.15)"
  };

  return (
	<>
	  <header className="eltdf-page-header" style={headerStyle}>

		{/* Decorative grid lines */}
		<div style={{
		  position: "absolute", top: 0, bottom: 0, left: 0, right: 0,
		  display: "flex", pointerEvents: "none", zIndex: 0
		}}>
		  {[...Array(5)].map((_, i) => (
			<div key={i} style={{flex: 1, borderRight: "1px solid rgba(201,171,129,0.06)"}}/>
		  ))}
		</div>

		{/* ══ DESKTOP HEADER ══ */}
		{!isMobile && (
		  <div className="eltdf-menu-area" style={{
			position: "relative", zIndex: 1,
			display: "flex", alignItems: "center",
			height: 90, padding: "0 30px"
		  }}>
			{/* LEFT: Logo */}
			<div className="eltdf-position-left" style={{flex: "0 0 auto", minWidth: 80}}>
			  <div className="eltdf-logo-wrapper eltdf-svg-logo">
				<Link to="/" itemProp="url" style={{display: "inline-block"}}>
				  <LogoSVG />
				</Link>
			  </div>
			</div>

			{/* CENTER: Nav */}
			<div className="eltdf-position-center" style={{
			  flex: 1, display: "flex", justifyContent: "center", alignItems: "center"
			}}>
			  <nav className="eltdf-main-menu" style={{display: "flex", alignItems: "center"}}>
				<ul style={{
				  display: "flex", listStyle: "none",
				  margin: 0, padding: 0, alignItems: "center", gap: 0
				}}>
				  {navItems.map((item, i) => (
					<DesktopNavItem
					  key={i}
					  item={item}
					  isActive={pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href))}
					/>
				  ))}
				</ul>
			  </nav>
			</div>

			{/* RIGHT: Cart + Side Menu Opener */}
			<div className="eltdf-position-right" style={{
			  flex: "0 0 auto", minWidth: 80,
			  display: "flex", alignItems: "center",
			  gap: 24, justifyContent: "flex-end"
			}}>
			  <Link to="/cart" style={{display: "inline-flex", alignItems: "center"}}>
				<CartSVG count={totalItems} />
			  </Link>
			  <button
				className="eltdf-side-menu-button-opener"
				onClick={() => setSideMenuOpen(true)}
				style={{
				  background: "none", border: "none",
				  cursor: "pointer", padding: 0,
				  display: "inline-flex", alignItems: "center"
				}}
				aria-label="Open side menu"
			  >
				<MenuOpenerSVG />
			  </button>
			</div>
		  </div>
		)}

		{/* ══ MOBILE HEADER BAR ══ */}
		{isMobile && (
		  <div style={{
			position: "relative", zIndex: 1,
			display: "flex", alignItems: "center",
			justifyContent: "space-between",
			height: 70, padding: "0 20px"
		  }}>
			<Link to="/" style={{display: "inline-block"}}>
			  <LogoSVG />
			</Link>
			<div style={{display: "flex", alignItems: "center", gap: 20}}>
			  <Link to="/cart" style={{display: "inline-flex", alignItems: "center"}}>
				<CartSVG count={totalItems} />
			  </Link>
			  <button
				onClick={() => setMobileNavOpen(!mobileNavOpen)}
				style={{
				  background: "none", border: "none",
				  cursor: "pointer", padding: 0,
				  display: "inline-flex", alignItems: "center"
				}}
				aria-label={mobileNavOpen ? "Close menu" : "Open menu"}
			  >
				{mobileNavOpen ? <CloseMenuSVG /> : <MenuOpenerSVG />}
			  </button>
			</div>
		  </div>
		)}

		{/* Mobile Nav Drawer */}
		{isMobile && (
		  <div style={{
			overflow: "hidden",
			maxHeight: mobileNavOpen ? 1000 : 0,
			transition: "max-height 0.4s ease",
			background: "#0c1315",
			borderTop: mobileNavOpen ? "1px solid rgba(201,171,129,0.15)" : "none"
		  }}>
			<nav aria-label="Mobile Menu">
			  <ul style={{listStyle: "none", margin: 0, padding: 0}}>
				{navItems.map((item, i) => (
				  <MobileNavItem key={i} item={item} />
				))}
			  </ul>
			</nav>
		  </div>
		)}

	  </header>

	  {/* Side Menu Panel — contact info only */}
	  <SideMenuPanel open={sideMenuOpen} onClose={() => setSideMenuOpen(false)} />

	  <style>{`
		.menu-item a:hover span { opacity: 0.7; }
		.eltdf-main-menu ul { height: 90px; align-items: center; }
		.eltdf-main-menu li a { height: 90px; display: flex !important; align-items: center; }
		.eltdf-page-header { display: block !important; }
	  `}</style>
	</>
  );
};

export default Header;
