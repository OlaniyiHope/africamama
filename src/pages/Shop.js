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

const backgroundImg = "https://papzi.wpbingosite.com/wp-content/uploads/2022/02/Image-9-1.jpg";

  return (
    <>
    <Header />
      <a id='eltdf-back-to-top' href='#'>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="43.047px" height="43.031px" viewBox="0 0 43.047 43.031" xmlSpace="preserve">
          <circle fill="none" stroke="#BC9A6B" strokeMiterlimit="10" cx="21.523" cy="21.531" r="20.986"/>
          <circle fill="none" stroke="#BC9A6B" className="eltdf-popout" strokeMiterlimit="10" cx="21.523" cy="21.531" r="16.049"/>
          <polyline fill="none" stroke="#BC9A6B" strokeMiterlimit="10" points="15.205,23.875 21.523,18.573 27.842,23.875 "/>
        </svg>
      </a>
	        
      <div className="eltdf-content" >
        <div className="eltdf-content-inner">
          <div className="eltdf-title-holder eltdf-standard-with-breadcrumbs-type eltdf-title-va-header-bottom" style={{height: "189px", backgroundColor: "#0c1315"}} data-height="189">
            <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
              <div className="eltdf-grid-line eltdf-grid-column-1"></div>
              <div className="eltdf-grid-line eltdf-grid-column-2"></div>
              <div className="eltdf-grid-line eltdf-grid-column-3"></div>
              <div className="eltdf-grid-line eltdf-grid-column-4"></div>
              <div className="eltdf-grid-line eltdf-grid-column-5"></div>
            </div>
            <div className="eltdf-title-wrapper" style={{height: "79px", paddingTop: "110px"}}>
              <div className="eltdf-title-inner">
                <div className="eltdf-grid">
                  <div className="eltdf-title-info">
                    <h5 className="eltdf-page-title entry-title">Shop</h5>
                  </div>
                  <div className="eltdf-breadcrumbs-info">
                    <div itemProp="breadcrumb" className="eltdf-breadcrumbs">
                      <a itemProp="url" href="../index.html">Home</a>
                      <span className="eltdf-delimiter">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-breadcrumb-arrow">
                          <polyline points="0.4 0.4 3.6 4.2 0.4 8.1 " />
                          <polyline points="4.5 0.4 7.7 4.2 4.5 8.1 " />
                        </svg>
                      </span>
                      <span className="eltdf-current">Shop</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="eltdf-container">
            <div className="eltdf-container-inner clearfix">
              <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
                <div className="eltdf-grid-line eltdf-grid-column-1"></div>
                <div className="eltdf-grid-line eltdf-grid-column-2"></div>
                <div className="eltdf-grid-line eltdf-grid-column-3"></div>
                <div className="eltdf-grid-line eltdf-grid-column-4"></div>
                <div className="eltdf-grid-line eltdf-grid-column-5"></div>
              </div>
              <div className="eltdf-grid-row eltdf-grid-large-gutter">
                <div className="eltdf-page-content-holder eltdf-grid-col-9">
                  <div className="woocommerce-notices-wrapper"></div>
                  <p className="woocommerce-result-count">Showing 1&ndash;6 of 17 results</p>
                  <form className="woocommerce-ordering" method="get">
                    <select name="orderby" className="orderby" aria-label="Shop order">
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date" selected='selected'>Sort by latest</option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">Sort by price: high to low</option>
                    </select>
                    <input type="hidden" name="paged" value="1" />
                  </form>

                  <div className="eltdf-pl-main-holder">
                    <ul className="products columns-3">

                      <li className="product type-product post-1764 status-publish first instock product_cat-cocktails product_tag-brunch product_tag-desserts has-post-thumbnail shipping-taxable purchasable product-type-simple">
                        <div className="eltdf-pl-inner">
                          <div className="eltdf-pl-image">
                            <img width="600" height="600" src="../wp-content/uploads/2019/11/home-8-img-shop-9-600x600.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="a" decoding="async" fetchPriority="high" srcSet="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-9-600x600.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-9-300x300.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-9-150x150.jpg 150w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-9-768x768.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-9-650x650.jpg 650w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-9-100x100.jpg 100w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-9.jpg 800w" sizes="(max-width: 600px) 100vw, 600px" />
                            <div className="eltdf-pl-text">
                              <div className="eltdf-pl-text-outer">
                                <div className="eltdf-pl-text-inner">
                                  <a href="index64d8.html?add-to-cart=1764" aria-describedby="woocommerce_loop_add_to_cart_link_describedby_1764" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="1764" data-product_sku="031" aria-label="Add to cart: &ldquo;Tequila shot&rdquo;" rel="nofollow">Add to cart</a>
                                  <span id="woocommerce_loop_add_to_cart_link_describedby_1764" className="screen-reader-text"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="eltdf-pl-text-wrapper">
                          <h6 className="eltdf-product-list-title"><a href="../product/tequila-shot/index.html">Tequila shot</a></h6>
                          <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>28.00</bdi></span></span>
                        </div>
                        <a href="../product/tequila-shot/index.html" className="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>
                      </li>

                      <li className="product type-product post-1763 status-publish instock product_cat-cocktails product_tag-cocktails product_tag-sweet has-post-thumbnail shipping-taxable purchasable product-type-simple">
                        <div className="eltdf-pl-inner">
                          <div className="eltdf-pl-image">
                            <img width="600" height="600" src="../wp-content/uploads/2019/11/home-8-img-shop-7-600x600.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="d" decoding="async" srcSet="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-7-600x600.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-7-300x300.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-7-150x150.jpg 150w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-7-768x768.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-7-650x650.jpg 650w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-7-100x100.jpg 100w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-7.jpg 800w" sizes="(max-width: 600px) 100vw, 600px" />
                            <div className="eltdf-pl-text">
                              <div className="eltdf-pl-text-outer">
                                <div className="eltdf-pl-text-inner">
                                  <a href="index528e.html?add-to-cart=1763" aria-describedby="woocommerce_loop_add_to_cart_link_describedby_1763" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="1763" data-product_sku="032" aria-label="Add to cart: &ldquo;Pimms jug&rdquo;" rel="nofollow">Add to cart</a>
                                  <span id="woocommerce_loop_add_to_cart_link_describedby_1763" className="screen-reader-text"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="eltdf-pl-text-wrapper">
                          <h6 className="eltdf-product-list-title"><a href="../product/pimms-jug-2/index.html">Pimms jug</a></h6>
                          <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>22.00</bdi></span></span>
                        </div>
                        <a href="../product/pimms-jug-2/index.html" className="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>
                      </li>

                      <li className="product type-product post-1762 status-publish last instock product_cat-cocktails product_tag-cuisine product_tag-sweet has-post-thumbnail shipping-taxable purchasable product-type-simple">
                        <div className="eltdf-pl-inner">
                          <div className="eltdf-pl-image">
                            <img width="600" height="600" src="../wp-content/uploads/2019/11/home-8-img-shop-8-600x600.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="d" decoding="async" srcSet="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8-600x600.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8-300x300.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8-150x150.jpg 150w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8-768x768.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8-650x650.jpg 650w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8-100x100.jpg 100w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8.jpg 800w" sizes="(max-width: 600px) 100vw, 600px" />
                            <div className="eltdf-pl-text">
                              <div className="eltdf-pl-text-outer">
                                <div className="eltdf-pl-text-inner">
                                  <a href="indexbfb7.html?add-to-cart=1762" aria-describedby="woocommerce_loop_add_to_cart_link_describedby_1762" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="1762" data-product_sku="033" aria-label="Add to cart: &ldquo;Coco spice&rdquo;" rel="nofollow">Add to cart</a>
                                  <span id="woocommerce_loop_add_to_cart_link_describedby_1762" className="screen-reader-text"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="eltdf-pl-text-wrapper">
                          <h6 className="eltdf-product-list-title"><a href="../product/coco-spice-2/index.html">Coco spice</a></h6>
                          <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>17.00</bdi></span></span>
                        </div>
                        <a href="../product/coco-spice-2/index.html" className="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>
                      </li>

                      <li className="product type-product post-1761 status-publish first instock product_cat-cocktails product_tag-breakfast product_tag-sea-food has-post-thumbnail shipping-taxable purchasable product-type-simple">
                        <div className="eltdf-pl-inner">
                          <div className="eltdf-pl-image">
                            <img width="600" height="600" src="../wp-content/uploads/2019/11/home-8-img-shop-6-600x600.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="d" decoding="async" loading="lazy" srcSet="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-6-600x600.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-6-300x300.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-6-150x150.jpg 150w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-6-768x768.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-6-650x650.jpg 650w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-6-100x100.jpg 100w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-6.jpg 800w" sizes="(max-width: 600px) 100vw, 600px" />
                            <div className="eltdf-pl-text">
                              <div className="eltdf-pl-text-outer">
                                <div className="eltdf-pl-text-inner">
                                  <a href="index4062.html?add-to-cart=1761" aria-describedby="woocommerce_loop_add_to_cart_link_describedby_1761" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="1761" data-product_sku="030" aria-label="Add to cart: &ldquo;Punch&rdquo;" rel="nofollow">Add to cart</a>
                                  <span id="woocommerce_loop_add_to_cart_link_describedby_1761" className="screen-reader-text"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="eltdf-pl-text-wrapper">
                          <h6 className="eltdf-product-list-title"><a href="../product/punch-2/index.html">Punch</a></h6>
                          <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>17.00</bdi></span></span>
                        </div>
                        <a href="../product/punch-2/index.html" className="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>
                      </li>

                      <li className="product type-product post-1485 status-publish instock product_cat-cocktails product_tag-breakfast product_tag-sea-food has-post-thumbnail shipping-taxable purchasable product-type-simple">
                        <div className="eltdf-pl-inner">
                          <div className="eltdf-pl-image">
                            <img width="600" height="600" src="../wp-content/uploads/2019/11/home-8-img-shop-5-600x600.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="g" decoding="async" loading="lazy" srcSet="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-5-600x600.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-5-150x150.jpg 150w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-5-300x300.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-5-768x768.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-5-650x650.jpg 650w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-5.jpg 800w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-5-100x100.jpg 100w" sizes="(max-width: 600px) 100vw, 600px" />
                            <div className="eltdf-pl-text">
                              <div className="eltdf-pl-text-outer">
                                <div className="eltdf-pl-text-inner">
                                  <a href="index791a.html?add-to-cart=1485" aria-describedby="woocommerce_loop_add_to_cart_link_describedby_1485" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="1485" data-product_sku="030" aria-label="Add to cart: &ldquo;Punch&rdquo;" rel="nofollow">Add to cart</a>
                                  <span id="woocommerce_loop_add_to_cart_link_describedby_1485" className="screen-reader-text"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="eltdf-pl-text-wrapper">
                          <h6 className="eltdf-product-list-title"><a href="../product/punch/index.html">Punch</a></h6>
                          <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>17.00</bdi></span></span>
                        </div>
                        <a href="../product/punch/index.html" className="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>
                      </li>

                      <li className="product type-product post-1477 status-publish last instock product_cat-cocktails product_tag-cuisine product_tag-sweet has-post-thumbnail shipping-taxable purchasable product-type-simple">
                        <div className="eltdf-pl-inner">
                          <div className="eltdf-pl-image">
                            <img width="600" height="600" src="../wp-content/uploads/2019/11/home-8-img-shop-4-600x600.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="f" decoding="async" loading="lazy" srcSet="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-4-600x600.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-4-150x150.jpg 150w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-4-300x300.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-4-768x768.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-4-650x650.jpg 650w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-4.jpg 800w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-4-100x100.jpg 100w" sizes="(max-width: 600px) 100vw, 600px" />
                            <div className="eltdf-pl-text">
                              <div className="eltdf-pl-text-outer">
                                <div className="eltdf-pl-text-inner">
                                  <a href="indexd604.html?add-to-cart=1477" aria-describedby="woocommerce_loop_add_to_cart_link_describedby_1477" data-quantity="1" className="button product_type_simple add_to_cart_button ajax_add_to_cart" data-product_id="1477" data-product_sku="033" aria-label="Add to cart: &ldquo;Coco spice&rdquo;" rel="nofollow">Add to cart</a>
                                  <span id="woocommerce_loop_add_to_cart_link_describedby_1477" className="screen-reader-text"></span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="eltdf-pl-text-wrapper">
                          <h6 className="eltdf-product-list-title"><a href="../product/coco-spice/index.html">Coco spice</a></h6>
                          <span className="price"><span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>17.00</bdi></span></span>
                        </div>
                        <a href="../product/coco-spice/index.html" className="woocommerce-LoopProduct-link woocommerce-loop-product__link"></a>
                      </li>

                    </ul>
                  </div>

                  <nav className="woocommerce-pagination">
                    <ul className='page-numbers'>
                      <li><span aria-current="page" className="page-numbers current">1</span></li>
                      <li><a className="page-numbers" href="page/2/index.html">2</a></li>
                      <li><a className="page-numbers" href="page/3/index.html">3</a></li>
                      <li><a className="next page-numbers" href="page/2/index.html">&rarr;</a></li>
                    </ul>
                  </nav>

                </div>

                <div className="eltdf-sidebar-holder eltdf-grid-col-3">
                  <aside className="eltdf-sidebar">

                    <div className="widget woocommerce widget_price_filter">
                      <div className="eltdf-widget-title-holder"><h6 className="eltdf-widget-title">Filter by price</h6></div>
                      <form method="get" action="https://laurent.qodeinteractive.com/shop/">
                        <div className="price_slider_wrapper">
                          <div className="price_slider" style={{display:"none"}}></div>
                          <div className="price_slider_amount" data-step="10">
                            <label className="screen-reader-text" htmlFor="min_price">Min price</label>
                            <input type="text" id="min_price" name="min_price" defaultValue="10" data-min="10" placeholder="Min price" />
                            <label className="screen-reader-text" htmlFor="max_price">Max price</label>
                            <input type="text" id="max_price" name="max_price" defaultValue="40" data-max="40" placeholder="Max price" />
                            <button type="submit" className="button">Filter</button>
                            <div className="price_label" style={{display:"none"}}>
                              Price: <span className="from"></span> &mdash; <span className="to"></span>
                            </div>
                            <div className="clear"></div>
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="widget woocommerce widget_product_categories">
                      <div className="eltdf-widget-title-holder"><h6 className="eltdf-widget-title">Categories</h6></div>
                      <ul className="product-categories">
                        <li className="cat-item cat-item-52"><a href="../product-category/cocktails/index.html">Cocktails</a></li>
                        <li className="cat-item cat-item-30"><a href="../product-category/desserts/index.html">Desserts</a></li>
                        <li className="cat-item cat-item-29"><a href="../product-category/food/index.html">Food</a></li>
                        <li className="cat-item cat-item-53"><a href="../product-category/recipes/index.html">Recipes</a></li>
                        <li className="cat-item cat-item-15"><a href="../product-category/uncategorized/index.html">Uncategorized</a></li>
                      </ul>
                    </div>

                    <div className="widget woocommerce widget_products">
                      <div className="eltdf-widget-title-holder"><h6 className="eltdf-widget-title">Products</h6></div>
                      <ul className="product_list_widget">
                        <li>
                          <a href="../product/tequila-shot/index.html">
                            <img width="600" height="600" src="../wp-content/uploads/2019/11/home-8-img-shop-9-600x600.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="a" decoding="async" loading="lazy" srcSet="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-9-600x600.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-9-300x300.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-9-150x150.jpg 150w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-9-768x768.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-9-650x650.jpg 650w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-9-100x100.jpg 100w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-9.jpg 800w" sizes="(max-width: 600px) 100vw, 600px" />
                            <span className="product-title">Tequila shot</span>
                          </a>
                          <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>28.00</bdi></span>
                        </li>
                        <li>
                          <a href="../product/pimms-jug-2/index.html">
                            <img width="600" height="600" src="../wp-content/uploads/2019/11/home-8-img-shop-7-600x600.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="d" decoding="async" loading="lazy" srcSet="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-7-600x600.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-7-300x300.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-7-150x150.jpg 150w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-7-768x768.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-7-650x650.jpg 650w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-7-100x100.jpg 100w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-7.jpg 800w" sizes="(max-width: 600px) 100vw, 600px" />
                            <span className="product-title">Pimms jug</span>
                          </a>
                          <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>22.00</bdi></span>
                        </li>
                        <li>
                          <a href="../product/coco-spice-2/index.html">
                            <img width="600" height="600" src="../wp-content/uploads/2019/11/home-8-img-shop-8-600x600.jpg" className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" alt="d" decoding="async" loading="lazy" srcSet="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8-600x600.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8-300x300.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8-150x150.jpg 150w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8-768x768.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8-650x650.jpg 650w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8-100x100.jpg 100w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-8.jpg 800w" sizes="(max-width: 600px) 100vw, 600px" />
                            <span className="product-title">Coco spice</span>
                          </a>
                          <span className="woocommerce-Price-amount amount"><bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>17.00</bdi></span>
                        </li>
                      </ul>
                    </div>

                    <div className="widget woocommerce widget_product_tag_cloud">
                      <div className="eltdf-widget-title-holder"><h6 className="eltdf-widget-title">Tags</h6></div>
                      <div className="tagcloud">
                        <a href="../product-tag/breakfast/index.html" className="tag-cloud-link tag-link-54 tag-link-position-1" style={{fontSize: "16.324324324324pt"}} aria-label="Breakfast (4 products)">Breakfast</a>
                        <a href="../product-tag/brunch/index.html" className="tag-cloud-link tag-link-61 tag-link-position-2" style={{fontSize: "12.540540540541pt"}} aria-label="Brunch (3 products)">Brunch</a>
                        <a href="../product-tag/cocktails/index.html" className="tag-cloud-link tag-link-59 tag-link-position-3" style={{fontSize: "16.324324324324pt"}} aria-label="Cocktails (4 products)">Cocktails</a>
                        <a href="../product-tag/cuisine/index.html" className="tag-cloud-link tag-link-56 tag-link-position-4" style={{fontSize: "12.540540540541pt"}} aria-label="Cuisine (3 products)">Cuisine</a>
                        <a href="../product-tag/delicious/index.html" className="tag-cloud-link tag-link-32 tag-link-position-5" style={{fontSize: "8pt"}} aria-label="Delicious (2 products)">Delicious</a>
                        <a href="../product-tag/desserts/index.html" className="tag-cloud-link tag-link-55 tag-link-position-6" style={{fontSize: "16.324324324324pt"}} aria-label="Desserts (4 products)">Desserts</a>
                        <a href="../product-tag/lunch/index.html" className="tag-cloud-link tag-link-57 tag-link-position-7" style={{fontSize: "8pt"}} aria-label="Lunch (2 products)">Lunch</a>
                        <a href="../product-tag/main-dish/index.html" className="tag-cloud-link tag-link-58 tag-link-position-8" style={{fontSize: "8pt"}} aria-label="Main dish (2 products)">Main dish</a>
                        <a href="../product-tag/sea-food/index.html" className="tag-cloud-link tag-link-60 tag-link-position-9" style={{fontSize: "16.324324324324pt"}} aria-label="Sea food (4 products)">Sea food</a>
                        <a href="../product-tag/sweet/index.html" className="tag-cloud-link tag-link-31 tag-link-position-10" style={{fontSize: "22pt"}} aria-label="Sweet (6 products)">Sweet</a>
                      </div>
                    </div>

                    <div className="widget widget_search">
                      <div className="eltdf-widget-title-holder"><h6 className="eltdf-widget-title">Search</h6></div>
                      <form role="search" method="get" className="eltdf-searchform searchform" id="searchform-292" action="https://laurent.qodeinteractive.com/">
                        <label className="screen-reader-text">Search for:</label>
                        <div className="input-holder clearfix">
                          <input type="search" className="search-field" placeholder="Type here" defaultValue="" name="s" title="Search for:"/>
                          <button type="submit" className="eltdf-search-submit"><span aria-hidden="true" className="eltdf-icon-font-elegant icon_search"></span></button>
                        </div>
                      </form>
                    </div>

                    <div className="widget eltdf-social-icons-group-widget text-align-left">
                      <div className="eltdf-widget-title-holder"><h6 className="eltdf-widget-title">Follow us</h6></div>
                      <a className="eltdf-social-icon-widget-holder eltdf-icon-has-hover" style={{fontSize: "18px", margin: "0 20px 0 0"}} href="https://www.facebook.com/QodeInteractive/" target="_blank" rel="noreferrer">
                        <span className="eltdf-social-icon-widget ion-social-facebook-outline"></span>
                      </a>
                      <a className="eltdf-social-icon-widget-holder eltdf-icon-has-hover" style={{fontSize: "18px", margin: "0 20px 0 0"}} href="https://www.instagram.com/qodeinteractive/" target="_blank" rel="noreferrer">
                        <span className="eltdf-social-icon-widget ion-social-instagram-outline"></span>
                      </a>
                      <a className="eltdf-social-icon-widget-holder eltdf-icon-has-hover" style={{fontSize: "18px", margin: "0 20px 0 0"}} href="https://twitter.com/QodeInteractive" target="_blank" rel="noreferrer">
                        <span className="eltdf-social-icon-widget ion-social-twitter-outline"></span>
                      </a>
                    </div>

                  </aside>
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

export default Shop;