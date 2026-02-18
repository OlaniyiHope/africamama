import React, {useState, useEffect} from "react";
import white from "./home.png";
import young from "./a1.jpeg";
import old from "./a3.jpg";
import step from "./newsprint.png";
import oil from "./safe.png";
import hiab from "./ran.png";
import "./style.css";
import Footer from "./Footer";
import Banner from "./Banner";
import Header from "./Header";
import axios from "axios"
import { useParams, useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header2 from "./Header2";
import Header3 from "./Header3";
import backgroundImg from "./media/back.jpg";

const Cart = () => {
  // const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  // In your CartContext.js or wherever you manage cart state
const [cartItems, setCartItems,  removeFromCart, updateQuantity, clearCart] = useState([
  {
    id: 1,
    name: "Banana Leaf",
    price: 100.00,
    quantity: 1,
    image: "https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-22-600x600.jpg"
  },
  {
    id: 2,
    name: "Organic Vegetables",
    price: 45.50,
    quantity: 2,
    image: "https://papzi.wpbingosite.com/wp-content/uploads/2019/04/vegetables-600x600.jpg"
  }
]);
  const navigate = useNavigate();

  // Default shipping rate options
  const [shipping, setShipping] = useState(15);
  const [couponCode, setCouponCode] = useState("");

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal;

  // Handle quantity change
  const handleQuantityChange = (itemId, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(itemId, newQuantity);
  };

  return (
    <body className="wp-singular page-template-default page page-id-17 wp-theme-papzi theme-papzi woocommerce-cart woocommerce-page woocommerce-no-js cart banners-effect-6 elementor-default elementor-kit-9482">
      <Header />
      
      <div id="bwp-main" className="bwp-main">
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
    <div className="content-title-heading">
      <h1 className="text-title-heading" style={{ color: "white", fontSize: "48px", fontWeight: "700", margin: "0 0 15px 0" }}>
Cart
      </h1>
    </div>
    <div id="breadcrumb" className="breadcrumb">
      <div className="bwp-breadcrumb">
        <Link to="/" style={{ color: "white" }}>Home</Link> 
        <span style={{ color: "white", margin: "0 8px" }}>/</span> 
        <span style={{ color: "white" }}>Cart</span>
      </div>
    </div>			
  </div>
</div>

        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">    
              <div id="main-content" className="main-content">
                <div id="primary" className="content-area">
                  <div id="content" className="site-content" role="main">
                    <article id="post-17" className="post-17 page type-page status-publish hentry">
                      <div className="entry-content clearfix">
                        <div className="woocommerce">
                          <div className="woocommerce-notices-wrapper"></div>
                          
                          {/* Show empty cart message if no items */}
                          {cartItems.length === 0 ? (
                            <>
                              <div className="wc-empty-cart-message">
                                <div className="cart-empty woocommerce-info">
                                  Your cart is currently empty.
                                </div>
                              </div>
                              <p className="return-to-shop">
                                <Link className="button wc-backward" to="/shop">
                                  Return to shop
                                </Link>
                              </p>
                            </>
                          ) : (
                            <>
                              {/* Page header with navigation */}
                              <div className="woocommerce-page-header">
                                <ul>
                                  <li className="shopping-cart-link line-hover active">
                                    <Link to="/cart">
                                      Shopping Cart<span className="cart-count">({cartItems.length})</span>
                                    </Link>
                                  </li>
                                  <li className="checkout-link line-hover">
                                    <Link to="/checkout">Checkout</Link>
                                  </li>
                                  <li className="order-tracking-link">
                                    <Link to="/order-tracking">Order Tracking</Link>
                                  </li>
                                </ul>
                              </div>

                              <div className="woocommerce-cart-page row">
                                {/* Cart items table */}
                                <div className="col-xl-8 col-lg-12 col-md-12 col-12">
                                  <form className="woocommerce-cart-form" onSubmit={(e) => e.preventDefault()}>
                                    <table className="shop_table shop_table_responsive cart woocommerce-cart-form__contents" cellSpacing="0">
                                      <thead>
                                        <tr>
                                          <th className="product-thumbnail">Product</th>
                                          <th className="product-price">Price</th>
                                          <th className="product-quantity">Quantity</th>
                                          <th className="product-subtotal">Subtotal</th>
                                          <th className="product-remove">&nbsp;</th>
                                        </tr>
                                      </thead>
                                      <tbody>
                                        {cartItems.map((item) => (
                                          <tr key={item.id} className="woocommerce-cart-form__cart-item cart_item">
                                            <td className="product-thumbnail">
                                              <Link to={`/product/${item.id}`}>
                                                <img 
                                                  loading="lazy" 
                                                  decoding="async" 
                                                  width="600" 
                                                  height="600" 
                                                  src={item.image || "https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-22-600x600.jpg"} 
                                                  className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" 
                                                  alt={item.name}
                                                />
                                              </Link>
                                              <div className="product-name">
                                                <Link to={`/product/${item.id}`}>{item.name}</Link>
                                              </div>
                                            </td>

                                            <td className="product-price" data-title="Price">
                                              <span className="woocommerce-Price-amount amount">
                                                <bdi><span className="woocommerce-Price-currencySymbol">$</span>{item.price.toFixed(2)}</bdi>
                                              </span>
                                            </td>

                                            <td className="product-quantity" data-title="Quantity">
                                              <div className="quantity">
                                                <button 
                                                  type="button" 
                                                  className="plus"
                                                  onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                >
                                                  +
                                                </button>
                                                <input 
                                                  type="number" 
                                                  className="input-text qty text" 
                                                  value={item.quantity} 
                                                  onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value) || 1)}
                                                  min="1"
                                                  step="1"
                                                />
                                                <button 
                                                  type="button" 
                                                  className="minus"
                                                  onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                                >
                                                  -
                                                </button>
                                              </div>
                                            </td>

                                            <td className="product-subtotal" data-title="Subtotal">
                                              <span className="woocommerce-Price-amount amount">
                                                <bdi><span className="woocommerce-Price-currencySymbol">$</span>{(item.price * item.quantity).toFixed(2)}</bdi>
                                              </span>
                                            </td>

                                            <td className="product-remove">
                                              <a 
                                                href="#" 
                                                className="remove" 
                                                aria-label="Remove this item"
                                                onClick={(e) => {
                                                  e.preventDefault();
                                                  removeFromCart(item.id);
                                                }}
                                              >
                                                ×
                                              </a>
                                            </td>
                                          </tr>
                                        ))}

                                        <tr>
                                          <td colSpan="6" className="actions">
                                            <div className="bottom-cart">
                                              <div className="coupon">
                                                <input 
                                                  type="text" 
                                                  name="coupon_code" 
                                                  className="input-text" 
                                                  value={couponCode}
                                                  onChange={(e) => setCouponCode(e.target.value)}
                                                  placeholder="Coupon code"
                                                />
                                                <button type="button" className="button" name="apply_coupon">
                                                  Apply coupon
                                                </button>
                                              </div>
                                              <h2><Link to="/shop">Continue Shopping</Link></h2>
                                              <button type="button" className="button" name="update_cart">
                                                Update cart
                                              </button>
                                            </div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </table>
                                  </form>
                                </div>

                                {/* Cart totals sidebar */}
                                <div className="col-xl-4 col-lg-12 col-md-12 col-12">
                                  <div className="cart-collaterals">
                                    <div className="cart_totals">
                                      <h2>Cart totals</h2>

                                      <div cellSpacing="0" className="shop_table shop_table_responsive">
                                        <div className="cart-subtotal">
                                          <div className="title">Subtotal</div>
                                          <div data-title="Subtotal">
                                            <span className="woocommerce-Price-amount amount">
                                              <bdi><span className="woocommerce-Price-currencySymbol">$</span>{subtotal.toFixed(2)}</bdi>
                                            </span>
                                          </div>
                                        </div>

                                        <div className="woocommerce-shipping-totals shipping">
                                          <h2>Shipping</h2>
                                          <div data-title="Shipping">
                                            <ul id="shipping_method" className="woocommerce-shipping-methods">
                                              <li>
                                                <input 
                                                  type="hidden" 
                                                  name="shipping_method[0]" 
                                                  value="flat_rate:2" 
                                                  className="shipping_method"
                                                />
                                                <label>Flat rate</label>
                                              </li>
                                            </ul>
                                            <p className="woocommerce-shipping-destination">
                                              Shipping to <strong>Nigeria</strong>.
                                            </p>
                                          </div>
                                        </div>

                                        <div className="order-total">
                                          <div className="title">Total</div>
                                          <div data-title="Total">
                                            <strong>
                                              <span className="woocommerce-Price-amount amount">
                                                <bdi><span className="woocommerce-Price-currencySymbol">$</span>{total.toFixed(2)}</bdi>
                                              </span>
                                            </strong>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="wc-proceed-to-checkout">
                                        <Link to="/checkout" className="checkout-button button alt wc-forward">
                                          Proceed to checkout
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>   
          </div>
        </div>
      </div>

      <Footer />
    </body>
  );
};

export default Cart;