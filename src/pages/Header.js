

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
// import { useCart } from "../context/CartContext";
// import "./mycss.css"
// import { Link } from "react-router-dom";

// const Header = ({ cartCount = 1 }) => {
//   const [menuOpen, setMenuOpen] = useState(false); // mobile menu
//   const [categories, setCategories] = useState([]);
//   const { cartItems } = useCart();

//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get(
//           `${process.env.REACT_APP_API_URL}/api/db/categories`
//         );
//         setCategories(res.data);
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//       }
//     };
//     fetchCategories();
//   }, []);
//  const [scrolled, setScrolled] = useState(false);

// useEffect(() => {
//   const handleScroll = () => {
//     if (window.scrollY > 50) {
//       setScrolled(true);
//     } else {
//       setScrolled(false);
//     }
//   };
//   window.addEventListener("scroll", handleScroll);
//   return () => window.removeEventListener("scroll", handleScroll);
// }, []);

//   return (
//     <div > 

     
// <body class="archive post-type-archive post-type-archive-product wp-theme-papzi theme-papzi woocommerce-shop woocommerce woocommerce-page woocommerce-no-js banners-effect-6 elementor-default elementor-kit-9482"  style={{backgroundColor: "white !important"}}>
// <div id='page' class="hfeed page-wrapper  "   >
// 					{/* <h1 class="bwp-title hide"><a href="../index.html" rel="home">Papzi</a></h1> */}
// 	<header id='bwp-header' class="bwp-header header-v3"  style={{backgroundColor: "white !important"}}>
// 							<div class="header-mobile">
// 		<div class="container">
// 			<div class="row">
// 								<div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
// 					<div class="navbar-header">
// 						<button type="button" id="show-megamenu"  class="navbar-toggle">
// 							<span>Menu</span>
// 						</button>
// 					</div>
// 				</div>
// 				<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center ">
// 							<div class="wpbingoLogo">
// 			<a  href="../index.html">
// 									<img  src="../wp-content/uploads/2022/01/logo.png" alt="Papzi"/>
// 							</a>
// 		</div> 
// 					</div>
// 				<div class="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
// 															<div class="papzi-topcart dropdown">
// 						<div class="dropdown mini-cart top-cart">
// 	<div class="remove-cart-shadow"></div>
//   <a class="dropdown-toggle cart-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// 	<div class="icons-cart"><i class="icon-Cart"></i><span class="cart-count">0</span></div>
//   </a>
//   <div class="dropdown-menu cart-popup">
// 	<div class="remove-cart">
// 		<a class="dropdown-toggle cart-remove" data-toggle="dropdown" data-hover="dropdown" data-delay="0" href="#" title="View your shopping cart">
// 			Close<i class="icon_close"></i>
// 		</a>
// 	</div>
// 	<div class="top-total-cart">Shopping Cart(0)</div>
// 	<div class="cart-icon-big"></div>
// <ul class="cart_list product_list_widget ">
// 			<li class="empty">
// 			<span>No products in the cart.</span>
// 			<a class="go-shop" href="index.html">GO TO SHOP			<i aria-hidden="true" class="arrow_right"></i></a>
// 		</li>
// 	</ul>
//   </div>
// </div>					</div>
// 									</div>
// 							</div>
// 		</div>
// 				<div class="header-mobile-fixed">
// 			<div class="shop-page">
// 				<a href="index.html"><i class="wpb-icon-shop"></i></a>
// 			</div>
// 			<div class="my-account">
// 				<div class="login-header">
// 					<a href="../my-account/index.html"><i class="wpb-icon-user"></i></a>
// 				</div>
// 			</div>		

// 						<div class="search-box">
// 				<div class="search-toggle"><i class="wpb-icon-magnifying-glass"></i></div>
// 			</div>
	
// 						<div class="wishlist-box">
// 				<a href="../wishlist/index.html"><i class="wpb-icon-heart"></i></a>
// 			</div>
// 					</div>
// 			</div>
// 			<div class="header-desktop">
// 						<div class='header-wrapper' data-sticky_header="0">
// 				<div class="container">
// 					<div class="row">
// 						<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 header-left">
// 									<div class="wpbingoLogo">
// 			<a  href="../index.html">
// 									<img  src="../wp-content/uploads/2022/01/logo.png" alt="Papzi"/>
// 							</a>
// 		</div> 
// 								<div class="phone hidden-xs">
// 								<a href="tel:934595876">934595876</a>
// 							</div>
// 						</div>
// 						<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 text-center">
// 							<div class="wpbingo-menu-mobile header-menu">
// 								<div class="header-menu-bg">
// 									<div class="wpbingo-menu-wrapper">
// 			<div class="megamenu">
// 				<nav class="navbar-default">
// 					<div  class="bwp-navigation primary-navigation navbar-mega" data-text_close = "Close">
// 						<div class="float-menu">
// <nav id="main-navigation" class="std-menu clearfix">
// <div class="menu-main-menu-container"><ul id="menu-main-menu" class="menu"><li  class="level-0 menu-item-27659      menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-has-children  std-menu      " ><a href="../index.html"><span class="menu-item-text">Home</span></a>
// <ul class="sub-menu">
// 	<li  class="level-1 menu-item-32910      menu-item menu-item-type-post_type menu-item-object-page menu-item-home  std-menu      " ><a href="../index.html">Home 1</a></li>
// 	<li  class="level-1 menu-item-32911      menu-item menu-item-type-post_type menu-item-object-page  std-menu      " ><a href="../home-2/index.html">Home 2</a></li>
// 	<li  class="level-1 menu-item-32912      menu-item menu-item-type-post_type menu-item-object-page  std-menu      " ><a href="../home-3/index.html">Home 3</a></li>
// 	<li  class="level-1 menu-item-32913      menu-item menu-item-type-post_type menu-item-object-page  std-menu      " ><a href="../home-4/index.html">Home 4</a></li>
// 	<li  class="level-1 menu-item-32914      menu-item menu-item-type-post_type menu-item-object-page  std-menu      " ><a href="../home-5/index.html">Home 5</a></li>
// 	<li  class="level-1 menu-item-32915      menu-item menu-item-type-post_type menu-item-object-page  std-menu      " ><a href="../home-6/index.html">Home 6</a></li>
// 	<li  class="level-1 menu-item-32916      menu-item menu-item-type-post_type menu-item-object-page  std-menu      " ><a href="../home-7/index.html">Home 7</a></li>
// 	<li  class="level-1 menu-item-32917      menu-item menu-item-type-post_type menu-item-object-page  std-menu      " ><a href="../home-8/index.html">Home 8</a></li>
// 	<li  class="level-1 menu-item-34971      menu-item menu-item-type-post_type menu-item-object-page  std-menu      " ><a href="../home-9/index.html">Home 9</a></li>
// 	<li  class="level-1 menu-item-34970      menu-item menu-item-type-post_type menu-item-object-page  std-menu      " ><a href="../home-10/index.html">Home 10</a></li>
// </ul>
// </li>
// <li  class="level-0 menu-item-2985  menu-item-has-children    menu-item menu-item-type-post_type menu-item-object-page current-menu-item current_page_item  mega-menu mega-menu-fullwidth-width     " ><a href="index.html"><span class="menu-item-text">Shop</span></a><div class="sub-menu">		<div data-elementor-type="wp-post" data-elementor-id="9121" class="elementor elementor-9121">
// 						<section class="elementor-section elementor-top-section elementor-element elementor-element-31faec0 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="31faec0" data-element_type="section">
// 						<div class="elementor-container elementor-column-gap-default">
// 					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6232c7b" data-id="6232c7b" data-element_type="column">
// 			<div class="elementor-widget-wrap elementor-element-populated">
// 						<section class="elementor-section elementor-inner-section elementor-element elementor-element-ee8295e content-megamenu elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="ee8295e" data-element_type="section">
// 						<div class="elementor-container elementor-column-gap-default">
// 					<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-fca6470 wpb-col-sm-100" data-id="fca6470" data-element_type="column">
// 			<div class="elementor-widget-wrap elementor-element-populated">
// 						<div class="elementor-element elementor-element-c7ba056 title elementor-widget elementor-widget-heading" data-id="c7ba056" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">Shop style</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-5fa2b7b elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="5fa2b7b" data-element_type="widget" data-widget_type="icon-list.default">
// 				<div class="elementor-widget-container">
// 							<ul class="elementor-icon-list-items">
// 							<li class="elementor-icon-list-item">
// 											<a href="index68fa.html?show-subcategories=hide&amp;show_page_title_bg=true">

// 											<span class="elementor-icon-list-text">Shop Standard</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="index1178.html?category_style=filter_sideout&amp;shop-layout=full&amp;product_col_large=4">

// 											<span class="elementor-icon-list-text">Shop Full <span class="hot">hot</span></span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../product-category/butter-mix/index1f51.html?show_page_title_bg=show&amp;header-overlay=show">

// 											<span class="elementor-icon-list-text">Shop Header Overlay</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="indexfddf.html?category_style=only_categories">

// 											<span class="elementor-icon-list-text">Shop Only Categories</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="index3369.html?style-subcategories=icon_categories">

// 											<span class="elementor-icon-list-text">Shop Icon Categories <span class="hot">hot</span></span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="index.html">

// 											<span class="elementor-icon-list-text">Shop Image Categories</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../product-category/burgers/index.html">

// 											<span class="elementor-icon-list-text">Shop Sub Categories</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="index5758.html?style-subcategories=shop_mini_categories">

// 											<span class="elementor-icon-list-text">Shop  Mini Categories</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="indexaf48.html?category-view-mode=list">

// 											<span class="elementor-icon-list-text">Shop List</span>
// 											</a>
// 									</li>
// 						</ul>
// 						</div>
// 				</div>
// 					</div>
// 		</div>
// 				<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-984c9de wpb-col-sm-100" data-id="984c9de" data-element_type="column">
// 			<div class="elementor-widget-wrap elementor-element-populated">
// 						<div class="elementor-element elementor-element-07e9ae5 title elementor-widget elementor-widget-heading" data-id="07e9ae5" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">Filter Layout</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-9bc3f0e elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="9bc3f0e" data-element_type="widget" data-widget_type="icon-list.default">
// 				<div class="elementor-widget-container">
// 							<ul class="elementor-icon-list-items">
// 							<li class="elementor-icon-list-item">
// 											<a href="index.html">

// 											<span class="elementor-icon-list-text">Sidebar</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="index9b51.html?category_style=filter_sideout">

// 											<span class="elementor-icon-list-text">Filter Side Out <span class="hot">hot</span></span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="index74e4.html?category_style=filter_dropdown">

// 											<span class="elementor-icon-list-text">Filter Dropdown</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="indexbe32.html?category_style=filter_ontop">

// 											<span class="elementor-icon-list-text">Filter On Top</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="indexcc57.html?category_style=filter_drawer">

// 											<span class="elementor-icon-list-text">Filter Drawer</span>
// 											</a>
// 									</li>
// 						</ul>
// 						</div>
// 				</div>
// 				<div class="elementor-element elementor-element-2c216b2 title elementor-widget elementor-widget-heading" data-id="2c216b2" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">Shop loader</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-daea313 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="daea313" data-element_type="widget" data-widget_type="icon-list.default">
// 				<div class="elementor-widget-container">
// 							<ul class="elementor-icon-list-items">
// 							<li class="elementor-icon-list-item">
// 											<a href="indexb677.html?shop_paging=shop-pagination">

// 											<span class="elementor-icon-list-text">Shop Pagination</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="indexce49.html?shop_paging=shop-infinity">

// 											<span class="elementor-icon-list-text">Shop Infinity <span class="hot">hot</span></span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="index0eb4.html?shop_paging=shop-loadmore">

// 											<span class="elementor-icon-list-text">Shop Load More</span>
// 											</a>
// 									</li>
// 						</ul>
// 						</div>
// 				</div>
// 					</div>
// 		</div>
// 				<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-cf68191 wpb-col-sm-100" data-id="cf68191" data-element_type="column">
// 			<div class="elementor-widget-wrap elementor-element-populated">
// 						<div class="elementor-element elementor-element-22efdac title elementor-widget elementor-widget-heading" data-id="22efdac" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">Hover style</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-cb8fada elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="cb8fada" data-element_type="widget" data-widget_type="icon-list.default">
// 				<div class="elementor-widget-container">
// 							<ul class="elementor-icon-list-items">
// 							<li class="elementor-icon-list-item">
// 											<a href="index23ba.html?layout_shop=1">

// 											<span class="elementor-icon-list-text">Hover Style 1</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="index32b5.html?layout_shop=2">

// 											<span class="elementor-icon-list-text">Hover Style 2</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="index22aa.html?layout_shop=3">

// 											<span class="elementor-icon-list-text">Hover Style 3</span>
// 											</a>
// 									</li>
// 						</ul>
// 						</div>
// 				</div>
// 				<div class="elementor-element elementor-element-b0f0b5b title elementor-widget elementor-widget-heading" data-id="b0f0b5b" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">Woo Pages</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-5c8e7c3 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="5c8e7c3" data-element_type="widget" data-widget_type="icon-list.default">
// 				<div class="elementor-widget-container">
// 							<ul class="elementor-icon-list-items">
// 							<li class="elementor-icon-list-item">
// 											<a href="../order-tracking/index.html">

// 											<span class="elementor-icon-list-text">Order Tracking</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../my-account/index.html">

// 											<span class="elementor-icon-list-text">Login</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../wishlist/index.html">

// 											<span class="elementor-icon-list-text">Wishlist</span>
// 											</a>
// 									</li>
// 						</ul>
// 						</div>
// 				</div>
// 					</div>
// 		</div>
// 				<div class="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-8d30036 wpb-col-sm-100" data-id="8d30036" data-element_type="column">
// 			<div class="elementor-widget-wrap elementor-element-populated">
// 						<div class="elementor-element elementor-element-25718ba title elementor-widget elementor-widget-heading" data-id="25718ba" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">Mini cart</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-5059be5 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="5059be5" data-element_type="widget" data-widget_type="icon-list.default">
// 				<div class="elementor-widget-container">
// 							<ul class="elementor-icon-list-items">
// 							<li class="elementor-icon-list-item">
// 											<a href="../index3361.html?cart-layout=popup">

// 											<span class="elementor-icon-list-text">Side Out Light <span class="hot">hot</span></span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../indexed9f.html?cart-layout=popup&amp;cart-style=dark">

// 											<span class="elementor-icon-list-text">Side Out Dark</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../index.html">

// 											<span class="elementor-icon-list-text">Dropdown</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../cart/index.html">

// 											<span class="elementor-icon-list-text">Cart Page</span>
// 											</a>
// 									</li>
// 						</ul>
// 						</div>
// 				</div>
// 				<div class="elementor-element elementor-element-24868fd title elementor-widget elementor-widget-heading" data-id="24868fd" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">Checkout Style</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-b0627e9 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="b0627e9" data-element_type="widget" data-widget_type="icon-list.default">
// 				<div class="elementor-widget-container">
// 							<ul class="elementor-icon-list-items">
// 							<li class="elementor-icon-list-item">
// 											<a href="../checkout/index.html">

// 											<span class="elementor-icon-list-text">Checkout Classic</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../checkout/indexb7a3.html?checkout_page_style=checkout-page-style-2">

// 											<span class="elementor-icon-list-text">Checkout Mordern<span class="hot">hot</span></span>
// 											</a>
// 									</li>
// 						</ul>
// 						</div>
// 				</div>
// 					</div>
// 		</div>
// 					</div>
// 		</section>
// 					</div>
// 		</div>
// 					</div>
// 		</section>
// 				</div>
// 		</div></li>
// <li  class="level-0 menu-item-17678  menu-item-has-children    menu-item menu-item-type-post_type menu-item-object-product  mega-menu mega-menu-fullwidth-width     " ><a href="smoothie-drinks/index.html"><span class="menu-item-text">Product</span></a><div class="sub-menu">		<div data-elementor-type="wp-post" data-elementor-id="16554" class="elementor elementor-16554">
// 						<section class="elementor-section elementor-top-section elementor-element elementor-element-7f4de8c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7f4de8c" data-element_type="section">
// 						<div class="elementor-container elementor-column-gap-default">
// 					<div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-09b0239" data-id="09b0239" data-element_type="column">
// 			<div class="elementor-widget-wrap elementor-element-populated">
// 						<section class="elementor-section elementor-inner-section elementor-element elementor-element-9a0cbdd content-megamenu elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9a0cbdd" data-element_type="section">
// 						<div class="elementor-container elementor-column-gap-default">
// 					<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8327fba wpb-col-sm-100" data-id="8327fba" data-element_type="column">
// 			<div class="elementor-widget-wrap elementor-element-populated">
// 						<div class="elementor-element elementor-element-f952e43 title elementor-widget elementor-widget-heading" data-id="f952e43" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">Product featured</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-cc927f6 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="cc927f6" data-element_type="widget" data-widget_type="icon-list.default">
// 				<div class="elementor-widget-container">
// 							<ul class="elementor-icon-list-items">
// 							<li class="elementor-icon-list-item">
// 											<a href="american-burgers/indexe5c8.html?show-sticky-cart=true">

// 											<span class="elementor-icon-list-text">Sticky ATC <span class="hot">hot</span></span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="sleek-iron-clock/index.html">

// 											<span class="elementor-icon-list-text">Video Inner</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="sleek-iron-clock/index64ae.html?video-style=popup">

// 											<span class="elementor-icon-list-text">Video Popup</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="banana-leaf/index.html">

// 											<span class="elementor-icon-list-text">360 Degree <span class="hot">hot</span></span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="mare-e-monti/index.html">

// 											<span class="elementor-icon-list-text">Countdown</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="flowerpot-pendant-light-vp1/index.html">

// 											<span class="elementor-icon-list-text">Frequently Bought Together <span class="hot">hot</span></span>
// 											</a>
// 									</li>
// 						</ul>
// 						</div>
// 				</div>
// 				<div class="elementor-element elementor-element-fa4c0ce title elementor-widget elementor-widget-heading" data-id="fa4c0ce" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">Description Style</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-6212303 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="6212303" data-element_type="widget" data-widget_type="icon-list.default">
// 				<div class="elementor-widget-container">
// 							<ul class="elementor-icon-list-items">
// 							<li class="elementor-icon-list-item">
// 											<a href="combo-salad/index9125.html?description-style=tab">

// 											<span class="elementor-icon-list-text">Description Tab</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="combo-salad/index423b.html?description-style=accordion">

// 											<span class="elementor-icon-list-text">Description Accordion</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="combo-salad/index8f75.html?description-style=full-content">

// 											<span class="elementor-icon-list-text">Description Full Content</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="combo-salad/index3b4a.html?description-style=vertical">

// 											<span class="elementor-icon-list-text">Description Vertical</span>
// 											</a>
// 									</li>
// 						</ul>
// 						</div>
// 				</div>
// 					</div>
// 		</div>
// 				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-d0f661d wpb-col-sm-100" data-id="d0f661d" data-element_type="column">
// 			<div class="elementor-widget-wrap elementor-element-populated">
// 						<div class="elementor-element elementor-element-50398ef title elementor-widget elementor-widget-heading" data-id="50398ef" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">Product Type</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-1147422 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="1147422" data-element_type="widget" data-widget_type="icon-list.default">
// 				<div class="elementor-widget-container">
// 							<ul class="elementor-icon-list-items">
// 							<li class="elementor-icon-list-item">
// 											<a href="cheddar-fries/index.html">

// 											<span class="elementor-icon-list-text">Simple Product</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="mare-e-monti/index.html">

// 											<span class="elementor-icon-list-text">Group Product</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="pizza-za-salad/index.html">

// 											<span class="elementor-icon-list-text">Variable Size Product</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="margarita/index.html">

// 											<span class="elementor-icon-list-text">Variable Color Product</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="combo-salad/index.html">

// 											<span class="elementor-icon-list-text">Out of stock</span>
// 											</a>
// 									</li>
// 						</ul>
// 						</div>
// 				</div>
// 				<div class="elementor-element elementor-element-f09354e title elementor-widget elementor-widget-heading" data-id="f09354e" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">zoom effect</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-878dea8 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="878dea8" data-element_type="widget" data-widget_type="icon-list.default">
// 				<div class="elementor-widget-container">
// 							<ul class="elementor-icon-list-items">
// 							<li class="elementor-icon-list-item">
// 											<a href="cheesecake/index.html">

// 											<span class="elementor-icon-list-text">Autozoom</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="cheesecake/index3446.html?zoom-type=lens">

// 											<span class="elementor-icon-list-text">Lens zoom</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="cheesecake/indexd838.html?zoom-type=window">

// 											<span class="elementor-icon-list-text">Magic zoom</span>
// 											</a>
// 									</li>
// 						</ul>
// 						</div>
// 				</div>
// 					</div>
// 		</div>
// 				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-4608bc5 wpb-col-sm-100" data-id="4608bc5" data-element_type="column">
// 			<div class="elementor-widget-wrap elementor-element-populated">
// 						<div class="elementor-element elementor-element-892a8ce title elementor-widget elementor-widget-heading" data-id="892a8ce" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">Product Gallery</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-b994746 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="b994746" data-element_type="widget" data-widget_type="icon-list.default">
// 				<div class="elementor-widget-container">
// 							<ul class="elementor-icon-list-items">
// 							<li class="elementor-icon-list-item">
// 											<a href="spiced-coffee/index5900.html?layout-thumbs=scroll">

// 											<span class="elementor-icon-list-text">Scroll</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="heated-affair/index4188.html?position-thumbs=left">

// 											<span class="elementor-icon-list-text">Left Thumbnail</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="heated-affair/index2540.html?position-thumbs=right">

// 											<span class="elementor-icon-list-text">Right Thumbnail</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="heated-affair/indexab48.html?position-thumbs=bottom">

// 											<span class="elementor-icon-list-text">Bottom Thumbnail</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="heated-affair/index0048.html?position-thumbs=outsite">

// 											<span class="elementor-icon-list-text">Outside Thumbnail</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="smoothie-drinks/index1633.html?layout-thumbs=grid">

// 											<span class="elementor-icon-list-text">Gird Style <span class="hot">hot</span></span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="smoothie-drinks/indexd3a4.html?layout-thumbs=one_column">

// 											<span class="elementor-icon-list-text">One Column</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="cheddar-fries/index10d4.html?layout-thumbs=slider">

// 											<span class="elementor-icon-list-text">Slider <span class="hot">hot</span></span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="cheddar-fries/index05eb.html?layout-thumbs=lagre_gallery">

// 											<span class="elementor-icon-list-text">Lagre Gallery</span>
// 											</a>
// 									</li>
// 						</ul>
// 						</div>
// 				</div>
// 					</div>
// 		</div>
// 					</div>
// 		</section>
// 					</div>
// 		</div>
// 					</div>
// 		</section>
// 				</div>
// 		</div></li>
// <li  class="level-0 menu-item-28093  menu-item-has-children    menu-item menu-item-type-post_type menu-item-object-page  mega-menu mega-menu-fullwidth-width     " ><a href="../blog/index.html"><span class="menu-item-text">Blog</span></a><div class="sub-menu">		<div data-elementor-type="wp-post" data-elementor-id="12246" class="elementor elementor-12246">
// 						<section class="elementor-section elementor-top-section elementor-element elementor-element-9c716f3 content-megamenu elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="9c716f3" data-element_type="section">
// 						<div class="elementor-container elementor-column-gap-default">
// 					<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-7c9b2cc wpb-col-sm-100" data-id="7c9b2cc" data-element_type="column">
// 			<div class="elementor-widget-wrap elementor-element-populated">
// 						<div class="elementor-element elementor-element-1d51edf title elementor-widget elementor-widget-heading" data-id="1d51edf" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">Blog layout</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-2127bd1 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="2127bd1" data-element_type="widget" data-widget_type="icon-list.default">
// 				<div class="elementor-widget-container">
// 							<ul class="elementor-icon-list-items">
// 							<li class="elementor-icon-list-item">
// 											<a href="../category/home-decor/index.html">

// 											<span class="elementor-icon-list-text">Blog Left Sidebar</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../category/life-style/indexb1e3.html?sidebar_blog=right">

// 											<span class="elementor-icon-list-text">Blog Right Sidebar</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../category/furniture/index8c9d.html?sidebar_blog=full">

// 											<span class="elementor-icon-list-text">Blog Without Sidebar</span>
// 											</a>
// 									</li>
// 						</ul>
// 						</div>
// 				</div>
// 				<div class="elementor-element elementor-element-e80e801 title elementor-widget elementor-widget-heading" data-id="e80e801" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">Blog style</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-87c32ba elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="87c32ba" data-element_type="widget" data-widget_type="icon-list.default">
// 				<div class="elementor-widget-container">
// 							<ul class="elementor-icon-list-items">
// 							<li class="elementor-icon-list-item">
// 											<a href="../category/furniture/indexcb45.html?layout_blog=list">

// 											<span class="elementor-icon-list-text">Blog List</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../category/dining-kitchen/indexfc45.html?sidebar_blog=full&amp;layout_blog=grid">

// 											<span class="elementor-icon-list-text">Blog Grid</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../category/home-decor/index8930.html?layout_blog=modern">

// 											<span class="elementor-icon-list-text">Blog Modern</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../category/home-decor/index.html">

// 											<span class="elementor-icon-list-text">Blog Standar</span>
// 											</a>
// 									</li>
// 						</ul>
// 						</div>
// 				</div>
// 					</div>
// 		</div>
// 				<div class="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-bed6ceb wpb-col-sm-100" data-id="bed6ceb" data-element_type="column">
// 			<div class="elementor-widget-wrap elementor-element-populated">
// 						<div class="elementor-element elementor-element-ede3f90 title elementor-widget elementor-widget-heading" data-id="ede3f90" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">Blog format</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-d89068c elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="d89068c" data-element_type="widget" data-widget_type="icon-list.default">
// 				<div class="elementor-widget-container">
// 							<ul class="elementor-icon-list-items">
// 							<li class="elementor-icon-list-item">
// 											<a href="../2017/04/17/post-format-gallery-blogs/index.html">

// 											<span class="elementor-icon-list-text">Post format gallery</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../2017/04/17/post-format-video-blogs/index.html">

// 											<span class="elementor-icon-list-text">Post format video</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../2017/04/17/post-format-audio-blogs/index.html">

// 											<span class="elementor-icon-list-text">Post format audio</span>
// 											</a>
// 									</li>
// 						</ul>
// 						</div>
// 				</div>
// 				<div class="elementor-element elementor-element-30acf83 title elementor-widget elementor-widget-heading" data-id="30acf83" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">Post layout</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-3f0745a elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="3f0745a" data-element_type="widget" data-widget_type="icon-list.default">
// 				<div class="elementor-widget-container">
// 							<ul class="elementor-icon-list-items">
// 							<li class="elementor-icon-list-item">
// 											<a href="../2018/05/30/easy-fixes-for-home-decor/index.html">

// 											<span class="elementor-icon-list-text">Sidebar</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../2018/05/30/easy-fixes-for-home-decor/index8c71.html?post-single-layout=one_column">

// 											<span class="elementor-icon-list-text">One Column</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../2018/05/30/how-to-make-your-home-a-showplace/indexf7ca.html?post-single-layout=prallax_image">

// 											<span class="elementor-icon-list-text">Prallax Image</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../2018/05/30/easy-fixes-for-home-decor/index859f.html?post-single-layout=simple_title">

// 											<span class="elementor-icon-list-text">Simple Title</span>
// 											</a>
// 									</li>
// 								<li class="elementor-icon-list-item">
// 											<a href="../2018/05/30/how-to-make-your-home-a-showplace/index6ff9.html?post-single-layout=sticky_title">

// 											<span class="elementor-icon-list-text">Sticky Title</span>
// 											</a>
// 									</li>
// 						</ul>
// 						</div>
// 				</div>
// 					</div>
// 		</div>
// 				<div class="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-06777b8 wpb-col-sm-100 hidden-sm hidden-xs" data-id="06777b8" data-element_type="column">
// 			<div class="elementor-widget-wrap elementor-element-populated">
// 						<div class="elementor-element elementor-element-45f87c2 title elementor-widget elementor-widget-heading" data-id="45f87c2" data-element_type="widget" data-widget_type="heading.default">
// 				<div class="elementor-widget-container">
// 					<h2 class="elementor-heading-title elementor-size-default">Recent Post</h2>				</div>
// 				</div>
// 				<div class="elementor-element elementor-element-38b1f54 elementor-widget elementor-widget-bwp_recent_post" data-id="38b1f54" data-element_type="widget" data-widget_type="bwp_recent_post.default">
// 				<div class="elementor-widget-container">
// 					<div class="bwp-recent-post blog-menu">
//  <div class="block">
//  	  <div class="block_content">
//    <div id="recent_post_297316961770709828" class="row">
			
// 						<div  class="post-grid col-lg-12 col-md-12 col-sm-12 col-xs-12 post-3976 post type-post status-publish format-standard has-post-thumbnail hentry category-furniture category-home-decor category-office tag-beauty tag-ear-care">
// 					<div class="item">
// 						<a class="post-thumbnail" href="../2018/05/30/easy-fixes-for-home-decor/index.html" aria-hidden="true">
// 						<img fetchpriority="high" width="720" height="484" src="../wp-content/uploads/2018/05/Blog-1-720x484.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="Simple Mills Almond Flour" decoding="async" />						</a>
// 						<div class="post-content">
// 							<h2 class="entry-title"><a href="../2018/05/30/easy-fixes-for-home-decor/index.html">Simple Mills Almond Flour</a></h2>
// 							<div class="day-cmt">
// 								<span class="entry-date"><time class="entry-date" datetime="2018-05-30T04:42:28+00:00">May 30, 2018</time></span>								<div class="comments-link">
// 									<a href="#respond" >
// 																																	4<span> Comments</span>																														</a>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 						<div  class="post-grid col-lg-12 col-md-12 col-sm-12 col-xs-12 post-3974 post type-post status-publish format-image has-post-thumbnail hentry category-furniture category-home-decor category-life-style tag-baby-needs post_format-post-format-image">
// 					<div class="item">
// 						<a class="post-thumbnail" href="../2018/05/30/how-to-make-your-home-a-showplace/index.html" aria-hidden="true">
// 						<img width="720" height="484" src="../wp-content/uploads/2018/05/Blog-2-720x484.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="King Arthur 00 Pizza Flour" decoding="async" />						</a>
// 						<div class="post-content">
// 							<h2 class="entry-title"><a href="../2018/05/30/how-to-make-your-home-a-showplace/index.html">King Arthur 00 Pizza Flour</a></h2>
// 							<div class="day-cmt">
// 								<span class="entry-date"><time class="entry-date" datetime="2018-05-30T04:40:39+00:00">May 30, 2018</time></span>								<div class="comments-link">
// 									<a href="#respond" >
// 																																	1<span> Comment</span>																														</a>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 						<div  class="post-grid col-lg-12 col-md-12 col-sm-12 col-xs-12 post-3971 post type-post status-publish format-image has-post-thumbnail hentry category-furniture category-home-decor category-office tag-electric tag-fashion post_format-post-format-image">
// 					<div class="item">
// 						<a class="post-thumbnail" href="../2018/05/30/stunning-furniture-with-aesthetic-appeal/index.html" aria-hidden="true">
// 						<img width="720" height="484" src="../wp-content/uploads/2018/05/Blog-3-720x484.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="Chebe Bread Pizza Crust Mix" decoding="async" />						</a>
// 						<div class="post-content">
// 							<h2 class="entry-title"><a href="../2018/05/30/stunning-furniture-with-aesthetic-appeal/index.html">Chebe Bread Pizza Crust Mix</a></h2>
// 							<div class="day-cmt">
// 								<span class="entry-date"><time class="entry-date" datetime="2018-05-30T04:33:26+00:00">May 30, 2018</time></span>								<div class="comments-link">
// 									<a href="#respond" >
// 																																	1<span> Comment</span>																														</a>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 					   </div>
//   </div>
//  </div>
// </div>
// 				</div>
// 				</div>
// 					</div>
// 		</div>
// 					</div>
// 		</section>
// 				</div>
// 		</div></li>
// <li  class="level-0 menu-item-12288      menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children  std-menu      " ><a href="#"><span class="menu-item-text">Page</span></a>
// <ul class="sub-menu">
// 	<li  class="level-1 menu-item-10694      menu-item menu-item-type-post_type menu-item-object-page  std-menu      " ><a href="../about-us/index.html">About Us</a></li>
// 	<li  class="level-1 menu-item-26868      menu-item menu-item-type-custom menu-item-object-custom  std-menu      " ><a href="../contact/indexd68e.html?show_page_title_bg=true">Contact</a></li>
// 	<li  class="level-1 menu-item-14475      menu-item menu-item-type-post_type menu-item-object-page  std-menu      " ><a href="../faq/index.html">Faq</a></li>
// 	<li  class="level-1 menu-item-12290      menu-item menu-item-type-custom menu-item-object-custom  std-menu      " ><a href="../404.html">Page 404</a></li>
// </ul>
// </li>
// </ul></div></nav>

// </div>

// 					</div>
// 				</nav> 
// 			</div>       
// 		</div>								</div>
// 							</div>
// 						</div>
// 						<div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
// 							<div class="header-page-link">

// 																	<div class="search-box">
// 										<div class="search-toggle"><i class="icon-Search"></i></div>
// 									</div>
					
// 								<div class="login-header">
// 																			<a class="active-login" href="#" ><i class="icon-Login"></i></a>
// 													<div class="form-login-register">
// 			<div class="box-form-login">
// 				<div class="active-login"></div>
// 				<div class="box-content">
// 					<div class="form-login active">
// 						<form id="login_ajax" method="post" class="login">
// 							<h2>Sign in</h2>
// 							<p class="status"></p>
// 							<div class="content">
// 																<div class="username">
// 									<input type="text" required="required" class="input-text" name="username" id="username" placeholder="Your name" />
// 								</div>
// 								<div class="password">
// 									<input class="input-text" required="required" type="password" name="password" id="password" placeholder="Password" />
// 								</div>
// 								<div class="rememberme-lost">
// 									<div class="rememberme">
// 										<input name="rememberme" type="checkbox" id="rememberme" value="forever" />
// 										<label for="rememberme" class="inline">Remember me</label>
// 									</div>
// 									<div class="lost_password">
// 										<a href="../my-account/lost-password/index.html">Lost your password?</a>
// 									</div>
// 								</div>
// 								<div class="button-login">
// 									<input type="hidden" id="woocommerce-login-nonce" name="woocommerce-login-nonce" value="9576f6aae3" /><input type="hidden" name="_wp_http_referer" value="/shop/" />									<input type="submit" class="button" name="login" value="Login" /> 
// 								</div>
// 								<div class="button-next-reregister" >Create An Account</div>
// 							</div>
// 							<input type="hidden" id="security" name="security" value="d1c79b0312" /><input type="hidden" name="_wp_http_referer" value="/shop/" />						</form>
// 					</div>
// 					<div class="form-register">
// 						<form method="post" class="register">
// 							<h2>REGISTER</h2>
// 							<div class="content">
// 																								<div class="email">
// 									<input type="email" class="input-text" placeholder="Email" name="email" id="reg_email" value="" />
// 								</div>
// 																	<div class="password">
// 										<input type="password" class="input-text"  placeholder="Password" name="password" id="reg_password" />
// 									</div>
									
// 								<div ><label for="trap">Anti-spam</label><input type="text" name="email_2" id="trap" tabindex="-1" /></div>
// 								<wc-order-attribution-inputs></wc-order-attribution-inputs><div class="woocommerce-privacy-policy-text"></div>																<div class="button-register">
// 									<input type="hidden" id="woocommerce-register-nonce" name="woocommerce-register-nonce" value="30a81377c0" /><input type="hidden" name="_wp_http_referer" value="/shop/" />									<input type="submit" class="button" name="register" value="Register" />
// 								</div>
// 																<div class="button-next-login" >Already has an account</div>
// 							</div>
// 						</form>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 																		</div>
// 																<div class="wishlist-box">
// 									<a href="../wishlist/index.html"><i class="icon-Heart"></i></a>
// 									<span class="count-wishlist">1</span>
// 								</div>
// 																								<div class="papzi-topcart dropdown light">
// 									<div class="dropdown mini-cart top-cart">
// 	<div class="remove-cart-shadow"></div>
//   <a class="dropdown-toggle cart-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// 	<div class="icons-cart"><i class="icon-Cart"></i><span class="cart-count">0</span></div>
//   </a>
//   <div class="dropdown-menu cart-popup">
// 	<div class="remove-cart">
// 		<a class="dropdown-toggle cart-remove" data-toggle="dropdown" data-hover="dropdown" data-delay="0" href="#" title="View your shopping cart">
// 			Close<i class="icon_close"></i>
// 		</a>
// 	</div>
// 	<div class="top-total-cart">Shopping Cart(0)</div>
// 	<div class="cart-icon-big"></div>
// <ul class="cart_list product_list_widget ">
// 			<li class="empty">
// 			<span>No products in the cart.</span>
// 			<a class="go-shop" href="index.html">GO TO SHOP			<i aria-hidden="true" class="arrow_right"></i></a>
// 		</li>
// 	</ul>
//   </div>
// </div>								</div>
// 															</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 					</div>
// 	</header>
// 	</div>
//   </body>

//     </div>
//   );
// };

// export default Header;import React, { useState, useEffect } from "react";


//  import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
// import { useCart } from "../context/CartContext";
// import "./mycss.css"
// import { Link } from "react-router-dom";

// const Header = ({ cartCount = 1 }) => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const { cartItems } = useCart();

//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

//   useEffect(() => {
//     const fetchCategories = async () => {
//       try {
//         const res = await axios.get(
//           `${process.env.REACT_APP_API_URL}/api/db/categories`
//         );
//         setCategories(res.data);
//       } catch (err) {
//         console.error("Error fetching categories:", err);
//       }
//     };
//     fetchCategories();
//   }, []);

//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Toggle menu
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   // Close menu
//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   // Prevent body scroll when menu is open
//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//   }, [menuOpen]);

//   return (
//     <div> 
//       <div className="hfeed page-wrapper" style={{backgroundColor: "white"}}>
//         <header id='bwp-header' className="bwp-header header-v3" style={{backgroundColor: "white"}}>
          
//           {/* ========== MOBILE HEADER ========== */}
//           <div className="header-mobile">
//             <div className="container">
//               <div className="row">
//                 <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-left">
//                   <div className="navbar-header">
//                     <button 
//                       type="button" 
//                       id="show-megamenu" 
//                       className="navbar-toggle"
//                       onClick={toggleMenu}
//                     >
//                       <span>Menu</span>
//                     </button>
//                   </div>
//                 </div>
                
//                 <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6 header-center">
//                   <div className="wpbingoLogo">
//                     <Link to="/">
//                       <img src="https://papzi.wpbingosite.com/wp-content/uploads/2022/01/logo.png" alt="Papzi"/>
//                     </Link>
//                   </div> 
//                 </div>
                
//                 <div className="col-xl-4 col-lg-4 col-md-4 col-sm-3 col-3 header-right">
//                   <div className="papzi-topcart dropdown">
//                     <div className="dropdown mini-cart top-cart">
//                       <div className="remove-cart-shadow"></div>
//                       <Link className="dropdown-toggle cart-icon" to="/cart" role="button">
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
            
//             <div className="header-mobile-fixed">
//               <div className="shop-page">
//                 <Link to="/shop"><i className="wpb-icon-shop"></i></Link>
//               </div>
//               <div className="my-account">
//                 <div className="login-header">
//                   <Link to="/my-account"><i className="wpb-icon-user"></i></Link>
//                 </div>
//               </div>
//               <div className="search-box">
//                 <div className="search-toggle"><i className="wpb-icon-magnifying-glass"></i></div>
//               </div>
//               <div className="wishlist-box">
//                 <Link to="/wishlist"><i className="wpb-icon-heart"></i></Link>
//               </div>
//             </div>
//           </div>

//           {/* ========== MOBILE MENU SIDEBAR ========== */}
//           <div className={`wpbingo-menu-mobile header-menu ${menuOpen ? 'open' : ''}`}>
//             <div className="header-menu-bg">
//               <button 
//                 className="close-menu-btn"
//                 onClick={closeMenu}
//               >
//                 ×
//               </button>
              
//               <div className="wpbingo-menu-wrapper">
//                 <div className="megamenu">
//                   <nav className="navbar-default">
//                     <div className="bwp-navigation primary-navigation navbar-mega">
//                       <nav id="main-navigation" className="std-menu clearfix">
//                         <div className="menu-main-menu-container">
//                           <ul id="menu-main-menu" className="menu">
                            
//                             {/* HOME */}
//                             <li className="menu-item menu-item-has-children">
//                               <Link to="/" onClick={closeMenu}>
//                                 <span className="menu-item-text">Home</span>
//                               </Link>
//                             </li>
                            
//                             {/* SHOP */}
//                             <li className="menu-item menu-item-has-children">
//                               <Link to="/shop" onClick={closeMenu}>
//                                 <span className="menu-item-text">Shop</span>
//                               </Link>
//                             </li>
                            
//                             {/* PRODUCT */}
//                             <li className="menu-item menu-item-has-children">
//                               <Link to="/products" onClick={closeMenu}>
//                                 <span className="menu-item-text">Product</span>
//                               </Link>
//                             </li>
                            
//                             {/* BLOG */}
//                             <li className="menu-item menu-item-has-children">
//                               <Link to="/blog" onClick={closeMenu}>
//                                 <span className="menu-item-text">Blog</span>
//                               </Link>
//                             </li>
                            
//                             {/* PAGE */}
//                             <li className="menu-item menu-item-has-children">
//                               <a href="#" style={{color: '#333', textDecoration: 'none'}}>
//                                 <span className="menu-item-text">Page</span>
//                               </a>
//                               <ul className="sub-menu">
//                                 <li>
//                                   <Link to="/about-us" onClick={closeMenu}>About Us</Link>
//                                 </li>
//                                 <li>
//                                   <Link to="/contact" onClick={closeMenu}>Contact</Link>
//                                 </li>
//                                 <li>
//                                   <Link to="/faq" onClick={closeMenu}>FAQ</Link>
//                                 </li>
//                                 <li>
//                                   <Link to="/404" onClick={closeMenu}>Page 404</Link>
//                                 </li>
//                               </ul>
//                             </li>

//                             {/* ADDITIONAL MOBILE LINKS */}
//                             <li className="menu-item">
//                               <Link to="/cart" onClick={closeMenu}>
//                                 <span className="menu-item-text">Cart ({totalItems})</span>
//                               </Link>
//                             </li>
                            
//                             <li className="menu-item">
//                               <Link to="/wishlist" onClick={closeMenu}>
//                                 <span className="menu-item-text">Wishlist</span>
//                               </Link>
//                             </li>
                            
//                             <li className="menu-item">
//                               <Link to="/my-account" onClick={closeMenu}>
//                                 <span className="menu-item-text">My Account</span>
//                               </Link>
//                             </li>
                            
//                           </ul>
//                         </div>
//                       </nav>
//                     </div>
//                   </nav> 
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ========== OVERLAY ========== */}
//           {menuOpen && (
//             <div 
//               className="mobile-menu-overlay"
//               onClick={closeMenu}
//             />
//           )}

//           {/* ========== DESKTOP HEADER ========== */}
//           <div className="header-desktop">
//             <div className='header-wrapper' data-sticky_header="0">
//               <div className="container">
//                 <div className="row">
//                   <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 header-left">
//                     <div className="wpbingoLogo">
//                       <Link to="/">
//                         <img src="https://papzi.wpbingosite.com/wp-content/uploads/2022/01/logo.png" alt="Papzi"/>
//                       </Link>
//                     </div> 
//                     <div className="phone hidden-xs">
//                       <a href="tel:934595876">934595876</a>
//                     </div>
//                   </div>
                  
//                   <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 text-center">
//                     <div className="wpbingo-menu-mobile header-menu">
//                       <div className="header-menu-bg">
//                         <div className="wpbingo-menu-wrapper">
//                           <div className="megamenu">
//                             <nav className="navbar-default">
//                               <div className="bwp-navigation primary-navigation navbar-mega">
//                                 <div className="float-menu">
//                                   <nav id="main-navigation" className="std-menu clearfix">
//                                     <div className="menu-main-menu-container">
//                                       <ul id="menu-main-menu" className="menu">
//                                         <li className="menu-item menu-item-has-children">
//                                           <Link to="/"><span className="menu-item-text">Home</span></Link>
//                                         </li>
//                                         <li className="menu-item menu-item-has-children">
//                                           <Link to="/shop"><span className="menu-item-text">Shop</span></Link>
//                                         </li>
//                                         <li className="menu-item menu-item-has-children">
//                                           <Link to="/products"><span className="menu-item-text">Product</span></Link>
//                                         </li>
//                                         <li className="menu-item menu-item-has-children">
//                                           <Link to="/blog"><span className="menu-item-text">Blog</span></Link>
//                                         </li>
//                                         <li className="menu-item menu-item-has-children">
//                                           <a href="#"><span className="menu-item-text">Page</span></a>
//                                           <ul className="sub-menu">
//                                             <li><Link to="/about-us">About Us</Link></li>
//                                             <li><Link to="/contact">Contact</Link></li>
//                                             <li><Link to="/faq">Faq</Link></li>
//                                             <li><Link to="/404">Page 404</Link></li>
//                                           </ul>
//                                         </li>
//                                       </ul>
//                                     </div>
//                                   </nav>
//                                 </div>
//                               </div>
//                             </nav> 
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12 header-right">
//                     <div className="header-page-link">
//                       <div className="search-box">
//                         <div className="search-toggle"><i className="icon-Search"></i></div>
//                       </div>
//                       <div className="login-header">
//                         <Link className="active-login" to="/my-account">
//                           <i className="icon-Login"></i>
//                         </Link>
//                       </div>
//                       <div className="wishlist-box">
//                         <Link to="/wishlist">
//                           <i className="icon-Heart"></i>
//                         </Link>
//                         <span className="count-wishlist">0</span>
//                       </div>
//                       <div className="papzi-topcart dropdown light">
//                         <Link className="cart-icon" to="/cart">
//                           <div className="icons-cart">
//                             <i className="icon-Cart"></i>
//                             <span className="cart-count">{totalItems}</span>
//                           </div>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </header>
//       </div>

//       {/* ========== STYLES ========== */}
//       <style jsx>{`
//         /* Mobile menu sidebar */
//         .wpbingo-menu-mobile {
//           position: fixed;
//           top: 0;
//           left: -100%;
//           width: 300px;
//           max-width: 85%;
//           height: 100vh;
//           background: white;
//           z-index: 9999;
//           transition: left 0.3s ease;
//           overflow-y: auto;
//           box-shadow: 2px 0 20px rgba(0,0,0,0.2);
//         }

//         .wpbingo-menu-mobile.open {
//           left: 0;
//         }

//         .close-menu-btn {
//           position: absolute;
//           top: 15px;
//           right: 15px;
//           background: none;
//           border: none;
//           font-size: 35px;
//           cursor: pointer;
//           z-index: 10000;
//           color: #333;
//           width: 40px;
//           height: 40px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .wpbingo-menu-mobile .menu {
//           list-style: none;
//           padding: 60px 0 30px 0;
//           margin: 0;
//         }

//         .wpbingo-menu-mobile .menu-item {
//           border-bottom: 1px solid #eee;
//         }

//         .wpbingo-menu-mobile .menu-item > a {
//           display: block;
//           padding: 15px 20px;
//           color: #333;
//           text-decoration: none;
//           font-size: 16px;
//           font-weight: 500;
//         }

//         .wpbingo-menu-mobile .menu-item > a:hover {
//           background: #f8f8f8;
//           color: #e74c3c;
//         }

//         .wpbingo-menu-mobile .sub-menu {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           background: #f8f8f8;
//         }

//         .wpbingo-menu-mobile .sub-menu li {
//           border-bottom: 1px solid #e0e0e0;
//         }

//         .wpbingo-menu-mobile .sub-menu a {
//           display: block;
//           padding: 12px 20px 12px 40px;
//           color: #666;
//           text-decoration: none;
//           font-size: 14px;
//         }

//         .wpbingo-menu-mobile .sub-menu a:hover {
//           background: #fff;
//           color: #e74c3c;
//         }

//         /* Overlay */
//         .mobile-menu-overlay {
//           position: fixed;
//           top: 0;
//           left: 0;
//           right: 0;
//           bottom: 0;
//           background: rgba(0,0,0,0.5);
//           z-index: 9998;
//         }

//         /* Responsive */
//         @media (min-width: 992px) {
//           .header-mobile {
//             display: none !important;
//           }
//           .wpbingo-menu-mobile.header-menu {
//             position: static !important;
//             left: auto !important;
//             width: auto !important;
//             height: auto !important;
//             background: transparent !important;
//             box-shadow: none !important;
//             overflow: visible !important;
//           }
//           .close-menu-btn {
//             display: none !important;
//           }
//           .mobile-menu-overlay {
//             display: none !important;
//           }
//         }

//         @media (max-width: 991px) {
//           .header-desktop {
//             display: none !important;
//           }
//         }

//         /* White background */
//         .bwp-header,
//         .hfeed.page-wrapper {
//           background-color: white !important;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Header;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import "./mycss.css";
import { Link } from "react-router-dom";

const Header = ({ cartCount = 1 }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const { cartItems } = useCart();

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
            <div className="header-mobile-fixed">
              <div className="shop-page"><Link to="/shop"><i className="wpb-icon-shop"></i></Link></div>
              <div className="my-account"><div className="login-header"><Link to="/my-account"><i className="wpb-icon-user"></i></Link></div></div>
              <div className="search-box"><div className="search-toggle"><i className="wpb-icon-magnifying-glass"></i></div></div>
              <div className="wishlist-box"><Link to="/wishlist"><i className="wpb-icon-heart"></i></Link></div>
            </div>
          </div>

          {/* ========== MOBILE SIDEBAR ========== */}
          <div className={`mobile-sidebar${menuOpen ? " open" : ""}`}>
            <button className="close-menu-btn" onClick={closeMenu}>×</button>
            <ul className="mobile-menu-list">
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/shop" onClick={closeMenu}>Shop</Link></li>
              <li><Link to="/products" onClick={closeMenu}>Product</Link></li>
              <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
              <li>
                <span className="mobile-menu-label">Page</span>
                <ul className="mobile-sub-menu">
                  <li><Link to="/about-us" onClick={closeMenu}>About Us</Link></li>
                  <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                  <li><Link to="/faq" onClick={closeMenu}>FAQ</Link></li>
                  <li><Link to="/404" onClick={closeMenu}>Page 404</Link></li>
                </ul>
              </li>
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
                        <li className="desktop-menu-item"><Link to="/products">Product</Link></li>
                        <li className="desktop-menu-item"><Link to="/blog">Blog</Link></li>
                        <li className="desktop-menu-item has-dropdown">
                          <a href="#">Page</a>
                          <ul className="desktop-dropdown">
                            <li><Link to="/about-us">About Us</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/faq">Faq</Link></li>
                            <li><Link to="/404">Page 404</Link></li>
                          </ul>
                        </li>
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