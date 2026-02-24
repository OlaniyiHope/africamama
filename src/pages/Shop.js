
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import "./style.css";
import Header from "./Header";
import Footer from "./Footer";

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");

  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState("date");
const [fetchTrigger, setFetchTrigger] = useState(0);
const tagFilter = searchParams.get("tag");  // ← add this

  // Fetch categories for sidebar
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/db/categories`)
      .then((res) => {
        const topLevel = res.data.filter((cat) => !cat.parent);
        setCategories(topLevel);
      })
      .catch((err) => console.error("Failed to fetch categories:", err));
  }, []);

  // Fetch products — re-runs when category filter or sort changes
// useEffect(() => {
//   setLoading(true);
//   const base = process.env.REACT_APP_API_URL;

//   const url = categoryFilter
//     ? `${base}/api/db/products/category/${categoryFilter}`
//     : `${base}/api/db/products`;

//   axios
//     .get(url)
//     .then((res) => {
//       setProducts(Array.isArray(res.data) ? res.data : res.data.products || []);
//       setLoading(false);
//     })
//     .catch((err) => {
//       console.error("Failed to fetch products:", err);
//       setLoading(false);
//     });
// }, [categoryFilter, sortBy, fetchTrigger]);
useEffect(() => {
  setLoading(true);
  const base = process.env.REACT_APP_API_URL;

  const url = tagFilter
    ? `${base}/api/db/products/tag/${tagFilter}`
    : categoryFilter
    ? `${base}/api/db/products/category/${categoryFilter}`
    : `${base}/api/db/products`;

  axios.get(url)
    .then((res) => {
      setProducts(Array.isArray(res.data) ? res.data : res.data.products || []);
      setLoading(false);
    })
    .catch((err) => {
      console.error("Failed to fetch products:", err);
      setLoading(false);
    });
}, [categoryFilter, tagFilter, sortBy, fetchTrigger]);
  const handleCategoryClick = (catId) => {
    if (catId === categoryFilter) {
      // clicking same category clears filter
        setFetchTrigger(t => t + 1);
      setSearchParams({});
    } else {
      setSearchParams({ category: catId });
    }
  };

  const getImage = (product) => {
    if (product.images && product.images.length > 0) return product.images[0];
    if (product.image) return product.image;
    return null;
  };

  const activeCategoryName = categories.find((c) => c._id === categoryFilter)?.name;

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

          {/* ── Page Title Bar ── */}
          <div
            className="eltdf-title-holder eltdf-standard-with-breadcrumbs-type eltdf-title-va-header-bottom"
            style={{ height: "189px", backgroundColor: "#0c1315" }}
          >
            <div className="eltdf-title-wrapper" style={{ height: "79px", paddingTop: "110px" }}>
              <div className="eltdf-title-inner">
                <div className="eltdf-grid">
                  <div className="eltdf-title-info">
                    {/* <h5 className="eltdf-page-title entry-title">
                      {activeCategoryName ? activeCategoryName : "Shop"}
                    </h5> */}
                    <h5 className="eltdf-page-title entry-title">
  {activeCategoryName || (tagFilter ? `${tagFilter} meals` : "Shop")}
</h5>
                  </div>
                  <div className="eltdf-breadcrumbs-info">
                    <div itemProp="breadcrumb" className="eltdf-breadcrumbs">
                      <Link itemProp="url" to="/">Home</Link>
                      <span className="eltdf-delimiter">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-breadcrumb-arrow">
                          <polyline points="0.4 0.4 3.6 4.2 0.4 8.1" />
                          <polyline points="4.5 0.4 7.7 4.2 4.5 8.1" />
                        </svg>
                      </span>
                      {activeCategoryName && (
                        <>
                          <Link to="/shop">Shop</Link>
                          <span className="eltdf-delimiter">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-breadcrumb-arrow">
                              <polyline points="0.4 0.4 3.6 4.2 0.4 8.1" />
                              <polyline points="4.5 0.4 7.7 4.2 4.5 8.1" />
                            </svg>
                          </span>
                        </>
                      )}
                      <span className="eltdf-current">
                        {activeCategoryName || "Shop"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Main Content ── */}
          <div className="eltdf-container">
            <div className="eltdf-container-inner clearfix">
              <div className="eltdf-grid-row eltdf-grid-large-gutter">

                {/* ── Product Grid ── */}
                <div className="eltdf-page-content-holder eltdf-grid-col-9">

                  {/* Sort + Result count */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
                    <p className="woocommerce-result-count" style={{ margin: 0 }}>
                      {loading ? "Loading..." : `${products.length} product${products.length !== 1 ? "s" : ""} found`}
                    </p>
                    <select
                      className="orderby"
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      aria-label="Shop order"
                    >
                      <option value="date">Sort by latest</option>
                      <option value="price">Price: low to high</option>
                      <option value="price-desc">Price: high to low</option>
                      <option value="popularity">Sort by popularity</option>
                    </select>
                  </div>

                  {/* Active filter badge */}
                  {activeCategoryName && (
                    <div style={{ marginBottom: 16 }}>
                      <span style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        background: "#C9AB81", color: "#0c1315",
                        padding: "4px 12px", borderRadius: 20, fontSize: 13, fontWeight: 500,
                      }}>
                        {activeCategoryName}
                        <button
                          onClick={() => setSearchParams({})}
                          style={{ background: "none", border: "none", cursor: "pointer", color: "#0c1315", fontWeight: 700, fontSize: 15, lineHeight: 1, padding: 0 }}
                        >
                          ×
                        </button>
                      </span>
                    </div>
                  )}
{tagFilter && (
  <div style={{ marginBottom: 16 }}>
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      background: "#C9AB81", color: "#0c1315",
      padding: "4px 12px", borderRadius: 20, fontSize: 13, fontWeight: 500,
    }}>
      {tagFilter}
      <button
        onClick={() => setSearchParams({})}
        style={{ background: "none", border: "none", cursor: "pointer", color: "#0c1315", fontWeight: 700, fontSize: 15, lineHeight: 1, padding: 0 }}
      >
        ×
      </button>
    </span>
  </div>
)}
                  {/* Products */}
                  <div className="eltdf-pl-main-holder">
                    {loading ? (
                      <div style={{ textAlign: "center", padding: "60px 0", color: "#C9AB81", letterSpacing: "0.15em", fontFamily: "Josefin Sans, sans-serif" }}>
                        LOADING...
                      </div>
                    ) : products.length === 0 ? (
                      <div style={{ textAlign: "center", padding: "60px 0", color: "#888" }}>
                        <p style={{ fontSize: 18, marginBottom: 12 }}>No products found.</p>
                        {categoryFilter && (
                          <button
                            onClick={() => setSearchParams({})}
                            style={{ background: "#C9AB81", border: "none", padding: "8px 20px", cursor: "pointer", borderRadius: 4 }}
                          >
                            View all products
                          </button>
                        )}
                      </div>
                    ) : (
                      <ul className="products columns-3">
                        {products.map((product) => {
                          const img = getImage(product);
                          return (
                            <li key={product._id} className="product">
                              <div className="eltdf-pl-inner">
                                <div className="eltdf-pl-image">
                                  {img ? (
                                    <img
                                      src={img}
                                      alt={product.name}
                                      style={{ width: "100%", height: "300px", objectFit: "cover" }}
                                    />
                                  ) : (
                                    <div style={{
                                      width: "100%", height: "300px",
                                      background: "#1a2020",
                                      display: "flex", alignItems: "center", justifyContent: "center",
                                      color: "#C9AB81", fontSize: 13, letterSpacing: "0.1em",
                                    }}>
                                      NO IMAGE
                                    </div>
                                  )}
                                  <div className="eltdf-pl-text">
                                    <div className="eltdf-pl-text-outer">
                                      <div className="eltdf-pl-text-inner">
                                        <Link
                                          to={`/single/${product._id}`}
                                          className="button"
                                        >
                                          View Product
                                        </Link>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="eltdf-pl-text-wrapper">
                                <h6 className="eltdf-product-list-title">
                                  <Link to={`/single/${product._id}`}>{product.name}</Link>
                                </h6>
                                <span className="price">
                                  <span className="woocommerce-Price-amount amount">
                                    <bdi>
                                      <span className="woocommerce-Price-currencySymbol">₦</span>
                                      {Number(product.price).toLocaleString()}
                                    </bdi>
                                  </span>
                                </span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    )}
                  </div>
                </div>

                {/* ── Sidebar ── */}
                <div className="eltdf-sidebar-holder eltdf-grid-col-3">
                  <aside className="eltdf-sidebar">

                    {/* Category filter */}
                    <div className="widget woocommerce widget_product_categories">
                      <div className="eltdf-widget-title-holder">
                        <h6 className="eltdf-widget-title">Categories</h6>
                      </div>
                      <ul className="product-categories">
                        <li
                          className={`cat-item ${!categoryFilter ? "current-cat" : ""}`}
                          style={{ cursor: "pointer" }}
                        >
                          <span
                            onClick={() => setSearchParams({})}
                            style={{ color: !categoryFilter ? "#C9AB81" : "inherit", fontWeight: !categoryFilter ? 600 : 400 }}
                          >
                            All Products
                          </span>
                        </li>
                        {categories.map((cat) => (
                          <li
                            key={cat._id}
                            className={`cat-item ${categoryFilter === cat._id ? "current-cat" : ""}`}
                            style={{ cursor: "pointer" }}
                          >
                            <span
                              onClick={() => handleCategoryClick(cat._id)}
                              style={{
                                color: categoryFilter === cat._id ? "#C9AB81" : "inherit",
                                fontWeight: categoryFilter === cat._id ? 600 : 400,
                              }}
                            >
                              {cat.name}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Search */}
                    <div className="widget widget_search">
                      <div className="eltdf-widget-title-holder">
                        <h6 className="eltdf-widget-title">Search</h6>
                      </div>
                      <div className="input-holder clearfix">
                        <input
                          type="search"
                          className="search-field"
                          placeholder="Search products..."
                          // onChange={(e) => {
                          //   const val = e.target.value.trim();
                          //   if (val) {
                          //     setSearchParams({ search: val });
                          //   } else {
                          //     setSearchParams({});
                          //   }
                          // }}
                          onChange={(e) => {
  const val = e.target.value.trim();
  if (val) {
    // keep category if active, add search
    setSearchParams({ 
      ...(categoryFilter ? { category: categoryFilter } : {}),
      search: val 
    });
  } else {
    // only remove search, keep category
    setSearchParams(categoryFilter ? { category: categoryFilter } : {});
  }
}}
                        />
                      </div>
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
