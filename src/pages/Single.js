// import React, { useState } from "react";
// import "./style.css";
// import Header from "./Header";
// import Footer from "./Footer";

// const Single = () => {
//   const [loading, setLoading] = useState(true);

//   return (
// <body class="product-template-default single single-product postid-1476 theme-laurent laurent-core-2.4.3 woocommerce woocommerce-page woocommerce-no-js laurent-ver-3.4.1 eltdf-grid-1300 eltdf-wide-dropdown-menu-content-in-grid eltdf-no-behavior eltdf-dropdown-animate-height eltdf-header-standard eltdf-menu-area-shadow-disable eltdf-menu-area-in-grid-shadow-disable eltdf-menu-area-in-grid-border-disable eltdf-logo-area-border-disable eltdf-logo-area-in-grid-border-disable eltdf-header-vertical-shadow-disable eltdf-header-vertical-border-disable eltdf-side-menu-slide-from-right eltdf-woocommerce-page eltdf-woo-single-page eltdf-woocommerce-columns-4 eltdf-woo-normal-space eltdf-woo-pl-info-below-image eltdf-woo-single-thumb-below-image eltdf-woo-single-has-pretty-photo eltdf-default-mobile-header eltdf-sticky-up-mobile-header qode-export-1.0 wpb-js-composer js-comp-ver-7.9 vc_responsive" itemscope itemtype="https://schema.org/WebPage">
//     	    <div class="eltdf-wrapper">
//         <div class="eltdf-wrapper-inner">
//             <div class="eltdf-double-grid-line-one"></div><div class="eltdf-double-grid-line-two"></div>
//       <Header />

//       <a id='eltdf-back-to-top' href='#'>
//         <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="43.047px" height="43.031px" viewBox="0 0 43.047 43.031" xmlSpace="preserve">
//           <circle fill="none" stroke="#BC9A6B" strokeMiterlimit="10" cx="21.523" cy="21.531" r="20.986"/>
//           <circle fill="none" stroke="#BC9A6B" className="eltdf-popout" strokeMiterlimit="10" cx="21.523" cy="21.531" r="16.049"/>
//           <polyline fill="none" stroke="#BC9A6B" strokeMiterlimit="10" points="15.205,23.875 21.523,18.573 27.842,23.875 "/>
//         </svg>
//       </a>

//       <div className="eltdf-content" >
//         <div className="eltdf-content-inner">

//           {/* Page Title / Breadcrumb */}
//           <div className="eltdf-title-holder eltdf-standard-with-breadcrumbs-type eltdf-title-va-header-bottom" style={{height: "189px", backgroundColor: "#0c1315"}} data-height="189">
//             <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
//               <div className="eltdf-grid-line eltdf-grid-column-1"></div>
//               <div className="eltdf-grid-line eltdf-grid-column-2"></div>
//               <div className="eltdf-grid-line eltdf-grid-column-3"></div>
//               <div className="eltdf-grid-line eltdf-grid-column-4"></div>
//               <div className="eltdf-grid-line eltdf-grid-column-5"></div>
//             </div>
//             <div className="eltdf-title-wrapper" style={{height: "79px", paddingTop: "110px"}}>
//               <div className="eltdf-title-inner">
//                 <div className="eltdf-grid">
//                   <div className="eltdf-title-info">
//                     <h5 className="eltdf-page-title entry-title">Shop</h5>
//                   </div>
//                   <div className="eltdf-breadcrumbs-info">
//                     <div itemProp="breadcrumb" className="eltdf-breadcrumbs">
//                       <a itemProp="url" href="../../index.html">Home</a>
//                       <span className="eltdf-delimiter">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-breadcrumb-arrow">
//                           <polyline points="0.4 0.4 3.6 4.2 0.4 8.1 " />
//                           <polyline points="4.5 0.4 7.7 4.2 4.5 8.1 " />
//                         </svg>
//                       </span>
//                       <a itemProp="url" href="../../shop/index.html">Shop</a>
//                       <span className="eltdf-delimiter">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-breadcrumb-arrow">
//                           <polyline points="0.4 0.4 3.6 4.2 0.4 8.1 " />
//                           <polyline points="4.5 0.4 7.7 4.2 4.5 8.1 " />
//                         </svg>
//                       </span>
//                       <a href="../../product-category/cocktails/index.html">Cocktails</a>
//                       <span className="eltdf-delimiter">
//                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-breadcrumb-arrow">
//                           <polyline points="0.4 0.4 3.6 4.2 0.4 8.1 " />
//                           <polyline points="4.5 0.4 7.7 4.2 4.5 8.1 " />
//                         </svg>
//                       </span>
//                       <span className="eltdf-current">Pimms jug</span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Container */}
//           <div className="eltdf-container">
//             <div className="eltdf-container-inner clearfix">
//               <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
//                 <div className="eltdf-grid-line eltdf-grid-column-1"></div>
//                 <div className="eltdf-grid-line eltdf-grid-column-2"></div>
//                 <div className="eltdf-grid-line eltdf-grid-column-3"></div>
//                 <div className="eltdf-grid-line eltdf-grid-column-4"></div>
//                 <div className="eltdf-grid-line eltdf-grid-column-5"></div>
//               </div>

//               {/* Cart Notice */}
//               <div className="woocommerce-notices-wrapper">
//                 <div className="woocommerce-message" role="alert">
//                   <a href="/cart" tabIndex="1" className="button wc-forward">View cart</a> &ldquo;Pimms jug&rdquo; has been added to your cart.
//                 </div>
//               </div>

//               {/* Product */}
//               <div id="product-1476" className="product type-product post-1476 status-publish first instock product_cat-cocktails product_tag-cocktails product_tag-sweet has-post-thumbnail shipping-taxable purchasable product-type-simple">
//                 <div className="eltdf-single-product-content">

//                   {/* Product Gallery */}
//                   <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images" data-columns="4" style={{opacity: 1, transition: "opacity .25s ease-in-out"}}>
//                     <div className="woocommerce-product-gallery__wrapper">
//                       <div
//                         data-thumb="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-3-600x600.jpg"
//                         data-thumb-alt="f"
//                         data-thumb-srcset="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-3-600x600.jpg 600w"
//                         className="woocommerce-product-gallery__image"
//                       >
//                         <a href="../../wp-content/uploads/2019/11/home-8-img-shop-3.jpg">
//                           <img
//                             width="800" height="800"
//                             src="../../wp-content/uploads/2019/11/home-8-img-shop-3-800x800.jpg"
//                             className="wp-post-image"
//                             alt="f"
//                             title="home-8-img-shop-3"
//                             data-caption=""
//                             data-src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-3.jpg"
//                             data-large_image="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-3.jpg"
//                             data-large_image_width="800"
//                             data-large_image_height="800"
//                             decoding="async"
//                             loading="lazy"
//                             srcSet="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-3.jpg 800w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-3-150x150.jpg 150w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-3-300x300.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-3-768x768.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-3-650x650.jpg 650w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-3-600x600.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-3-100x100.jpg 100w"
//                             sizes="(max-width: 800px) 100vw, 800px"
//                           />
//                         </a>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Product Summary */}
//                   <div className="eltdf-single-product-summary">
//                     <div className="summary entry-summary">
//                       <h3 itemProp="name" className="eltdf-single-product-title">Pimms jug</h3>
//                       <p className="price">
//                         <span className="woocommerce-Price-amount amount">
//                           <bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>22.00</bdi>
//                         </span>
//                       </p>
//                       <div className="woocommerce-product-details__short-description">
//                         <p style={{textAlign: "left"}}>Lorem ipsum dolor sit amet, consectetur adipisicing elitsi edo eiusmod senteas tempor incididunt ut labore et dolr emagna aliqua. Ut enim ad minim dano ris veniam quis</p>
//                       </div>

//                       {/* Add to Cart Form */}
//                       <form className="cart" action="https://laurent.qodeinteractive.com/product/pimms-jug/" method="post" encType="multipart/form-data">
//                         <div className="eltdf-quantity-buttons quantity">
//                           <label className="screen-reader-text" htmlFor="quantity_69977cf098cc9">Pimms jug quantity</label>
//                           <span className="eltdf-quantity-minus arrow_carrot-down"></span>
//                           <input
//                             type="text"
//                             id="quantity_69977cf098cc9"
//                             className="eltdf-quantity-input input-text qty text"
//                             data-step="1"
//                             data-min="1"
//                             data-max=""
//                             name="quantity"
//                             defaultValue="1"
//                             aria-label="Qty"
//                             size="4"
//                             placeholder=""
//                             inputMode="numeric"
//                           />
//                           <span className="eltdf-quantity-plus arrow_carrot-up"></span>
//                         </div>
//                         <button type="submit" name="add-to-cart" value="1476" className="single_add_to_cart_button button alt">Add to cart</button>
//                       </form>

//                       {/* Product Meta */}
//                       <div className="product_meta">
//                         <span className="sku_wrapper">SKU: <span className="sku">032</span></span>
//                         <span className="posted_in">Category: <a href="../../product-category/cocktails/index.html" rel="tag">Cocktails</a></span>
//                         <span className="tagged_as">Tags: <a href="../../product-tag/cocktails/index.html" rel="tag">Cocktails</a>, <a href="../../product-tag/sweet/index.html" rel="tag">Sweet</a></span>
//                       </div>

//                       {/* Social Share */}
//                       <div className="eltdf-woo-social-share-holder">
//                         <div className="eltdf-social-share-holder eltdf-list">
//                           <p className="eltdf-social-title">Share:</p>
//                           <ul>
//                             <li className="eltdf-facebook-share">
//                               <a itemProp="url" className="eltdf-share-link" href="#" onClick={() => window.open('https://www.facebook.com/sharer.php?u=https%3A%2F%2Flaurent.qodeinteractive.com%2Fproduct%2Fpimms-jug%2F', 'sharer', 'toolbar=0,status=0,width=620,height=280')}>
//                                 <span className="eltdf-social-network-icon ion-social-facebook-outline"></span>
//                               </a>
//                             </li>
//                             <li className="eltdf-twitter-share">
//                               <a itemProp="url" className="eltdf-share-link" href="#" onClick={() => window.open('https://twitter.com/intent/tweet?text=Pimms+jug https://laurent.qodeinteractive.com/product/pimms-jug/', 'popupwindow', 'scrollbars=yes,width=800,height=400')}>
//                                 <span className="eltdf-social-network-icon ion-social-twitter-outline"></span>
//                               </a>
//                             </li>
//                             <li className="eltdf-tumblr-share">
//                               <a itemProp="url" className="eltdf-share-link" href="#" onClick={(e) => { e.preventDefault(); const popUp = window.open('https://www.tumblr.com/share/link?url=https%3A%2F%2Flaurent.qodeinteractive.com%2Fproduct%2Fpimms-jug%2F&name=Pimms+jug', 'popupwindow', 'scrollbars=yes,width=800,height=400'); popUp.focus(); }}>
//                                 <span className="eltdf-social-network-icon ion-social-tumblr-outline"></span>
//                               </a>
//                             </li>
//                           </ul>
//                         </div>
//                       </div>

//                     </div>
//                   </div>
//                 </div>

//                 {/* Product Tabs */}
//                 <div className="woocommerce-tabs wc-tabs-wrapper">
//                   <ul className="tabs wc-tabs" role="tablist">
//                     <li className="description_tab" id="tab-title-description" role="tab" aria-controls="tab-description">
//                       <a href="#tab-description">Description</a>
//                     </li>
//                     <li className="additional_information_tab" id="tab-title-additional_information" role="tab" aria-controls="tab-additional_information">
//                       <a href="#tab-additional_information">Additional information</a>
//                     </li>
//                     <li className="reviews_tab" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
//                       <a href="#tab-reviews">Reviews (0)</a>
//                     </li>
//                   </ul>

//                   {/* Description Tab */}
//                   <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab" id="tab-description" role="tabpanel" aria-labelledby="tab-title-description">
//                     <h2>Description</h2>
//                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore mag na aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conseq at duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
//                   </div>

//                   {/* Additional Info Tab */}
//                   <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab" id="tab-additional_information" role="tabpanel" aria-labelledby="tab-title-additional_information">
//                     <h2>Additional information</h2>
//                     <table className="woocommerce-product-attributes shop_attributes">
//                       <tbody>
//                         <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--weight">
//                           <th className="woocommerce-product-attributes-item__label">Weight</th>
//                           <td className="woocommerce-product-attributes-item__value">0.5 kg</td>
//                         </tr>
//                         <tr className="woocommerce-product-attributes-item woocommerce-product-attributes-item--dimensions">
//                           <th className="woocommerce-product-attributes-item__label">Dimensions</th>
//                           <td className="woocommerce-product-attributes-item__value">36 &times; 28 &times; 10 cm</td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>

//                   {/* Reviews Tab */}
//                   <div className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab" id="tab-reviews" role="tabpanel" aria-labelledby="tab-title-reviews">
//                     <div id="reviews" className="woocommerce-Reviews">
//                       <div id="comments">
//                         <h2 className="woocommerce-Reviews-title">Reviews</h2>
//                         <p className="woocommerce-noreviews">There are no reviews yet.</p>
//                       </div>
//                       <div id="review_form_wrapper">
//                         <div id="review_form">
//                           <div id="respond" className="comment-respond">
//                             <span id="reply-title" className="comment-reply-title">
//                               Be the first to review &ldquo;Pimms jug&rdquo;
//                             </span>
//                             <form action="https://laurent.qodeinteractive.com/wp-comments-post.php" method="post" id="commentform" className="comment-form">
//                               <p className="comment-notes">
//                                 <span id="email-notes">Your email address will not be published.</span>{" "}
//                                 <span className="required-field-message">Required fields are marked <span className="required">*</span></span>
//                               </p>
//                               <div className="comment-form-rating">
//                                 <label htmlFor="rating">Your rating&nbsp;<span className="required">*</span></label>
//                                 <select name="rating" id="rating" required>
//                                   <option value="">Rate&hellip;</option>
//                                   <option value="5">Perfect</option>
//                                   <option value="4">Good</option>
//                                   <option value="3">Average</option>
//                                   <option value="2">Not that bad</option>
//                                   <option value="1">Very poor</option>
//                                 </select>
//                               </div>
//                               <p className="comment-form-comment">
//                                 <label htmlFor="comment">Your review&nbsp;<span className="required">*</span></label>
//                                 <textarea id="comment" name="comment" cols="45" rows="8" required></textarea>
//                               </p>
//                               <p className="comment-form-author">
//                                 <label htmlFor="author">Name&nbsp;<span className="required">*</span></label>
//                                 <input id="author" name="author" type="text" defaultValue="" size="30" required />
//                               </p>
//                               <p className="comment-form-email">
//                                 <label htmlFor="email">Email&nbsp;<span className="required">*</span></label>
//                                 <input id="email" name="email" type="email" defaultValue="" size="30" required />
//                               </p>
//                               <p className="comment-form-cookies-consent">
//                                 <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" defaultValue="yes" />
//                                 <label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
//                               </p>
//                               <p className="form-submit">
//                                 <input name="submit" type="submit" id="submit" className="submit" defaultValue="Submit" />
//                                 <input type="hidden" name="comment_post_ID" defaultValue="1476" id="comment_post_ID" />
//                                 <input type="hidden" name="comment_parent" id="comment_parent" defaultValue="0" />
//                               </p>
//                             </form>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="clear"></div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Related Products */}
//                 <section className="related products">
//                   <h2>Related products</h2>
//                   <ul className="products columns-4">

//                     <li className="product type-product post-1762 status-publish first instock product_cat-cocktails has-post-thumbnail purchasable product-type-simple">
//                       <div className="eltdf-pl-inner">
//                         <div className="eltdf-pl-image">
//                           <img width="600" height="600" src="../../wp-content/uploads/2019/11/home-8-img-shop-8-600x600.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="d" decoding="async" loading="lazy" srcSet="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8-600x600.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8-300x300.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8-150x150.jpg 150w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8-768x768.jpg 768w" sizes="(max-width: 600px) 100vw, 600px" />
//                           <div className="eltdf-pl-text">
//                             <div className="eltdf-pl-text-outer">
//                               <div className="eltdf-pl-text-inner">
//                                 <a href="indexbfb7.html?add-to-cart=1762" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="1762" data-product_sku="033" rel="nofollow">Add to cart</a>
//                                 <span className="screen-reader-text"></span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="eltdf-pl-text-wrapper">
//                         <h6 className="eltdf-product-list-title"><a href="../coco-spice-2/index.html">Coco spice</a></h6>
//                         <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>17.00</bdi></span></span>
//                       </div>
//                       <a href="../coco-spice-2/index.html" className="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>
//                     </li>

//                     <li className="product type-product post-1176 status-publish instock product_cat-desserts has-post-thumbnail purchasable product-type-simple">
//                       <div className="eltdf-pl-inner">
//                         <div className="eltdf-pl-image">
//                           <img width="600" height="600" src="../../wp-content/uploads/2019/11/shop-img-4-600x600.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="G" decoding="async" loading="lazy" srcSet="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/shop-img-4-600x600.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/shop-img-4-150x150.jpg 150w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/shop-img-4-300x300.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/shop-img-4-768x768.jpg 768w" sizes="(max-width: 600px) 100vw, 600px" />
//                           <div className="eltdf-pl-text">
//                             <div className="eltdf-pl-text-outer">
//                               <div className="eltdf-pl-text-inner">
//                                 <a href="index4153.html?add-to-cart=1176" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="1176" data-product_sku="033" rel="nofollow">Add to cart</a>
//                                 <span className="screen-reader-text"></span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="eltdf-pl-text-wrapper">
//                         <h6 className="eltdf-product-list-title"><a href="../small-desserts/index.html">Small Desserts</a></h6>
//                         <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>17.00</bdi></span></span>
//                       </div>
//                       <a href="../small-desserts/index.html" className="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>
//                     </li>

//                     <li className="product type-product post-1475 status-publish instock product_cat-cocktails has-post-thumbnail purchasable product-type-simple">
//                       <div className="eltdf-pl-inner">
//                         <div className="eltdf-pl-image">
//                           <img width="600" height="600" src="../../wp-content/uploads/2019/11/home-8-img-shop-2-600x600.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="f" decoding="async" loading="lazy" srcSet="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-2-600x600.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-2-150x150.jpg 150w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-2-300x300.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-2-768x768.jpg 768w" sizes="(max-width: 600px) 100vw, 600px" />
//                           <div className="eltdf-pl-text">
//                             <div className="eltdf-pl-text-outer">
//                               <div className="eltdf-pl-text-inner">
//                                 <a href="indexff6a.html?add-to-cart=1475" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="1475" data-product_sku="031" rel="nofollow">Add to cart</a>
//                                 <span className="screen-reader-text"></span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="eltdf-pl-text-wrapper">
//                         <h6 className="eltdf-product-list-title"><a href="../tequila-sunrise/index.html">Tequila sunrise</a></h6>
//                         <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>28.00</bdi></span></span>
//                       </div>
//                       <a href="../tequila-sunrise/index.html" className="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>
//                     </li>

//                     <li className="product type-product post-1175 status-publish last instock product_cat-cocktails has-post-thumbnail purchasable product-type-simple">
//                       <div className="eltdf-pl-inner">
//                         <div className="eltdf-pl-image">
//                           <img width="600" height="600" src="../../wp-content/uploads/2019/11/shop-img-3-600x600.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="F" decoding="async" loading="lazy" srcSet="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/shop-img-3-600x600.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/shop-img-3-150x150.jpg 150w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/shop-img-3-300x300.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/shop-img-3-768x768.jpg 768w" sizes="(max-width: 600px) 100vw, 600px" />
//                           <div className="eltdf-pl-text">
//                             <div className="eltdf-pl-text-outer">
//                               <div className="eltdf-pl-text-inner">
//                                 <a href="indexddcf.html?add-to-cart=1175" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="1175" data-product_sku="032" rel="nofollow">Add to cart</a>
//                                 <span className="screen-reader-text"></span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="eltdf-pl-text-wrapper">
//                         <h6 className="eltdf-product-list-title"><a href="../cherry-cocktail/index.html">Cherry Cocktail</a></h6>
//                         <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>22.00</bdi></span></span>
//                       </div>
//                       <a href="../cherry-cocktail/index.html" className="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>
//                     </li>

//                   </ul>
//                 </section>

//               </div>
//             </div>
//           </div>

//         </div>
//       </div>

//       <Footer />
// </div>
// </div>
// </body>
//   );
// };

// export default Single;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";

const Single = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/db/product/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch product:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <div style={{ height: "100vh", background: "#0c1315", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ color: "#C9AB81", letterSpacing: "0.2em", fontFamily: "Josefin Sans, sans-serif" }}>LOADING...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <div style={{ height: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <p style={{ color: "#888", fontSize: 18 }}>Product not found.</p>
        </div>
        <Footer />
      </>
    );
  }

  const images = product.images?.length > 0 ? product.images : [];
  const categoryName = product.category?.name || "";
  const categoryId = product.category?._id || product.category;

  return (
    <>
      <Header />

      <a id="eltdf-back-to-top" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="43.047px" height="43.031px" viewBox="0 0 43.047 43.031" xmlSpace="preserve">
          <circle fill="none" stroke="#BC9A6B" strokeMiterlimit="10" cx="21.523" cy="21.531" r="20.986" />
          <circle fill="none" stroke="#BC9A6B" className="eltdf-popout" strokeMiterlimit="10" cx="21.523" cy="21.531" r="16.049" />
          <polyline fill="none" stroke="#BC9A6B" strokeMiterlimit="10" points="15.205,23.875 21.523,18.573 27.842,23.875" />
        </svg>
      </a>

      <div className="eltdf-content">
        <div className="eltdf-content-inner">

          {/* ── Breadcrumb Bar ── */}
          <div
            className="eltdf-title-holder eltdf-standard-with-breadcrumbs-type eltdf-title-va-header-bottom"
            style={{ height: "189px", backgroundColor: "#0c1315" }}
          >
            <div className="eltdf-title-wrapper" style={{ height: "79px", paddingTop: "110px" }}>
              <div className="eltdf-title-inner">
                <div className="eltdf-grid">
                  <div className="eltdf-title-info">
                    <h5 className="eltdf-page-title entry-title">{product.name}</h5>
                  </div>
                  <div className="eltdf-breadcrumbs-info">
                    <div itemProp="breadcrumb" className="eltdf-breadcrumbs">
                      <Link to="/">Home</Link>
                      <span className="eltdf-delimiter">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-breadcrumb-arrow">
                          <polyline points="0.4 0.4 3.6 4.2 0.4 8.1" />
                          <polyline points="4.5 0.4 7.7 4.2 4.5 8.1" />
                        </svg>
                      </span>
                      <Link to="/shop">Shop</Link>
                      {categoryName && (
                        <>
                          <span className="eltdf-delimiter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-breadcrumb-arrow">
                              <polyline points="0.4 0.4 3.6 4.2 0.4 8.1" />
                              <polyline points="4.5 0.4 7.7 4.2 4.5 8.1" />
                            </svg>
                          </span>
                          <Link to={`/shop?category=${categoryId}`}>{categoryName}</Link>
                        </>
                      )}
                      <span className="eltdf-delimiter">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-breadcrumb-arrow">
                          <polyline points="0.4 0.4 3.6 4.2 0.4 8.1" />
                          <polyline points="4.5 0.4 7.7 4.2 4.5 8.1" />
                        </svg>
                      </span>
                      <span className="eltdf-current">{product.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Main Product Content ── */}
          <div className="eltdf-container">
            <div className="eltdf-container-inner clearfix">

              <div id={`product-${product._id}`} className="product">
                <div className="eltdf-single-product-content">

                  {/* ── Product Gallery ── */}
                  <div className="woocommerce-product-gallery woocommerce-product-gallery--with-images images">
                    <div className="woocommerce-product-gallery__wrapper">
                      {images.length > 0 ? (
                        <>
                          {/* Main image */}
                          <div className="woocommerce-product-gallery__image">
                            <img
                              src={images[selectedImage]}
                              alt={product.name}
                              style={{ width: "100%", objectFit: "cover", maxHeight: 520 }}
                            />
                          </div>

                          {/* Thumbnail strip */}
                          {images.length > 1 && (
                            <div style={{ display: "flex", gap: 8, marginTop: 10, flexWrap: "wrap" }}>
                              {images.map((img, i) => (
                                <img
                                  key={i}
                                  src={img}
                                  alt={`${product.name} ${i + 1}`}
                                  onClick={() => setSelectedImage(i)}
                                  style={{
                                    width: 80, height: 80, objectFit: "cover",
                                    cursor: "pointer",
                                    border: i === selectedImage ? "2px solid #C9AB81" : "2px solid transparent",
                                    opacity: i === selectedImage ? 1 : 0.65,
                                    transition: "all 0.2s ease",
                                  }}
                                />
                              ))}
                            </div>
                          )}
                        </>
                      ) : (
                        <div style={{
                          width: "100%", height: 400,
                          background: "#1a2020",
                          display: "flex", alignItems: "center", justifyContent: "center",
                          color: "#C9AB81", letterSpacing: "0.1em",
                        }}>
                          NO IMAGE
                        </div>
                      )}
                    </div>
                  </div>

                  {/* ── Product Summary ── */}
                  <div className="eltdf-single-product-summary">
                    <div className="summary entry-summary">
                      <h3 itemProp="name" className="eltdf-single-product-title">{product.name}</h3>

                      <p className="price">
                        <span className="woocommerce-Price-amount amount">
                          <bdi>
                            <span className="woocommerce-Price-currencySymbol">₦</span>
                            {Number(product.price).toLocaleString()}
                          </bdi>
                        </span>
                      </p>

                      {product.description && (
                        <div className="woocommerce-product-details__short-description">
                          <p>{product.description}</p>
                        </div>
                      )}

                      {/* Quantity + Add to Cart */}
                      <div className="cart" style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 20 }}>
                        <div className="eltdf-quantity-buttons quantity">
                          <span
                            className="eltdf-quantity-minus"
                            onClick={() => setQuantity(q => Math.max(product.minimumQuantity || 1, q - 1))}
                            style={{ cursor: "pointer" }}
                          >
                            −
                          </span>
                          <input
                            type="text"
                            className="eltdf-quantity-input input-text qty text"
                            value={quantity}
                            readOnly
                            size="4"
                          />
                          <span
                            className="eltdf-quantity-plus"
                            onClick={() => setQuantity(q => q + 1)}
                            style={{ cursor: "pointer" }}
                          >
                            +
                          </span>
                        </div>
                        <button
                          className="single_add_to_cart_button button alt"
                          onClick={() => {
                            // TODO: wire up your cart context/state here
                            alert(`Added ${quantity} × ${product.name} to cart`);
                          }}
                        >
                          Add to cart
                        </button>
                      </div>

                      {/* Product Meta */}
                      <div className="product_meta" style={{ marginTop: 20 }}>
                        {product.weight && (
                          <span className="sku_wrapper">
                            Weight: <span className="sku">{product.weight} {product.unit}</span> &nbsp;|&nbsp;
                          </span>
                        )}
                        {categoryName && (
                          <span className="posted_in">
                            Category: <Link to={`/shop?category=${categoryId}`}>{categoryName}</Link>
                          </span>
                        )}
                        {product.tag?.length > 0 && (
                          <span className="tagged_as">
                            &nbsp;| Tags: {product.tag.join(", ")}
                          </span>
                        )}
                      </div>

                      {/* Stock info */}
                      {product.quantityAvailable !== undefined && (
                        <p style={{ marginTop: 10, fontSize: 13, color: product.quantityAvailable > 0 ? "#4caf50" : "#e53935" }}>
                          {product.quantityAvailable > 0 ? `In stock (${product.quantityAvailable} available)` : "Out of stock"}
                        </p>
                      )}

                    </div>
                  </div>
                </div>

                {/* ── Product Tabs ── */}
                <div className="woocommerce-tabs wc-tabs-wrapper" style={{ marginTop: 40 }}>
                  <ul className="tabs wc-tabs" role="tablist">
                    {["description", "additional", "reviews"].map((tab) => (
                      <li
                        key={tab}
                        className={activeTab === tab ? "active" : ""}
                        role="tab"
                        style={{ cursor: "pointer" }}
                        onClick={() => setActiveTab(tab)}
                      >
                        <a href={`#tab-${tab}`} onClick={e => e.preventDefault()}>
                          {tab === "description" && "Description"}
                          {tab === "additional" && "Additional Information"}
                          {tab === "reviews" && `Reviews (${product.reviews?.length || 0})`}
                        </a>
                      </li>
                    ))}
                  </ul>

                  {/* Description */}
                  {activeTab === "description" && (
                    <div className="woocommerce-Tabs-panel panel" id="tab-description">
                      <h2>Description</h2>
                      <p>{product.description || "No description available."}</p>
                      {product.ingredients?.length > 0 && (
                        <>
                          <h4>Ingredients</h4>
                          <p>{product.ingredients.join(", ")}</p>
                        </>
                      )}
                      {product.allergens?.length > 0 && (
                        <>
                          <h4>Allergens</h4>
                          <p>{product.allergens.join(", ")}</p>
                        </>
                      )}
                      {product.features?.length > 0 && (
                        <>
                          <h4>Features</h4>
                          <ul>{product.features.map((f, i) => <li key={i}>{f}</li>)}</ul>
                        </>
                      )}
                    </div>
                  )}

                  {/* Additional Info */}
                  {activeTab === "additional" && (
                    <div className="woocommerce-Tabs-panel panel" id="tab-additional">
                      <h2>Additional Information</h2>
                      <table className="woocommerce-product-attributes shop_attributes">
                        <tbody>
                          {product.weight && (
                            <tr>
                              <th>Weight / Volume</th>
                              <td>{product.weight} {product.unit}</td>
                            </tr>
                          )}
                          {product.expiryInfo && (
                            <tr>
                              <th>Shelf Life</th>
                              <td>{product.expiryInfo}</td>
                            </tr>
                          )}
                          {product.storageInfo && (
                            <tr>
                              <th>Storage</th>
                              <td>{product.storageInfo}</td>
                            </tr>
                          )}
                          {product.minimumQuantity && (
                            <tr>
                              <th>Minimum Order</th>
                              <td>{product.minimumQuantity}</td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Reviews */}
                  {activeTab === "reviews" && (
                    <div className="woocommerce-Tabs-panel panel" id="tab-reviews">
                      <div className="woocommerce-Reviews">
                        <h2>Reviews</h2>
                        {product.reviews?.length === 0 || !product.reviews ? (
                          <p className="woocommerce-noreviews">There are no reviews yet.</p>
                        ) : (
                          product.reviews.map((review, i) => (
                            <div key={i} style={{ borderBottom: "1px solid #eee", paddingBottom: 12, marginBottom: 12 }}>
                              <strong>{review.name}</strong> — ⭐ {review.rating}/5
                              <p>{review.comment}</p>
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Single;
