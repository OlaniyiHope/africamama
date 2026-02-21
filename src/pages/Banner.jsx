

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import "./Banner.css"
import Header3 from "./Header3";
import Header from "./Header";
import HeroBanner from "./HeroBanner";

import logo from "./logo.png";
import Footer from "./Footer";
const Banner = ({ cartCount = 1 }) => {
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const [categories, setCategories] = useState([]);
  const { cartItems } = useCart();

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
			<rs-module-wrap id="rev_slider_1_1_wrapper" data-source="gallery" style={{visibility:"hidden", background:"transparent", padding: "0;"}}>
				<rs-module id="rev_slider_1_1"  data-version="6.7.18">
					<rs-slides style={{overflow: "hidden", position: "absolute;"}}>
						<rs-slide style={{position: "absolute;"}} data-key="rs-8" data-title="Slide" data-thumb="//laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-1-50x100.jpg" data-in="o:0;" data-out="a:false;">
							<img fetchpriority="high" decoding="async" src="wp-content/plugins/revslider/sr6/assets/assets/dummy.png" alt="d" title="main-h-new-rev-img-1" width="1920" height="1100" class="rev-slidebg tp-rs-img rs-lazyload" data-lazyload="//laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-1.jpg" data-parallax="5" data-no-retina />

						<rs-layer
								id="slider-1-slide-8-layer-0" 
								data-type="text"
								data-color="#c9ab81"
								data-xy="x:c;xo:-440px,-317px,-141px,-68px;y:m;yo:-43px,-34px,-148px,-113px;"
								data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
								data-dim="w:264px,264px,264px,156px;"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="e:power2.inOut;st:260;sp:1200;sR:260;"
								data-frame_999="y:50;o:0;e:power2.inOut;st:w;sp:850;sR:3040;"
								style={{zIndex:"5;", fontFamily:"metropolis1920regular, sans-serif;"}}
							>The 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-8-layer-1" 
								data-type="text"
								data-color="#c9ab81"
								data-xy="x:c;xo:0,0,0,-10px;y:m;yo:-138px,-116px,-233px,-160px;"
								data-text="w:normal;s:25,25,25,19;l:35,35,35,28;a:center;"
								data-dim="w:423px,423px,423px,273px;"
								data-vbility="t,t,t,f"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="y:50;"
								data-frame_1="e:power2.inOut;st:190;sp:1000;sR:190;"
								data-frame_999="y:-50;o:0;st:w;sp:800;sR:3310;"
						style={{zIndex:"13;", fontFamily:"metropolis1920regular, sans-serif;"}}
							>welcome to our delicious corner 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-8-layer-2" 
								data-type="text"
								data-xy="x:c;y:m;yo:78px,66px,66px,59px;"
								data-text="w:normal;s:23;l:33;fw:300;a:center;"
								data-dim="w:681px,681px,598px,339px;"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="y:50;"
								data-frame_1="e:power2.inOut;st:580;sp:1300;sR:580;"
								data-frame_999="y:50;o:0;e:power2.inOut;st:w;sp:1000;sR:2620;"
								style={{zIndex:"9;", fontFamily:"metropolis1920regular, sans-serif;"}}
							>We have a proper passion for cooking. Love is the secret ingredient that makes all our meals taste better and magical. 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-8-layer-3" 
								data-type="text"
								data-xy="x:c;y:m;yo:202px,175px,189px,183px;"
								data-text="w:normal;a:center;"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="y:50;"
								data-frame_1="e:power2.inOut;st:750;sp:1300;sR:750;"
								data-frame_999="y:50;o:0;e:power2.inOut;st:w;sp:1000;sR:2450;"
							style={{zIndex:"8;", fontFamily:"metropolis1920regular, sans-serif;"}}
							><a itemprop="url" href="/shop" target="_self"  class="eltdf-btn eltdf-btn-large eltdf-btn-outline"  >
        <span class="eltdf-btn-text">View Menu Dishes</span>
        </a> 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-8-layer-4" 
								data-type="text"
								data-color="#c9ab81"
								data-xy="x:c;xo:-97px,-75px,114px,66px;y:m;yo:-43px,-34px,-148px,-113px;"
								data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
								data-dim="w:417px,417px,417px,237px;"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="e:power2.inOut;st:360;sp:1200;sR:360;"
								data-frame_999="y:50;o:0;e:power2.inOut;st:w;sp:1050;sR:2940;"
						style={{zIndex:"11;", fontFamily:"metropolis1920regular, sans-serif;"}}
							>Best 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-8-layer-5" 
								data-type="text"
								data-color="#c9ab81"
								data-xy="x:c;xo:355px,266px,12px,10px;y:m;yo:-43px,-34px,-36px,-53px;"
								data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
								data-dim="w:472px,472px,472px,262px;"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="e:power2.inOut;st:470;sp:1200;sR:470;"
								data-frame_999="y:50;o:0;e:power2.inOut;st:w;sp:1250;sR:2830;"
								style={{zIndex:"10;", fontFamily:"metropolis1920regular, sans-serif;"}}
							>Dishes 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-8-layer-22" 
								data-type="image"
								data-xy="x:c;xo:651px,486px,327px,327px;y:m;yo:-37px,-28px,-88px,-88px;"
								data-text="w:normal;"
								data-dim="w:[&#039;56px&#039;,&#039;56px&#039;,&#039;56px&#039;,&#039;56px&#039;];h:[&#039;10px&#039;,&#039;10px&#039;,&#039;10px&#039;,&#039;10px&#039;];"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:440;sp:1000;sR:440;"
								data-frame_999="o:0;st:w;sR:3060;"
							style={{zIndex:"15;", fontFamily:"metropolis1920regular, sans-serif;"}}
							><img decoding="async" src="wp-content/plugins/revslider/sr6/assets/assets/dummy.png" alt="c" class="tp-rs-img rs-lazyload" width="56" height="10" data-lazyload="//laurent.qodeinteractive.com/wp-content/uploads/2019/11/rev-img.png" data-no-retina /> 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-8-layer-23" 
								data-type="image"
								data-xy="x:c;xo:-640px,-482px,-327px,-327px;y:m;yo:-37px,-28px,-88px,-88px;"
								data-text="w:normal;"
								data-dim="w:[&#039;56px&#039;,&#039;56px&#039;,&#039;56px&#039;,&#039;56px&#039;];h:[&#039;10px&#039;,&#039;10px&#039;,&#039;10px&#039;,&#039;10px&#039;];"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:510;sp:1000;sR:510;"
								data-frame_999="o:0;st:w;sR:2990;"
				style={{zIndex:"14;", fontFamily:"metropolis1920regular, sans-serif;"}}
							><img decoding="async" src="wp-content/plugins/revslider/sr6/assets/assets/dummy.png" alt="c" class="tp-rs-img rs-lazyload" width="56" height="10" data-lazyload="//laurent.qodeinteractive.com/wp-content/uploads/2019/11/rev-img.png" data-no-retina /> 
							</rs-layer>
			</rs-slide>
						<rs-slide style={{position: "absolute;"}} data-key="rs-40" data-title="Slide" data-thumb="//laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-2-50x100.jpg" data-in="o:0;" data-out="a:false;">
							<img decoding="async" src="wp-content/plugins/revslider/sr6/assets/assets/dummy.png" alt="x" title="main-h-new-rev-img-2" width="1920" height="1100" class="rev-slidebg tp-rs-img rs-lazyload" data-lazyload="//laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-2.jpg" data-parallax="5" data-no-retina />

						<rs-layer
								id="slider-1-slide-40-layer-0" 
								data-type="text"
								data-color="#c9ab81"
								data-xy="x:c;xo:-512px,-355px,-161px,-94px;y:m;yo:-43px,-34px,-148px,-113px;"
								data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
								data-dim="w:264px,264px,264px,156px;"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="e:power2.inOut;st:260;sp:1200;sR:260;"
								data-frame_999="y:50;o:0;e:power2.inOut;st:w;sp:850;sR:3040;"
			style={{zIndex:"5;", fontFamily:"metropolis1920regular, sans-serif;"}}
							>The 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-40-layer-1" 
								data-type="text"
								data-color="#c9ab81"
								data-xy="x:c;y:m;yo:-138px,-116px,-233px,-160px;"
								data-text="w:normal;s:25,25,25,19;l:35,35,35,28;a:center;"
								data-dim="w:423px,423px,423px,295px;"
								data-vbility="t,t,t,f"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="y:50;"
								data-frame_1="e:power2.inOut;st:190;sp:1000;sR:190;"
								data-frame_999="y:-50;o:0;st:w;sp:800;sR:3310;"
							style={{zIndex:"13;", fontFamily:"metropolis1920regular, sans-serif;"}}
							>take a sip of our innovative drinks 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-40-layer-2" 
								data-type="text"
								data-xy="x:c;y:m;yo:78px,66px,66px,59px;"
								data-text="w:normal;s:23;l:33;fw:300;a:center;"
								data-dim="w:743px,743px,598px,301px;"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="y:50;"
								data-frame_1="e:power2.inOut;st:580;sp:1300;sR:580;"
								data-frame_999="y:50;o:0;e:power2.inOut;st:w;sp:1000;sR:2620;"
			style={{zIndex:"9;", fontFamily:"metropolis1920regular, sans-serif;"}}
							>From the delicious food to wonderful cocktails, Laurent’s offer is guaranteed to satisfy all of your taste buds. 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-40-layer-3" 
								data-type="text"
								data-xy="x:c;y:m;yo:202px,175px,189px,183px;"
								data-text="w:normal;a:center;"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="y:50;"
								data-frame_1="e:power2.inOut;st:750;sp:1300;sR:750;"
								data-frame_999="y:50;o:0;e:power2.inOut;st:w;sp:1000;sR:2450;"
							style={{zIndex:"8;", fontFamily:"metropolis1920regular, sans-serif;"}}
							><a itemprop="url" href="/shop" target="_self"  class="eltdf-btn eltdf-btn-large eltdf-btn-outline"  >
        <span class="eltdf-btn-text">View Menu Dishes</span>
        </a> 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-40-layer-4" 
								data-type="text"
								data-color="#c9ab81"
								data-xy="x:c;xo:-139px,-63px,134px,67px;y:m;yo:-43px,-34px,-148px,-113px;"
								data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
								data-dim="w:417px,417px,417px,237px;"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="e:power2.inOut;st:360;sp:1200;sR:360;"
								data-frame_999="y:50;o:0;e:power2.inOut;st:w;sp:1050;sR:2940;"
						style={{zIndex:"11;", fontFamily:"metropolis1920regular, sans-serif;"}}
							>Finest 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-40-layer-5" 
								data-type="text"
								data-color="#c9ab81"
								data-xy="x:c;xo:423px,320px,12px,0;y:m;yo:-43px,-34px,-36px,-53px;"
								data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
								data-dim="w:472px,472px,472px,262px;"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="e:power2.inOut;st:470;sp:1200;sR:470;"
								data-frame_999="y:50;o:0;e:power2.inOut;st:w;sp:1250;sR:2830;"
							style={{zIndex:"10;", fontFamily:"metropolis1920regular, sans-serif;"}}
							>Drinks 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-40-layer-22" 
								data-type="image"
								data-xy="x:c;xo:714px,521px,327px,327px;y:m;yo:-37px,-28px,-88px,-88px;"
								data-text="w:normal;"
								data-dim="w:[&#039;56px&#039;,&#039;56px&#039;,&#039;56px&#039;,&#039;56px&#039;];h:[&#039;10px&#039;,&#039;10px&#039;,&#039;10px&#039;,&#039;10px&#039;];"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:440;sp:1000;sR:440;"
								data-frame_999="o:0;st:w;sR:3060;"
				style={{zIndex:"15;", fontFamily:"metropolis1920regular, sans-serif;"}}
							><img decoding="async" src="wp-content/plugins/revslider/sr6/assets/assets/dummy.png" alt="c" class="tp-rs-img rs-lazyload" width="56" height="10" data-lazyload="//laurent.qodeinteractive.com/wp-content/uploads/2019/11/rev-img.png" data-no-retina />  
							</rs-layer>

							<rs-layer
								id="slider-1-slide-40-layer-23" 
								data-type="image"
								data-xy="x:c;xo:-712px,-518px,-327px,-327px;y:m;yo:-37px,-28px,-88px,-88px;"
								data-text="w:normal;"
								data-dim="w:[&#039;56px&#039;,&#039;56px&#039;,&#039;56px&#039;,&#039;56px&#039;];h:[&#039;10px&#039;,&#039;10px&#039;,&#039;10px&#039;,&#039;10px&#039;];"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:510;sp:1000;sR:510;"
								data-frame_999="o:0;st:w;sR:2990;"
							style={{zIndex:"14;", fontFamily:"metropolis1920regular, sans-serif;"}}
							><img decoding="async" src="wp-content/plugins/revslider/sr6/assets/assets/dummy.png" alt="c" class="tp-rs-img rs-lazyload" width="56" height="10" data-lazyload="//laurent.qodeinteractive.com/wp-content/uploads/2019/11/rev-img.png" data-no-retina /> 
							</rs-layer>
				</rs-slide>
						<rs-slide style={{position: "absolute;"}} data-key="rs-41" data-title="Slide" data-thumb="//laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-3-50x100.jpg" data-in="o:0;" data-out="a:false;">
							<img decoding="async" src="wp-content/plugins/revslider/sr6/assets/assets/dummy.png" alt="d" title="main-h-new-rev-img-3" width="1920" height="1100" class="rev-slidebg tp-rs-img rs-lazyload" data-lazyload="//laurent.qodeinteractive.com/wp-content/uploads/2019/12/main-h-new-rev-img-3.jpg" data-parallax="5" data-no-retina />

						<rs-layer
								id="slider-1-slide-41-layer-0" 
								data-type="text"
								data-color="#c9ab81"
								data-xy="x:c;xo:-440px,-311px,-146px,-70px;y:m;yo:-43px,-34px,-148px,-113px;"
								data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
								data-dim="w:264px,264px,264px,156px;"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="e:power2.inOut;st:260;sp:1200;sR:260;"
								data-frame_999="y:50;o:0;e:power2.inOut;st:w;sp:850;sR:3040;"
							style={{zIndex:"5;", fontFamily:"metropolis1920regular, sans-serif;"}}
							>The 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-41-layer-1" 
								data-type="text"
								data-color="#c9ab81"
								data-xy="x:c;y:m;yo:-138px,-116px,-233px,-160px;"
								data-text="w:normal;s:25,25,25,19;l:35,35,35,28;a:center;"
								data-dim="w:423px,423px,423px,284px;"
								data-vbility="t,t,t,f"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="y:50;"
								data-frame_1="st:190;sp:1000;sR:190;"
								data-frame_999="y:-50;o:0;e:power2.inOut;st:w;sp:800;sR:3310;"
					style={{zIndex:"13;", fontFamily:"metropolis1920regular, sans-serif;"}}
							>the most delicious flavor combos 
							</rs-layer>

						<rs-layer
								id="slider-1-slide-41-layer-2" 
								data-type="text"
								data-xy="x:c;y:m;yo:78px,66px,66px,59px;"
								data-text="w:normal;s:23;l:33;fw:300;a:center;"
								data-dim="w:701px,701px,598px,298px;"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="y:50;"
								data-frame_1="e:power2.inOut;st:580;sp:1300;sR:580;"
								data-frame_999="y:50;o:0;e:power2.inOut;st:w;sp:1000;sR:2620;"
							style={{zIndex:"9;", fontFamily:"metropolis1920regular, sans-serif;"}}
							>Experimentation in the kitchen and focus on excellence are among our main driving forces in cooking. 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-41-layer-3" 
								data-type="text"
								data-xy="x:c;y:m;yo:202px,175px,189px,183px;"
								data-text="w:normal;a:center;"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="y:50;"
								data-frame_1="e:power2.inOut;st:750;sp:1300;sR:750;"
								data-frame_999="y:50;o:0;e:power2.inOut;st:w;sp:1000;sR:2450;"
							style={{zIndex:"8;", fontFamily:"metropolis1920regular, sans-serif;"}}
							><a itemprop="url" href="/shop" target="_self"  class="eltdf-btn eltdf-btn-large eltdf-btn-outline"  >
        <span class="eltdf-btn-text">View Menu Dishes</span>
        </a> 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-41-layer-4" 
								data-type="text"
								data-color="#c9ab81"
								data-xy="x:c;xo:-110px,-65px,120px,68px;y:m;yo:-43px,-34px,-148px,-113px;"
								data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
								data-dim="w:417px,417px,417px,237px;"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="e:power2.inOut;st:360;sp:1200;sR:360;"
								data-frame_999="y:50;o:0;e:power2.inOut;st:w;sp:1050;sR:2940;"
			style={{zIndex:"11;", fontFamily:"metropolis1920regular, sans-serif;"}}
							>Food 
							</rs-layer>

						<rs-layer
								id="slider-1-slide-41-layer-5" 
								data-type="text"
								data-color="#c9ab81"
								data-xy="x:c;xo:335px,267px,12px,10px;y:m;yo:-43px,-34px,-36px,-53px;"
								data-text="w:normal;s:120,75,75,42;l:145,120,120,50;ls:28px,25px,25px,12px;a:center;"
								data-dim="w:472px,472px,472px,262px;"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="e:power2.inOut;st:470;sp:1200;sR:470;"
								data-frame_999="y:50;o:0;e:power2.inOut;st:w;sp:1250;sR:2830;"
							style={{zIndex:"10;", fontFamily:"metropolis1920regular, sans-serif;"}}
							>Heaven 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-41-layer-22" 
								data-type="image"
								data-xy="x:c;xo:644px,481px,327px,327px;y:m;yo:-37px,-28px,-88px,-88px;"
								data-text="w:normal;"
								data-dim="w:[&#039;56px&#039;,&#039;56px&#039;,&#039;56px&#039;,&#039;56px&#039;];h:[&#039;10px&#039;,&#039;10px&#039;,&#039;10px&#039;,&#039;10px&#039;];"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:440;sp:1000;sR:440;"
								data-frame_999="o:0;st:w;sR:3060;"
							style={{zIndex:"15;", fontFamily:"metropolis1920regular, sans-serif;"}}
							><img decoding="async" src="wp-content/plugins/revslider/sr6/assets/assets/dummy.png" alt="c" class="tp-rs-img rs-lazyload" width="56" height="10" data-lazyload="//laurent.qodeinteractive.com/wp-content/uploads/2019/11/rev-img.png" data-no-retina /> 
							</rs-layer>

							<rs-layer
								id="slider-1-slide-41-layer-23" 
								data-type="image"
								data-xy="x:c;xo:-640px,-473px,-327px,-327px;y:m;yo:-37px,-28px,-88px,-88px;"
								data-text="w:normal;"
								data-dim="w:[&#039;56px&#039;,&#039;56px&#039;,&#039;56px&#039;,&#039;56px&#039;];h:[&#039;10px&#039;,&#039;10px&#039;,&#039;10px&#039;,&#039;10px&#039;];"
								data-basealign="slide"
								data-rsp_o="off"
								data-rsp_bd="off"
								data-frame_0="sX:0.9;sY:0.9;"
								data-frame_1="st:510;sp:1000;sR:510;"
								data-frame_999="o:0;st:w;sR:2990;"
						style={{zIndex:"14;", fontFamily:"metropolis1920regular, sans-serif;"}}
							><img decoding="async" src="wp-content/plugins/revslider/sr6/assets/assets/dummy.png" alt="c" class="tp-rs-img rs-lazyload" width="56" height="10" data-lazyload="//laurent.qodeinteractive.com/wp-content/uploads/2019/11/rev-img.png" data-no-retina /> 
							</rs-layer>
			</rs-slide>
					</rs-slides>
				</rs-module>
	
			</rs-module-wrap>

</div></div></div></div></div></div>


<div class="eltdf-row-grid-section-wrapper eltdf-content-aligment-center"  ><div class="eltdf-row-grid-section"><div class="vc_row wpb_row vc_row-fluid vc_custom_1578664464836" ><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="eltdf-elements-holder   eltdf-one-column  eltdf-responsive-mode-768  " ><div class="eltdf-eh-item    "  data-item-class="eltdf-eh-custom-2687" data-1400-1600="0 27% 40px 27%" data-1025-1399="0 23% 13px 23%" data-769-1024="0 20% 70px 20%" data-681-768="0 10% 0px 10%" data-680="0 2% 130px 2%">
	<div class="eltdf-eh-item-inner">
		<div class="eltdf-eh-item-content eltdf-eh-custom-2687" style={{padding: "0 31% 70px 31%"}}>
			<div class="eltdf-section-title-holder    eltdf-st-decor-animation" style={{textAlign: "center"}}>
	<div class="eltdf-st-inner">
                    <span class="eltdf-st-tagline">
                Our Story            </span>
        		            <div class="eltdf-st-title-holder">
                                    <div class="decor">
                                      
                                      
                        
                        
                        
                        </div>
                                <h1 class="eltdf-st-title" >
                    About us                </h1>
                                    <div class="decor">
                                      
                                      
                       
                        
                        
                        </div>
                            </div>
							<p class="eltdf-st-text" >
				Lorem ipsum dolor sit amet, consectet adipisicing eli sed do eiu sm od tempor incididunt ut abore et dolore mag aliqua. Ut enim ad minm eniam quis nostrud.			</p>
					</div>
</div>		</div>
	</div>
</div></div></div></div></div></div></div></div>






<div class="eltdf-row-grid-section-wrapper eltdf-content-aligment-center"  ><div class="eltdf-row-grid-section"><div class="vc_row wpb_row vc_row-fluid" ><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner vc_custom_1578912658047"><div class="wpb_wrapper"><div class="eltdf-elements-holder   eltdf-three-columns  eltdf-responsive-mode-680  " ><div class="eltdf-eh-item    "  data-item-class="eltdf-eh-custom-3026" data-1400-1600="170px 0 132px 0" data-1025-1399="150px 0 160px 0" data-769-1024="0 0 50px 0" data-681-768="0 0" data-680="0 0">
	<div class="eltdf-eh-item-inner">
		<div class="eltdf-eh-item-content eltdf-eh-custom-3026" style={{padding: "195px 10px 160px 0"}}>
			<div class="eltdf-single-image-holder     eltdf-image-appear-from-top">
    <div class="eltdf-si-inner" >
                                                        <img loading="lazy" decoding="async" width="800" height="1013" src="wp-content/uploads/2019/10/main-img-1.jpg" class="attachment-full size-full" alt="d" srcset="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-1.jpg 800w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-1-600x760.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-1-237x300.jpg 237w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-1-768x972.jpg 768w" sizes="(max-width: 800px) 100vw, 800px" />                                                </div>
</div>		</div>
	</div>
</div><div class="eltdf-eh-item    "  data-item-class="eltdf-eh-custom-4919" data-1400-1600="170px 0 132px 0" data-1025-1399="150px 0 160px 0" data-769-1024="0 0 50px 0" data-681-768="0 0" data-680="80px 0">
	<div class="eltdf-eh-item-inner">
		<div class="eltdf-eh-item-content eltdf-eh-custom-4919" style={{padding: "202px 73px 160px 73px"}}>
			<div className="eltdf-single-image-holder eltdf-main-home-middle-svg-pattern eltdf-svg-pattern   eltdf-image-appear-none">
    <div className="eltdf-si-inner">
        <svg xmlns="http://www.w3.org/2000/svg" width="289.828" height="543.424">
            <path fill="none" stroke="#9A7D57" strokeWidth="1.5" strokeMiterlimit="10" d="M0 0l72.457 72.457L0 144.913l72.457 72.457L0 289.826l72.457 72.456L0 434.739l72.457 72.456-36.229 36.229M72.457 0L0 72.457l72.457 72.457L0 217.37l72.457 72.457L0 362.282l72.457 72.457L0 507.195l36.229 36.229m72.457 0l36.229-36.229-72.457-72.456 72.457-72.457-72.457-72.456 72.457-72.457-72.457-72.457 72.457-72.457L72.457 0m72.457 0L72.457 72.457l72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 36.229 36.229m72.457-.001l36.229-36.229-72.457-72.456 72.457-72.457-72.457-72.456 72.457-72.457-72.457-72.457 72.457-72.457L144.914 0m72.457 0l-72.457 72.457 72.457 72.457-72.457 72.457 72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 36.229 36.229m72.457-.002l36.229-36.229-72.457-72.456 72.457-72.457-72.457-72.456 72.457-72.457-72.457-72.457 72.457-72.457L217.371 0m72.457 0l-72.457 72.457 72.457 72.457-72.457 72.457 72.457 72.457-72.457 72.456 72.457 72.457-72.457 72.456 36.229 36.229M18.113 54.343L0 36.229m54.342-18.115L36.229 0M18.113 18.114L36.228 0M126.8 18.114L108.686 0M90.571 18.114L108.686 0m90.571 18.114L181.143 0m0 0l-18.114 18.114m108.56 0L253.475 0M235.36 18.114L253.475 0m18.24 54.343l18.113-18.114m-271.715 90.57L0 108.685m271.715 18.114l18.113-18.114M18.113 199.256L0 181.142m271.715 18.114l18.113-18.114m-271.715 90.57L0 253.598m271.715 18.114l18.113-18.114M72.457 0v36.229L90.57 54.343m-36.029 0l17.916-18.114M144.914 0v36.229l18.113 18.114m-36.029 0l17.916-18.114M217.368 0v36.229l18.114 18.114M36.229 36.229v36.229l18.113 18.114m54.344-54.343v36.229L126.8 90.571m54.343-54.342v36.229l18.114 18.114M253.6 36.229v36.229l18.113 18.114m-72.262-36.229l17.917-18.114M72.457 72.457v36.229L90.57 126.8m-36.029-.001l17.916-18.114m72.457-36.228v36.229l18.113 18.114m-36.029-.001l17.916-18.114m72.447-36.228v36.229l18.114 18.114m-36.03-.001l17.916-18.114M72.457 144.913v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M72.457 217.37v36.229l18.113 18.114m-36.029-.001l17.916-18.114m72.457-36.228v36.229l18.113 18.114m-36.029-.001l17.916-18.114m72.447-36.228v36.229l18.114 18.114m-36.03-.001l17.916-18.114M72.457 289.827v36.229L90.57 344.17m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M72.457 362.282v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M72.457 434.739v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.457-36.229v36.229l18.113 18.114m-36.029 0l17.916-18.114m72.447-36.229v36.229l18.114 18.114m-36.03 0l17.916-18.114M18.313 90.571l17.916-18.114M90.77 90.571l17.916-18.114m54.541 18.114l17.916-18.114m54.541 18.114L253.6 72.457M36.229 108.685v36.229l18.113 18.114m54.344-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.113 18.114m-253.4 0l17.916-18.114m54.541 18.114l17.916-18.114m72.457 0l-17.916 18.114m72.457 0l17.916-18.114M36.229 181.142v36.229l18.113 18.114m54.344-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.114 18.114m54.343-54.343v36.229l18.113 18.114m-253.4-.001l17.916-18.114m54.541 18.114l17.916-18.114m72.457 0l-17.916 18.114m72.457 0L253.6 217.37M36.229 253.598v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115M18.113 344.159L0 326.046m271.715 18.113l18.113-18.113M18.113 416.625L0 398.512m271.715 18.113l18.113-18.113M18.113 489.081L0 470.968m271.715 18.113l18.113-18.113M36.229 326.046v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m72.457-.001l-17.916 18.115m90.373-18.115l-17.916 18.115M36.229 398.511v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115M36.229 470.968v36.228l18.113 18.115m54.344-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.114 18.115m54.343-54.343v36.228l18.113 18.115m-253.4 0l17.916-18.115m54.541 18.115l17.916-18.115m54.541 18.115l17.916-18.115m72.457-.001l-17.916 18.115M72.457 507.195v36.229m72.457-36.229v36.229m72.457-36.229v36.229"/>
        </svg>
    </div>
</div>	</div>
	</div>
</div><div class="eltdf-eh-item    "  data-item-class="eltdf-eh-custom-3538" data-1400-1600="170px 0 132px 0" data-1025-1399="150px 0 160px 0" data-769-1024="0 0 50px 0" data-681-768="0 0" data-680="0 0">
	<div class="eltdf-eh-item-inner">
		<div class="eltdf-eh-item-content eltdf-eh-custom-3538" style={{padding: "195px 0 160px 10px"}}>
			<div class="eltdf-single-image-holder     eltdf-image-appear-from-top">
    <div class="eltdf-si-inner" >
                                                        <img loading="lazy" decoding="async" width="800" height="1013" src="wp-content/uploads/2019/10/main-img-2.jpg" class="attachment-full size-full" alt="f" srcset="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-2.jpg 800w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-2-600x760.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-2-237x300.jpg 237w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-2-768x972.jpg 768w" sizes="(max-width: 800px) 100vw, 800px" />                                                </div>
</div>		</div>
	</div>
</div></div></div></div></div></div></div></div>




<div class="vc_row wpb_row vc_row-fluid" ><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="eltdf-elements-holder   eltdf-two-columns  eltdf-responsive-mode-768  fifty-fifty" ><div class="eltdf-eh-item    " style={{backgroundColor: "#0f1d22"}} data-item-class="eltdf-eh-custom-7101" data-1400-1600="23% 0% 23% 15%" data-1025-1399="23% 0% 23% 15%" data-769-1024="23% 0%" data-681-768="23% 0%" data-680="23% 0%">
	<div class="eltdf-eh-item-inner">
		<div class="eltdf-eh-item-content eltdf-eh-custom-7101" style={{padding: "23% 0 23% 4%"}}>
			<div class="eltdf-testimonials-holder clearfix eltdf-testimonials-standard ">
    <div class="eltdf-testimonials-mark"></div>
    <div class="eltdf-testimonials eltdf-owl-slider" data-number-of-items="1" data-enable-loop="yes" data-enable-autoplay="yes" data-slider-speed="5000" data-slider-speed-animation="600" data-enable-navigation="no" data-enable-pagination="yes" >

    
            <div class="eltdf-testimonial-content" id="eltdf-testimonials-160">
                <div class="eltdf-testimonial-text-holder">
                                                                <p class="eltdf-testimonial-text">Lorem ipsum dolor sit amet, consectetur adipisic sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad.</p>
                                                                <h5 class="eltdf-testimonial-author">
                            <span class="eltdf-testimonials-author-name">Robert Chang</span>
                        </h5>
                                                                <p class="eltdf-testimonials-author-job">Sommelier</p>
                                    </div>
                            </div>

    
            <div class="eltdf-testimonial-content" id="eltdf-testimonials-98">
                <div class="eltdf-testimonial-text-holder">
                                                                <p class="eltdf-testimonial-text">Ut enim ad minim venia orem ipsum dolor sit amet, consectetur adipisic sed do. Eiusmod tempor incididunt ut labore et dolore magna.</p>
                                                                <h5 class="eltdf-testimonial-author">
                            <span class="eltdf-testimonials-author-name">Jan Winsent</span>
                        </h5>
                                                                <p class="eltdf-testimonials-author-job">Cook</p>
                                    </div>
                            </div>

    
            <div class="eltdf-testimonial-content" id="eltdf-testimonials-36">
                <div class="eltdf-testimonial-text-holder">
                                                                <p class="eltdf-testimonial-text">Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim venia orem ipsum dolor sit amet, consectetur.</p>
                                                                <h5 class="eltdf-testimonial-author">
                            <span class="eltdf-testimonials-author-name">Andrea Chung</span>
                        </h5>
                                                                <p class="eltdf-testimonials-author-job">Cook</p>
                                    </div>
                            </div>

    
    </div>
</div>		</div>
	</div>
</div><div class="eltdf-eh-item    " style={{backgroundImage: "url(wp-content/uploads/2019/10/main-img-4.jpg)"}} data-item-class="eltdf-eh-custom-4257" data-681-768="40% 0" data-680="60% 0">
	<div class="eltdf-eh-item-inner">
		<div class="eltdf-eh-item-content eltdf-eh-custom-4257" >
					</div>
	</div>
</div></div></div></div></div></div>




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




<div class="eltdf-row-grid-section-wrapper "  style={{backgroundColor:"#0f1d22"}}><div class="eltdf-row-grid-section"><div class="vc_row wpb_row vc_row-fluid vc_custom_1577721733574" ><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="eltdf-section-title-holder    eltdf-st-decor-animation" style={{padding: "0 3%", textAlign: "center"}}>
	<div class="eltdf-st-inner">
                    <span class="eltdf-st-tagline">
                Special selection            </span>
        		            <div class="eltdf-st-title-holder">
                                    <div class="decor">
                                      
                                      
                          
                        
                        
                        
                        </div>
                                <h1 class="eltdf-st-title" >
                    From our menu                </h1>
                                    <div class="decor">
                                      
                   
                        
                        
                        </div>
                            </div>
							</div>
</div></div></div></div></div></div></div><div class="eltdf-row-grid-section-wrapper "  style={{backgroundColor:"#0f1d22"}}><div class="eltdf-row-grid-section"><div class="vc_row wpb_row vc_row-fluid" ><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="eltdf-elements-holder   eltdf-two-columns  eltdf-responsive-mode-1024  fifty-fifty" ><div class="eltdf-eh-item    "  data-item-class="eltdf-eh-custom-4610" data-769-1024="0 0" data-681-768="0 0" data-680="0 0">
	<div class="eltdf-eh-item-inner">
		<div class="eltdf-eh-item-content eltdf-eh-custom-4610" style={{padding: "0 42px 0 0"}}>
			<div class="eltdf-pricing-holder ">
                        <div class="eltdf-pricing-item">
                
                <div class="eltdf-pricing-main" >
                    <h6 class="eltdf-pricing-title">
                        Beef burger meal                    </h6>
                    <div class="eltdf-pricing-lines"></div>
                                            <span class="eltdf-pricing-price" >$32</span>
                                    </div>
                            <p class="eltdf-pricing-desc">Classic greek salad, barrel aged feta cheese, bread</p>
                        </div>
                            <div class="eltdf-pricing-item">
                
                <div class="eltdf-pricing-main" >
                    <h6 class="eltdf-pricing-title">
                        Roasted lamb rump                    </h6>
                    <div class="eltdf-pricing-lines"></div>
                                            <span class="eltdf-pricing-price" >$25</span>
                                    </div>
                            <p class="eltdf-pricing-desc">Grilled lamb cutlets, pomegranate glaze, butternut squash</p>
                        </div>
                            <div class="eltdf-pricing-item">
                
                <div class="eltdf-pricing-main" >
                    <h6 class="eltdf-pricing-title">
                        Pan seared sea bass                    </h6>
                    <div class="eltdf-pricing-lines"></div>
                                            <span class="eltdf-pricing-price" >$38</span>
                                    </div>
                            <p class="eltdf-pricing-desc">Saffron and mussel’s broth, new potatoes, edamame beans</p>
                        </div>
                            <div class="eltdf-pricing-item">
                
                <div class="eltdf-pricing-main" >
                    <h6 class="eltdf-pricing-title">
                        King prawns and lobster                    </h6>
                    <div class="eltdf-pricing-lines"></div>
                                            <span class="eltdf-pricing-price" >$38</span>
                                    </div>
                            <p class="eltdf-pricing-desc">Creamy saffron, sauce Vierge</p>
                        </div>
                            <div class="eltdf-pricing-item">
                
                <div class="eltdf-pricing-main" >
                    <h6 class="eltdf-pricing-title">
                        Citrus cured salmon                    </h6>
                    <div class="eltdf-pricing-lines"></div>
                                            <span class="eltdf-pricing-price" >$41</span>
                                    </div>
                            <p class="eltdf-pricing-desc">Horseradish creme fraiche, beetroot mousse, oil</p>
                        </div>
        </div>		</div>
	</div>
</div><div class="eltdf-eh-item    "  data-item-class="eltdf-eh-custom-1151" data-769-1024="0 0" data-681-768="0 0" data-680="0 0">
	<div class="eltdf-eh-item-inner">
		<div class="eltdf-eh-item-content eltdf-eh-custom-1151" style={{padding: "0 0 0 42px"}}>
			<div class="eltdf-pricing-holder ">
                        <div class="eltdf-pricing-item">
                
                <div class="eltdf-pricing-main" >
                    <h6 class="eltdf-pricing-title">
                        Pan seared scallops                    </h6>
                    <div class="eltdf-pricing-lines"></div>
                                            <span class="eltdf-pricing-price" >$29</span>
                                    </div>
                            <p class="eltdf-pricing-desc">Saffron, celeriac puree, black pudding, olive oil</p>
                        </div>
                            <div class="eltdf-pricing-item">
                
                <div class="eltdf-pricing-main" >
                    <h6 class="eltdf-pricing-title">
                        Baked Camembert                    </h6>
                    <div class="eltdf-pricing-lines"></div>
                                            <span class="eltdf-pricing-price" >$25</span>
                                    </div>
                            <p class="eltdf-pricing-desc">Red onion marmelade, garlic Foccacia bread, grilled figs</p>
                        </div>
                            <div class="eltdf-pricing-item">
                
                <div class="eltdf-pricing-main" >
                    <h6 class="eltdf-pricing-title">
                        Braised ox cheek ravioli                    </h6>
                    <div class="eltdf-pricing-lines"></div>
                                            <span class="eltdf-pricing-price" >$23</span>
                                    </div>
                            <p class="eltdf-pricing-desc">Mediterranean olives casserole, celeriac puree, mushrooms</p>
                        </div>
                            <div class="eltdf-pricing-item">
                
                <div class="eltdf-pricing-main" >
                    <h6 class="eltdf-pricing-title">
                        Corn fed chicken                    </h6>
                    <div class="eltdf-pricing-lines"></div>
                                            <span class="eltdf-pricing-price" >$17</span>
                                    </div>
                            <p class="eltdf-pricing-desc">Wild mushrooms, truffle potatoes, braised leeks, carrots</p>
                        </div>
                            <div class="eltdf-pricing-item">
                
                <div class="eltdf-pricing-main" >
                    <h6 class="eltdf-pricing-title">
                        Nduja pork chicken terrine                    </h6>
                    <div class="eltdf-pricing-lines"></div>
                                            <span class="eltdf-pricing-price" >$41</span>
                                    </div>
                            <p class="eltdf-pricing-desc">Smoked duck breast, pistachio, smoked pancetta</p>
                        </div>
        </div>		</div>
	</div>
</div></div></div></div></div></div></div></div><div class="eltdf-svg-pattern-holder eltdf-pattern-position-left" style={{left: "-60px;",transform: "translateY(40px)"}}>
  
  

  
  </div><div class="vc_row wpb_row vc_row-fluid vc_custom_1577721767438 eltdf-content-aligment-center" style={{backgroundColor:"#0f1d22"}}><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner"><div class="wpb_wrapper"><a itemprop="url" href="our-menu/index.html" target="_self"  class="eltdf-btn eltdf-btn-medium eltdf-btn-outline"  >
        <span class="eltdf-btn-text">View All</span>
        </a></div></div></div></div><div class="eltdf-row-grid-section-wrapper "  ><div class="eltdf-row-grid-section"><div class="vc_row wpb_row vc_row-fluid vc_custom_1577721744350" ><div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-7 vc_col-md-12"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="eltdf-elements-holder   eltdf-two-columns  eltdf-responsive-mode-680  fifty-fifty" ><div class="eltdf-eh-item    "  data-item-class="eltdf-eh-custom-8728" data-1400-1600="0 23px 0 0" data-1025-1399="0 23px 0 0" data-680="0 0 50px 0">
	<div class="eltdf-eh-item-inner">
		<div class="eltdf-eh-item-content eltdf-eh-custom-8728" style={{padding: "0 27px 0 0"}}>
			<div class="eltdf-single-image-holder     eltdf-image-appear-from-top">
    <div class="eltdf-si-inner" >
                                                        <img loading="lazy" decoding="async" width="800" height="1275" src="wp-content/uploads/2019/10/main-img-6.jpg" class="attachment-full size-full" alt="g" srcset="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-6.jpg 800w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-6-600x956.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-6-188x300.jpg 188w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-6-768x1224.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-6-643x1024.jpg 643w" sizes="(max-width: 800px) 100vw, 800px" />                                                </div>
</div>		</div>
	</div>
</div><div class="eltdf-eh-item    "  data-item-class="eltdf-eh-custom-6809" data-1400-1600="0 0 0 23px" data-1025-1399="0 0 0 23px" data-680="0 0">
	<div class="eltdf-eh-item-inner">
		<div class="eltdf-eh-item-content eltdf-eh-custom-6809" style={{padding: "0 0 0 27px"}}>
			<div class="eltdf-single-image-holder eltdf-main-home-delayed-image    eltdf-image-appear-from-top">
    <div class="eltdf-si-inner" >
                                                        <img loading="lazy" decoding="async" width="800" height="1275" src="wp-content/uploads/2019/10/main-img-8.jpg" class="attachment-full size-full" alt="h" srcset="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-8.jpg 800w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-8-600x956.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-8-188x300.jpg 188w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-8-768x1224.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-8-643x1024.jpg 643w" sizes="(max-width: 800px) 100vw, 800px" />                                                </div>
</div>		</div>
	</div>
</div></div></div></div></div><div class="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-5 vc_col-md-12"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="eltdf-elements-holder   eltdf-one-column  eltdf-responsive-mode-768  " ><div class="eltdf-eh-item    "  data-item-class="eltdf-eh-custom-8254" data-1400-1600="13% 0% 0 9%" data-1025-1399="9% 0% 0 5%" data-769-1024="80px 11% 0 11%" data-681-768="80px 0 0 0" data-680="80px 0 0 0">
	<div class="eltdf-eh-item-inner">
		<div class="eltdf-eh-item-content eltdf-eh-custom-8254" style={{padding: "20% 11% 0 11%"}}>
			<div class="eltdf-section-title-holder    eltdf-st-decor-animation" style={{textAlign: "center"}}>
	<div class="eltdf-st-inner">
                    <span class="eltdf-st-tagline">
                Our food philosophy            </span>
        		            <div class="eltdf-st-title-holder">
                                    <div class="decor">
                                      
                                      
                                   
                        
                        </div>
                                <h2 class="eltdf-st-title" >
                    Our tips                </h2>
                                    <div class="decor">
                                      
                           
                        
                        </div>
                            </div>
							<p class="eltdf-st-text" >
				Lorem ipsum dolor sit amet, consectet nei ad icing eli sed do eiu sm od tempor se incidid sens ne utabor et dolore magiqua. Ut enim ad miains eniam quis nostrudas exercitation ullam de cm laborisnw si utali			</p>
							<div class="eltdf-st-button"><a itemprop="url" href="our-kitchen/index.html" target="_self" style={{margin: "35px 0 0"}} class="eltdf-btn eltdf-btn-medium eltdf-btn-simple"  >        <span class="eltdf-btn-text">Read More</span>        </a></div>
			</div>
</div>		</div>
	</div>
</div></div></div></div></div></div></div></div>



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
	
	
	<div class="vc_row wpb_row vc_row-fluid vc_custom_1573549706260 eltdf-content-aligment-center" ><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="eltdf-section-title-holder    eltdf-st-decor-animation" style={{textAlign: "center"}}>
	<div class="eltdf-st-inner">
                    <span class="eltdf-st-tagline">
Africa Mama Put tasty offer            </span>
        		            <div class="eltdf-st-title-holder">
                                    <div class="decor">
                                      
                           
                        
                        </div>
                                <h1 class="eltdf-st-title" >
                 Best Selling             </h1>
                                    <div class="decor">
                                      
                                      
                         
                        </div>
                            </div>
							</div>
</div></div></div></div></div><div class="eltdf-row-grid-section-wrapper eltdf-content-aligment-center"  >
  
  
  <div class="eltdf-row-grid-section"><div class="vc_row wpb_row vc_row-fluid vc_custom_1573574980934" ><div class="wpb_column vc_column_container vc_col-sm-12">
    
    <div class="vc_column-inner"><div class="wpb_wrapper"><div class="eltdf-portfolio-list-holder eltdf-grid-list eltdf-pl-gallery eltdf-three-columns eltdf-medium-space eltdf-disable-bottom-space eltdf-pl-standard-overlay    eltdf-pl-pag-no-pagination  eltdf-pl-has-animation     "  >
		<div class="eltdf-pl-inner eltdf-outer-space  clearfix">
		<article class="eltdf-pl-item eltdf-item-space  post-942 portfolio-item type-portfolio-item status-publish has-post-thumbnail hentry portfolio-category-specialties portfolio-tag-recipes portfolio-tag-sweet portfolio-tag-tasty">
	<div class="eltdf-pl-item-inner">
		<div class="eltdf-pli-image">
	<img loading="lazy" decoding="async" width="800" height="1217" src="wp-content/uploads/2019/10/main-images-1.jpg" class="attachment-full size-full wp-post-image" alt="d" srcset="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-1.jpg 800w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-1-600x913.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-1-197x300.jpg 197w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-1-768x1168.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-1-673x1024.jpg 673w" sizes="(max-width: 800px) 100vw, 800px" />    <div class="eltdf-pli-image-shader-overlay">
    </div>
</div>
<div class="eltdf-pli-text-holder" >
	<div class="eltdf-pli-text-wrapper">
		<div class="eltdf-pli-text">
				<h5 itemprop="name" class="eltdf-pli-title entry-title" >
		Starters	</h5>

					<div class="eltdf-pli-category-holder">
							<a itemprop="url" class="eltdf-pli-category" href="portfolio-category/specialties/index.html">Specialties</a>
					</div>
	
			
					</div>
	</div>
</div>
		<a itemprop="url" class="eltdf-pli-link eltdf-block-drag-link" href="portfolio-item/starters/index.html" target="_self"></a>
	</div>
</article><article class="eltdf-pl-item eltdf-item-space  post-943 portfolio-item type-portfolio-item status-publish has-post-thumbnail hentry portfolio-category-specialties portfolio-tag-sweet portfolio-tag-tasty">
	<div class="eltdf-pl-item-inner">
		<div class="eltdf-pli-image">
	<img loading="lazy" decoding="async" width="800" height="1217" src="wp-content/uploads/2019/10/main-images-2.jpg" class="attachment-full size-full wp-post-image" alt="j" srcset="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-2.jpg 800w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-2-600x913.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-2-197x300.jpg 197w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-2-768x1168.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-2-673x1024.jpg 673w" sizes="(max-width: 800px) 100vw, 800px" />    <div class="eltdf-pli-image-shader-overlay">
        </div>
</div>
<div class="eltdf-pli-text-holder" >
	<div class="eltdf-pli-text-wrapper">
		<div class="eltdf-pli-text">
				<h5 itemprop="name" class="eltdf-pli-title entry-title" >
		Main Courses	</h5>

					<div class="eltdf-pli-category-holder">
							<a itemprop="url" class="eltdf-pli-category" href="portfolio-category/specialties/index.html">Specialties</a>
					</div>
	
			
					</div>
	</div>
</div>
		<a itemprop="url" class="eltdf-pli-link eltdf-block-drag-link" href="portfolio-item/main-courses/index.html" target="_self"></a>
	</div>
</article><article class="eltdf-pl-item eltdf-item-space  post-944 portfolio-item type-portfolio-item status-publish has-post-thumbnail hentry portfolio-category-specialties portfolio-tag-recipes portfolio-tag-sweet portfolio-tag-tasty">
	<div class="eltdf-pl-item-inner">
		<div class="eltdf-pli-image">
	<img loading="lazy" decoding="async" width="800" height="1217" src="wp-content/uploads/2019/10/main-images-3.jpg" class="attachment-full size-full wp-post-image" alt="s" srcset="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-3.jpg 800w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-3-600x913.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-3-197x300.jpg 197w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-3-768x1168.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-images-3-673x1024.jpg 673w" sizes="(max-width: 800px) 100vw, 800px" />    <div class="eltdf-pli-image-shader-overlay">
    </div>
</div>
<div class="eltdf-pli-text-holder" >
	<div class="eltdf-pli-text-wrapper">
		<div class="eltdf-pli-text">
				<h5 itemprop="name" class="eltdf-pli-title entry-title" >
		Desserts	</h5>

					<div class="eltdf-pli-category-holder">
							<a itemprop="url" class="eltdf-pli-category" href="portfolio-category/specialties/index.html">Specialties</a>
					</div>
	
			
					</div>
	</div>
</div>
		<a itemprop="url" class="eltdf-pli-link eltdf-block-drag-link" href="portfolio-item/desserts/index.html" target="_self"></a>
	</div>
</article>	</div>
        	</div></div></div></div></div></div></div><div class="eltdf-svg-pattern-holder eltdf-pattern-position-left" style={{transform: "translateY(130px)"}}>

            
            
            </div><div class="eltdf-row-grid-section-wrapper eltdf-content-aligment-left"  style={{backgroundColor:"#111d22"}}><div class="eltdf-row-grid-section"><div class="vc_row wpb_row vc_row-fluid vc_custom_1577182567213 vc_row-has-fill" ><div class="wpb_column vc_column_container vc_col-sm-12"><div class="vc_column-inner"><div class="wpb_wrapper"><div class="eltdf-section-title-holder    eltdf-st-decor-animation" style={{textAlign: "center"}}>
	<div class="eltdf-st-inner">
                    <span class="eltdf-st-tagline">
                Reservations            </span>
        		            <div class="eltdf-st-title-holder">
                                    <div class="decor">
                                      
                              
                        </div>
                                <h1 class="eltdf-st-title" >
                    Book a table                </h1>
                                    <div class="decor">
                                      
                                      
                         
                        
                        
                        </div>
                            </div>
							</div>
</div><div class="vc_empty_space"   style={{height: "56px"}}><span class="vc_empty_space_inner"></span></div><div class="eltdf-elements-holder   eltdf-one-column  eltdf-responsive-mode-768  " ><div class="eltdf-eh-item    "  data-item-class="eltdf-eh-custom-5897" data-1400-1600="0 6.4%" data-1025-1399="0 3%" data-769-1024="0 0 0 8.4%" data-681-768="0 0 0 8.4%" data-680="0 0 0 8.4%">
	<div class="eltdf-eh-item-inner">
		<div class="eltdf-eh-item-content eltdf-eh-custom-5897" style={{padding: "0 8.4%"}}>
			<div class="eltdf-rf-holder eltdf-rf-inline ">
			<form class="eltdf-rf" target="_blank" action="https://www.opentable.com/restref/client/" name="eltdf-rf">

			<input type="hidden" name="rid" class="rid" value="161697" />
			<input type="hidden" name="restref" class="restref" value="161697" />
			<div class="eltdf-rf-row clearfix">
				<div class="eltdf-rf-col-holder">
					<div class="eltdf-rf-field-holder clearfix">
						<select name="partysize" class="eltdf-ot-people">
							<option value="1">1 Person</option>
							<option value="2">2 People</option>
							<option value="3">3 People</option>
							<option value="4">4 People</option>
							<option value="5">5 People</option>
							<option value="6">6 People</option>
							<option value="7">7 People</option>
							<option value="8">8 People</option>
							<option value="9">9 People</option>
							<option value="10">10 People</option>
						</select>
					</div>
				</div>
				<div class="eltdf-rf-col-holder">
					<div class="eltdf-rf-field-holder eltdf-rf-date-col clearfix">
                        <input type="text" value="02/19/2026" class="eltdf-ot-date" name="date" />
					</div>
				</div>
				<div class="eltdf-rf-col-holder eltdf-rf-time-col">
					<div class="eltdf-rf-field-holder clearfix">
						<select name="time" class="eltdf-ot-time">
							<option value="00:30">00:30 am</option>
							<option value="01:00">01:00 am</option>
							<option value="01:30">01:30 am</option>
							<option value="02:00">02:00 am</option>
							<option value="02:30">02:30 am</option>
							<option value="03:00">03:00 am</option>
							<option value="03:30">03:30 am</option>
							<option value="04:00">04:00 am</option>
							<option value="04:30">04:30 am</option>
							<option value="05:00">05:00 am</option>
							<option value="05:30">05:30 am</option>
							<option value="06:00">06:00 am</option>
							<option value="06:30">06:30 am</option>
							<option value="07:00">07:00 am</option>
							<option value="07:30">07:30 am</option>
							<option value="08:00">08:00 am</option>
							<option value="08:30">08:30 am</option>
							<option value="09:00">09:00 am</option>
							<option value="09:30">09:30 am</option>
							<option value="10:00">10:00 am</option>
							<option value="10:30">10:30 am</option>
							<option value="11:00" selected>11:00 am</option>
							<option value="11:30">11:30 am</option>
							<option value="12:00">12:00 pm</option>
							<option value="12:30">12:30 pm</option>
							<option value="13:00">01:00 pm</option>
							<option value="13:30">01:30 pm</option>
							<option value="14:00">02:00 pm</option>
							<option value="14:30">02:30 pm</option>
							<option value="15:00">03:00 pm</option>
							<option value="15:30">03:30 pm</option>
							<option value="16:00">04:00 pm</option>
							<option value="16:30">04:30 pm</option>
							<option value="17:00">05:00 pm</option>
							<option value="17:30">05:30 pm</option>
							<option value="18:00">06:00 pm</option>
							<option value="18:30">06:30 pm</option>
							<option value="19:00">07:00 pm</option>
							<option value="19:30">07:30 pm</option>
							<option value="20:00">08:00 pm</option>
							<option value="20:30">08:30 pm</option>
							<option value="21:00">09:00 pm</option>
							<option value="21:30">09:30 pm</option>
							<option value="22:00">10:00 pm</option>
							<option value="22:30">10:30 pm</option>
							<option value="23:00">11:00 pm</option>
							<option value="23:30">11:30 pm</option>
							<option value="24:00">12:00 pm</option>
						</select>
					</div>
				</div>
				<div class="eltdf-rf-col-holder eltdf-rf-btn-holder">
						<button type="submit"  class="eltdf-btn eltdf-btn-huge eltdf-btn-outline"  >
    <span class="eltdf-btn-text">Book Now</span>
    </button>				</div>
			</div>
			<input type="hidden" name="datetime" class="datetime" value="" />
		</form>
		<p class="eltdf-rf-copyright">*Powered by OpenTable</p>
	</div>		</div>
	</div>
</div></div></div></div></div></div></div></div>
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
