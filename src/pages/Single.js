import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";
import { useCart } from "../context/CartContext";
const Single = () => {
  const { tokens } = useTheme();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [litres, setLitres] = useState(1);
const [protein, setProtein] = useState("");
const { addToCart } = useCart();

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
        <div style={{
          height: "100vh",
          background: tokens.pageBg,
          display: "flex", alignItems: "center", justifyContent: "center",
          transition: "background 0.3s ease",
        }}>
          <p style={{ color: tokens.text, letterSpacing: "0.2em", fontFamily: "Josefin Sans, sans-serif" }}>
            LOADING...
          </p>
        </div>
        <Footer />
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Header />
        <div style={{
          height: "60vh",
          background: tokens.pageBg,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <p style={{ color: tokens.textMuted, fontSize: 18 }}>Product not found.</p>
        </div>
        <Footer />
      </>
    );
  }

  const images = product.images?.length > 0 ? product.images : [];
  const categoryName = product.category?.name || "";
  const categoryId = product.category?._id || product.category;

  return (
    <div
      className="product-template-default single single-product woocommerce woocommerce-page eltdf-woocommerce-page eltdf-woo-single-page"
      itemScope itemType="https://schema.org/WebPage"
      style={{ background: tokens.pageBg, transition: "background 0.3s ease" }}
    >
      <div className="eltdf-wrapper">
        <div className="eltdf-wrapper-inner">
          <div className="eltdf-double-grid-line-one" style={{ borderColor: tokens.borderFaint }} />
          <div className="eltdf-double-grid-line-two" style={{ borderColor: tokens.borderFaint }} />

          <Header />

          {/* Back to top */}
          <a id="eltdf-back-to-top" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="43.047px" height="43.031px"
              viewBox="0 0 43.047 43.031" xmlSpace="preserve">
              <circle fill="none" stroke={tokens.text} strokeMiterlimit="10" cx="21.523" cy="21.531" r="20.986" />
              <circle fill="none" stroke={tokens.text} className="eltdf-popout" strokeMiterlimit="10" cx="21.523" cy="21.531" r="16.049" />
              <polyline fill="none" stroke={tokens.text} strokeMiterlimit="10" points="15.205,23.875 21.523,18.573 27.842,23.875" />
            </svg>
          </a>

          <div className="eltdf-content">
            <div className="eltdf-content-inner">

              {/* ── Page Title / Breadcrumb ── */}
              <div
                className="eltdf-title-holder eltdf-standard-with-breadcrumbs-type eltdf-title-va-header-bottom"
                style={{ height: "189px", backgroundColor: tokens.pageBg, transition: "background 0.3s ease" }}
                data-height="189"
              >
                {/* Grid lines */}
                <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
                  {[1,2,3,4,5].map(n => (
                    <div key={n} className={`eltdf-grid-line eltdf-grid-column-${n}`}
                      style={{ borderColor: tokens.borderFaint }} />
                  ))}
                </div>

                <div className="eltdf-title-wrapper" style={{ height: "79px", paddingTop: "110px" }}>
                  <div className="eltdf-title-inner">
                    <div className="eltdf-grid">
                      <div className="eltdf-title-info">
                        <h5 className="eltdf-page-title entry-title" style={{ color: tokens.heading }}>
                          {product.name}
                        </h5>
                      </div>
                      <div className="eltdf-breadcrumbs-info">
                        <div itemProp="breadcrumb" className="eltdf-breadcrumbs">
                          <Link itemProp="url" to="/" style={{ color: tokens.text }}>Home</Link>
                          <span className="eltdf-delimiter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-breadcrumb-arrow" style={{ stroke: tokens.text }}>
                              <polyline points="0.4 0.4 3.6 4.2 0.4 8.1" />
                              <polyline points="4.5 0.4 7.7 4.2 4.5 8.1" />
                            </svg>
                          </span>
                          <Link itemProp="url" to="/shop" style={{ color: tokens.text }}>Shop</Link>
                          {categoryName && (
                            <>
                              <span className="eltdf-delimiter">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-breadcrumb-arrow" style={{ stroke: tokens.text }}>
                                  <polyline points="0.4 0.4 3.6 4.2 0.4 8.1" />
                                  <polyline points="4.5 0.4 7.7 4.2 4.5 8.1" />
                                </svg>
                              </span>
                              <Link to={`/shop?category=${categoryId}`} style={{ color: tokens.text }}>
                                {categoryName}
                              </Link>
                            </>
                          )}
                          <span className="eltdf-delimiter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-breadcrumb-arrow" style={{ stroke: tokens.text }}>
                              <polyline points="0.4 0.4 3.6 4.2 0.4 8.1" />
                              <polyline points="4.5 0.4 7.7 4.2 4.5 8.1" />
                            </svg>
                          </span>
                          <span className="eltdf-current" style={{ color: tokens.textMuted }}>
                            {product.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Main Container ── */}
              <div className="eltdf-container" style={{ background: tokens.pageBg }}>
                <div className="eltdf-container-inner clearfix">

                  {/* Grid lines */}
                  <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
                    {[1,2,3,4,5].map(n => (
                      <div key={n} className={`eltdf-grid-line eltdf-grid-column-${n}`}
                        style={{ borderColor: tokens.borderFaint }} />
                    ))}
                  </div>

                  {/* ── Product ── */}
                  <div
                    id={`product-${product._id}`}
                    className="product type-product status-publish instock has-post-thumbnail purchasable product-type-simple"
                  >
                    <div className="eltdf-single-product-content">

                      {/* ── Product Gallery ── */}
                      <div
                        className="woocommerce-product-gallery woocommerce-product-gallery--with-images woocommerce-product-gallery--columns-4 images"
                        data-columns="4"
                        style={{ opacity: 1, transition: "opacity .25s ease-in-out" }}
                      >
                        <div className="woocommerce-product-gallery__wrapper">
                          {images.length > 0 ? (
                            <>
                              {/* Main image */}
                              <div className="woocommerce-product-gallery__image">
                                <a href={images[selectedImage]}>
                                  <img
                                    src={images[selectedImage]}
                                    className="wp-post-image"
                                    alt={product.name}
                                    title={product.name}
                                    decoding="async"
                                    style={{ width: "100%", objectFit: "cover" }}
                                  />
                                </a>
                              </div>
                              {/* Thumbnails */}
                              {images.length > 1 && images.map((img, i) => (
                                <div
                                  key={i}
                                  data-thumb={img}
                                  className="woocommerce-product-gallery__image"
                                  onClick={() => setSelectedImage(i)}
                                  style={{ cursor: "pointer", display: "inline-block" }}
                                >
                                  <img
                                    decoding="async"
                                    loading="lazy"
                                    src={img}
                                    alt={`${product.name} ${i + 1}`}
                                    style={{
                                      width: 80, height: 80, objectFit: "cover",
                                      border: i === selectedImage
                                        ? `2px solid ${tokens.text}`
                                        : `2px solid ${tokens.border}`,
                                      opacity: i === selectedImage ? 1 : 0.65,
                                      transition: "all 0.2s ease",
                                      marginRight: 8, marginTop: 8,
                                    }}
                                  />
                                </div>
                              ))}
                            </>
                          ) : (
                            <div
                              className="woocommerce-product-gallery__image"
                              style={{
                                background: tokens.cardBg,
                                height: 400,
                                display: "flex", alignItems: "center", justifyContent: "center",
                                color: tokens.textMuted, letterSpacing: "0.1em",
                              }}
                            >
                              NO IMAGE
                            </div>
                          )}
                        </div>
                      </div>

                      {/* ── Product Summary ── */}
                      <div className="eltdf-single-product-summary">
                        <div className="summary entry-summary">

                          <h3
                            itemProp="name"
                            className="eltdf-single-product-title"
                            style={{ color: tokens.heading }}
                          >
                            {product.name}
                          </h3>

                          {/* Price */}
                          <p className="price">
                            <span
                              className="woocommerce-Price-amount amount"
                              style={{ color: tokens.text }}
                            >
                              <bdi>
                                <span className="woocommerce-Price-currencySymbol">₦</span>
                                {Number(product.price).toLocaleString()}
                              </bdi>
                            </span>
                          </p>

                          {/* Short description */}
                          <div className="woocommerce-product-details__short-description">
                            <p style={{ textAlign: "left", color: tokens.body }}>
                              {product.description || ""}
                            </p>
                          </div>

                          {/* ── Add to Cart ── */}
                          {/* <div className="cart">
                            <div className="eltdf-quantity-buttons quantity">
                              <label className="screen-reader-text" htmlFor={`quantity_${product._id}`}>
                                {product.name} quantity
                              </label>
                              <span
                                className="eltdf-quantity-minus arrow_carrot-down"
                                onClick={() => setQuantity((q) => Math.max(product.minimumQuantity || 1, q - 1))}
                                style={{ cursor: "pointer", color: tokens.text }}
                              />
                              <input
                                type="text"
                                id={`quantity_${product._id}`}
                                className="eltdf-quantity-input input-text qty text"
                                data-step="1"
                                data-min={product.minimumQuantity || 1}
                                data-max={product.quantityAvailable || ""}
                                name="quantity"
                                value={quantity}
                                onChange={(e) => setQuantity(Number(e.target.value) || 1)}
                                aria-label="Qty"
                                size="4"
                                inputMode="numeric"
                                style={{
                                  background: tokens.inputBg,
                                  color: tokens.inputText,
                                  border: `1px solid ${tokens.inputBorder}`,
                                  textAlign: "center",
                                  transition: "background 0.3s ease, color 0.3s ease",
                                }}
                              />
                              <span
                                className="eltdf-quantity-plus arrow_carrot-up"
                                onClick={() => setQuantity((q) => q + 1)}
                                style={{ cursor: "pointer", color: tokens.text }}
                              />
                            </div>
                            <button
                              type="button"
                              className="single_add_to_cart_button button alt"
                              style={{
                                background: tokens.text,
                                color: tokens.pageBg,
                                border: "none",
                                cursor: "pointer",
                                transition: "background 0.3s ease, color 0.3s ease",
                              }}
                              onClick={() => {
                                alert(`Added ${quantity} × ${product.name} to cart`);
                              }}
                            >
                              Add to cart
                            </button>
                          </div> */}
{/* ── Add to Cart ── */}
<div className="cart">
            {product.weight && (
                              <span className="sku_wrapper" style={{ color: tokens.textMuted }}>
                                Volume: <span className="sku" style={{ color: tokens.body, background: "transparent" }}>
  {product.weight} {product.unit} available
</span>
                              </span>
                            )}
  {/* Litres selector */}
  <div style={{ marginBottom: 16 }}>
    <label style={{ color: tokens.body, fontSize: 13, display: "block", marginBottom: 6 }}>
      How many litres would you like?
    </label>
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {[1, 2, 3, 4, 5].map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLitres(l)}
          style={{
            width: 44, height: 44,
            border: `1px solid ${litres === l ? tokens.text : tokens.border}`,
            background: litres === l ? tokens.text : "transparent",
            color: litres === l ? tokens.pageBg : tokens.text,
            cursor: "pointer",
            fontSize: 14,
            fontFamily: "inherit",
            transition: "all 0.2s ease",
          }}
        >
          {l}L
        </button>
      ))}
    </div>
  </div>

  {/* Protein selector — only for Rice Dishes */}
  {categoryName?.toLowerCase().includes("rice") && (
    <div style={{ marginBottom: 16 }}>
      <label style={{ color: tokens.body, fontSize: 13, display: "block", marginBottom: 6 }}>
        Choose your protein <span style={{ color: tokens.text }}>*</span>
      </label>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {["Turkey", "Goat Meat", "Chicken", "Fish", "Ponmo", "No Protein"].map((p) => (
          <button
            key={p}
            type="button"
            onClick={() => setProtein(p)}
            style={{
              padding: "8px 14px",
              border: `1px solid ${protein === p ? tokens.text : tokens.border}`,
              background: protein === p ? tokens.text : "transparent",
              color: protein === p ? tokens.pageBg : tokens.text,
              cursor: "pointer",
              fontSize: 12,
              fontFamily: "inherit",
              letterSpacing: "0.05em",
              transition: "all 0.2s ease",
            }}
          >
            {p}
          </button>
        ))}
      </div>
      {categoryName?.toLowerCase().includes("rice") && !protein && (
        <p style={{ color: "#e53935", fontSize: 12, marginTop: 6 }}>
          Please select a protein to continue.
        </p>
      )}
    </div>
  )}

  {/* Quantity buttons */}


  <button
    type="button"
    className="single_add_to_cart_button button alt"
    disabled={categoryName?.toLowerCase().includes("rice") && !protein}
    style={{
      background: (categoryName?.toLowerCase().includes("rice") && !protein)
        ? tokens.border
        : tokens.text,
      color: tokens.pageBg,
      border: "none",
      padding: "12px",
      cursor: (categoryName?.toLowerCase().includes("rice") && !protein)
        ? "not-allowed"
        : "pointer",
      transition: "background 0.3s ease, color 0.3s ease",
      opacity: (categoryName?.toLowerCase().includes("rice") && !protein) ? 0.5 : 1,
    }}
    // onClick={() => {
    //   if (categoryName?.toLowerCase().includes("rice") && !protein) return;
    //   const proteinNote = protein ? ` | Protein: ${protein}` : "";
    //   alert(`Added ${quantity} × ${product.name} — ${litres}L${proteinNote} to cart`);
    // }}
    onClick={() => {
  if (categoryName?.toLowerCase().includes("rice") && !protein) return;

  addToCart({
    _id: product._id,
    name: product.name,
    price: product.price,
    image: product.images?.[0] || "",
    // quantity: litres,
     quantity: Number(litres), 
    litres: litres,

    protein: protein || null,
  });
}}
  >
    Add to cart
  </button>
</div>
                          {/* ── Product Meta ── */}
                          <div className="product_meta" style={{ color: tokens.textMuted }}>
                
                            {categoryName && (
                              <span className="posted_in" style={{ color: tokens.textMuted }}>
                                Category:{" "}
                                <Link
                                  to={`/shop?category=${categoryId}`}
                                  rel="tag"
                                  style={{ color: tokens.text }}
                                >
                                  {categoryName}
                                </Link>
                              </span>
                            )}
                            {product.tag?.length > 0 && (
                              <span className="tagged_as" style={{ color: tokens.textMuted }}>
                                Tags:{" "}
                                {product.tag.map((t, i) => (
                                  <span key={i} style={{ color: tokens.body }}>
                                    {t}{i < product.tag.length - 1 ? ", " : ""}
                                  </span>
                                ))}
                              </span>
                            )}
                            {product.quantityAvailable !== undefined && (
                              <span style={{
                                display: "block", marginTop: 6, fontSize: 13,
                                color: product.quantityAvailable > 0 ? "#4caf50" : "#e53935",
                              }}>
                                {product.quantityAvailable > 0
                                  ? `In stock (${product.quantityAvailable} available)`
                                  : "Out of stock"}
                              </span>
                            )}
                          </div>

                          {/* ── Social Share ── */}
                          <div className="eltdf-woo-social-share-holder">
                            <div className="eltdf-social-share-holder eltdf-list">
                              <p className="eltdf-social-title" style={{ color: tokens.textMuted }}>Share:</p>
                              <ul>
                                <li className="eltdf-facebook-share">
                                  <a
                                    itemProp="url" className="eltdf-share-link" href="#"
                                    style={{ color: tokens.text }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      window.open(`https://www.facebook.com/sharer.php?u=${encodeURIComponent(window.location.href)}`, "sharer", "toolbar=0,status=0,width=620,height=280");
                                    }}
                                  >
                                    <span className="eltdf-social-network-icon ion-social-facebook-outline" />
                                  </a>
                                </li>
                                <li className="eltdf-twitter-share">
                                  <a
                                    itemProp="url" className="eltdf-share-link" href="#"
                                    style={{ color: tokens.text }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(product.name + " " + window.location.href)}`, "popupwindow", "scrollbars=yes,width=800,height=400");
                                    }}
                                  >
                                    <span className="eltdf-social-network-icon ion-social-twitter-outline" />
                                  </a>
                                </li>
                                <li className="eltdf-tumblr-share">
                                  <a
                                    itemProp="url" className="eltdf-share-link" href="#"
                                    style={{ color: tokens.text }}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      window.open(`https://www.tumblr.com/share/link?url=${encodeURIComponent(window.location.href)}&name=${encodeURIComponent(product.name)}`, "popupwindow", "scrollbars=yes,width=800,height=400");
                                    }}
                                  >
                                    <span className="eltdf-social-network-icon ion-social-tumblr-outline" />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>

                    {/* ── Product Tabs ── */}
                    <div
                      className="woocommerce-tabs wc-tabs-wrapper"
                      style={{
                        borderTop: `1px solid ${tokens.border}`,
                        transition: "border-color 0.3s ease",
                      }}
                    >
                      <ul className="tabs wc-tabs" role="tablist">
                        {[
                          { key: "description", label: "Description" },
                          { key: "additional", label: "Additional information" },
                          { key: "reviews", label: `Reviews (${product.reviews?.length || 0})` },
                        ].map((tab) => (
                          <li
                            key={tab.key}
                            className={`${tab.key}_tab ${activeTab === tab.key ? "active" : ""}`}
                            role="tab"
                            style={{
                              cursor: "pointer",
                              borderBottom: activeTab === tab.key
                                ? `2px solid ${tokens.text}`
                                : "2px solid transparent",
                              transition: "border-color 0.2s ease",
                            }}
                            onClick={() => setActiveTab(tab.key)}
                          >
                            <a
                              href={`#tab-${tab.key}`}
                              onClick={(e) => e.preventDefault()}
                              style={{
                                color: activeTab === tab.key ? tokens.text : tokens.textMuted,
                                transition: "color 0.2s ease",
                              }}
                            >
                              {tab.label}
                            </a>
                          </li>
                        ))}
                      </ul>

                      {/* ── Description Tab ── */}
                      {activeTab === "description" && (
                        <div
                          className="woocommerce-Tabs-panel woocommerce-Tabs-panel--description panel entry-content wc-tab"
                          id="tab-description" role="tabpanel"
                        >
                          <h2 style={{ color: tokens.heading }}>Description</h2>
                          <p style={{ color: tokens.body }}>
                            {product.description || "No description available."}
                          </p>
                          {product.ingredients?.length > 0 && (
                            <>
                              <h4 style={{ color: tokens.heading }}>Ingredients</h4>
                              <p style={{ color: tokens.body }}>{product.ingredients.join(", ")}</p>
                            </>
                          )}
                          {product.allergens?.length > 0 && (
                            <>
                              <h4 style={{ color: tokens.heading }}>Allergens</h4>
                              <p style={{ color: tokens.body }}>{product.allergens.join(", ")}</p>
                            </>
                          )}
                          {product.features?.length > 0 && (
                            <>
                              <h4 style={{ color: tokens.heading }}>Features</h4>
                              <ul style={{ color: tokens.body }}>
                                {product.features.map((f, i) => <li key={i}>{f}</li>)}
                              </ul>
                            </>
                          )}
                        </div>
                      )}

                      {/* ── Additional Info Tab ── */}
                      {activeTab === "additional" && (
                        <div
                          className="woocommerce-Tabs-panel woocommerce-Tabs-panel--additional_information panel entry-content wc-tab"
                          id="tab-additional_information" role="tabpanel"
                        >
                          <h2 style={{ color: tokens.heading }}>Additional information</h2>
                          <table
                            className="woocommerce-product-attributes shop_attributes"
                            style={{ borderColor: tokens.border, width: "100%", borderCollapse: "collapse" }}
                          >
                            <tbody>
                              {[
                                product.weight && { label: "Weight / Volume", value: `${product.weight} ${product.unit}` },
                                product.expiryInfo && product.expiryInfo !== "none" && { label: "Shelf Life", value: product.expiryInfo },
                                product.storageInfo && product.storageInfo !== "none" && { label: "Storage", value: product.storageInfo },
                                product.minimumQuantity && { label: "Minimum Order", value: product.minimumQuantity },
                              ].filter(Boolean).map((row, i) => (
                                <tr key={i} style={{ borderBottom: `1px solid ${tokens.border}` }}>
                                  <th
                                    className="woocommerce-product-attributes-item__label"
                                    style={{ color: tokens.textMuted, padding: "8px 12px", textAlign: "left", fontWeight: 400, width: "40%" }}
                                  >
                                    {row.label}
                                  </th>
                                  <td
                                    className="woocommerce-product-attributes-item__value"
                                    style={{ color: tokens.body, padding: "8px 12px" }}
                                  >
                                    {row.value}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}

                      {/* ── Reviews Tab ── */}
                      {activeTab === "reviews" && (
                        <div
                          className="woocommerce-Tabs-panel woocommerce-Tabs-panel--reviews panel entry-content wc-tab"
                          id="tab-reviews" role="tabpanel"
                        >
                          <div id="reviews" className="woocommerce-Reviews">

                            {/* Existing reviews */}
                            <div id="comments">
                              <h2 className="woocommerce-Reviews-title" style={{ color: tokens.heading }}>Reviews</h2>
                              {!product.reviews?.length ? (
                                <p className="woocommerce-noreviews" style={{ color: tokens.textMuted }}>
                                  There are no reviews yet.
                                </p>
                              ) : (
                                product.reviews.map((review, i) => (
                                  <div
                                    key={i}
                                    style={{
                                      borderBottom: `1px solid ${tokens.border}`,
                                      paddingBottom: 12, marginBottom: 12,
                                    }}
                                  >
                                    <strong style={{ color: tokens.heading }}>{review.name}</strong>
                                    <span style={{ color: tokens.text }}> — ⭐ {review.rating}/5</span>
                                    <p style={{ color: tokens.body }}>{review.comment}</p>
                                  </div>
                                ))
                              )}
                            </div>

                            {/* Review form */}
                            <div id="review_form_wrapper">
                              <div id="review_form">
                                <div id="respond" className="comment-respond">
                                  <span
                                    id="reply-title"
                                    className="comment-reply-title"
                                    style={{ color: tokens.heading }}
                                  >
                                    Be the first to review &ldquo;{product.name}&rdquo;
                                  </span>
                                  <div className="comment-form">
                                    <p className="comment-notes" style={{ color: tokens.textMuted }}>
                                      <span id="email-notes">Your email address will not be published.</span>{" "}
                                      <span className="required-field-message">
                                        Required fields are marked <span className="required" style={{ color: tokens.text }}>*</span>
                                      </span>
                                    </p>

                                    {/* Rating */}
                                    <div className="comment-form-rating">
                                      <label htmlFor="rating" style={{ color: tokens.body }}>
                                        Your rating&nbsp;<span className="required" style={{ color: tokens.text }}>*</span>
                                      </label>
                                      <select
                                        name="rating" id="rating"
                                        style={{
                                          background: tokens.inputBg,
                                          color: tokens.inputText,
                                          border: `1px solid ${tokens.inputBorder}`,
                                          padding: "6px 10px",
                                          transition: "background 0.3s ease",
                                        }}
                                      >
                                        <option value="">Rate&hellip;</option>
                                        <option value="5">Perfect</option>
                                        <option value="4">Good</option>
                                        <option value="3">Average</option>
                                        <option value="2">Not that bad</option>
                                        <option value="1">Very poor</option>
                                      </select>
                                    </div>

                                    {/* Review textarea */}
                                    <p className="comment-form-comment">
                                      <label htmlFor="comment" style={{ color: tokens.body }}>
                                        Your review&nbsp;<span className="required" style={{ color: tokens.text }}>*</span>
                                      </label>
                                      <textarea
                                        id="comment" name="comment" cols="45" rows="8"
                                        style={{
                                          background: tokens.inputBg,
                                          color: tokens.inputText,
                                          border: `1px solid ${tokens.inputBorder}`,
                                          width: "100%", padding: "10px",
                                          transition: "background 0.3s ease, color 0.3s ease",
                                        }}
                                      />
                                    </p>

                                    {/* Name */}
                                    <p className="comment-form-author">
                                      <label htmlFor="author" style={{ color: tokens.body }}>
                                        Name&nbsp;<span className="required" style={{ color: tokens.text }}>*</span>
                                      </label>
                                      <input
                                        id="author" name="author" type="text" defaultValue="" size="30"
                                        style={{
                                          background: tokens.inputBg,
                                          color: tokens.inputText,
                                          border: `1px solid ${tokens.inputBorder}`,
                                          padding: "8px 10px", width: "100%",
                                          transition: "background 0.3s ease",
                                        }}
                                      />
                                    </p>

                                    {/* Email */}
                                    <p className="comment-form-email">
                                      <label htmlFor="email" style={{ color: tokens.body }}>
                                        Email&nbsp;<span className="required" style={{ color: tokens.text }}>*</span>
                                      </label>
                                      <input
                                        id="email" name="email" type="email" defaultValue="" size="30"
                                        style={{
                                          background: tokens.inputBg,
                                          color: tokens.inputText,
                                          border: `1px solid ${tokens.inputBorder}`,
                                          padding: "8px 10px", width: "100%",
                                          transition: "background 0.3s ease",
                                        }}
                                      />
                                    </p>

                                    {/* Cookie consent */}
                                    <p className="comment-form-cookies-consent">
                                      <input
                                        id="wp-comment-cookies-consent"
                                        name="wp-comment-cookies-consent"
                                        type="checkbox"
                                        defaultValue="yes"
                                        style={{ accentColor: tokens.text }}
                                      />
                                      <label
                                        htmlFor="wp-comment-cookies-consent"
                                        style={{ color: tokens.textMuted, marginLeft: 8 }}
                                      >
                                        Save my name, email, and website in this browser for the next time I comment.
                                      </label>
                                    </p>

                                    {/* Submit */}
                                    <p className="form-submit">
                                      <input
                                        name="submit" type="submit" id="submit"
                                        className="submit"
                                        defaultValue="Submit"
                                        style={{
                                          background: tokens.text,
                                          color: tokens.pageBg,
                                          border: "none",
                                          padding: "10px 28px",
                                          cursor: "pointer",
                                          letterSpacing: "0.1em",
                                          fontSize: 12,
                                          transition: "background 0.3s ease, color 0.3s ease",
                                        }}
                                      />
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="clear" />
                          </div>
                        </div>
                      )}

                    </div>
                    {/* end tabs */}

                  </div>
                  {/* end product */}

                </div>
              </div>

            </div>
          </div>

          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Single;
