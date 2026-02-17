import React, { useEffect, useState } from "react";
import axios from "axios";

import "./style.css";

import AppLoader from "./AppLoader";

import Header2 from "./Header2";
import Header from "./Header";
import Footer from "./Footer";

import { Link } from "react-router-dom";
const Shop = () => {
  const [loading, setLoading] = useState(true);

{/* At the top of your Shop component, define the background */}
const backgroundImg = "https://papzi.wpbingosite.com/wp-content/uploads/2022/02/Image-9-1.jpg";

  return (
    <>
    <Header />
 	<div id="bwp-main" class="bwp-main">
<div 
  className="page-title bwp-title"  
  style={{
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "300px",
    position: "relative",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  }}
>
  {/* Overlay */}
  <div style={{
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    zIndex: 1
  }} />

  <div className="container" style={{ position: "relative", zIndex: 2 }}>

    {/* Title + Breadcrumb */}
    <div className="content-title-heading">
      <span className="back-to-shop" style={{ color: "white" }}>Shop</span>
      <h1 className="text-title-heading" style={{ color: "white", fontSize: "48px", fontWeight: "700", margin: "0 0 15px 0" }}>
        Shop
      </h1>
    </div>
    <div id="breadcrumb" className="breadcrumb">
      <div className="bwp-breadcrumb">
        <Link to="/" style={{ color: "white" }}>Home</Link>
        <span style={{ color: "white", margin: "0 8px" }}>/</span>
        <span style={{ color: "white" }}>Shop</span>
      </div>
    </div>

    {/* Category Circles */}
    <div className="woocommerce-product-subcategorie-content" style={{ marginTop: "30px" }}>
      <div className="subcategorie-content">
        <ul style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center"
        }}>
          {[
            { id: 151, name: "Burgers",           img: "https://papzi.wpbingosite.com/wp-content/uploads/2022/01/Image-2.jpg", href: "/product-category/burgers" },
            { id: 431, name: "Butter Mix",        img: "https://papzi.wpbingosite.com/wp-content/uploads/2022/01/Image-1.jpg", href: "/product-category/butter-mix" },
            { id: 401, name: "Combo Offer",       img: "https://papzi.wpbingosite.com/wp-content/uploads/2022/01/Image-3.jpg", href: "/product-category/combo-offer" },
            { id: 465, name: "Fascinating Taste", img: "https://papzi.wpbingosite.com/wp-content/uploads/2022/01/Image-7.jpg", href: "/product-category/fascinating-taste" },
            { id: 381, name: "Kids Menu",         img: "https://papzi.wpbingosite.com/wp-content/uploads/2022/01/Image-4.jpg", href: "/product-category/kids-menu" },
            { id: 468, name: "Pizza Menu",        img: "https://papzi.wpbingosite.com/wp-content/uploads/2022/01/Image-6.jpg", href: "/product-category/pizza-menu" },
            { id: 491, name: "Sandwich",          img: "https://papzi.wpbingosite.com/wp-content/uploads/2022/01/Image-5.jpg", href: "/product-category/sandwich" },
            { id: 407, name: "Soda Water",        img: "https://papzi.wpbingosite.com/wp-content/uploads/2022/01/Image-8.jpg", href: "/product-category/soda-water" },
          ].map((cat) => (
            <li key={cat.id} style={{ textAlign: "center" }}>
              <Link 
                to={cat.href}
                style={{ display: "block", textDecoration: "none" }}
              >
                <img 
                  src={cat.img} 
                  alt={cat.name}
                  style={{
                    width: "75px",
                    height: "75px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "3px solid white",
                    display: "block",
                    margin: "0 auto"
                  }}
                />
                <span style={{ 
                  color: "white", 
                  fontSize: "12px", 
                  fontWeight: "600",
                  marginTop: "8px",
                  display: "block"
                }}>
                  {cat.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>

  </div>
</div>


            	<div id="primary" class="content-area" >
                    
                    
                    
                    
                    <main id="main" class="site-main" role="main">


                        			
				<div class="sidebar  shop-layout-boxed">
			<div class="container">
			<div class="main-archive-product row">
					
					<div class="bwp-sidebar sidebar-product col-xl-3 col-lg-3 col-md-12 col-12">
													<div class="button-filter-toggle hidden-lg hidden-md">
								Close							</div>
													
							<aside id="bwp_ajax_filte-6" class="widget bwp_ajax_filte">
                                
                                <div id="bwp_filter_ajax2205335931770709828" class="bwp-woocommerce-filter-product">
<div  class="bwp-filter-ajax">
	<form id="bwp_form_filter_product">	
			
	<div class="bwp-filter bwp-filter-category"><h3>Categories</h3><div id="pa_category" class="filter_category_product"><div data-id_category="151" class="item-category "><label class="name">Burgers</label><div class="count">11</div></div> <div data-id_category="431" class="item-category "><label class="name">Butter Mix</label><div class="count">8</div></div> <div data-id_category="401" class="item-category "><label class="name">Combo Offer</label><div class="count">6</div></div> <div data-id_category="465" class="item-category "><label class="name">Fascinating Taste</label><div class="count">2</div></div> <div data-id_category="381" class="item-category "><label class="name">Kids Menu</label><div class="count">4</div></div> <div data-id_category="468" class="item-category "><label class="name">Pizza Menu</label><div class="count">4</div></div> <div data-id_category="491" class="item-category "><label class="name">Sandwich</label><div class="count">5</div></div> <div data-id_category="407" class="item-category "><label class="name">Soda Water</label><div class="count">5</div></div> </div></div>
		<div class="bwp-filter-price">
		    <h3>Price</h3>
			<div class="content-filter-price">
				<div id="bwp_slider_price" data-min="10" data-max="1200"></div>
				<div class="price-input">
					<span>Range : </span>
					&#36;<span class="input-text text-price-filter" id="text-price-filter-min-text">10</span> -
					&#36;<span class="input-text text-price-filter" id="text-price-filter-max-text">1200</span>	
					<input class="input-text text-price-filter hidden" id="price-filter-min-text" type="text" value="10" />
					<input class="input-text text-price-filter hidden" id="price-filter-max-text" type="text" value="1200" />
				</div>
			</div>
		</div>				<div class="bwp-filter bwp-filter-color">
					<h3>Color</h3>
					<div class="content_filter">
												<ul id="pa_color">
							<li class="filter_color black">	<span style={{backgroundColor:"#000000;"}}> 
																<input value="black" name="filter_color" type="checkbox" />
															</span><label class="count">Black<mark>2</mark></label></li> <li class="filter_color pink">	<span style={{backgroundColor:"#ffc0cb;"}}> 
																<input value="pink" name="filter_color" type="checkbox" />
															</span><label class="count">Pink<mark>2</mark></label></li> <li class="filter_color yellow">	<span style={{backgroundColor:"#c69a02;"}}> 
																<input value="yellow" name="filter_color" type="checkbox" />
															</span><label class="count">Yellow<mark>2</mark></label></li> 						</ul>
											</div>
				</div>
								<div class="bwp-filter bwp-filter-size">
					<h3>Size</h3>
					<div class="content_filter">
												<ul id="pa_size">
							<li><span >
															<input  value="l" name="filter_size"  type="checkbox" />
															<label class="name">L</label><label class="count">(5)</label></span></li> <li><span >
															<input  value="m" name="filter_size"  type="checkbox" />
															<label class="name">M</label><label class="count">(5)</label></span></li> <li><span >
															<input  value="s" name="filter_size"  type="checkbox" />
															<label class="name">S</label><label class="count">(4)</label></span></li> <li><span >
															<input  value="xl" name="filter_size"  type="checkbox" />
															<label class="name">XL</label><label class="count">(1)</label></span></li> 						</ul>
											</div>
				</div>
				<div class="bwp-filter bwp-filter-brand"><h3>Brands</h3><ul id="pa_brand" class="filter_brand_product"><li><span ><input value="brand-1" name="filter_brand" type="checkbox" /><img src="../wp-content/uploads/2022/01/brand-4.png" alt="Brand 1" />
                
                </span><label class="count">Brand 1<mark>(3)</mark></label></li>
                 <li><span ><input value="brand-2" name="filter_brand" type="checkbox" /><img src="../wp-content/uploads/2022/01/brand-5.png" alt="Brand 2" /></span><label class="count">Brand 2<mark>(4)</mark></label></li> <li><span ><input value="brand-3" name="filter_brand" type="checkbox" /><img src="../wp-content/uploads/2022/01/brand-6.png" alt="Brand 3" /></span><label class="count">Brand 3<mark>(3)</mark></label></li> <li><span ><input value="brand-4" name="filter_brand" type="checkbox" /><img src="../wp-content/uploads/2022/01/brand-7.png" alt="Brand 4" /></span><label class="count">Brand 4<mark>(5)</mark></label></li> <li><span ><input value="brand-5" name="filter_brand" type="checkbox" /><img src="../wp-content/uploads/2022/01/brand-8.png" alt="Brand 5" /></span><label class="count">Brand 5<mark>(6)</mark></label></li> </ul></div>	</form>
</div>

</div>

</aside>



<aside id="bwp_feature_product_widget-2" class="widget bwp_feature_product_widget"><div class="bwp-widget-feature-product">
			<h3 class="widget-title">Feature Product</h3>
		<div class="block_content">
		<ul class="content-products">
					<li class="item-product">
				<div class="item-thumb">
					<a href="mini-cucine/index.html"><img src="../wp-content/uploads/2019/04/american-burgers-9.jpg" alt="" /></a>
				</div>
				<div class="content-bottom">
											<div class="rating none">
							<div class="star-rating none"></div>
						</div>
										<div class="item-title">
						<a href="mini-cucine/index.html">Mini Cucine</a>
					</div>
					<div class="price">
						<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>150.00</bdi></span>					</div>
				</div>
			</li>
					<li class="item-product">
				<div class="item-thumb">
					<a href="smoothie-drinks/index.html"><img src="../wp-content/uploads/2019/04/american-burgers-21.jpg" alt="" /></a>
				</div>
				<div class="content-bottom">
											<div class="rating">
							<div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style={{width:"100%"}}>Rated <strong class="rating">5.00</strong> out of 5</span></div>						</div>
										<div class="item-title">
						<a href="smoothie-drinks/index.html">Smoothie drinks</a>
					</div>
					<div class="price">
						<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>13.00</bdi></span> &ndash; <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>67.00</bdi></span>					</div>
				</div>
			</li>
					<li class="item-product">
				<div class="item-thumb">
					<a href="sleek-iron-clock/index.html"><img src="../wp-content/uploads/2019/04/american-burgers-26.jpg" alt="" /></a>
				</div>
				<div class="content-bottom">
											<div class="rating">
							<div class="star-rating" role="img" aria-label="Rated 5.00 out of 5"><span style={{width:"100%"}}>Rated <strong class="rating">5.00</strong> out of 5</span></div>						</div>
										<div class="item-title">
						<a href="sleek-iron-clock/index.html">Sleek Iron Clock</a>
					</div>
					<div class="price">
						<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>50.00</bdi></span> &ndash; <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>90.00</bdi></span>					</div>
				</div>
			</li>
				</ul>
	</div>
</div>
</aside>									



		</div>				
								<div class="col-xl-9 col-lg-9 col-md-12 col-12" >
																<div class="bwp-top-bar top clearfix">				
							<div class="woocommerce-notices-wrapper"></div><a class="button-filter-toggle"></a><div class="woocommerce-ordering pwb-dropdown dropdown">
	<span class="pwb-dropdown-toggle dropdown-toggle" data-toggle="dropdown">Default sorting</span>
	<ul class="pwb-dropdown-menu dropdown-menu">
			<li data-value="menu_order"  class="active"  ><a href="index3c0b.html?orderby=menu_order">Default sorting</a></li>
			<li data-value="popularity"  ><a href="index5156.html?orderby=popularity">Sort by popularity</a></li>
			<li data-value="rating"  ><a href="indexa0bc.html?orderby=rating">Sort by average rating</a></li>
			<li data-value="date"  ><a href="index729c.html?orderby=date">Sort by latest</a></li>
			<li data-value="price"  ><a href="index28f0.html?orderby=price">Sort by price: low to high</a></li>
			<li data-value="price-desc"  ><a href="index6a50.html?orderby=price-desc">Sort by price: high to low</a></li>
		</ul>
</div><ul class="display hidden-sm hidden-xs">
				<li>
					<a data-col="col-xl-6 col-lg-4 col-md-4 col-6" class="view-grid two " href="index1bb0.html?category-view-mode=grid&amp;product_col_large=2"><span class="icon-column"><span class="layer first"><span></span><span></span></span><span class="layer middle"><span></span><span></span></span><span class="layer last"><span></span><span></span></span></span></a>
				</li>
				<li>
					<a data-col="col-xl-4 col-lg-4 col-md-4 col-6" class="view-grid three active" href="index9aa4.html?category-view-mode=grid&amp;product_col_large=3"><span class="icon-column"><span class="layer first"><span></span><span></span><span></span></span><span class="layer middle"><span></span><span></span><span></span></span><span class="layer last"><span></span><span></span><span></span></span></span></a>
				</li>
				<li>
					<a data-col="col-xl-3 col-lg-4 col-md-4 col-6" class="view-grid four " href="indexa220.html?category-view-mode=grid&amp;product_col_large=4"><span class="icon-column"><span class="layer first"><span></span><span></span><span></span><span></span></span><span class="layer middle"><span></span><span></span><span></span><span></span></span><span class="layer last"><span></span><span></span><span></span><span></span></span></span></a>
				</li>
				<li>
					<a class="view-list " href="indexaf48.html?category-view-mode=list"><span class="icon-column"><span class="layer first"><span></span><span></span></span><span class="layer middle"><span></span><span></span></span><span class="layer last"><span></span><span></span></span></span></a>
				</li>
			</ul><div class="woocommerce-result-count hidden-md hidden-sm hidden-xs">
	Showing 1&ndash;12 of 22 item(s)</div><div class="woocommerce-filter-title"></div>							
						</div>
												<div class="content-products-list">
							<ul class="products products-list row grid" data-col="col-lg-4 col-md-4 col-sm-4 col-6">																	<li class="col-lg-4 col-md-4 col-sm-4 col-6 post-16320 product type-product status-publish has-post-thumbnail product_brand-brand-3 product_cat-burgers product_tag-hot product_tag-men first instock featured shipping-taxable purchasable product-type-simple">
		<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
									<div class="vgwc-label vgwc-featured hot">Hot</div>						
			</div>
<div class="product-thumb-hover"><a href="alsatian/index.html" class="woocommerce-LoopProduct-link"><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-19-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-24-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>		<button class="woosw-btn woosw-btn-16320" data-id="16320" data-product_name="Alsatian" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-19-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="16320" class="quickview quickview-button quickview-16320" >Quick View <i class="icon-Search"></i></a></span>		</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="alsatian/index.html">Alsatian</a></h3>
			
	<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>75.00</bdi></span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="index694c.html?add-to-cart=16320" data-quantity="1" data-product_id="16320" data-product_sku="D1118" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>			</div>
		</div>
	</div>
</div>
</li>																	<li class="col-lg-4 col-md-4 col-sm-4 col-6 post-7840 product type-product status-publish has-post-thumbnail product_brand-brand-5 product_cat-burgers product_tag-life-style product_tag-trend  instock featured shipping-taxable purchasable product-type-simple">
		<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
									<div class="vgwc-label vgwc-featured hot">Hot</div>						
			</div>
<div class="product-thumb-hover"><a href="american-burgers/index.html" class="woocommerce-LoopProduct-link"><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-27-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-3-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>	<div class="countdown">
		<div class="item-countdown">
			<div class="product-countdown"  
				data-day="d"
				data-hour="h"
				data-min="m"
				data-sec="s"
				data-date="1775951999"  
				data-sttime="1712275200" 
				data-cdtime="1775951999"
				data-id="item_countdown_11015969321770709828">
			</div>
		</div>
	</div>
			<button class="woosw-btn woosw-btn-7840" data-id="7840" data-product_name="American Burgers" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-27-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="7840" class="quickview quickview-button quickview-7840" >Quick View <i class="icon-Search"></i></a></span>		</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="american-burgers/index.html">American Burgers</a></h3>
			
	<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>79.00</bdi></span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="indexa863.html?add-to-cart=7840" data-quantity="1" data-product_id="7840" data-product_sku="U2022" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>			</div>
		</div>
	</div>
</div>
</li>																	<li class="col-lg-4 col-md-4 col-sm-4 col-6 post-1061 product type-product status-publish has-post-thumbnail product_brand-brand-5 product_cat-burgers product_cat-combo-offer product_tag-fashion product_tag-women last instock featured shipping-taxable purchasable product-type-simple">
		<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
									<div class="vgwc-label vgwc-featured hot">Hot</div>						
			</div>
<div class="product-thumb-hover"><a href="banana-leaf/index.html" class="woocommerce-LoopProduct-link"><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-22-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2018/10/1-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>		<button class="woosw-btn woosw-btn-1061" data-id="1061" data-product_name="Banana Leaf" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-22-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="1061" class="quickview quickview-button quickview-1061" >Quick View <i class="icon-Search"></i></a></span>		</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="banana-leaf/index.html">Banana Leaf</a></h3>
			
	<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>100.00</bdi></span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="indexfecd.html?add-to-cart=1061" data-quantity="1" data-product_id="1061" data-product_sku="" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>			</div>
		</div>
	</div>
</div>
</li>																	<li class="col-lg-4 col-md-4 col-sm-4 col-6 post-16508 product type-product status-publish has-post-thumbnail product_brand-brand-4 product_cat-combo-offer product_cat-kids-menu product_tag-hot product_tag-trend first instock featured shipping-taxable product-type-external">
		<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
									<div class="vgwc-label vgwc-featured hot">Hot</div>						
			</div>
<div class="product-thumb-hover"><a href="bbq-fries/index.html" class="woocommerce-LoopProduct-link"><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-5-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-13-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>		<button class="woosw-btn woosw-btn-16508" data-id="16508" data-product_name="BBQ Fries" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-5-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="16508" class="quickview quickview-button quickview-16508" >Quick View <i class="icon-Search"></i></a></span>		</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="bbq-fries/index.html">BBQ Fries</a></h3>
			
	<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>1,200.00</bdi></span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="#" data-quantity="1" data-product_id="16508" data-product_sku="D2300" class="button product_type_external read_more">Buy product</a>			</div>
		</div>
	</div>
</div>
</li>																	<li class="col-lg-4 col-md-4 col-sm-4 col-6 post-16318 product type-product status-publish has-post-thumbnail product_cat-soda-water product_tag-hot product_tag-men  instock featured shipping-taxable purchasable product-type-simple">
		<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
									<div class="vgwc-label vgwc-featured hot">Hot</div>						
			</div>
<div class="product-thumb-hover"><a href="bonchon-chicken/index.html" class="woocommerce-LoopProduct-link"><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-20-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-11-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>		<button class="woosw-btn woosw-btn-16318" data-id="16318" data-product_name="Bonchon Chicken" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-20-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="16318" class="quickview quickview-button quickview-16318" >Quick View <i class="icon-Search"></i></a></span>		</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="bonchon-chicken/index.html">Bonchon Chicken</a></h3>
			
	<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>200.00</bdi></span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="index0e0e.html?add-to-cart=16318" data-quantity="1" data-product_id="16318" data-product_sku="D1116" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>			</div>
		</div>
	</div>
</div>
</li>																	<li class="col-lg-4 col-md-4 col-sm-4 col-6 post-16588 product type-product status-publish has-post-thumbnail product_brand-brand-4 product_cat-burgers product_cat-butter-mix product_cat-combo-offer product_cat-pizza-menu product_cat-sandwich product_tag-blue product_tag-hot product_tag-trend last instock shipping-taxable purchasable product-type-simple">
		<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
								
			</div>
<div class="product-thumb-hover"><a href="burger-king/index.html" class="woocommerce-LoopProduct-link"><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-3-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-27-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>		<button class="woosw-btn woosw-btn-16588" data-id="16588" data-product_name="Burger King" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-3-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="16588" class="quickview quickview-button quickview-16588" >Quick View <i class="icon-Search"></i></a></span>		</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="burger-king/index.html">Burger King</a></h3>
			
	<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>99.00</bdi></span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="index4446.html?add-to-cart=16588" data-quantity="1" data-product_id="16588" data-product_sku="D2409" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>			</div>
		</div>
	</div>
</div>
</li>																	<li class="col-lg-4 col-md-4 col-sm-4 col-6 post-10448 product type-product status-publish has-post-thumbnail product_brand-brand-5 product_cat-burgers product_cat-combo-offer product_tag-hot product_tag-life-style product_tag-trend first outofstock sale shipping-taxable purchasable product-type-simple">
		<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
								
					<div class="onsale">-50%</div>			</div>
<div class="product-thumb-hover"><a href="cheddar-fries/index.html" class="woocommerce-LoopProduct-link"><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-11-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-13-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>		<button class="woosw-btn woosw-btn-10448" data-id="10448" data-product_name="Cheddar Fries" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-11-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="10448" class="quickview quickview-button quickview-10448" >Quick View <i class="icon-Search"></i></a></span>		</div>
					<div class="product-stock">    
				<span class="stock">Out Of Stock</span>
			</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="cheddar-fries/index.html">Cheddar Fries</a></h3>
			
	<span class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>20.00</bdi></span></del> <span class="screen-reader-text">Original price was: &#036;20.00.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>10.00</bdi></span></ins><span class="screen-reader-text">Current price is: &#036;10.00.</span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="cheddar-fries/index.html" data-quantity="1" data-product_id="10448" data-product_sku="U2006" class="button product_type_simple read_more ajax_add_to_cart">Read more</a>			</div>
		</div>
	</div>
</div>
</li>																	<li class="col-lg-4 col-md-4 col-sm-4 col-6 post-16518 product type-product status-publish has-post-thumbnail product_brand-brand-3 product_cat-burgers product_cat-butter-mix product_tag-hot product_tag-trend  instock sale featured shipping-taxable purchasable product-type-simple">
		<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
									<div class="vgwc-label vgwc-featured hot">Hot</div>						
					<div class="onsale">-10%</div>			</div>
<div class="product-thumb-hover"><a href="cheesecake/index.html" class="woocommerce-LoopProduct-link"><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-12-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-9-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>		<button class="woosw-btn woosw-btn-16518" data-id="16518" data-product_name="Cheesecake" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-12-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="16518" class="quickview quickview-button quickview-16518" >Quick View <i class="icon-Search"></i></a></span>		</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="cheesecake/index.html">Cheesecake</a></h3>
			
	<span class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>200.00</bdi></span></del> <span class="screen-reader-text">Original price was: &#036;200.00.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>180.00</bdi></span></ins><span class="screen-reader-text">Current price is: &#036;180.00.</span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="index3c77.html?add-to-cart=16518" data-quantity="1" data-product_id="16518" data-product_sku="D2300-3" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>			</div>
		</div>
	</div>
</div>
</li>																	<li class="col-lg-4 col-md-4 col-sm-4 col-6 post-16316 product type-product status-publish has-post-thumbnail product_brand-brand-2 product_cat-soda-water product_tag-hot product_tag-men last outofstock featured shipping-taxable purchasable product-type-simple">
		<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
									<div class="vgwc-label vgwc-featured hot">Hot</div>						
			</div>
<div class="product-thumb-hover"><a href="combo-salad/index.html" class="woocommerce-LoopProduct-link"><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-22-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-8-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>		<button class="woosw-btn woosw-btn-16316" data-id="16316" data-product_name="Combo salad" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-22-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="16316" class="quickview quickview-button quickview-16316" >Quick View <i class="icon-Search"></i></a></span>		</div>
					<div class="product-stock">    
				<span class="stock">Out Of Stock</span>
			</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="combo-salad/index.html">Combo salad</a></h3>
			
	<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>45.00</bdi></span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="combo-salad/index.html" data-quantity="1" data-product_id="16316" data-product_sku="D1114" class="button product_type_simple read_more ajax_add_to_cart">Read more</a>			</div>
		</div>
	</div>
</div>
</li>																	<li class="col-lg-4 col-md-4 col-sm-4 col-6 post-16521 product type-product status-publish has-post-thumbnail product_brand-brand-1 product_cat-burgers product_cat-butter-mix product_tag-hot product_tag-trend first instock shipping-taxable purchasable product-type-simple">
		<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
								
			</div>
<div class="product-thumb-hover"><a href="florentine/index.html" class="woocommerce-LoopProduct-link"><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-11-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-6-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>		<button class="woosw-btn woosw-btn-16521" data-id="16521" data-product_name="Florentine" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-11-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="16521" class="quickview quickview-button quickview-16521" >Quick View <i class="icon-Search"></i></a></span>		</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="florentine/index.html">Florentine</a></h3>
			
	<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>120.00</bdi></span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="indexd1f8.html?add-to-cart=16521" data-quantity="1" data-product_id="16521" data-product_sku="D2300-3-1" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>			</div>
		</div>
	</div>
</div>
</li>																	<li class="col-lg-4 col-md-4 col-sm-4 col-6 post-16509 product type-product status-publish has-post-thumbnail product_brand-brand-1 product_cat-combo-offer product_cat-soda-water product_tag-hot product_tag-trend  instock featured shipping-taxable purchasable product-type-simple">
		<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
									<div class="vgwc-label vgwc-featured hot">Hot</div>						
			</div>
<div class="product-thumb-hover"><a href="french-fries/index.html" class="woocommerce-LoopProduct-link"><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-23-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-13-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>		<button class="woosw-btn woosw-btn-16509" data-id="16509" data-product_name="French fries" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-23-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="16509" class="quickview quickview-button quickview-16509" >Quick View <i class="icon-Search"></i></a></span>		</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="french-fries/index.html">French fries</a></h3>
			
	<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>35.00</bdi></span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="index356f.html?add-to-cart=16509" data-quantity="1" data-product_id="16509" data-product_sku="D2300-1" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>			</div>
		</div>
	</div>
</div>
</li>																	<li class="col-lg-4 col-md-4 col-sm-4 col-6 post-16514 product type-product status-publish has-post-thumbnail product_brand-brand-5 product_cat-burgers product_cat-butter-mix product_tag-hot product_tag-trend last instock featured shipping-taxable purchasable product-type-variable">
		<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
									<div class="vgwc-label vgwc-featured hot">Hot</div>						
			</div>
<div class="product-thumb-hover"><a href="heated-affair/index.html" class="woocommerce-LoopProduct-link"><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-6-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img loading="lazy" width="600" height="600" src="../wp-content/uploads/2019/04/american-burgers-7-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>		<button class="woosw-btn woosw-btn-16514" data-id="16514" data-product_name="Heated Affair" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-6-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="16514" class="quickview quickview-button quickview-16514" >Quick View <i class="icon-Search"></i></a></span>		</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="heated-affair/index.html">Heated Affair</a></h3>
			
	<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>150.00</bdi></span> &ndash; <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>160.00</bdi></span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="heated-affair/index.html" data-quantity="1" data-product_id="16514" data-product_sku="D2300-2" class="button product_type_variable add_to_cart_button">Select options</a>			</div>
		</div>
	</div>
</div>
</li>															</ul>						</div>
						<div class="bwp-top-bar bottom clearfix">
							<nav class="woocommerce-pagination">
	<ul class='page-numbers'>
	<li><span aria-label="Page 1" aria-current="page" class="page-numbers current">1</span></li>
	<li><a aria-label="Page 2" class="page-numbers" href="page/2/index.html">2</a></li>
	<li><a class="next page-numbers" href="page/2/index.html">Next</a></li>
</ul>
</nav>
						</div>
									</div>
			</div>
		</div>	
	</div>
				</main>
                </div>
   </div>

<Footer />
    </>
  );
};

export default Shop;
