

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import swallowImg from "../media/swallow.jpg";
import fruitImg from "../media/fruit.png";
import "./Banner.css"
import Header3 from "./Header3";
import Header from "./Header";
import HeroBanner from "./HeroBanner";

import logo from "./logo.png";
import Footer from "./Footer";
import HeroSlider from "./HeroSlider";
import AudienceSection from "./AudienceSection";
import { useTheme } from "../context/ThemeContext";
const Banner = ({ cartCount = 1 }) => {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [categories, setCategories] = useState([]);
  const { cartItems } = useCart();
  const { tokens } = useTheme();
  // const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalItems = cartItems.length;

  const { user, dispatch } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    localStorage.removeItem("user");
    navigate("/");
  };
  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     try {
  //       const res = await axios.get(
  //         `${process.env.REACT_APP_API_URL}/api/db/categories`
  //       );
  //       setCategories(res.data);
  //     } catch (err) {
  //       console.error("Error fetching categories:", err);
  //     }
  //   };
  //   fetchCategories();
  // }, []);
useEffect(() => {
  const fetchCategories = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/db/categories`
      );

      // Only top-level categories (no parent)
      const topLevelCategories = res.data.filter(
        (cat) => !cat.parent
      );

      setCategories(topLevelCategories);
    } catch (err) {
      console.error("Error fetching categories:", err);
    }
  };

  fetchCategories();
}, []);

  return (
<>
<body class="home page-template page-template-full-width page-template-full-width-php page page-id-7 theme-laurent laurent-core-2.4.3 woocommerce-no-js laurent-ver-3.4.1 eltdf-grid-1300 eltdf-content-is-behind-header eltdf-wide-dropdown-menu-content-in-grid eltdf-no-behavior eltdf-dropdown-animate-height eltdf-header-standard eltdf-menu-area-shadow-disable eltdf-menu-area-in-grid-shadow-disable eltdf-menu-area-in-grid-border-disable eltdf-logo-area-border-disable eltdf-logo-area-in-grid-border-disable eltdf-header-vertical-shadow-disable eltdf-header-vertical-border-disable eltdf-side-menu-slide-from-right eltdf-woocommerce-columns-2 eltdf-woo-normal-space eltdf-woo-pl-info-below-image eltdf-woo-single-thumb-below-image eltdf-woo-single-has-pretty-photo eltdf-default-mobile-header eltdf-sticky-up-mobile-header qode-export-1.0 wpb-js-composer js-comp-ver-7.9 vc_responsive" itemscope itemtype="https://schema.org/WebPage">
    
     <div class="eltdf-wrapper">
        <div class="eltdf-wrapper-inner">
            <div class="eltdf-double-grid-line-one"></div><div class="eltdf-double-grid-line-two"></div>
  <Header />
 		<a id='eltdf-back-to-top' href='#'>
        
            </a>
			        
            <div class="eltdf-content eltdf-home-content" >
                <div class="eltdf-content-inner">
<div class="eltdf-full-width">
    	<div class="eltdf-full-width-inner">
        <div class="eltdf-grid-lines-holder eltdf-grid-columns-5"><div class="eltdf-grid-line eltdf-grid-column-1"></div><div class="eltdf-grid-line eltdf-grid-column-2"></div><div class="eltdf-grid-line eltdf-grid-column-3"></div><div class="eltdf-grid-line eltdf-grid-column-4"></div><div class="eltdf-grid-line eltdf-grid-column-5"></div></div>					<div class="eltdf-grid-row">
				<div class="eltdf-page-content-holder eltdf-grid-col-12">
					<div class="wpb-content-wrapper"><div class="eltdf-row-grid-section-wrapper eltdf-content-aligment-center"  ><div class="eltdf-row-grid-section"><div class="vc_row wpb_row vc_row-fluid" ><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner"><div class="wpb_wrapper">
		<p class="rs-p-wp-fix"></p>
		

			<HeroSlider />
			<AudienceSection />
	

			
</div></div></div></div></div></div>






      {/* ══ ABOUT US SECTION ══ */}
<div className="eltdf-row-grid-section-wrapper eltdf-content-aligment-center"
  style={{ background: tokens.pageBg, transition: "background 0.3s ease" }}>
  <div className="eltdf-row-grid-section">
    <div className="vc_row wpb_row vc_row-fluid vc_custom_1578664464836">
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner">
          <div className="wpb_wrapper">
            <div className="eltdf-elements-holder eltdf-one-column eltdf-responsive-mode-768">
              <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-2687"
                data-1400-1600="0 27% 40px 27%" data-1025-1399="0 23% 13px 23%"
                data-769-1024="0 20% 70px 20%" data-681-768="0 10% 0px 10%" data-680="0 2% 130px 2%">
                <div className="eltdf-eh-item-inner">
                  <div className="eltdf-eh-item-content eltdf-eh-custom-2687" style={{ padding: "0 31% 70px 31%" }}>
                    <div className="eltdf-section-title-holder eltdf-st-decor-animation" style={{ textAlign: "center" }}>
                      <div className="eltdf-st-inner">

                        <span className="eltdf-st-tagline" style={{ color: tokens.tagline }}>
                          Our Story
                        </span>

                        <div className="eltdf-st-title-holder">
                          {/* ── Decor line above title ── */}
                          <div className="decor" style={{ borderColor: tokens.border }} />

                          <h1 className="eltdf-st-title" style={{ color: tokens.heading }}>
                            About us
                          </h1>

                          {/* ── Decor line below title ── */}
                          <div className="decor" style={{ borderColor: tokens.border }} />
                        </div>

                        <p className="eltdf-st-text" style={{ color: tokens.body }}>
                          From Chester to every corner of the UK, we're serving nostalgia, comfort, and good vibes through African food
                        </p>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{/* ══ THREE-COLUMN IMAGE SECTION ══ */}
<div className="eltdf-row-grid-section-wrapper eltdf-content-aligment-center"
  style={{ background: tokens.pageBg, transition: "background 0.3s ease" }}>
  <div className="eltdf-row-grid-section">
    <div className="vc_row wpb_row vc_row-fluid">
      <div className="wpb_column vc_column_container vc_col-sm-12">
        <div className="vc_column-inner vc_custom_1578912658047">
          <div className="wpb_wrapper">
            <div className="eltdf-elements-holder eltdf-three-columns eltdf-responsive-mode-680">

              {/* Left image */}
              <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-3026"
                data-1400-1600="170px 0 132px 0" data-1025-1399="150px 0 160px 0"
                data-769-1024="0 0 50px 0" data-681-768="0 0" data-680="0 0">
                <div className="eltdf-eh-item-inner">
                  <div className="eltdf-eh-item-content eltdf-eh-custom-3026" style={{ padding: "195px 10px 160px 0" }}>
                    <div className="eltdf-single-image-holder eltdf-image-appear-from-top">
                      <div className="eltdf-si-inner">
                   {/* Left image */}
<img loading="lazy" decoding="async" width="800" height="1013"
  src={swallowImg}
  className="attachment-full size-full" alt="Swallow and soup"
  srcSet={`${swallowImg} 800w`}
  sizes="(max-width: 800px) 100vw, 800px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Centre SVG pattern */}
              <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-4919"
                data-1400-1600="170px 0 132px 0" data-1025-1399="150px 0 160px 0"
                data-769-1024="0 0 50px 0" data-681-768="0 0" data-680="80px 0">
                <div className="eltdf-eh-item-inner">
                  <div className="eltdf-eh-item-content eltdf-eh-custom-4919" style={{ padding: "202px 73px 160px 73px" }}>
                    <div className="eltdf-single-image-holder eltdf-main-home-middle-svg-pattern eltdf-svg-pattern eltdf-image-appear-none">
                      <div className="eltdf-si-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="289.828" height="543.424">
                          <path fill="none" stroke={tokens.text} strokeWidth="1.5" strokeMiterlimit="10"
                            d="M0 0l72.457 72.457L0 144.913l72.457 72.457L0 289.826l72.457 72.456L0 434.739l72.457 72.456-36.229 36.229M72.457 0L0 72.457l72.457 72.457L0 217.37l72.457 72.457L0 362.282l72.457 72.457L0 507.195l36.229 36.229m72.457 0l36.229-36.229-72.457-72.456 72.457-72.457-72.457-72.456 72.457-72.457-72.457-72.457 72.457-72.457L72.457 0m72.457 0L72.457 72.457l72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 36.229 36.229m72.457-.001l36.229-36.229-72.457-72.456 72.457-72.457-72.457-72.456 72.457-72.457-72.457-72.457 72.457-72.457L144.914 0m72.457 0l-72.457 72.457 72.457 72.457-72.457 72.457 72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 36.229 36.229m72.457-.002l36.229-36.229-72.457-72.456 72.457-72.457-72.457-72.456 72.457-72.457-72.457-72.457 72.457-72.457L217.371 0m72.457 0l-72.457 72.457 72.457 72.457-72.457 72.457 72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 36.229 36.229M18.113 54.343L0 36.229m54.342-18.115L36.229 0M18.113 18.114L36.228 0M126.8 18.114L108.686 0M90.571 18.114L108.686 0m90.571 18.114L181.143 0m0 0l-18.114 18.114m108.56 0L253.475 0M235.36 18.114L253.475 0m18.24 54.343l18.113-18.114m-271.715 90.57L0 108.685m271.715 18.114l18.113-18.114M18.113 199.256L0 181.142m271.715 18.114l18.113-18.114m-271.715 90.57L0 253.598m271.715 18.114l18.113-18.114M72.457 0v36.229L90.57 54.343m-36.029 0l17.916-18.114M144.914 0v36.229l18.113 18.114m-36.029 0l17.916-18.114M217.368 0v36.229l18.114 18.114M36.229 36.229v36.229l18.113 18.114m54.344-54.343v36.229L126.8 90.571m54.343-54.342v36.229l18.114 18.114M253.6 36.229v36.229l18.113 18.114m-72.262-36.229l17.917-18.114M72.457 72.457v36.229L90.57 126.8m-36.029-.001l17.916-18.114m72.457-36.228v36.229l18.113 18.114m-36.029-.001l17.916-18.114m72.447-36.228v36.229l18.114 18.114m-36.03-.001l17.916-18.114M72.457 144.913v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M72.457 217.37v36.229l18.113 18.114m-36.029-.001l17.916-18.114m72.457-36.228v36.229l18.113 18.114m-36.029-.001l17.916-18.114m72.447-36.228v36.229l18.114 18.114m-36.03-.001l17.916-18.114M72.457 289.827v36.229L90.57 344.17m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M72.457 362.282v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M72.457 434.739v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M18.313 90.571l17.916-18.114M90.77 90.571l17.916-18.114m54.541 18.114l17.916-18.114m54.541 18.114L253.6 72.457M36.229 108.685v36.229l18.113 18.114m54.344-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.113 18.114m-253.4 0l17.916-18.114m54.541 18.114l17.916-18.114m72.457 0l-17.916 18.114m72.457 0l17.916-18.114M36.229 181.142v36.229l18.113 18.114m54.344-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.113 18.114m-253.4-.001l17.916-18.114m54.541 18.114l17.916-18.114m72.457 0l-17.916 18.114m72.457 0L253.6 217.37M36.229 253.598v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115M18.113 344.159L0 326.046m271.715 18.113l18.113-18.113M18.113 416.625L0 398.512m271.715 18.113l18.113-18.113M18.113 489.081L0 470.968m271.715 18.113l18.113-18.113M36.229 326.046v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m72.457-.001l-17.916 18.115m90.373-18.115l-17.916 18.115M36.229 398.511v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115M36.229 470.968v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115m72.457-.001l-17.916 18.115M72.457 507.195v36.229m72.457-36.229v36.229m72.457-36.229v36.229" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right image */}
              <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-3538"
                data-1400-1600="170px 0 132px 0" data-1025-1399="150px 0 160px 0"
                data-769-1024="0 0 50px 0" data-681-768="0 0" data-680="0 0">
                <div className="eltdf-eh-item-inner">
                  <div className="eltdf-eh-item-content eltdf-eh-custom-3538" style={{ padding: "195px 0 160px 10px" }}>
                    <div className="eltdf-single-image-holder eltdf-image-appear-from-top">
                      <div className="eltdf-si-inner">
                {/* Right image */}
<img loading="lazy" decoding="async" width="800" height="1013"
  src={fruitImg}
  className="attachment-full size-full" alt="Fresh African fruits"
  srcSet={`${fruitImg} 800w`}
  sizes="(max-width: 800px) 100vw, 800px" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



           <div className="vc_row wpb_row vc_row-fluid">
                            <div className="wpb_column vc_column_container vc_col-sm-12">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <div className="eltdf-elements-holder eltdf-two-columns eltdf-responsive-mode-768 fifty-fifty">

                                    {/* Testimonial block */}
                                    <div className="eltdf-eh-item"
                                      style={{ backgroundColor: tokens.cardBgAlt, transition: "background 0.3s ease" }}>
                                      <div className="eltdf-eh-item-inner">
                                        <div className="eltdf-eh-item-content" style={{ padding: "23% 0 23% 4%" }}>
                                          <div className="eltdf-testimonials-holder clearfix eltdf-testimonials-standard">
                                            <div className="eltdf-testimonials-mark" />
                                            <div className="eltdf-testimonials eltdf-owl-slider">
                                              {[
                                                { text: "Lorem ipsum dolor sit amet, consectetur adipisic sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.", author: "Robert Chang", job: "Sommelier" },
                                                { text: "Ut enim ad minim venia orem ipsum dolor sit amet, consectetur adipisic sed do. Eiusmod tempor incididunt ut labore et dolore magna.", author: "Jan Winsent", job: "Cook" },
                                                { text: "Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia orem ipsum dolor sit amet, consectetur.", author: "Andrea Chung", job: "Cook" },
                                              ].map((t, i) => (
                                                <div key={i} className="eltdf-testimonial-content">
                                                  <div className="eltdf-testimonial-text-holder">
                                                    <p className="eltdf-testimonial-text" style={{ color: tokens.body }}>{t.text}</p>
                                                    <h5 className="eltdf-testimonial-author">
                                                      <span className="eltdf-testimonials-author-name" style={{ color: tokens.text }}>{t.author}</span>
                                                    </h5>
                                                    <p className="eltdf-testimonials-author-job" style={{ color: tokens.textMuted }}>{t.job}</p>
                                                  </div>
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>

                                    {/* Image side */}
                                    <div className="eltdf-eh-item"
                                      style={{ backgroundImage: "url(wp-content/uploads/2019/10/main-img-4.jpg)" }}>
                                      <div className="eltdf-eh-item-inner">
                                        <div className="eltdf-eh-item-content" />
                                      </div>
                                    </div>

                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>


{/* <div class="eltdf-row-grid-section-wrapper eltdf-content-aligment-center"  ><div class="eltdf-row-grid-section"><div class="vc_row wpb_row vc_row-fluid vc_custom_1577721730223" ><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="eltdf-elements-holder   eltdf-two-columns  eltdf-responsive-mode-1024  fifty-fifty" ><div class="eltdf-eh-item    "  data-item-class="eltdf-eh-custom-8914" data-1025-1399="0 6% 0 0" data-769-1024="0 0" data-681-768="0 0" data-680="0 0">
	<div class="eltdf-eh-item-inner">
		<div class="eltdf-eh-item-content eltdf-eh-custom-8914" style={{padding: "0 7.8% 0 0"}}>
			<div class="eltdf-single-image-holder     eltdf-image-appear-from-top">
    <div class="eltdf-si-inner" >
                                                        <img loading="lazy" decoding="async" width="800" height="730" src="wp-content/uploads/2019/10/main-img-5.jpg" class="attachment-full size-full" alt="s" srcset="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-5.jpg 800w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-5-600x548.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-5-300x274.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-5-768x701.jpg 768w" sizes="(max-width: 800px) 100vw, 800px" />                                                </div>
</div>		</div>
	</div>
</div><div class="eltdf-eh-item    "  data-item-class="eltdf-eh-custom-2583" data-1400-1600="7.8% 4% 9% 7%" data-1025-1399="6.3% 0% 9% 6%" data-769-1024="80px 12% 0 12%" data-681-768="80px 9% 0 9%" data-680="80px 0 0 0">
	<div class="eltdf-eh-item-inner">
		<div class="eltdf-eh-item-content eltdf-eh-custom-2583" style={{padding: "52px 2% 9% 10%"}}>
			<div class="eltdf-section-title-holder   eltdf-st-title-wrapped eltdf-st-decor-animation" style={{textAlign: "center"}}>
	<div class="eltdf-st-inner">
                    <span class="eltdf-st-tagline">
                Recommendations            </span>
        		            <div class="eltdf-st-title-holder">
                                    <div class="decor">
                                      
                         
                        
                        
                        </div>
                                <h2 class="eltdf-st-title" >
                    Our best specialties                </h2>
                                    <div class="decor">
                   
                        
                        </div>
                            </div>
							<p class="eltdf-st-text" >
				Lorem ipsum dolor sit amet, consectet adipisicing eli sed do eiu smotem por incididunt ut abore et dolore magali qua. Ut enim ad minm eni amquis nostrud exercitation.			</p>
					</div>
</div><div class="vc_empty_space"   style={{height: "52px"}}><span class="vc_empty_space_inner"></span></div><a itemprop="url" href="gallery-page/index.html" target="_self"  class="eltdf-btn eltdf-btn-medium eltdf-btn-outline"  >
        <span class="eltdf-btn-text">View All</span>
        </a>		</div>
	</div>
</div></div></div></div></div></div></div></div> */}

        



{/* <div data-parallax-bg-image="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/main-background-5.jpg" data-parallax-bg-speed="1" class="vc_row wpb_row vc_row-fluid vc_custom_1574159245515 eltdf-parallax-row-holder eltdf-content-aligment-center" ><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="eltdf-video-button-holder  ">
	<div class="eltdf-video-button-image">
			</div>
	    <a class="eltdf-video-button-play"  href="https://vimeo.com/369245407?iframe=true" data-rel="prettyPhoto[video_button_pretty_photo_822]">
			<span class="eltdf-video-button-play-inner">
				<span>
    
        </span>
			</span>
		</a>
	</div></div></div></div></div>
	 */}
	

                          {/* ══ FROM OUR MENU ══ */}
                          <div className="eltdf-row-grid-section-wrapper"
                            style={{ backgroundColor: tokens.cardBg, transition: "background 0.3s ease" }}>
                            <div className="eltdf-row-grid-section">
                              <div className="vc_row wpb_row vc_row-fluid vc_custom_1577721733574">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div className="eltdf-section-title-holder eltdf-st-decor-animation"
                                        style={{ padding: "0 3%", textAlign: "center" }}>
                                        <div className="eltdf-st-inner">
                                          <span className="eltdf-st-tagline" style={{ color: tokens.tagline }}>
                                            Special selection
                                          </span>
                                          <div className="eltdf-st-title-holder">
                                            <div className="decor" />
                                            <h1 className="eltdf-st-title" style={{ color: tokens.heading }}>
                                              From our menu
                                            </h1>
                                            <div className="decor" />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* ── Menu pricing columns ── */}
                          <div className="eltdf-row-grid-section-wrapper"
                            style={{ backgroundColor: tokens.cardBg, transition: "background 0.3s ease" }}>
                            <div className="eltdf-row-grid-section">
                              <div className="vc_row wpb_row vc_row-fluid">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div className="eltdf-elements-holder eltdf-two-columns eltdf-responsive-mode-1024 fifty-fifty">

                                        {/* Left menu column */}
                                        <div className="eltdf-eh-item">
                                          <div className="eltdf-eh-item-inner">
                                            <div className="eltdf-eh-item-content" style={{ padding: "0 42px 0 0" }}>
                                              <div className="eltdf-pricing-holder">
                                                {[
                                                { name: "Jollof Rice & Chicken", price: "£12", desc: "Smoky party jollof, grilled chicken, fried plantain, coleslaw" },
{ name: "Egusi Soup & Pounded Yam", price: "£14", desc: "Ground melon seed soup, assorted meat, crayfish, stockfish" },
{ name: "Suya Platter", price: "£13", desc: "Spiced grilled beef skewers, sliced onions, tomatoes, yaji pepper" },
{ name: "Pepper Soup", price: "£10", desc: "Goat meat or catfish, utazi leaves, African pepper blend, scotch bonnet" },
{ name: "Fried Rice & Moin Moin", price: "£11", desc: "Nigerian fried rice, steamed bean pudding, grilled chicken or fish" },
                                                ].map((item, i) => (
                                                  <div key={i} className="eltdf-pricing-item">
                                                    <div className="eltdf-pricing-main">
                                                      <h6 className="eltdf-pricing-title" style={{ color: tokens.heading }}>{item.name}</h6>
                                                      <div className="eltdf-pricing-lines" style={{ borderColor: tokens.divider }} />
                                                      <span className="eltdf-pricing-price" style={{ color: tokens.text }}>{item.price}</span>
                                                    </div>
                                                    <p className="eltdf-pricing-desc" style={{ color: tokens.textMuted }}>{item.desc}</p>
                                                  </div>
                                                ))}
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        {/* Right menu column */}
                                        <div className="eltdf-eh-item">
                                          <div className="eltdf-eh-item-inner">
                                            <div className="eltdf-eh-item-content" style={{ padding: "0 0 0 42px" }}>
                                              <div className="eltdf-pricing-holder">
                                                {[
                                            { name: "Ofe Onugbu & Eba", price: "£13", desc: "Bitter leaf soup, assorted meat, stockfish, palm oil, eba or fufu" },
{ name: "Afang Soup", price: "£15", desc: "Afang leaves, waterleaf, periwinkle, assorted meat, palm oil" },
{ name: "Banga Soup & Starch", price: "£13", desc: "Palm nut soup, dried fish, oburunbebe stick, traditional starch" },
{ name: "Asun (Peppered Goat)", price: "£14", desc: "Smoked roasted goat, scotch bonnet, onions, peppers, palm oil" },
{ name: "Catfish Pepper Soup", price: "£12", desc: "Fresh catfish, uziza leaves, ehuru, cameroon pepper, crayfish" },
                                                ].map((item, i) => (
                                                  <div key={i} className="eltdf-pricing-item">
                                                    <div className="eltdf-pricing-main">
                                                      <h6 className="eltdf-pricing-title" style={{ color: tokens.heading }}>{item.name}</h6>
                                                      <div className="eltdf-pricing-lines" style={{ borderColor: tokens.divider }} />
                                                      <span className="eltdf-pricing-price" style={{ color: tokens.text }}>{item.price}</span>
                                                    </div>
                                                    <p className="eltdf-pricing-desc" style={{ color: tokens.textMuted }}>{item.desc}</p>
                                                  </div>
                                                ))}
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* View All button */}
                          <div className="vc_row wpb_row vc_row-fluid eltdf-content-aligment-center"
                            style={{ backgroundColor: tokens.cardBg, transition: "background 0.3s ease" }}>
                            <div className="wpb_column vc_column_container vc_col-sm-12">
                              <div className="vc_column-inner">
                                <div className="wpb_wrapper">
                                  <a href="our-menu/index.html"
                                    className="eltdf-btn eltdf-btn-medium eltdf-btn-outline"
                                    style={{ borderColor: tokens.btnOutlineBorder, color: tokens.btnOutlineText }}>
                                    <span className="eltdf-btn-text">View All</span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* ══ OUR TIPS SECTION ══ */}
                          <div className="eltdf-row-grid-section-wrapper"
                            style={{ background: tokens.pageBg, transition: "background 0.3s ease" }}>
                            <div className="eltdf-row-grid-section">
                              <div className="vc_row wpb_row vc_row-fluid vc_custom_1577721744350">

                                {/* Left: two images */}
                                <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-7 vc_col-md-12">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div className="eltdf-elements-holder eltdf-two-columns eltdf-responsive-mode-680 fifty-fifty">
                                        <div className="eltdf-eh-item">
                                          <div className="eltdf-eh-item-inner">
                                            <div className="eltdf-eh-item-content" style={{ padding: "0 27px 0 0" }}>
                                              <div className="eltdf-single-image-holder eltdf-image-appear-from-top">
                                                <div className="eltdf-si-inner">
                                                  <img loading="lazy" width="800" height="1275"
                                                    src="wp-content/uploads/2019/10/main-img-6.jpg" alt="" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="eltdf-eh-item">
                                          <div className="eltdf-eh-item-inner">
                                            <div className="eltdf-eh-item-content" style={{ padding: "0 0 0 27px" }}>
                                              <div className="eltdf-single-image-holder eltdf-main-home-delayed-image eltdf-image-appear-from-top">
                                                <div className="eltdf-si-inner">
                                                  <img loading="lazy" width="800" height="1275"
                                                    src="wp-content/uploads/2019/10/main-img-8.jpg" alt="" />
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Right: text */}
                                <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-5 vc_col-md-12">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">
                                      <div className="eltdf-elements-holder eltdf-one-column eltdf-responsive-mode-768">
                                        <div className="eltdf-eh-item">
                                          <div className="eltdf-eh-item-inner">
                                            <div className="eltdf-eh-item-content" style={{ padding: "20% 11% 0 11%" }}>
                                              <div className="eltdf-section-title-holder eltdf-st-decor-animation" style={{ textAlign: "center" }}>
                                                <div className="eltdf-st-inner">
                                                  <span className="eltdf-st-tagline" style={{ color: tokens.tagline }}>
                                                    Our food philosophy
                                                  </span>
                                                  <div className="eltdf-st-title-holder">
                                                    <div className="decor" />
                                                    <h2 className="eltdf-st-title" style={{ color: tokens.heading }}>Our tips</h2>
                                                    <div className="decor" />
                                                  </div>
                                                  <p className="eltdf-st-text" style={{ color: tokens.body }}>
                                                    Lorem ipsum dolor sit amet, consectet nei ad icing eli sed do eiu sm od tempor se incidid sens ne utabor et dolore magiqua.
                                                  </p>
                                                  <div className="eltdf-st-button">
                                                    <a href="our-kitchen/index.html" style={{ margin: "35px 0 0", borderColor: tokens.btnOutlineBorder, color: tokens.btnOutlineText }}
                                                      className="eltdf-btn eltdf-btn-medium eltdf-btn-simple">
                                                      <span className="eltdf-btn-text">Read More</span>
                                                    </a>
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                              </div>
                            </div>
                          </div>

                          {/* ══ BOOK A TABLE ══ */}
                          <div className="eltdf-row-grid-section-wrapper eltdf-content-aligment-left"
                            style={{ backgroundColor: tokens.cardBgAlt, transition: "background 0.3s ease" }}>
                            <div className="eltdf-row-grid-section">
                              <div className="vc_row wpb_row vc_row-fluid vc_row-has-fill">
                                <div className="wpb_column vc_column_container vc_col-sm-12">
                                  <div className="vc_column-inner">
                                    <div className="wpb_wrapper">

                                      <div className="eltdf-section-title-holder eltdf-st-decor-animation" style={{ textAlign: "center" }}>
                                        <div className="eltdf-st-inner">
                                          <span className="eltdf-st-tagline" style={{ color: tokens.tagline }}>
                                            Reservations
                                          </span>
                                          <div className="eltdf-st-title-holder">
                                            <div className="decor" />
                                            <h1 className="eltdf-st-title" style={{ color: tokens.heading }}>Book a table</h1>
                                            <div className="decor" />
                                          </div>
                                        </div>
                                      </div>

                                      <div className="vc_empty_space" style={{ height: "56px" }} />

                                      <div className="eltdf-elements-holder eltdf-one-column eltdf-responsive-mode-768">
                                        <div className="eltdf-eh-item">
                                          <div className="eltdf-eh-item-inner">
                                            <div className="eltdf-eh-item-content" style={{ padding: "0 8.4%" }}>
                                              <div className="eltdf-rf-holder eltdf-rf-inline">
                                                <form className="eltdf-rf" target="_blank"
                                                  action="https://www.opentable.com/restref/client/" name="eltdf-rf">
                                                  <input type="hidden" name="rid" value="161697" />
                                                  <input type="hidden" name="restref" value="161697" />
                                                  <div className="eltdf-rf-row clearfix">
                                                    <div className="eltdf-rf-col-holder">
                                                      <div className="eltdf-rf-field-holder clearfix">
                                                        <select name="partysize" className="eltdf-ot-people"
                                                          style={{ background: tokens.inputBg, color: tokens.inputText, borderColor: tokens.inputBorder }}>
                                                          {[...Array(10)].map((_, i) => (
                                                            <option key={i+1} value={i+1}>{i+1} {i === 0 ? "Person" : "People"}</option>
                                                          ))}
                                                        </select>
                                                      </div>
                                                    </div>
                                                    <div className="eltdf-rf-col-holder">
                                                      <div className="eltdf-rf-field-holder eltdf-rf-date-col clearfix">
                                                        <input type="text" defaultValue="02/19/2026" className="eltdf-ot-date" name="date"
                                                          style={{ background: tokens.inputBg, color: tokens.inputText, borderColor: tokens.inputBorder }} />
                                                      </div>
                                                    </div>
                                                    <div className="eltdf-rf-col-holder eltdf-rf-time-col">
                                                      <div className="eltdf-rf-field-holder clearfix">
                                                        <select name="time" className="eltdf-ot-time"
                                                          style={{ background: tokens.inputBg, color: tokens.inputText, borderColor: tokens.inputBorder }}>
                                                          <option value="11:00">11:00 am</option>
                                                          <option value="12:00">12:00 pm</option>
                                                          <option value="13:00">01:00 pm</option>
                                                          <option value="18:00">06:00 pm</option>
                                                          <option value="19:00">07:00 pm</option>
                                                          <option value="20:00">08:00 pm</option>
                                                          <option value="21:00">09:00 pm</option>
                                                        </select>
                                                      </div>
                                                    </div>
                                                    <div className="eltdf-rf-col-holder eltdf-rf-btn-holder">
                                                      <button type="submit"
                                                        className="eltdf-btn eltdf-btn-huge eltdf-btn-outline"
                                                        style={{ borderColor: tokens.btnOutlineBorder, color: tokens.btnOutlineText }}>
                                                        <span className="eltdf-btn-text">Book Now</span>
                                                      </button>
                                                    </div>
                                                  </div>
                                                  <input type="hidden" name="datetime" value="" />
                                                </form>
                                                <p className="eltdf-rf-copyright" style={{ color: tokens.textMuted }}>
                                                  *Powered by OpenTable
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* ── end Book a Table ── */}

</div>					</div>
							</div>
		        	</div>

    </div>

</div> 
	</div>
      </div>
      
      <Footer />

	  </div>
	  </body>
	  </>
      


    
  );
};

export default Banner;
