import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "../context/ThemeContext";

const portfolioItems = [
  {
    id: "post-1553",
    title: "Coffee Cocktail",
    category: "Recipes",
    categorySlug: "recipes",
    image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/port-list-img-4.jpg",
    slug: "coffee-cocktail",
  },
  {
    id: "post-599",
    title: "Shrimp Pasta",
    category: "Main Courses",
    categorySlug: "main-courses",
    image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Restaurant-home-img-1.jpg",
    slug: "shrimp-pasta",
  },
  {
    id: "post-613",
    title: "Beef Steak",
    category: "Recipes",
    categorySlug: "recipes",
    image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Restaurant-home-img-2.jpg",
    slug: "beef-steak",
  },
  {
    id: "post-614",
    title: "Punch Party",
    category: "Recipes",
    categorySlug: "recipes",
    image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Restaurant-home-img-3.jpg",
    slug: "punch-party",
  },
  {
    id: "post-618",
    title: "Chicken File",
    category: "Main Courses",
    categorySlug: "main-courses",
    image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Restaurant-home-img-4.jpg",
    slug: "chicken-file",
  },
  {
    id: "post-1119",
    title: "Italian Pasta",
    category: "Recipes",
    categorySlug: "recipes",
    image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/Restaurant-home-img-5.jpg",
    slug: "italian-pasta-2",
  },
  {
    id: "post-1120",
    title: "New Recipes",
    category: "Main Courses",
    categorySlug: "main-courses",
    image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/Restaurant-home-img-6.jpg",
    slug: "new-recipes",
  },
  {
    id: "post-1121",
    title: "Refreshing Drink",
    category: "Food",
    categorySlug: "food",
    image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/Restaurant-home-img-7.jpg",
    slug: "refreshing-drink",
  },
  {
    id: "post-1122",
    title: "Cherry Desserts",
    category: "Desserts",
    categorySlug: "desserts",
    image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/Restaurant-home-img-8.jpg",
    slug: "cherry-desserts",
  },
];

// ── Sub-components receive tokens as prop so they stay pure ──────────────────

const BreadcrumbArrow = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 8.3 8.5"
    className="eltdf-breadcrumb-arrow"
    style={{ stroke: color }}
  >
    <polyline points="0.4 0.4 3.6 4.2 0.4 8.1" />
    <polyline points="4.5 0.4 7.7 4.2 4.5 8.1" />
  </svg>
);

const BackToTop = ({ tokens }) => (
  <a id="eltdf-back-to-top" href="#">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px" y="0px"
      width="43.047px" height="43.031px"
      viewBox="0 0 43.047 43.031"
    >
      <circle fill="none" stroke={tokens.text} strokeMiterlimit="10" cx="21.523" cy="21.531" r="20.986" />
      <circle fill="none" stroke={tokens.text} className="eltdf-popout" strokeMiterlimit="10" cx="21.523" cy="21.531" r="16.049" />
      <polyline fill="none" stroke={tokens.text} strokeMiterlimit="10" points="15.205,23.875 21.523,18.573 27.842,23.875" />
    </svg>
  </a>
);

const PortfolioCard = ({ item, tokens }) => (
  <article className={`eltdf-pl-item eltdf-item-space ${item.id}`}>
    <div className="eltdf-pl-item-inner">

      {/* Image */}
      <div className="eltdf-pli-image">
        <img
          loading="lazy"
          decoding="async"
          width="800"
          height="1078"
          src={item.image}
          className="attachment-full size-full wp-post-image"
          alt={item.title}
        />
      </div>

      {/* Hover text overlay */}
      <div className="eltdf-pli-text-holder">
        <div className="eltdf-pli-text-wrapper">
          <div className="eltdf-pli-text">
            <h5
              itemProp="name"
              className="eltdf-pli-title entry-title"
              style={{ color: tokens.heading }}
            >
              {item.title}
            </h5>
            <div className="eltdf-pli-category-holder">
              <a
                itemProp="url"
                className="eltdf-pli-category"
                href={`../portfolio-category/${item.categorySlug}/index.html`}
                style={{ color: tokens.text }}
              >
                {item.category}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Full-card link */}
      <a
        itemProp="url"
        className="eltdf-pli-link eltdf-block-drag-link"
        href={`../portfolio-item/${item.slug}/index.html`}
        target="_self"
      />
    </div>
  </article>
);

// ── Main component ───────────────────────────────────────────────────────────

const Event = () => {
  const { tokens } = useTheme();
const [showBooking, setShowBooking] = React.useState(false);
const [formData, setFormData] = React.useState({
  name: "", email: "", phone: "",
  eventType: "", guests: "", date: "", location: "", notes: ""
});
const [status, setStatus] = React.useState("idle"); // idle | loading | success | error

const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

const handleSubmit = async (e) => {
  e.preventDefault();
  setStatus("loading");
  try {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/api/bookings`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});
    if (!res.ok) throw new Error();
    setStatus("success");
  } catch {
    setStatus("error");
  }
};
  return (
    <>
      <Header />

      <BackToTop tokens={tokens} />

      <div
        className="eltdf-content"
        style={{ background: tokens.pageBg, transition: "background 0.3s ease" }}
      >
        <div className="eltdf-content-inner">

          {/* ── Page Title / Breadcrumb ── */}
          <div
            className="eltdf-title-holder eltdf-standard-with-breadcrumbs-type eltdf-title-va-header-bottom"
            style={{
              height: "189px",
              backgroundColor: tokens.pageBg,
              transition: "background 0.3s ease",
            }}
            data-height="189"
          >
            {/* Grid lines */}
            <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
              {[1, 2, 3, 4, 5].map((n) => (
                <div
                  key={n}
                  className={`eltdf-grid-line eltdf-grid-column-${n}`}
                  style={{ borderColor: tokens.borderFaint }}
                />
              ))}
            </div>

            <div className="eltdf-title-wrapper" style={{ height: "79px", paddingTop: "110px" }}>
              <div className="eltdf-title-inner">
                <div className="eltdf-grid">

                  <div className="eltdf-title-info">
                    <h5
                      className="eltdf-page-title entry-title"
                      style={{ color: tokens.heading }}
                    >
                      Some of our recent events
                    </h5>
                  </div>

                  <div className="eltdf-breadcrumbs-info">
                    <div itemProp="breadcrumb" className="eltdf-breadcrumbs">
                      <a
                        itemProp="url"
                        href="../index.html"
                        style={{ color: tokens.text }}
                      >
                        Home
                      </a>
                      <span className="eltdf-delimiter">
                        <BreadcrumbArrow color={tokens.text} />
                      </span>
                      <span
                        className="eltdf-current"
                        style={{ color: tokens.textMuted }}
                      >
                        Events
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

       {/* ── Description strip ── */}
          <div style={{
            backgroundColor: tokens.pageBg,
            padding: "40px 60px",
            textAlign: "center",
            transition: "background 0.3s ease",
          }}>
            <p style={{
              color: tokens.body,
              fontSize: "15px",
              lineHeight: "1.8",
              maxWidth: "800px",
              margin: "0 auto",
              fontWeight: 300,
              letterSpacing: "0.03em",
              transition: "color 0.3s ease",
            }}>
              We have successfully catered at weddings, corporate functions, parties and small
              gatherings for over 20 years. To give you a glimpse of what we do, we have picked
              out a selection of images that showcase some of our most recent events! For more
              information, please contact us at{" "}
              <strong style={{ color: tokens.text }}>+44 7876 896986</strong> or fill in our form.
            </p>

            {/* ── Book a Catering Event button ── */}
            <button
              onClick={() => setShowBooking(true)}
              style={{
                marginTop: "28px",
                padding: "14px 40px",
                background: "transparent",
                border: `1px solid ${tokens.text}`,
                color: tokens.text,
                fontSize: "12px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "background 0.25s ease, color 0.25s ease",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = tokens.text;
                e.currentTarget.style.color = tokens.pageBg;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = tokens.text;
              }}
            >
              Book a Catering Event
            </button>
          </div>

          {/* ── Booking Modal ── */}
          {showBooking && (
            <div
              onClick={() => setShowBooking(false)}
              style={{
                position: "fixed", inset: 0, zIndex: 9999,
                background: "rgba(0,0,0,0.65)",
                display: "flex", alignItems: "center", justifyContent: "center",
                padding: "20px",
              }}
            >
              <div
                onClick={e => e.stopPropagation()}
                style={{
                  background: tokens.cardBgAlt || "#fff",
                  width: "100%", maxWidth: "580px",
                  maxHeight: "90vh", overflowY: "auto",
                  padding: "48px 40px",
                  position: "relative",
                }}
              >
                {/* Close */}
                <button
                  onClick={() => setShowBooking(false)}
                  style={{
                    position: "absolute", top: "16px", right: "20px",
                    background: "none", border: "none",
                    fontSize: "22px", cursor: "pointer", color: tokens.text,
                  }}
                >✕</button>

                <p style={{ color: tokens.tagline, fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "6px" }}>
                  Catering Enquiry
                </p>
                <h2 style={{ color: tokens.heading, fontSize: "26px", fontWeight: 400, marginBottom: "32px" }}>
                  Book Your Event
                </h2>

                {status === "success" ? (
                  <div style={{ textAlign: "center", padding: "40px 0" }}>
                    <p style={{ fontSize: "20px", color: tokens.heading, marginBottom: "10px" }}>Thank you!</p>
                    <p style={{ color: tokens.body, lineHeight: 1.7 }}>
                      Your booking request has been received. We'll be in touch shortly to confirm your event details.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {[
                      { label: "Full Name *", name: "name", type: "text", required: true },
                      { label: "Email Address *", name: "email", type: "email", required: true },
                      { label: "Phone Number *", name: "phone", type: "tel", required: true },
                    ].map(f => (
                      <div key={f.name} style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: tokens.textMuted, marginBottom: "6px" }}>
                          {f.label}
                        </label>
                        <input
                          type={f.type}
                          name={f.name}
                          required={f.required}
                          value={formData[f.name]}
                          onChange={handleChange}
                          style={{
                            width: "100%", padding: "10px 0",
                            background: "transparent",
                            border: "none", borderBottom: `1px solid ${tokens.inputBorder}`,
                            color: tokens.inputText, fontSize: "14px", outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                    ))}

                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ display: "block", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: tokens.textMuted, marginBottom: "6px" }}>
                        Event Type *
                      </label>
                      <select
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleChange}
                        style={{
                          width: "100%", padding: "10px 0",
                          background: "transparent",
                          border: "none", borderBottom: `1px solid ${tokens.inputBorder}`,
                          color: tokens.inputText, fontSize: "14px", outline: "none",
                          appearance: "none",
                        }}
                      >
                        <option value="">Select event type</option>
                        {["Wedding", "Corporate Function", "Birthday Party", "Private Dinner", "Funeral Reception", "Other"].map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                      <div>
                        <label style={{ display: "block", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: tokens.textMuted, marginBottom: "6px" }}>
                          Number of Guests *
                        </label>
                        <input
                          type="number"
                          name="guests"
                          required
                          min="1"
                          placeholder="e.g. 1000"
                          value={formData.guests}
                          onChange={handleChange}
                          style={{
                            width: "100%", padding: "10px 0",
                            background: "transparent",
                            border: "none", borderBottom: `1px solid ${tokens.inputBorder}`,
                            color: tokens.inputText, fontSize: "14px", outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                      <div>
                        <label style={{ display: "block", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: tokens.textMuted, marginBottom: "6px" }}>
                          Event Date *
                        </label>
                        <input
                          type="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          style={{
                            width: "100%", padding: "10px 0",
                            background: "transparent",
                            border: "none", borderBottom: `1px solid ${tokens.inputBorder}`,
                            color: tokens.inputText, fontSize: "14px", outline: "none",
                            boxSizing: "border-box",
                          }}
                        />
                      </div>
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                      <label style={{ display: "block", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: tokens.textMuted, marginBottom: "6px" }}>
                        Event Location / Venue
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Address or venue name"
                        style={{
                          width: "100%", padding: "10px 0",
                          background: "transparent",
                          border: "none", borderBottom: `1px solid ${tokens.inputBorder}`,
                          color: tokens.inputText, fontSize: "14px", outline: "none",
                          boxSizing: "border-box",
                        }}
                      />
                    </div>

                    <div style={{ marginBottom: "32px" }}>
                      <label style={{ display: "block", fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: tokens.textMuted, marginBottom: "6px" }}>
                        Additional Notes
                      </label>
                      <textarea
                        name="notes"
                        rows={3}
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Dietary requirements, special requests..."
                        style={{
                          width: "100%", padding: "10px 0",
                          background: "transparent",
                          border: "none", borderBottom: `1px solid ${tokens.inputBorder}`,
                          color: tokens.inputText, fontSize: "14px", outline: "none",
                          resize: "none", boxSizing: "border-box",
                        }}
                      />
                    </div>

                    {status === "error" && (
                      <p style={{ color: "crimson", fontSize: "13px", marginBottom: "16px" }}>
                        Something went wrong. Please try again or call us directly.
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "loading"}
                      style={{
                        width: "100%", padding: "14px",
                        background: "transparent",
                        border: `1px solid ${tokens.text}`,
                        color: tokens.text,
                        fontSize: "12px", letterSpacing: "0.15em",
                        textTransform: "uppercase", cursor: "pointer",
                        opacity: status === "loading" ? 0.6 : 1,
                      }}
                    >
                      {status === "loading" ? "Sending..." : "Submit Booking Request"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          )}

          {/* ── Gallery Grid ── */}
          <div
            className="eltdf-full-width"
            style={{ background: tokens.pageBg, transition: "background 0.3s ease" }}
          >
            <div className="eltdf-full-width-inner">

              {/* Grid lines */}
              <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div
                    key={n}
                    className={`eltdf-grid-line eltdf-grid-column-${n}`}
                    style={{ borderColor: tokens.borderFaint }}
                  />
                ))}
              </div>

              <div className="eltdf-grid-row">
                <div className="eltdf-page-content-holder eltdf-grid-col-12">
                  <div className="wpb-content-wrapper">
                    <div className="eltdf-row-grid-section-wrapper eltdf-content-aligment-center">
                      <div className="eltdf-row-grid-section">
                        <div className="vc_row wpb_row vc_row-fluid">
                          <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="eltdf-portfolio-list-holder eltdf-grid-list eltdf-pl-gallery eltdf-three-columns eltdf-normal-space eltdf-disable-bottom-space eltdf-pl-gallery-overlay eltdf-pl-pag-no-pagination">
                                  <div className="eltdf-pl-inner eltdf-outer-space clearfix">
                                    {portfolioItems.map((item) => (
                                      <PortfolioCard
                                        key={item.id}
                                        item={item}
                                        tokens={tokens}
                                      />
                                    ))}
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
      </div>

      <Footer />
    </>
  );
};

export default Event;
