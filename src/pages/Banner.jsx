

import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// import "./mycss.css"
import Header3 from "./Header3";
import Header from "./Header";
import HeroBanner from "./HeroBanner";

import logo from "./logo.png";
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

   <div id='page' class="hfeed page-wrapper  "  >
          <h1 class="bwp-title hide"><a href="index.html" rel="home">Papzi</a></h1>
 
  <Header />
  <div id="bwp-main" class="bwp-main">
       
      <div id="main-content" class="main-content">
  <div id="primary" class="content-area container">
    <div id="content" class="site-content" role="main">
      <article id="post-9601" class="post-9601 page type-page status-publish hentry">
    <div class="entry-content clearfix">
        <div data-elementor-type="wp-page" data-elementor-id="9601" class="elementor elementor-9601">
       
    <HeroBanner />
        <section class="elementor-section elementor-top-section elementor-element elementor-element-c2c9c9f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c2c9c9f" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d1b49d2" data-id="d1b49d2" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <section class="elementor-section elementor-inner-section elementor-element elementor-element-163ac40 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="163ac40" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-9dcf62b" data-id="9dcf62b" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-1da782c elementor-widget elementor-widget-bwp_product_categories" data-id="1da782c" data-element_type="widget" data-widget_type="bwp_product_categories.default">
        <div class="elementor-widget-container">
          <div id="category_slide_17566747381770709775" class="bwp-woo-categories slider">
      <div class="content-category slick-carousel" data-dots="0" data-slidesToScroll="true" data-nav="1" data-columns4="1" data-columns3="2" data-columns2="3" data-columns1="4" data-columns1440="5" data-columns="6">
                          <div class="item item-product-cat">	
                      <div class="item-product-cat-content">
                              <a href="/shop">
                  <div class="item-image">
                                          <img decoding="async" src="/wp-content/uploads/2022/01/Image-2.jpg" alt="burgers" />
                                      </div>
                </a>
                                          
                            <div class="product-cat-content-info">
                                <h2 class="item-title">
                  <a href="/shop">Burgers</a>
                </h2>
                                              </div>
            </div>
           
            </div>
                      
                          <div class="item item-product-cat">	
                      <div class="item-product-cat-content">
                              <a href="/shop">
                  <div class="item-image">
                                          <img decoding="async" src="/wp-content/uploads/2022/01/Image-3.jpg" alt="combo-offer" />
                                      </div>
                </a>
                                          
                            <div class="product-cat-content-info">
                                <h2 class="item-title">
                  <a href="/shop">Combo Offer</a>
                </h2>
                                              </div>
            </div>
           
            </div>
                      
                          <div class="item item-product-cat">	
                      <div class="item-product-cat-content">
                              <a href="/shop">
                  <div class="item-image">
                                          <img decoding="async" src="/wp-content/uploads/2022/01/Image-4.jpg" alt="kids-menu" />
                                      </div>
                </a>
                                          
                            <div class="product-cat-content-info">
                                <h2 class="item-title">
                  <a href="/shop">Kids Menu</a>
                </h2>
                                              </div>
            </div>
           
            </div>
                      
                          <div class="item item-product-cat">	
                      <div class="item-product-cat-content">
                              <a href="/shop">
                  <div class="item-image">
                                          <img decoding="async" src="/wp-content/uploads/2022/01/Image-6.jpg" alt="pizza-menu" />
                                      </div>
                </a>
                                          
                            <div class="product-cat-content-info">
                                <h2 class="item-title">
                  <a href="/shop">Pizza Menu</a>
                </h2>
                                              </div>
            </div>
           
            </div>
                      
                          <div class="item item-product-cat">	
                      <div class="item-product-cat-content">
                              <a href="/shop">
                  <div class="item-image">
                                          <img decoding="async" src="/wp-content/uploads/2022/01/Image-5.jpg" alt="sandwich" />
                                      </div>
                </a>
                                          
                            <div class="product-cat-content-info">
                                <h2 class="item-title">
                  <a href="/shop">Sandwich</a>
                </h2>
                                              </div>
            </div>
           
            </div>
                      
                          <div class="item item-product-cat">	
                      <div class="item-product-cat-content">
                              <a href="/shop">
                  <div class="item-image">
                                          <img decoding="async" src="/wp-content/uploads/2022/01/Image-1.jpg" alt="sauces" />
                                      </div>
                </a>
                                          
                            <div class="product-cat-content-info">
                                <h2 class="item-title">
                  <a href="/shop">Sauces</a>
                </h2>
                                              </div>
            </div>
           
            </div>
                      
                          <div class="item item-product-cat">	
                      <div class="item-product-cat-content">
                              <a href="/shop">
                  <div class="item-image">
                                          <img decoding="async" src="/wp-content/uploads/2022/01/Image-3.jpg" alt="starbucks" />
                                      </div>
                </a>
                                          
                            <div class="product-cat-content-info">
                                <h2 class="item-title">
                  <a href="/shop">Starbucks</a>
                </h2>
                                              </div>
            </div>
           
            </div>
                      
      </div>
</div>				</div>
        </div>
          </div>
    </div>
          </div>
    </section>
        {/* <section class="elementor-section elementor-inner-section elementor-element elementor-element-5eec500 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5eec500" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-605b04a" data-id="605b04a" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-f44e559 elementor-widget elementor-widget-bwp_image" data-id="f44e559" data-element_type="widget" data-widget_type="bwp_image.default">
        <div class="elementor-widget-container">
          <div class="bwp-widget-banner layout-6">
    
  <div class="bg-banner">
    <div class="banner-wrapper banners">
      <div class="bwp-image ">
                  <a href="#"><img decoding="async" src="wp-content/uploads/2021/12/banner-2.jpg" alt="Banner Image" /></a>
              </div>
      <div class="banner-wrapper-infor">
        <div class="info">
          <div class="content">
                          <a class= "link-title" href="#"><h3 class="title-banner">Big Burger <br />Premium</h3></a>
                                      <div class="bwp-image-subtitle">
                            
                  Everything you order  <br />will be quickly <br /> delivered to your  door.							
                              </div>	
                                    <div class="bwp-image-description">
                          
                $10.00						
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
        <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-e0e5dce" data-id="e0e5dce" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-a2a5656 elementor-widget elementor-widget-bwp_image" data-id="a2a5656" data-element_type="widget" data-widget_type="bwp_image.default">
        <div class="elementor-widget-container">
          <div class="bwp-widget-banner layout-6">
    
  <div class="bg-banner">
    <div class="banner-wrapper banners">
      <div class="bwp-image ">
                  <a href="#"><img decoding="async" src="wp-content/uploads/2021/12/banner-1.jpg" alt="Banner Image" /></a>
              </div>
      <div class="banner-wrapper-infor">
        <div class="info">
          <div class="content">
                          <a class= "link-title" href="#"><h3 class="title-banner">BBQ <br /> Chicken</h3></a>
                                      <div class="bwp-image-subtitle">
                            
                  Everything you order  <br />will be quickly <br /> delivered to your  door.							
                              </div>	
                                    <div class="bwp-image-description">
                          
                $15.00						
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
        <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-3bc9b6f" data-id="3bc9b6f" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-9237a81 elementor-widget elementor-widget-bwp_image" data-id="9237a81" data-element_type="widget" data-widget_type="bwp_image.default">
        <div class="elementor-widget-container">
          <div class="bwp-widget-banner layout-6">
    
  <div class="bg-banner">
    <div class="banner-wrapper banners">
      <div class="bwp-image ">
                  <a href="#"><img decoding="async" src="wp-content/uploads/2021/12/banner-3.jpg" alt="Banner Image" /></a>
              </div>
      <div class="banner-wrapper-infor">
        <div class="info">
          <div class="content">
                          <a class= "link-title" href="#"><h3 class="title-banner">Combo <br /> Kids</h3></a>
                                      <div class="bwp-image-subtitle">
                            
                  Everything you order  <br />will be quickly <br /> delivered to your  door.							
                              </div>	
                                    <div class="bwp-image-description">
                          
                $16.00						
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
    </section> */}
        <section class="elementor-section elementor-inner-section elementor-element elementor-element-c8db585 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c8db585" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-645c144" data-id="645c144" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-8a163a4 elementor-widget elementor-widget-bwp_image" data-id="8a163a4" data-element_type="widget" data-widget_type="bwp_image.default">
        <div class="elementor-widget-container">
          <div class="bwp-widget-banner layout-7">
    
  <div class="bg-banner">
    <div class="banner-wrapper banners">
      <div class="bwp-image ">
                  <a href="#"><img decoding="async" src="wp-content/uploads/2021/12/banner-6.jpg" alt="Banner Image" /></a>
              </div>
      <div class="banner-wrapper-infor">
        <div class="info">
          <div class="content">
                          <a class= "link-title" href="#"><h3 class="title-banner">Drinks<br />  offer</h3></a>
                                      <div class="bwp-image-subtitle">
                            
                  Buy any 2 large pizzas <br />and get a 1.5L Pepsi Free 							
                              </div>	
                                                  <a class="button" href="/shop/single">ORDER NOW</a>						
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
        <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-a597ac9" data-id="a597ac9" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-d0652df elementor-widget elementor-widget-bwp_image" data-id="d0652df" data-element_type="widget" data-widget_type="bwp_image.default">
        <div class="elementor-widget-container">
          <div class="bwp-widget-banner layout-6">
    
  <div class="bg-banner">
    <div class="banner-wrapper banners">
      <div class="bwp-image ">
                  <a href="#"><img decoding="async" src="wp-content/uploads/2021/12/banner-7.jpg" alt="Banner Image" /></a>
              </div>
      <div class="banner-wrapper-infor">
        <div class="info">
          <div class="content">
                          <a class= "link-title" href="#"><h3 class="title-banner">combo  <br />pizza</h3></a>
                                      <div class="bwp-image-subtitle">
                            
                  Buy any 2 large pizzas <br />and get a 1.5L Pepsi Free 							
                              </div>	
                                                  <a class="button" href="#">free shipping</a>						
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
        <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-7370ae0" data-id="7370ae0" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-5cd727f elementor-widget elementor-widget-bwp_image" data-id="5cd727f" data-element_type="widget" data-widget_type="bwp_image.default">
        <div class="elementor-widget-container">
          <div class="bwp-widget-banner layout-6">
    
  <div class="bg-banner">
    <div class="banner-wrapper banners">
      <div class="bwp-image ">
                  <a href="#"><img decoding="async" src="wp-content/uploads/2021/12/banner-8.jpg" alt="Banner Image" /></a>
              </div>
      <div class="banner-wrapper-infor">
        <div class="info">
          <div class="content">
                          <a class= "link-title" href="#"><h3 class="title-banner">explore <br /> food</h3></a>
                                      <div class="bwp-image-subtitle">
                            
                  Order Your Favouriate<br />  Food to day							
                              </div>	
                                                  <a class="button" href="#">view more</a>						
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
    </section>
          </div>
    </div>
          </div>
    </section>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-d5adbdf elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="d5adbdf" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-735a6f9" data-id="735a6f9" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-c948921 box-shadow elementor-widget elementor-widget-heading" data-id="c948921" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
          <h2 class="elementor-heading-title elementor-size-default">Tasty & Crunchy</h2>				</div>
        </div>
        <div class="elementor-element elementor-element-92e8d3f elementor-widget elementor-widget-heading" data-id="92e8d3f" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
          <h2 class="elementor-heading-title elementor-size-default">Favorite Menu</h2>				</div>
        </div>
        <div class="elementor-element elementor-element-0a7d681 elementor-widget elementor-widget-text-editor" data-id="0a7d681" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                  Inspired by recipes and creations of world’s best chefs								</div>
        </div>
          </div>
    </div>
          </div>
    </section>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-3635312 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3635312" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2c38ecd" data-id="2c38ecd" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-0e0a922 elementor-widget elementor-widget-bwp_product_list" data-id="0e0a922" data-element_type="widget" data-widget_type="bwp_product_list.default">
        <div class="elementor-widget-container">
            <div id="bwp_toprated_7689113691770709775" class="bwp_product_list slider no-title">
        <div class="list-product">
      <div class="product-content">
        <div class="content-product-list">	
          <div class="slider products-list grid slick-carousel" data-slidesToScroll="true" data-dots="false"  data-nav="0" data-columns4="2" data-columns3="2" data-columns2="2" data-columns1="3" data-columns1440="4" data-columns="4">	
                                    <div class="item-product">
                          <div class="items">
                                  <div class="products-entry content-product1 clearfix product-wapper">
  <div class="products-thumb">
      <div class='product-lable'>
                  <div class="vgwc-label vgwc-featured hot">Hot</div>						
          <div class="onsale">-48%</div>			</div>
<div class="product-thumb-hover"><a href="/shop/single" class="woocommerce-LoopProduct-link"><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-21-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" /><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-26-600x600.jpg" class="hover-image back" alt="" /></a></div>		<button class="woosw-btn woosw-btn-16541" data-id="16541" data-product_name="Smoothie drinks" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-21-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
      <span class="product-quickview"></span>		</div>
      </div>
  <div class="products-content">
    <div class="contents">
      <h3 class="product-title"><a href="/shop/single">Smoothie drinks</a></h3>
      
  <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>13.00</bdi></span> &ndash; <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>67.00</bdi></span></span>
      <div class="btn-atc">
        <a rel="nofollow" href="/shop/single" data-quantity="1" data-product_id="16541" data-product_sku="D2300-3-2-3" class="button product_type_variable add_to_cart_button">Select options</a>			</div>
    </div>
  </div>
</div>															</div>
                                                <div class="items">
                                  <div class="products-entry content-product1 clearfix product-wapper">
  <div class="products-thumb">
      <div class='product-lable'>
                  <div class="vgwc-label vgwc-featured hot">Hot</div>						
      </div>
<div class="product-thumb-hover"><a href="/shop/single" class="woocommerce-LoopProduct-link"><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-26-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" /><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-15-600x600.jpg" class="hover-image back" alt="" /></a></div>		<button class="woosw-btn woosw-btn-16536" data-id="16536" data-product_name="Sleek Iron Clock" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-26-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
      <span class="product-quickview"></span>		</div>
      </div>
  <div class="products-content">
    <div class="contents">
      <h3 class="product-title"><a href="/shop/single">Sleek Iron Clock</a></h3>
      
  <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>50.00</bdi></span> &ndash; <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>90.00</bdi></span></span>
      <div class="btn-atc">
        <a rel="nofollow" href="/shop/single" data-quantity="1" data-product_id="16536" data-product_sku="D2300-3-2-2" class="button product_type_variable add_to_cart_button">Select options</a>			</div>
    </div>
  </div>
</div>															</div>
             
              </div>
                                                <div class="item-product">
                          <div class="items">
                                  <div class="products-entry content-product1 clearfix product-wapper">
  <div class="products-thumb">
      <div class='product-lable'>
                  <div class="vgwc-label vgwc-featured hot">Hot</div>						
      </div>
<div class="product-thumb-hover"><a href="/shop/single" class="woocommerce-LoopProduct-link"><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-5-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" /><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-13-600x600.jpg" class="hover-image back" alt="" /></a></div>		<button class="woosw-btn woosw-btn-16508" data-id="16508" data-product_name="BBQ Fries" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-5-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
      <span class="product-quickview"></span>		</div>
      </div>
  <div class="products-content">
    <div class="contents">
      <h3 class="product-title"><a href="/shop/single">BBQ Fries</a></h3>
      
  <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>1,200.00</bdi></span></span>
      <div class="btn-atc">
        <a rel="nofollow" href="#" data-quantity="1" data-product_id="16508" data-product_sku="D2300" class="button product_type_external read_more">Buy product</a>			</div>
    </div>
  </div>
</div>															</div>
                                                <div class="items">
                                  <div class="products-entry content-product1 clearfix product-wapper">
  <div class="products-thumb">
      <div class='product-lable'>
                  <div class="vgwc-label vgwc-featured hot">Hot</div>						
      </div>
<div class="product-thumb-hover"><a href="/shop/single" class="woocommerce-LoopProduct-link"><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-19-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" /><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-24-600x600.jpg" class="hover-image back" alt="" /></a></div>		<button class="woosw-btn woosw-btn-16320" data-id="16320" data-product_name="Alsatian" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-19-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
      <span class="product-quickview"></span>		</div>
      </div>
  <div class="products-content">
    <div class="contents">
      <h3 class="product-title"><a href="/shop/single">Alsatian</a></h3>
      
  <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>75.00</bdi></span></span>
      <div class="btn-atc">
        <a rel="nofollow" href="index694c.html?add-to-cart=16320" data-quantity="1" data-product_id="16320" data-product_sku="D1118" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>			</div>
    </div>
  </div>
</div>															</div>
             
              </div>
                                                <div class="item-product">
                          <div class="items">
                                  <div class="products-entry content-product1 clearfix product-wapper">
  <div class="products-thumb">
      <div class='product-lable'>
                
          <div class="onsale">-50%</div>			</div>
<div class="product-thumb-hover"><a href="/shop/single" class="woocommerce-LoopProduct-link"><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-11-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" /><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-13-600x600.jpg" class="hover-image back" alt="" /></a></div>		<button class="woosw-btn woosw-btn-10448" data-id="10448" data-product_name="Cheddar Fries" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-11-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
      <span class="product-quickview"></span>		</div>
          <div class="product-stock">    
        <span class="stock">Out Of Stock</span>
      </div>
      </div>
  <div class="products-content">
    <div class="contents">
      <h3 class="product-title"><a href="/shop/single">Cheddar Fries</a></h3>
      
  <span class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>20.00</bdi></span></del> <span class="screen-reader-text">Original price was: &#036;20.00.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>10.00</bdi></span></ins><span class="screen-reader-text">Current price is: &#036;10.00.</span></span>
      <div class="btn-atc">
        <a rel="nofollow" href="/shop/single" data-quantity="1" data-product_id="10448" data-product_sku="U2006" class="button product_type_simple read_more ajax_add_to_cart">Read more</a>			</div>
    </div>
  </div>
</div>															</div>
                                                <div class="items">
                                  <div class="products-entry content-product1 clearfix product-wapper">
  <div class="products-thumb">
      <div class='product-lable'>
                  <div class="vgwc-label vgwc-featured hot">Hot</div>						
      </div>
<div class="product-thumb-hover"><a href="/shop/single" class="woocommerce-LoopProduct-link"><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-22-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" /><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2018/10/1-600x600.jpg" class="hover-image back" alt="" /></a></div>		<button class="woosw-btn woosw-btn-1061" data-id="1061" data-product_name="Banana Leaf" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-22-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
      <span class="product-quickview"></span>		</div>
      </div>
  <div class="products-content">
    <div class="contents">
      <h3 class="product-title"><a href="/shop/single">Banana Leaf</a></h3>
      
  <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>100.00</bdi></span></span>
      <div class="btn-atc">
        <a rel="nofollow" href="indexfecd.html?add-to-cart=1061" data-quantity="1" data-product_id="1061" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>			</div>
    </div>
  </div>
</div>															</div>
             
              </div>
                                                <div class="item-product">
                          <div class="items">
                                  <div class="products-entry content-product1 clearfix product-wapper">
  <div class="products-thumb">
      <div class='product-lable'>
                  <div class="vgwc-label vgwc-featured hot">Hot</div>						
      </div>
<div class="product-thumb-hover"><a href="/shop/single" class="woocommerce-LoopProduct-link"><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-24-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" /><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-25-600x600.jpg" class="hover-image back" alt="" /></a></div>	<div class="countdown">
    <div class="item-countdown">
      <div class="product-countdown"  
        data-day="d"
        data-hour="h"
        data-min="m"
        data-sec="s"
        data-date="1775951999"  
        data-sttime="1712275200" 
        data-cdtime="1775951999"
        data-id="item_countdown_1237929261770709775">
      </div>
    </div>
  </div>
      <button class="woosw-btn woosw-btn-3989" data-id="3989" data-product_name="Mare e Monti" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-24-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
      <span class="product-quickview"></span>		</div>
      </div>
  <div class="products-content">
    <div class="contents">
      <h3 class="product-title"><a href="shop/single">Mare e Monti</a></h3>
      
  <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>22.00</bdi></span> &ndash; <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>400.00</bdi></span></span>
      <div class="btn-atc">
        <a rel="nofollow" href="shop/single" data-quantity="1" data-product_id="3989" data-product_sku="VN00189" class="button product_type_grouped read_more">View products</a>			</div>
    </div>
  </div>
</div>															</div>
                                                <div class="items">
                                  <div class="products-entry content-product1 clearfix product-wapper">
  <div class="products-thumb">
      <div class='product-lable'>
                
      </div>
<div class="product-thumb-hover"><a href="shop/single" class="woocommerce-LoopProduct-link"><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-3-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" /><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-27-600x600.jpg" class="hover-image back" alt="" /></a></div>		<button class="woosw-btn woosw-btn-16588" data-id="16588" data-product_name="Burger King" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-3-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
      <span class="product-quickview"></span>		</div>
      </div>
  <div class="products-content">
    <div class="contents">
      <h3 class="product-title"><a href="shop/single">Burger King</a></h3>
      
  <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>99.00</bdi></span></span>
      <div class="btn-atc">
        <a rel="nofollow" href="index4446.html?add-to-cart=16588" data-quantity="1" data-product_id="16588" data-product_sku="D2409" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>			</div>
    </div>
  </div>
</div>															</div>
             
              </div>
                                                <div class="item-product">
                          <div class="items">
                                  <div class="products-entry content-product1 clearfix product-wapper">
  <div class="products-thumb">
      <div class='product-lable'>
                
      </div>
<div class="product-thumb-hover"><a href="shop/single" class="woocommerce-LoopProduct-link"><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-11-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" /><img loading="lazy" decoding="async" width="600" height="600" src="wp-content/uploads/2019/04/american-burgers-6-600x600.jpg" class="hover-image back" alt="" /></a></div>		<button class="woosw-btn woosw-btn-16521" data-id="16521" data-product_name="Florentine" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-11-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
      <span class="product-quickview"></span>		</div>
      </div>
  <div class="products-content">
    <div class="contents">
      <h3 class="product-title"><a href="shop/single">Florentine</a></h3>
      
  <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>120.00</bdi></span></span>
      <div class="btn-atc">
        <a rel="nofollow" href="indexd1f8.html?add-to-cart=16521" data-quantity="1" data-product_id="16521" data-product_sku="D2300-3-1" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>			</div>
    </div>
  </div>
</div>															</div>
             
              </div>
                                </div>
          <div class="content-button">
                        <div class="btn-all">
              <a href="/shop">all products</a>
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
    </section>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-98061fd elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="98061fd" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7a8f819" data-id="7a8f819" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-4daa5b5 head elementor-widget elementor-widget-heading" data-id="4daa5b5" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
          <h2 class="elementor-heading-title elementor-size-default">Combo Salad  <br />with special price</h2>				</div>
        </div>
        <div class="elementor-element elementor-element-f1122ba head-1 elementor-widget elementor-widget-text-editor" data-id="f1122ba" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                  Buy any 2 large pizzas and get a 1.5L Pepsi Free								</div>
        </div>
        <div class="elementor-element elementor-element-dba27e8 elementor-align-center elementor-widget elementor-widget-button" data-id="dba27e8" data-element_type="widget" data-widget_type="button.default">
        <div class="elementor-widget-container">
                  <div class="elementor-button-wrapper">
          <a class="elementor-button elementor-button-link elementor-size-sm" href="/shop">
            <span class="elementor-button-content-wrapper">
                  <span class="elementor-button-text"><a href="/shop/single">ORDER NOW</a></span>
          </span>
          </a>
        </div>
                </div>
        </div>
        <div class="elementor-element elementor-element-3f3aa8d head-2 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-heading" data-id="3f3aa8d" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="heading.default">
        <div class="elementor-widget-container">
          <h2 class="elementor-heading-title elementor-size-default">Only<br /><span>$21.9</span></h2>				</div>
        </div>
          </div>
    </div>
          </div>
    </section>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-f43a49c elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="f43a49c" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-93c0316" data-id="93c0316" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-edc46bb elementor-widget elementor-widget-image" data-id="edc46bb" data-element_type="widget" data-widget_type="image.default">
        <div class="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="1920" height="50" src="wp-content/uploads/2022/01/back-41.png" class="attachment-full size-full wp-image-36824" alt="" />															</div>
        </div>
          </div>
    </div>
          </div>
    </section>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-2501a37 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2501a37" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-879cb3e" data-id="879cb3e" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-a76bdfc elementor-widget elementor-widget-bwp_testimonial" data-id="a76bdfc" data-element_type="widget" data-widget_type="bwp_testimonial.default">
        <div class="elementor-widget-container">
          <div class="bwp-testimonial layout1">
  <div class="block">
    <div class="testimonial-title">
          </div>
  <div class="block_content">
    <div id="testimonial_11533055691770709775" class="slick-carousel " data-slidesToScroll="true" data-nav="1" data-dots="0" data-columns4="1" data-columns3="1" data-columns2="1" data-columns1="1" data-columns="1">
                                <div class="testimonial-content">
                  <div class="item">
            <div class="testimonial-item">
              <div class="testimonial-icon">
                <span aria-hidden="true" class="icon-quotes"></span>
              </div>
              <div class="testimonial-customer-position"><p class="post-excerpt">&#8220;Thanks guys, keep up the good work! It&#8217;s exactly
what I&#8217;ve been looking for. papzi is the real deal! It&#8217;s all good. &#8220;
</p></div>
              <div class="testimonial-image-info">
                <div class="testimonial-info">
                  <h2 class="testimonial-customer-name">Robet Smith</h2>
                    
                    <div class="testimonial-job">Photographer</div>
                                  </div>
              </div>
            </div>
          </div>
      
         
        </div>
                                        <div class="testimonial-content">
                  <div class="item">
            <div class="testimonial-item">
              <div class="testimonial-icon">
                <span aria-hidden="true" class="icon-quotes"></span>
              </div>
              <div class="testimonial-customer-position"><p class="post-excerpt">&#8220;Thanks guys, keep up the good work! It&#8217;s exactly
what I&#8217;ve been looking for. papzi is the real deal! It&#8217;s all good. &#8220;
</p></div>
              <div class="testimonial-image-info">
                <div class="testimonial-info">
                  <h2 class="testimonial-customer-name">Saitama One</h2>
                    
                    <div class="testimonial-job">Photographer </div>
                                  </div>
              </div>
            </div>
          </div>

         
        </div>
                                        <div class="testimonial-content">
                  <div class="item">
            <div class="testimonial-item">
              <div class="testimonial-icon">
                <span aria-hidden="true" class="icon-quotes"></span>
              </div>
              <div class="testimonial-customer-position"><p class="post-excerpt">&#8220;Thanks guys, keep up the good work! It&#8217;s exactly
what I&#8217;ve been looking for. papzi is the real deal! It&#8217;s all good. &#8220;
</p></div>
              <div class="testimonial-image-info">
                <div class="testimonial-info">
                  <h2 class="testimonial-customer-name">Sara Colinton</h2>
                    
                    <div class="testimonial-job">Nutricionist </div>
                                  </div>
              </div>
            </div>
          </div>

         
        </div>
                                        <div class="testimonial-content">
                  <div class="item">
            <div class="testimonial-item">
              <div class="testimonial-icon">
                <span aria-hidden="true" class="icon-quotes"></span>
              </div>
              <div class="testimonial-customer-position"><p class="post-excerpt">&#8220;Thanks guys, keep up the good work! It&#8217;s exactly
what I&#8217;ve been looking for. papzi is the real deal! It&#8217;s all good. &#8220;
</p></div>
              <div class="testimonial-image-info">
                <div class="testimonial-info">
                  <h2 class="testimonial-customer-name">Shetty Jamie</h2>
                    
                    <div class="testimonial-job">Designer</div>
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
          </div>
    </section>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-c07337f elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="c07337f" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-3e4701d" data-id="3e4701d" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-08840a4 elementor-widget elementor-widget-image" data-id="08840a4" data-element_type="widget" data-widget_type="image.default">
        <div class="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="217" height="214" src="wp-content/uploads/2021/12/flo.png" class="elementor-animation-wobble-horizontal attachment-large size-large wp-image-32761" alt="" />															</div>
        </div>
          </div>
    </div>
          </div>
    </section>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-bc07445 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="bc07445" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1007ee0" data-id="1007ee0" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-747919b box-shadow elementor-widget elementor-widget-heading" data-id="747919b" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
          <h2 class="elementor-heading-title elementor-size-default">Tasty & Crunchy</h2>				</div>
        </div>
        <div class="elementor-element elementor-element-e7549f0 elementor-widget elementor-widget-heading" data-id="e7549f0" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
          <h2 class="elementor-heading-title elementor-size-default">Special Price Combo</h2>				</div>
        </div>
        <div class="elementor-element elementor-element-67b225e elementor-widget elementor-widget-text-editor" data-id="67b225e" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                  Inspired by recipes and creations of world’s best chefs								</div>
        </div>
          </div>
    </div>
          </div>
    </section>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-5627ee9 elementor-section-full_width elementor-section-height-default elementor-section-height-default" data-id="5627ee9" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e3e1c10" data-id="e3e1c10" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <section class="elementor-section elementor-inner-section elementor-element elementor-element-3cda5c2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3cda5c2" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8e0ec53 wpb-col-sm-100" data-id="8e0ec53" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-c353329 elementor-widget elementor-widget-bwp_product_list" data-id="c353329" data-element_type="widget" data-widget_type="bwp_product_list.default">
        <div class="elementor-widget-container">
            <div id="bwp_default_8017910841770709775" class="bwp_product_list bwp_list_default default2  no-title">
    <div class="content products-list grid row">	
                  <div class="item-product col-xl-12 col-lg-12 col-md-12 col-12">
                      <div class="products-entry clearfix product-wapper">
          <div class="products-content">
            <div class="contents">
                <div class='product-lable'>
                  <div class="vgwc-label vgwc-featured hot">Hot</div>						
          <div class="onsale">-48%</div>			</div>
              <div class="product-top">
                <h3 class="product-title"><a href="shop/single">Smoothie drinks</a></h3>
                <div class="mkd-pli-dots"></div>
                  
  <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>13.00</bdi></span> &ndash; <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>67.00</bdi></span></span>
                  
              </div>
              <p class="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed... </p>						</div>
          </div>
        </div>
       
        </div>
                        <div class="item-product col-xl-12 col-lg-12 col-md-12 col-12">
                      <div class="products-entry clearfix product-wapper">
          <div class="products-content">
            <div class="contents">
                <div class='product-lable'>
                  <div class="vgwc-label vgwc-featured hot">Hot</div>						
      </div>
              <div class="product-top">
                <h3 class="product-title"><a href="shop/single">Sleek Iron Clock</a></h3>
                <div class="mkd-pli-dots"></div>
                  
  <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>50.00</bdi></span> &ndash; <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>90.00</bdi></span></span>
                  
              </div>
              <p class="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed... </p>						</div>
          </div>
        </div>
       
        </div>
                        <div class="item-product col-xl-12 col-lg-12 col-md-12 col-12">
                      <div class="products-entry clearfix product-wapper">
          <div class="products-content">
            <div class="contents">
                <div class='product-lable'>
                  <div class="vgwc-label vgwc-featured hot">Hot</div>						
      </div>
              <div class="product-top">
                <h3 class="product-title"><a href="shop/single">BBQ Fries</a></h3>
                <div class="mkd-pli-dots"></div>
                  
  <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>1,200.00</bdi></span></span>
                  
              </div>
              <p class="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed... </p>						</div>
          </div>
        </div>
       
        </div>
                        <div class="item-product col-xl-12 col-lg-12 col-md-12 col-12">
                      <div class="products-entry clearfix product-wapper">
          <div class="products-content">
            <div class="contents">
                <div class='product-lable'>
                  <div class="vgwc-label vgwc-featured hot">Hot</div>						
      </div>
              <div class="product-top">
                <h3 class="product-title"><a href="shop/single">Alsatian</a></h3>
                <div class="mkd-pli-dots"></div>
                  
  <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>75.00</bdi></span></span>
                  
              </div>
              <p class="post-excerpt">The EcoSmart Fleece Hoodie full-zip hooded jacket provides medium... </p>						</div>
          </div>
        </div>
       
        </div>
              
    </div>				
  </div>
          </div>
        </div>
          </div>
    </div>
        <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-040a656 wpb-col-sm-100" data-id="040a656" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-cf03b4f elementor-widget elementor-widget-bwp_product_list" data-id="cf03b4f" data-element_type="widget" data-widget_type="bwp_product_list.default">
        <div class="elementor-widget-container">
            <div id="bwp_default_7830669811770709775" class="bwp_product_list bwp_list_default default2  no-title">
    <div class="content products-list grid row">	
                  <div class="item-product col-xl-12 col-lg-12 col-md-12 col-12">
                      <div class="products-entry clearfix product-wapper">
          <div class="products-content">
            <div class="contents">
                <div class='product-lable'>
                  <div class="vgwc-label vgwc-featured hot">Hot</div>						
      </div>
              <div class="product-top">
                <h3 class="product-title"><a href="shop/single">Alsatian</a></h3>
                <div class="mkd-pli-dots"></div>
                  
  <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>75.00</bdi></span></span>
                  
              </div>
              <p class="post-excerpt">The EcoSmart Fleece Hoodie full-zip hooded jacket provides medium... </p>						</div>
          </div>
        </div>
       
        </div>
                        <div class="item-product col-xl-12 col-lg-12 col-md-12 col-12">
                      <div class="products-entry clearfix product-wapper">
          <div class="products-content">
            <div class="contents">
                <div class='product-lable'>
                
          <div class="onsale">-50%</div>			</div>
              <div class="product-top">
                <h3 class="product-title"><a href="shop/single">Cheddar Fries</a></h3>
                <div class="mkd-pli-dots"></div>
                  
  <span class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>20.00</bdi></span></del> <span class="screen-reader-text">Original price was: &#036;20.00.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>10.00</bdi></span></ins><span class="screen-reader-text">Current price is: &#036;10.00.</span></span>
                  
              </div>
              <p class="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed... </p>						</div>
          </div>
        </div>
       
        </div>
                        <div class="item-product col-xl-12 col-lg-12 col-md-12 col-12">
                      <div class="products-entry clearfix product-wapper">
          <div class="products-content">
            <div class="contents">
                <div class='product-lable'>
                  <div class="vgwc-label vgwc-featured hot">Hot</div>						
      </div>
              <div class="product-top">
                <h3 class="product-title"><a href="shop/single">Banana Leaf</a></h3>
                <div class="mkd-pli-dots"></div>
                  
  <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>100.00</bdi></span></span>
                  
              </div>
              <p class="post-excerpt">Dressed with leaf lettuce and tomatoes on a toasted... </p>						</div>
          </div>
        </div>
       
        </div>
                        <div class="item-product col-xl-12 col-lg-12 col-md-12 col-12">
                      <div class="products-entry clearfix product-wapper">
          <div class="products-content">
            <div class="contents">
                <div class='product-lable'>
                
      </div>
              <div class="product-top">
                <h3 class="product-title"><a href="shop/single">Burger King</a></h3>
                <div class="mkd-pli-dots"></div>
                  
  <span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>99.00</bdi></span></span>
                  
              </div>
              <p class="post-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed... </p>						</div>
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
    </section>
        <div class="elementor-element elementor-element-8d2177a elementor-widget__width-auto elementor-absolute elementor-hidden-tablet elementor-hidden-mobile img-3 elementor-widget elementor-widget-image" data-id="8d2177a" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
        <div class="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="404" height="743" src="wp-content/uploads/2021/12/back-8.png" class="attachment-large size-large wp-image-32896" alt="" />															</div>
        </div>
        <div class="elementor-element elementor-element-72270c4 img-3 elementor-widget__width-auto elementor-absolute elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-image" data-id="72270c4" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
        <div class="elementor-widget-container">
                              <img loading="lazy" decoding="async" width="291" height="501" src="wp-content/uploads/2021/12/back-7.png" class="attachment-large size-large wp-image-32880" alt="" />															</div>
        </div>
          </div>
    </div>
          </div>
    </section>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-07daac8 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="07daac8" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-cd9da43" data-id="cd9da43" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <section class="elementor-section elementor-inner-section elementor-element elementor-element-65ca295 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="65ca295" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-18ca296" data-id="18ca296" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-d4f5615 elementor-widget elementor-widget-bwp_image" data-id="d4f5615" data-element_type="widget" data-widget_type="bwp_image.default">
        <div class="elementor-widget-container">
          <div class="bwp-widget-banner layout-6">
    
  <div class="bg-banner">
    <div class="banner-wrapper banners">
      <div class="bwp-image ">
                  <a href="#"><img decoding="async" src="wp-content/uploads/2021/12/banner-12.jpg" alt="Banner Image" /></a>
              </div>
      <div class="banner-wrapper-infor">
        <div class="info">
          <div class="content">
                          <a class= "link-title" href="#"><h3 class="title-banner">Pizza  <br />Healthily</h3></a>
                                      <div class="bwp-image-subtitle">
                            
                  Everything you order  <br />will be quickly <br /> delivered to your  door.							
                              </div>	
                                    <div class="bwp-image-description">
                          
                $10.00						
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
        <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-350debf" data-id="350debf" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-6056890 elementor-widget elementor-widget-bwp_image" data-id="6056890" data-element_type="widget" data-widget_type="bwp_image.default">
        <div class="elementor-widget-container">
          <div class="bwp-widget-banner layout-6">
    
  <div class="bg-banner">
    <div class="banner-wrapper banners">
      <div class="bwp-image ">
                  <a href="#"><img decoding="async" src="wp-content/uploads/2021/12/banner-13.jpg" alt="Banner Image" /></a>
              </div>
      <div class="banner-wrapper-infor">
        <div class="info">
          <div class="content">
                          <a class= "link-title" href="#"><h3 class="title-banner">Short  <br />combo Drink</h3></a>
                                      <div class="bwp-image-subtitle">
                            
                  Everything you order  <br />will be quickly <br /> delivered to your  door.							
                              </div>	
                                    <div class="bwp-image-description">
                          
                $15.00						
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
        <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-2acefef" data-id="2acefef" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-5196663 elementor-widget elementor-widget-bwp_image" data-id="5196663" data-element_type="widget" data-widget_type="bwp_image.default">
        <div class="elementor-widget-container">
          <div class="bwp-widget-banner layout-6">
    
  <div class="bg-banner">
    <div class="banner-wrapper banners">
      <div class="bwp-image ">
                  <a href="#"><img decoding="async" src="wp-content/uploads/2021/12/banner-14.jpg" alt="Banner Image" /></a>
              </div>
      <div class="banner-wrapper-infor">
        <div class="info">
          <div class="content">
                          <a class= "link-title" href="#"><h3 class="title-banner">Single <br /> Products</h3></a>
                                      <div class="bwp-image-subtitle">
                            
                  Everything you order  <br />will be quickly <br /> delivered to your  door.							
                              </div>	
                                    <div class="bwp-image-description">
                          
                $16.00						
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
    </section>
          </div>
    </div>
          </div>
    </section>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-f3ff61a elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f3ff61a" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-7cfdedb" data-id="7cfdedb" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-6d0d56c head elementor-widget elementor-widget-heading" data-id="6d0d56c" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
          <h2 class="elementor-heading-title elementor-size-default">You Order We<br />  Deliver</h2>				</div>
        </div>
        <div class="elementor-element elementor-element-8d7c7b2 head-1 elementor-widget elementor-widget-text-editor" data-id="8d7c7b2" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                  Free shipping Orders $50 Get a 1.5L Pepsi Free 								</div>
        </div>
        <div class="elementor-element elementor-element-8469f2c elementor-align-center elementor-widget elementor-widget-button" data-id="8469f2c" data-element_type="widget" data-widget_type="button.default">
        <div class="elementor-widget-container">
                  <div class="elementor-button-wrapper">
          <a class="elementor-button elementor-button-link elementor-size-sm" href="#">
            <span class="elementor-button-content-wrapper">
                  <span class="elementor-button-text">make an order</span>
          </span>
          </a>
        </div>
                </div>
        </div>
          </div>
    </div>
          </div>
    </section>
        </div>
      </div>
</article>	</div>
  </div>
</div>
  </div>
                    <footer id="bwp-footer" class="bwp-footer footer-1">
            <div data-elementor-type="wp-post" data-elementor-id="11196" class="elementor elementor-11196">
            <section class="elementor-section elementor-top-section elementor-element elementor-element-57761b1 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="57761b1" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-20370e7" data-id="20370e7" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <section class="elementor-section elementor-inner-section elementor-element elementor-element-6757c82 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="6757c82" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-367530e wpb-col-sm-100" data-id="367530e" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-bd6f76c img elementor-widget-mobile__width-auto elementor-widget elementor-widget-image" data-id="bd6f76c" data-element_type="widget" data-widget_type="image.default">
        <div class="elementor-widget-container">
                              <img width="319" height="120" src={logo} class="attachment-large size-large wp-image-37098" alt="" />															</div>
        </div>
          </div>
    </div>
        <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-abd57f1 wpb-col-sm-100" data-id="abd57f1" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-5440a7c footer-head-1 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="5440a7c" data-element_type="widget" data-widget_type="divider.default">
        <div class="elementor-widget-container">
              <div class="elementor-divider">
      <span class="elementor-divider-separator">
            </span>
    </div>
            </div>
        </div>
          </div>
    </div>
        <div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-501a920 wpb-col-sm-100" data-id="501a920" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-a0ea0af elementor-widget-mobile__width-auto elementor-widget elementor-widget-shortcode" data-id="a0ea0af" data-element_type="widget" data-widget_type="shortcode.default">
        <div class="elementor-widget-container">
              <div class="elementor-shortcode"><ul class="social-link"><li><a href="#"><i class="fa fa-twitter"></i></a></li><li><a href="#"><i class="fa fa-instagram"></i></a></li><li><a href="#"><i class="fa fa-dribbble"></i></a></li><li><a href="#"><i class="fa fa-behance"></i></a></li></ul></div>
            </div>
        </div>
          </div>
    </div>
          </div>
    </section>
        <section class="elementor-section elementor-inner-section elementor-element elementor-element-3a8ba5e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3a8ba5e" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-18d3bd9" data-id="18d3bd9" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-a14c55b elementor-widget elementor-widget-heading" data-id="a14c55b" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
          <h2 class="elementor-heading-title elementor-size-default">Book a table</h2>				</div>
        </div>
        <div class="elementor-element elementor-element-22f9500 footer-head elementor-widget elementor-widget-text-editor" data-id="22f9500" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                  Save time with proper planning								</div>
        </div>
        <div class="elementor-element elementor-element-c1852cb elementor-widget elementor-widget-heading" data-id="c1852cb" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
          <h2 class="elementor-heading-title elementor-size-default">934 595 876</h2>				</div>
        </div>
          </div>
    </div>
        <div class="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-a07ed3d" data-id="a07ed3d" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-6e37df2 elementor-widget elementor-widget-heading" data-id="6e37df2" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
          <h2 class="elementor-heading-title elementor-size-default">newsletter</h2>				</div>
        </div>
        <div class="elementor-element elementor-element-4c32bb0 footer-head elementor-widget elementor-widget-text-editor" data-id="4c32bb0" data-element_type="widget" data-widget_type="text-editor.default">
        <div class="elementor-widget-container">
                  Newsletter Exclusive Discount codes								</div>
        </div>
        <div class="elementor-element elementor-element-b3fe73a elementor-widget elementor-widget-shortcode" data-id="b3fe73a" data-element_type="widget" data-widget_type="shortcode.default">
        <div class="elementor-widget-container">
              <div class="elementor-shortcode">
<div class="wpcf7 no-js" id="wpcf7-f1287-o1" lang="en-US" dir="ltr" data-wpcf7-id="1287">
<div class="screen-reader-response"><p role="status" aria-live="polite" aria-atomic="true"></p> <ul></ul></div>
<form action="https://papzi.wpbingosite.com/#wpcf7-f1287-o1" method="post" class="wpcf7-form init" aria-label="Contact form" novalidate="novalidate" data-status="init">
<div style={{display: "none"}}>
<input type="hidden" name="_wpcf7" value="1287" />
<input type="hidden" name="_wpcf7_version" value="6.0.6" />
<input type="hidden" name="_wpcf7_locale" value="en_US" />
<input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f1287-o1" />
<input type="hidden" name="_wpcf7_container_post" value="0" />
<input type="hidden" name="_wpcf7_posted_data_hash" value="" />
</div>
<div class="wpbingo-newsletter newsletter-default">
  <div class="content-newsletter">
    <p><span class="wpcf7-form-control-wrap" data-name="your-email"><input size="40" maxlength="400" class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email" aria-required="true" aria-invalid="false" placeholder="Your Email..." value="" type="email" name="your-email" /></span><span class="clearfix"><input class="wpcf7-form-control wpcf7-submit has-spinner" type="submit" value="SUBSCRIBE" /></span>
    </p>
  </div>
</div><p style={{display: "none"}} class="akismet-fields-container" data-prefix="_wpcf7_ak_"><label>&#916;<textarea name="_wpcf7_ak_hp_textarea" cols="45" rows="8" maxlength="100"></textarea></label><input type="hidden" id="ak_js_1" name="_wpcf7_ak_js" value="53"/><script>document.getElementById( "ak_js_1" ).setAttribute( "value", ( new Date() ).getTime() );</script></p><div class="wpcf7-response-output" aria-hidden="true"></div>
</form>
</div>
</div>
            </div>
        </div>
          </div>
    </div>
          </div>
    </section>
        <section class="elementor-section elementor-inner-section elementor-element elementor-element-889af22 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="889af22" data-element_type="section">
            <div class="elementor-container elementor-column-gap-default">
          <div class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-f6e3192" data-id="f6e3192" data-element_type="column">
      <div class="elementor-widget-wrap elementor-element-populated">
            <div class="elementor-element elementor-element-27b99da footer-head-1 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="27b99da" data-element_type="widget" data-widget_type="divider.default">
        <div class="elementor-widget-container">
              <div class="elementor-divider">
      <span class="elementor-divider-separator">
            </span>
    </div>
            </div>
        </div>
        <div class="elementor-element elementor-element-da5f038 elementor-icon-list--layout-inline elementor-align-center footer-head elementor-mobile-align-left elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="da5f038" data-element_type="widget" data-widget_type="icon-list.default">
        <div class="elementor-widget-container">
              <ul class="elementor-icon-list-items elementor-inline-items">
              <li class="elementor-icon-list-item elementor-inline-item">
                      <a href="#">

                      <span class="elementor-icon-list-text">Fast food Papzi</span>
                      </a>
                  </li>
                <li class="elementor-icon-list-item elementor-inline-item">
                      <a href="#">

                      <span class="elementor-icon-list-text">467 Park Avenue New York, Ny 10</span>
                      </a>
                  </li>
                <li class="elementor-icon-list-item elementor-inline-item">
                      <a href="#">

                      <span class="elementor-icon-list-text"><span class="__cf_email__" data-cfemail="660900000f050326031e070b160a034805090b">[email&#160;protected]</span></span>
                      </a>
                  </li>
                <li class="elementor-icon-list-item elementor-inline-item">
                      <a href="#">

                      <span class="elementor-icon-list-text">Phone: 01-800-81200</span>
                      </a>
                  </li>
            </ul>
            </div>
        </div>
        <div class="elementor-element elementor-element-96b82fc elementor-widget elementor-widget-image" data-id="96b82fc" data-element_type="widget" data-widget_type="image.default">
        <div class="elementor-widget-container">
                              <img width="201" height="22" src="wp-content/uploads/2020/06/credit.png" class="attachment-large size-large wp-image-32779" alt="" />															</div>
        </div>
          </div>
    </div>
          </div>
    </section>
        <div class="elementor-element elementor-element-b9f25eb footer-head-2 elementor-widget elementor-widget-heading" data-id="b9f25eb" data-element_type="widget" data-widget_type="heading.default">
        <div class="elementor-widget-container">
          <h2 class="elementor-heading-title elementor-size-default">Copyright © 2022 Papzi .Designed by WPBingo</h2>				</div>
        </div>
        <div class="elementor-element elementor-element-dec2bc6 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image" data-id="dec2bc6" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
        <div class="elementor-widget-container">
                              <img width="66" height="43" src="wp-content/uploads/2020/06/flo-2.png" class="attachment-large size-large wp-image-32788" alt="" />															</div>
        </div>
        <div class="elementor-element elementor-element-7845715 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image" data-id="7845715" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="image.default">
        <div class="elementor-widget-container">
                              <img width="66" height="43" src="wp-content/uploads/2020/06/flo-1.png" class="attachment-large size-large wp-image-32787" alt="" />															</div>
        </div>
          </div>
    </div>
          </div>
    </section>
        </div>
          </footer>
      </div>
      
      
      


    
  );
};

export default Banner;
