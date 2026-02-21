import React, { useState, useEffect } from "react";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [couponCode, setCouponCode] = useState("");

  // Dummy fallback products
  const dummyCart = [
    {
      id: 1,
      name: "Seafood",
      price: 22.00,
      quantity: 1,
      sku: "035",
      image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/shop-img-6-600x600.jpg",
      link: "https://laurent.qodeinteractive.com/product/seafood/"
    },
    {
      id: 2,
      name: "Pimms jug",
      price: 22.00,
      quantity: 1,
      sku: "032",
      image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/home-8-img-shop-7-600x600.jpg",
      link: "https://laurent.qodeinteractive.com/product/pimms-jug-2/"
    }
  ];

  // Fetch cart from API, fallback to dummy data
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch("/api/cart"); // replace with your actual API endpoint
        if (!response.ok) throw new Error("API failed");
        const data = await response.json();
        setCartItems(data.length > 0 ? data : dummyCart);
      } catch (error) {
        console.log("API not available, using dummy data:", error);
        setCartItems(dummyCart);
      } finally {
        setLoading(false);
      }
    };
    fetchCart();
  }, []);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Handle quantity change
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 0) return;
    if (newQuantity === 0) {
      handleRemoveItem(itemId);
      return;
    }
    setCartItems(prev =>
      prev.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Handle remove item
  const handleRemoveItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  return (
    <div>
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

          {/* Page Title / Breadcrumb */}
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
                    <h5 className="eltdf-page-title entry-title">Cart</h5>
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
                      <span className="eltdf-current">Cart</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Container */}
          <div className="eltdf-container eltdf-default-page-template">
            <div className="eltdf-container-inner clearfix">
              <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
                <div className="eltdf-grid-line eltdf-grid-column-1"></div>
                <div className="eltdf-grid-line eltdf-grid-column-2"></div>
                <div className="eltdf-grid-line eltdf-grid-column-3"></div>
                <div className="eltdf-grid-line eltdf-grid-column-4"></div>
                <div className="eltdf-grid-line eltdf-grid-column-5"></div>
              </div>

              <div className="eltdf-grid-row">
                <div className="eltdf-page-content-holder eltdf-grid-col-12">
                  <div className="woocommerce">
                    <div className="woocommerce-notices-wrapper"></div>

                    {loading ? (
                      <p style={{padding: "40px", textAlign: "center"}}>Loading cart...</p>
                    ) : cartItems.length === 0 ? (
                      /* Empty Cart Message */
                      <>
                        <div className="wc-empty-cart-message">
                          <div className="cart-empty woocommerce-info">
                            Your cart is currently empty.
                          </div>
                        </div>
                        <p className="return-to-shop">
                          <a className="button wc-backward" href="../shop/index.html">Return to shop</a>
                        </p>
                      </>
                    ) : (
                      /* Cart With Products */
                      <>
                        <form className="woocommerce-cart-form" method="post">
                          <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellSpacing="0">
                            <thead>
                              <tr>
                                <th className="product-remove"><span className="screen-reader-text">Remove item</span></th>
                                <th className="product-thumbnail"><span className="screen-reader-text">Thumbnail image</span></th>
                                <th className="product-name">Product</th>
                                <th className="product-price">Price</th>
                                <th className="product-quantity">Quantity</th>
                                <th className="product-subtotal">Subtotal</th>
                              </tr>
                            </thead>
                            <tbody>
                              {cartItems.map((item) => (
                                <tr key={item.id} className="woocommerce-cart-form__cart-item cart_item">
                                  <td className="product-remove">
                                    <a
                                      href="#"
                                      className="remove"
                                      aria-label={`Remove ${item.name} from cart`}
                                      data-product_id={item.id}
                                      data-product_sku={item.sku}
                                      onClick={(e) => { e.preventDefault(); handleRemoveItem(item.id); }}
                                    >&times;</a>
                                  </td>
                                  <td className="product-thumbnail">
                                    <a href={item.link || "#"}>
                                      <img
                                        fetchPriority="high"
                                        decoding="async"
                                        width="600"
                                        height="600"
                                        src={item.image}
                                        className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail"
                                        alt={item.name}
                                      />
                                    </a>
                                  </td>
                                  <td className="product-name" data-title="Product">
                                    <a href={item.link || "#"}>{item.name}</a>
                                  </td>
                                  <td className="product-price" data-title="Price">
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>{item.price.toFixed(2)}</bdi>
                                    </span>
                                  </td>
                                  <td className="product-quantity" data-title="Quantity">
                                    <div className="eltdf-quantity-buttons quantity">
                                      <label className="screen-reader-text" htmlFor={`quantity_${item.id}`}>{item.name} quantity</label>
                                      <span
                                        className="eltdf-quantity-minus arrow_carrot-down"
                                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                        style={{cursor: "pointer"}}
                                      ></span>
                                      <input
                                        type="text"
                                        id={`quantity_${item.id}`}
                                        className="eltdf-quantity-input input-text qty text"
                                        data-step="1"
                                        data-min="0"
                                        data-max=""
                                        value={item.quantity}
                                        aria-label="Qty"
                                        size="4"
                                        placeholder=""
                                        inputMode="numeric"
                                        onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 0)}
                                      />
                                      <span
                                        className="eltdf-quantity-plus arrow_carrot-up"
                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                        style={{cursor: "pointer"}}
                                      ></span>
                                    </div>
                                  </td>
                                  <td className="product-subtotal" data-title="Subtotal">
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>{(item.price * item.quantity).toFixed(2)}</bdi>
                                    </span>
                                  </td>
                                </tr>
                              ))}

                              {/* Coupon + Update Row */}
                              <tr>
                                <td colSpan="6" className="actions">
                                  <div className="coupon">
                                    <label htmlFor="coupon_code" className="screen-reader-text">Coupon:</label>
                                    <input
                                      type="text"
                                      name="coupon_code"
                                      className="input-text"
                                      id="coupon_code"
                                      value={couponCode}
                                      placeholder="Coupon code"
                                      onChange={(e) => setCouponCode(e.target.value)}
                                    />
                                    <button type="submit" className="button eltdf-btn-outline" name="apply_coupon">
                                      <span className="eltdf-btn-before-line" style={{height: "48px", left: "45px"}}></span>
                                      Apply coupon
                                      <span className="eltdf-btn-after-line" style={{height: "48px", left: "154px"}}></span>
                                    </button>
                                  </div>
                                  <button type="submit" className="button eltdf-btn-outline" name="update_cart">
                                    <span className="eltdf-btn-before-line" style={{height: "48px", left: "45px"}}></span>
                                    Update cart
                                    <span className="eltdf-btn-after-line" style={{height: "48px", left: "139px"}}></span>
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </form>

                        {/* Cart Totals */}
                        <div className="cart-collaterals">
                          <div className="cart_totals">
                            <h2>Cart totals</h2>
                            <table cellSpacing="0" className="shop_table shop_table_responsive">
                              <tbody>
                                <tr className="cart-subtotal">
                                  <th>Subtotal</th>
                                  <td data-title="Subtotal">
                                    <span className="woocommerce-Price-amount amount">
                                      <bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>{subtotal.toFixed(2)}</bdi>
                                    </span>
                                  </td>
                                </tr>
                                <tr className="order-total">
                                  <th>Total</th>
                                  <td data-title="Total">
                                    <strong>
                                      <span className="woocommerce-Price-amount amount">
                                        <bdi><span className="woocommerce-Price-currencySymbol">&pound;</span>{subtotal.toFixed(2)}</bdi>
                                      </span>
                                    </strong>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                            <div className="wc-proceed-to-checkout">
                              <a href="/checkout" className="checkout-button button alt wc-forward eltdf-btn-outline">
                                <span className="eltdf-btn-before-line" style={{height: "48px", left: "45px"}}></span>
                                Proceed to checkout
                                <span className="eltdf-btn-after-line" style={{height: "48px", left: "228px"}}></span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Cart;