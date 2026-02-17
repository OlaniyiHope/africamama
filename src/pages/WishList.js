import React, {useState, useEffect} from "react";
import "./style.css";
import Footer from "./Footer";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import backgroundImg from "./media/back.jpg";

const WishList = () => {
  // FIXED: Proper useState usage
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      name: "Banana Leaf",
      price: 100.00,
      quantity: 1,
      image: "https://papzi.wpbingosite.com/wp-content/uploads/2019/04/american-burgers-22-600x600.jpg",
      dateAdded: "July 20, 2022"
    },
    {
      id: 2,
      name: "Organic Vegetables",
      price: 45.50,
      quantity: 2,
      image: "https://papzi.wpbingosite.com/wp-content/uploads/2019/04/vegetables-600x600.jpg",
      dateAdded: "July 21, 2022"
    }
  ]);

  const { addToCart } = useCart();

  const removeFromWishlist = (id) => {
    setWishlistItems(wishlistItems.filter(item => item.id !== id));
  };

  const handleAddToCart = (item) => {
    addToCart(item, 1);
    alert(`${item.name} added to cart!`);
  };

  return (
    <>
      <Header />
      
      <div id="bwp-main" className="bwp-main">
        {/* Banner with background image - FIXED VERSION */}
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
        Wishlist
      </h1>
    </div>
    <div id="breadcrumb" className="breadcrumb">
      <div className="bwp-breadcrumb">
        <Link to="/" style={{ color: "white" }}>Home</Link> 
        <span style={{ color: "white", margin: "0 8px" }}>/</span> 
        <span style={{ color: "white" }}>Wishlist</span>
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
                    <article id="post-9" className="post-9 page type-page status-publish hentry">
                      <div className="entry-content clearfix">
                        <div className="woosw-list">
                          {wishlistItems.length === 0 ? (
                            <div className="woosw-popup-content-mid-message" style={{padding: "40px", textAlign: "center"}}>
                              <p>There are no products on the Wishlist!</p>
                              <Link to="/shop" className="button">Continue Shopping</Link>
                            </div>
                          ) : (
                            <>
                              <table className="woosw-items" data-key="WOOSW">
                                <tbody>
                                  {wishlistItems.map((item) => (
                                    <tr key={item.id} className="woosw-item" data-id={item.id}>
                                      <td className="woosw-item--image">
                                        <Link to={`/product/${item.id}`}>
                                          <img 
                                            loading="lazy" 
                                            decoding="async" 
                                            width="600" 
                                            height="600" 
                                            src={item.image} 
                                            className="attachment-woocommerce_thumbnail size-woocommerce_thumbnail" 
                                            alt={item.name} 
                                          />
                                        </Link>
                                      </td>
                                      <td className="woosw-item--info">
                                        <div className="woosw-item--name">
                                          <Link to={`/product/${item.id}`}>{item.name}</Link>
                                        </div>
                                        <div className="woosw-item--price">
                                          <span className="woocommerce-Price-amount amount">
                                            <span className="woocommerce-Price-currencySymbol">$</span>
                                            {item.price.toFixed(2)}
                                          </span>
                                        </div>
                                        <div className="woosw-item--time">{item.dateAdded}</div>
                                      </td>
                                      <td className="woosw-item--actions">
                                        <div className="woosw-item--stock"></div>
                                        <div className="woosw-item--atc">
                                          <p className="product woocommerce add_to_cart_inline">
                                            <button 
                                              className="button product_type_simple add_to_cart_button"
                                              onClick={() => handleAddToCart(item)}
                                            >
                                              Add to cart
                                            </button>
                                          </p>
                                        </div>
                                        <div className="woosw-item--remove" style={{marginTop: "10px"}}>
                                          <button 
                                            className="button"
                                            onClick={() => removeFromWishlist(item.id)}
                                            style={{backgroundColor: "#dc3545", color: "white"}}
                                          >
                                            Remove
                                          </button>
                                        </div>
                                      </td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>

                              <div className="woosw-actions" style={{marginTop: "30px"}}>
                                <div className="woosw-share">
                                  <span className="woosw-share-label">Share on:</span>
                                  <a 
                                    className="woosw-share-facebook" 
                                    href={`https://www.facebook.com/sharer.php?u=${window.location.href}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{margin: "0 10px", fontSize: "24px"}}
                                  >
                                    📘
                                  </a>
                                  <a 
                                    className="woosw-share-twitter" 
                                    href={`https://twitter.com/share?url=${window.location.href}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{margin: "0 10px", fontSize: "24px"}}
                                  >
                                    🐦
                                  </a>
                                  <a 
                                    className="woosw-share-pinterest" 
                                    href={`https://pinterest.com/pin/create/button/?url=${window.location.href}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{margin: "0 10px", fontSize: "24px"}}
                                  >
                                    📌
                                  </a>
                                </div>
                                
                                <div className="woosw-copy" style={{marginTop: "20px"}}>
                                  <span className="woosw-copy-label">Wishlist link:</span>
                                  <span className="woosw-copy-url">
                                    <input 
                                      id="woosw_copy_url" 
                                      type="text" 
                                      value={window.location.href}
                                      readOnly
                                      style={{padding: "8px", width: "300px", marginRight: "10px"}}
                                    />
                                  </span>
                                  <span className="woosw-copy-btn">
                                    <button 
                                      id="woosw_copy_btn" 
                                      type="button" 
                                      className="button"
                                      onClick={() => {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert("Wishlist link copied!");
                                      }}
                                    >
                                      Copy
                                    </button>
                                  </span>
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
    </>
  );
};

export default WishList;