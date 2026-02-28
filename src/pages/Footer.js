// import React, { Fragment, useState, useEffect } from "react";

// import logo from "./logo.png";
// const Footer = () => {
//   return (
//   <div>


// 	<footer class="eltdf-page-footer ">
// 				<div class="eltdf-footer-top-holder">
//     <div class="eltdf-footer-top-inner eltdf-grid">
//         <div class="eltdf-grid-lines-holder eltdf-grid-columns-5"><div class="eltdf-grid-line eltdf-grid-column-1"></div><div class="eltdf-grid-line eltdf-grid-column-2"></div><div class="eltdf-grid-line eltdf-grid-column-3"></div><div class="eltdf-grid-line eltdf-grid-column-4"></div><div class="eltdf-grid-line eltdf-grid-column-5"></div></div>        <div class="eltdf-grid-row eltdf-footer-top-alignment-center">
//                             <div class="eltdf-column-content eltdf-grid-col-12">
//                     <div id="media_image-2" class="widget eltdf-footer-column-1 widget_media_image"><a href="index.html"><img width="46" height="66" src="wp-content/uploads/2019/10/footer-logo.png" class="image wp-image-75  attachment-full size-full" alt="u" style={{maxMidth: "100%;", height: "auto;"}} decoding="async" loading="lazy" /></a></div><div class="widget eltdf-separator-widget"><div class="eltdf-separator-holder clearfix  eltdf-separator-center eltdf-separator-normal">
// 	<div class="eltdf-separator" style={{borderStyle: "solid;", marginTop: "35px"}}></div>
// </div>
// </div><div id="text-2" class="widget eltdf-footer-column-1 widget_text">			<div class="textwidget"><p style={{lineHeight: "14px;"}}>Laurent Restaurant &amp; Fine dining, <a href="https://www.google.com/maps/place/Iron+Chef+House/@40.6988193,-73.9964619,17z/data=!4m13!1m7!3m6!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!2sNew+York,+NY,+USA!3b1!8m2!3d40.7127753!4d-74.0059728!3m4!1s0x89c25a37d80442e1:0x191a68ea3b55b3b7!8m2!3d40.6972497!4d-73.9926215?hl=en" target="_blank" rel="noopener noreferrer">71 Madison Ave </a></p>
// </div>
// 		</div><div id="text-3" class="widget eltdf-footer-column-1 widget_text">			<div class="textwidget"><p style={{lineHeight: "14px;"}}><a href="https://www.google.com/maps/place/Iron+Chef+House/@40.6988193,-73.9964619,17z/data=!4m13!1m7!3m6!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62!2sNew+York,+NY,+USA!3b1!8m2!3d40.7127753!4d-74.0059728!3m4!1s0x89c25a37d80442e1:0x191a68ea3b55b3b7!8m2!3d40.6972497!4d-73.9926215?hl=en" target="_blank" rel="noopener noreferrer">10013 New York, </a> <a href="tel:914-309-7030"> 914-309-7030, </a> <a href="cdn-cgi/l/email-protection.html#fb959a969ebb9e969a9297d5989496"> <span class="__cf_email__" data-cfemail="6416011701161205100d0b0a172408051116010a104a070b09">[email&#160;protected]</span></a></p>
// </div>
// 		</div><div id="text-5" class="widget eltdf-footer-column-1 widget_text">			<div class="textwidget"><p style={{lineHeight: "14px;"}}> Open: 09:00 am &#8211; 01:00 pm </p>
// </div>
// 		</div><div class="widget eltdf-separator-widget"><div class="eltdf-separator-holder clearfix  eltdf-separator-center eltdf-separator-normal">
// 	<div class="eltdf-separator" style={{borderStyle: "solid;", width: "0px;", borderBottomWidth: "2px;", marginTop: "0px"}}></div>
// </div>
// </div><div id="nav_menu-2" class="widget eltdf-footer-column-1 widget_nav_menu"><div class="menu-footer-menu-container"><ul id="menu-footer-menu" class="menu"><li id="menu-item-69" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-69"><a target="_blank" rel="noopener" href="https://www.facebook.com/QodeInteractive/">Facebook</a></li>
// <li id="menu-item-70" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-70"><a target="_blank" rel="noopener" href="https://www.instagram.com/qodeinteractive/">Instagram</a></li>
// <li id="menu-item-71" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-71"><a target="_blank" rel="noopener" href="https://www.tripadvisor.com/">Trip Advisor</a></li>
// </ul></div></div>                </div>
//                     </div>
//     </div>
// </div>			</footer>
//   </div>
//   );
// };

// export default Footer;


import React from "react";
import { useTheme } from "../context/ThemeContext";
import logo from "./logo.png";

const Footer = () => {
  const { tokens } = useTheme();

  return (
    <div>
      <footer
        className="eltdf-page-footer"
        style={{
          background: tokens.cardBg,
          transition: "background 0.3s ease, color 0.3s ease",
        }}
      >
        <div className="eltdf-footer-top-holder">
          <div className="eltdf-footer-top-inner eltdf-grid">

            {/* Grid lines */}
            <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className={`eltdf-grid-line eltdf-grid-column-${n}`}
                  style={{ borderColor: tokens.borderFaint }}
                />
              ))}
            </div>

            <div className="eltdf-grid-row eltdf-footer-top-alignment-center">
              <div className="eltdf-column-content eltdf-grid-col-12">

                {/* Logo */}
                <div id="media_image-2" className="widget eltdf-footer-column-1 widget_media_image">
                  <a href="index.html">
                    <img
                      width="106" height="129"
                      src={logo}
                      className="image wp-image-75 attachment-full size-full"
                      alt="African Mama Put"
                      style={{ maxWidth: "100%", height: "auto" }}
                      decoding="async" loading="lazy"
                    />
                  </a>
                </div>

                {/* Separator */}
                <div className="widget eltdf-separator-widget">
                  <div className="eltdf-separator-holder clearfix eltdf-separator-center eltdf-separator-normal">
                    <div
                      className="eltdf-separator"
                      style={{
                        borderStyle: "solid",
                        borderColor: tokens.border,
                        marginTop: "35px",
                        transition: "border-color 0.3s ease",
                      }}
                    />
                  </div>
                </div>

                {/* Restaurant name + address line 1 */}
                <div id="text-2" className="widget eltdf-footer-column-1 widget_text">
                  <div className="textwidget">
                    <p style={{ lineHeight: "14px", color: tokens.textMuted }}>
                      African Mama Put,{" "}
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: tokens.text, textDecoration: "none" }}
                      >
                        Liverpool, United Kingdom
                      </a>
                    </p>
                  </div>
                </div>

                {/* Address line 2 — phone + email */}
                <div id="text-3" className="widget eltdf-footer-column-1 widget_text">
                  <div className="textwidget">
                    <p style={{ lineHeight: "14px", color: tokens.textMuted }}>
                      <a
                        href="tel:0787689686"
                        style={{ color: tokens.text, textDecoration: "none" }}
                      >
                        0787689686,{" "}
                      </a>
                      <a
                        href="mailto:info@africanmamaput.co.uk"
                        style={{ color: tokens.text, textDecoration: "none" }}
                      >
                        info@africanmamaput.co.uk
                      </a>
                    </p>
                  </div>
                </div>

                {/* Opening hours */}
                <div id="text-5" className="widget eltdf-footer-column-1 widget_text">
                  <div className="textwidget">
                    <p style={{ lineHeight: "14px", color: tokens.textMuted }}>
                      Open: 10:00 am – 09:00 pm (Mon–Thu) &nbsp;|&nbsp; 10:00 am – 11:00 pm (Fri–Sat) &nbsp;|&nbsp; Sunday – Closed
                    </p>
                  </div>
                </div>

                {/* Thin separator */}
                <div className="widget eltdf-separator-widget">
                  <div className="eltdf-separator-holder clearfix eltdf-separator-center eltdf-separator-normal">
                    <div
                      className="eltdf-separator"
                      style={{
                        borderStyle: "solid",
                        borderColor: tokens.border,
                        borderBottomWidth: "2px",
                        marginTop: "0px",
                        transition: "border-color 0.3s ease",
                      }}
                    />
                  </div>
                </div>

                {/* Social links */}
                <div id="nav_menu-2" className="widget eltdf-footer-column-1 widget_nav_menu">
                  <div className="menu-footer-menu-container">
                    <ul id="menu-footer-menu" className="menu" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {[
                        { label: "Facebook", href: "https://www.facebook.com/" },
                        { label: "Instagram", href: "https://www.instagram.com/" },
                        { label: "Trip Advisor", href: "https://www.tripadvisor.com/" },
                      ].map((item) => (
                        <li key={item.label} className="menu-item">
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={item.href}
                            style={{
                              color: tokens.text,
                              textDecoration: "none",
                              fontSize: 11,
                              letterSpacing: "0.15em",
                              transition: "opacity 0.2s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
                            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Copyright */}
                <div
                  className="widget eltdf-footer-column-1"
                  style={{ marginTop: 24 }}
                >
                  <p style={{ color: tokens.textMuted, fontSize: 11, letterSpacing: "0.1em" }}>
                    © {new Date().getFullYear()} African Mama Put. All rights reserved.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
