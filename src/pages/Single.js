import React, { useEffect, useState } from "react";
import axios from "axios";

import "./style.css";

import AppLoader from "./AppLoader";

import Header2 from "./Header2";
import Header from "./Header";
import Footer from "./Footer";


const Single = () => {
  const [loading, setLoading] = useState(true);



  return (
    <>
    <Header />
<div id="primary" class="content-area" >
		
		
		
		<main id="main" class="site-main" role="main"><div class="clearfix">
	<div class="contents-detail">
		<div class="main-single-product">	
			<div class="col-xl-12 col-lg-12 col-md-12 col-12">
									<div class="woocommerce-notices-wrapper">


</div>





<div id="product-16588" class="post-16588 product type-product status-publish has-post-thumbnail product_brand-brand-4 product_cat-burgers product_cat-butter-mix product_cat-combo-offer product_cat-pizza-menu product_cat-sandwich product_tag-blue product_tag-hot product_tag-trend first instock shipping-taxable purchasable product-type-simple">
		<div class="bwp-single-product product scroll zoom"
		data-product_layout_thumb 		= 	"scroll"
				data-zoom_scroll 				=	"true" 
		data-zoom_contain_lens 			=	"true" 
		data-zoomtype 					=	"inner" 
		data-lenssize 					= 	"200" 
		data-lensshape 					= 	"square" 
		data-lensborder 				= 	""
		data-bordersize					= 	"2"
		data-bordercolour 				= 	"#f9b61e"
				data-popup 						= 	"false">	
		<div class="row">
							<div class="bwp-single-image col-lg-7 col-md-12 col-12">
					<div class="images vertical">
	<figure class="woocommerce-product-gallery woocommerce-product-gallery--with-images images">
		<div class="row">
							<div class="col-md-2">
						<div class="content-thumbnail-scroll max-thumbnail">
		<div class="image-thumbnail slick-carousel" data-asnavfor=".image-additional" data-centermode="true" data-focusonselect="true" data-columns4="5" data-columns3="4" data-columns2="4" data-columns1="4" data-columns="4" data-nav="true" >
						<div class="img-thumbnail">
					<span class="img-thumbnail-scroll">
					<img loading="lazy" width="600" height="600" src="../../wp-content/uploads/2019/04/american-burgers-3-600x600.jpg" class="attachment-shop_catalog size-shop_catalog" alt="Products-25" />					</span>
				</div>
								<div class="img-thumbnail">
					<span class="img-thumbnail-scroll">
					<img loading="lazy" width="600" height="600" src="../../wp-content/uploads/2019/04/american-burgers-27-600x600.jpg" class="attachment-shop_catalog size-shop_catalog" alt="Products-1" />					</span>
				</div>
						</div>
	</div>
					</div>
						<div class="col-md-10">
				<div class="scroll-image">
					<div class="image-additional slick-carousel"  data-asnavfor=".image-thumbnail" data-fade="true" data-columns4="1" data-columns3="1" data-columns2="1" data-columns1="1" data-columns="1" data-nav="true">
						<div data-thumb="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-3-100x100.jpg" class="img-thumbnail woocommerce-product-gallery__image">
							<a data-elementor-open-lightbox="default" data-elementor-lightbox-slideshow="image-additional" href="../../wp-content/uploads/2019/04/american-burgers-3.jpg"><img loading="lazy" width="900" height="900" src="../../wp-content/uploads/2019/04/american-burgers-3.jpg" class="attachment-shop_single size-shop_single wp-post-image" alt="" id="image" title="" data-src="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-3.jpg" data-large_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-3.jpg" data-large_image_width="900" data-large_image_height="900" decoding="async" /></a>
							</div>															<div class="img-thumbnail">
									<a href="../../wp-content/uploads/2019/04/american-burgers-27.jpg" data-elementor-open-lightbox="default" data-elementor-lightbox-slideshow="image-additional"  data-image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-27.jpg" class="image-scroll" title=""><img loading="lazy" width="900" height="900" src="../../wp-content/uploads/2019/04/american-burgers-27.jpg" class="attachment-shop_single size-shop_single" alt="Products-1" title="Products-1" decoding="async" /></a>									</div>
																					</div>
														</div>
			</div>
				
		</div>
	</figure>
</div>				</div>
				<div class="bwp-single-info col-lg-5 col-md-12 col-12 ">
										<div class="summary entry-summary">
						<h1 itemprop="name" class="product_title entry-title">Burger King</h1><div class="price-single">
	<div class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#036;</span>99.00</span></div>
</div>

	<div class="woocommerce-product-rating">
		<div class="star-rating" role="img" aria-label="Rated 4.00 out of 5"><span style={{width:"80%"}}>Rated <strong class="rating">4.00</strong> out of 5 based on <span class="rating">1</span> customer rating</span></div>								<a href="#reviews" class="woocommerce-review-link" rel="nofollow">(<span class="count">1</span> customer review)</a>
						</div>

<div itemprop="description" class="description">
	<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
</div>
											<form class="cart" method="post" enctype='multipart/form-data'>
		<div class="quantity-button">
						<div class="quantity">
	<button type="button" class="plus">+</button>	<label class="screen-reader-text" for="quantity_698ae3856ebbb">Burger King quantity</label>
	<input
		type="number"
				id="quantity_698ae3856ebbb"
		class="input-text qty text"
		name="quantity"
		value="1"
		aria-label="Product quantity"
				min="1"
		max=""
					step="1"
			placeholder=""
			inputmode="numeric"
			autocomplete="off"
			/>
	<button type="button" class="minus">-</button></div>
			<input type="hidden" name="add-to-cart" value="16588" />
			<button type="submit" class="single_add_to_cart_button button alt">Add to cart</button>
			
		</div>
		<button class="button quick-buy">Buy It Now</button><button class="woosw-btn woosw-btn-16588" data-id="16588" data-product_name="Burger King" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-3-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>	</form>
	<div class="product_meta">

	
	
		<span class="sku_wrapper">SKU: <span class="sku">D2409</span></span>

	
	<span class="posted_in">Categories: <a href="../../product-category/burgers/index.html" rel="tag">Burgers</a>, <a href="../../product-category/butter-mix/index.html" rel="tag">Butter Mix</a>, <a href="../../product-category/combo-offer/index.html" rel="tag">Combo Offer</a>, <a href="../../product-category/pizza-menu/index.html" rel="tag">Pizza Menu</a>, <a href="../../product-category/sandwich/index.html" rel="tag">Sandwich</a></span>
	<span class="tagged_as">Tags: <a href="../../product-tag/blue/index.html" rel="tag">blue</a>, <a href="../../product-tag/hot/index.html" rel="tag">Hot</a>, <a href="../../product-tag/trend/index.html" rel="tag">Trend</a></span>
	 <span class="posted_in">Brand: <a href="../../brand/brand-4/index.html" rel="tag">Brand 4</a></span>
</div>
<div class="social-icon"><label>Share : </label><div class="social-share"><a href="https://www.facebook.com/sharer.php?u=https://papzi.wpbingosite.com/shop/burger-king/&amp;i=https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-3.jpg" title="Facebook" class="share-facebook" target="_blank"><i class="fa fa-facebook"></i>Facebook</a><a href="https://twitter.com/intent/tweet?url=https://papzi.wpbingosite.com/shop/burger-king/"  title="Twitter" class="share-twitter"><i class="fa fa-twitter"></i>Twitter</a><a href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://papzi.wpbingosite.com/shop/burger-king/"  title="LinkedIn" class="share-linkedin"><i class="fa fa-linkedin"></i>LinkedIn</a></div></div>					</div>
				</div>
					</div>
	</div>
		
	<div class="woocommerce-tabs wc-tabs-wrapper description-style-tab">
					<div class="content-woocommerce-tabs">
				<div class="content-ul-tab">
					<ul class="tabs wc-tabs" role="tablist">
													<li class="description_tab" id="tab-title-description" role="tab" aria-controls="tab-description">
								<a href="#tab-description">
									Description								</a>
							</li>
													<li class="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
								<a href="#tab-reviews">
									Reviews (1)								</a>
							</li>
											</ul>
				</div>
				<div class="content-tab">
									<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
<p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
					</div>
									<div class="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
						<div id="reviews" class="woocommerce-Reviews">
	<div id="comments">
		<h2 class="woocommerce-Reviews-title">1 review for <span>Burger King</span></h2>
					<ol class="commentlist">
				<li class="review byuser comment-author-demodemo-com bypostauthor even thread-even depth-1" id="li-comment-829">
	<div class="content_comment_container">
		<div id="comment-829" class="comment_container">

			<img alt='' src='https://secure.gravatar.com/avatar/9956d6a8168de87560ad6918838818f2c3a1995f2575285da6609a748322863c?s=60&amp;d=mm&amp;r=g' srcset='https://secure.gravatar.com/avatar/9956d6a8168de87560ad6918838818f2c3a1995f2575285da6609a748322863c?s=120&#038;d=mm&#038;r=g 2x' class='avatar avatar-60 photo' height='60' width='60' decoding='async'/>
			<div class="comment-text">

				<div class="star-rating" role="img" aria-label="Rated 4 out of 5"><span style={{width:"80%"}}>Rated <strong class="rating">4</strong> out of 5</span></div>
	<p class="meta">
		<strong class="woocommerce-review__author">Wpbingo </strong>
				<span class="woocommerce-review__dash">&ndash;</span> <time class="woocommerce-review__published-date" datetime="2021-04-01T09:22:34+00:00">April 1, 2021</time>
	</p>

	
			</div>
		</div>
		<div class="description"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>	</div>
</li>
			</ol>
						</div>
			<p class="woocommerce-verification-required">Only logged in customers who have purchased this product may leave a review.</p>
		<div class="clear"></div>
</div>					</div>
								</div>
			</div>
			</div>
	
		<div class="related">
			<div class="title-block"><h2>Related Products</h2></div>
			<div class="content-product-list">
				<div class="products-list grid slick-carousel" data-nav="true" data-slidestoscroll="true" data-columns4="2" data-columns3="2" data-columns2="2" data-columns1="3" data-columns="4">
												<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
									<div class="vgwc-label vgwc-featured hot">Hot</div>						
			</div>
<div class="product-thumb-hover"><a href="../combo-salad/index.html" class="woocommerce-LoopProduct-link"><img width="600" height="600" src="../../wp-content/uploads/2019/04/american-burgers-22-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img width="600" height="600" src="../../wp-content/uploads/2019/04/american-burgers-8-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>		<button class="woosw-btn woosw-btn-16316" data-id="16316" data-product_name="Combo salad" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-22-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="16316" class="quickview quickview-button quickview-16316" >Quick View <i class="icon-Search"></i></a></span>		</div>
					<div class="product-stock">    
				<span class="stock">Out Of Stock</span>
			</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="../combo-salad/index.html">Combo salad</a></h3>
			
	<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>45.00</bdi></span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="../combo-salad/index.html" data-quantity="1" data-product_id="16316" data-product_sku="D1114" class="button product_type_simple read_more ajax_add_to_cart">Read more</a>			</div>
		</div>
	</div>
</div>
												<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
								
					<div class="onsale">-27%</div>			</div>
<div class="product-thumb-hover"><a href="../pink-sugar/index.html" class="woocommerce-LoopProduct-link"><img width="600" height="600" src="../../wp-content/uploads/2019/04/american-burgers-7-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img width="600" height="600" src="../../wp-content/uploads/2019/04/american-burgers-2-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>		<button class="woosw-btn woosw-btn-16315" data-id="16315" data-product_name="Pink Sugar" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-7-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="16315" class="quickview quickview-button quickview-16315" >Quick View <i class="icon-Search"></i></a></span>		</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="../pink-sugar/index.html">Pink Sugar</a></h3>
			
	<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>45.00</bdi></span> &ndash; <span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>79.00</bdi></span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="../pink-sugar/index.html" data-quantity="1" data-product_id="16315" data-product_sku="D1113" class="button product_type_variable read_more">Read more</a>			</div>
		</div>
	</div>
</div>
												<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
									<div class="vgwc-label vgwc-featured hot">Hot</div>						
					<div class="onsale">-10%</div>			</div>
<div class="product-thumb-hover"><a href="../cheesecake/index.html" class="woocommerce-LoopProduct-link"><img width="600" height="600" src="../../wp-content/uploads/2019/04/american-burgers-12-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img width="600" height="600" src="../../wp-content/uploads/2019/04/american-burgers-9-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>		<button class="woosw-btn woosw-btn-16518" data-id="16518" data-product_name="Cheesecake" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-12-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="16518" class="quickview quickview-button quickview-16518" >Quick View <i class="icon-Search"></i></a></span>		</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="../cheesecake/index.html">Cheesecake</a></h3>
			
	<span class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>200.00</bdi></span></del> <span class="screen-reader-text">Original price was: &#036;200.00.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>180.00</bdi></span></ins><span class="screen-reader-text">Current price is: &#036;180.00.</span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="index3c77.html?add-to-cart=16518" data-quantity="1" data-product_id="16518" data-product_sku="D2300-3" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>			</div>
		</div>
	</div>
</div>
												<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
									<div class="vgwc-label vgwc-featured hot">Hot</div>						
					<div class="onsale">-37%</div>			</div>
<div class="product-thumb-hover"><a href="../zorba-salad/index.html" class="woocommerce-LoopProduct-link"><img width="600" height="600" src="../../wp-content/uploads/2019/04/american-burgers-4-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img width="600" height="600" src="../../wp-content/uploads/2019/04/american-burgers-18-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>		<button class="woosw-btn woosw-btn-16526" data-id="16526" data-product_name="Zorba Salad" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-4-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="16526" class="quickview quickview-button quickview-16526" >Quick View <i class="icon-Search"></i></a></span>		</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="../zorba-salad/index.html">Zorba Salad</a></h3>
			
	<span class="price"><del aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>79.00</bdi></span></del> <span class="screen-reader-text">Original price was: &#036;79.00.</span><ins aria-hidden="true"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>50.00</bdi></span></ins><span class="screen-reader-text">Current price is: &#036;50.00.</span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="index23a6.html?add-to-cart=16526" data-quantity="1" data-product_id="16526" data-product_sku="D2300-3-2" class="button product_type_simple add_to_cart_button ajax_add_to_cart">Add to cart</a>			</div>
		</div>
	</div>
</div>
												<div class="products-entry content-product1 clearfix product-wapper">
	<div class="products-thumb">
			<div class='product-lable'>
									<div class="vgwc-label vgwc-featured hot">Hot</div>						
			</div>
<div class="product-thumb-hover"><a href="../bbq-fries/index.html" class="woocommerce-LoopProduct-link"><img width="600" height="600" src="../../wp-content/uploads/2019/04/american-burgers-5-600x600.jpg" class="attachment-woocommerce_thumbnail size-woocommerce_thumbnail wp-post-image" alt="" decoding="async" /><img width="600" height="600" src="../../wp-content/uploads/2019/04/american-burgers-13-600x600.jpg" class="hover-image back" alt="" decoding="async" /></a></div>		<button class="woosw-btn woosw-btn-16508" data-id="16508" data-product_name="BBQ Fries" data-product_image="https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-5-720x484.jpg" aria-label="Add to wishlist">Add to wishlist</button>		<div class='product-button'>
			<span class="product-quickview"><a href="#" data-product_id="16508" class="quickview quickview-button quickview-16508" >Quick View <i class="icon-Search"></i></a></span>		</div>
			</div>
	<div class="products-content">
		<div class="contents">
			<h3 class="product-title"><a href="../bbq-fries/index.html">BBQ Fries</a></h3>
			
	<span class="price"><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">&#36;</span>1,200.00</bdi></span></span>
			<div class="btn-atc">
				<a rel="nofollow" href="#" data-quantity="1" data-product_id="16508" data-product_sku="D2300" class="button product_type_external read_more">Buy product</a>			</div>
		</div>
	</div>
</div>
									</div>
			</div>	
		</div>
		<meta itemprop="url" content="index.html" />
</div>

  			</div>
        </div>
        </div>
        </div>
			</main>
      
      
      
      </div>	

<Footer />
<style>{`

  /* ===== ROW 1: Quantity + Add to Cart ===== */
  .quantity-button {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 20px 0 12px 0;
  }

  /* Quantity pill */
  .quantity {
    display: flex;
    align-items: center;
    border: 1px solid #ddd;
    border-radius: 50px;
    overflow: hidden;
    height: 50px;
    flex-shrink: 0;
    background: white;
  }

  .quantity button.minus,
  .quantity button.plus {
    background: white;
    border: none;
    width: 46px;
    height: 50px;
    font-size: 18px;
    font-weight: 300;
    cursor: pointer;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.15s;
    flex-shrink: 0;
    line-height: 1;
  }

  .quantity button.minus:hover,
  .quantity button.plus:hover {
    background: #f5f5f5;
  }

  .quantity input.qty {
    width: 48px;
    height: 50px;
    border: none;
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: #333;
    outline: none;
    -moz-appearance: textfield;
    background: white;
  }

  .quantity input.qty::-webkit-outer-spin-button,
  .quantity input.qty::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Add to Cart — takes remaining width */
  .single_add_to_cart_button {
    flex: 1;
    height: 50px;
    background-color: #555;
    color: white !important;
    border: none;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    cursor: pointer;
    transition: background 0.2s;
  }

  .single_add_to_cart_button:hover {
    background-color: #e74c3c;
  }

  /* ===== ROW 2: Buy It Now ===== */
  button.quick-buy {
    display: block;
    width: 100%;
    height: 50px;
    background: white;
    color: #333 !important;
    border: 1.5px solid #ddd;
    border-radius: 50px;
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    cursor: pointer;
    transition: border-color 0.2s, background 0.2s;
    margin-bottom: 16px;
  }

  button.quick-buy:hover {
    border-color: #333;
    background: #f9f9f9;
  }

  /* ===== ROW 3: Add to Wishlist ===== */
  .woosw-btn {
    display: flex;
    align-items: center;
    gap: 10px;
    background: none;
    border: none;
    padding: 4px 0;
    font-size: 14px;
    color: #555;
    cursor: pointer;
    transition: color 0.2s;
  }

  .woosw-btn:hover {
    color: #e74c3c;
  }

  .woosw-heart {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border: 1.5px solid #ddd;
    border-radius: 50%;
    font-size: 16px;
    color: #999;
    transition: border-color 0.2s, color 0.2s;
    flex-shrink: 0;
  }

  .woosw-btn:hover .woosw-heart {
    border-color: #e74c3c;
    color: #e74c3c;
  }

  /* Hide screen reader label */
  .screen-reader-text {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
  }
`}</style>
    </>
  );
};

export default Single;
