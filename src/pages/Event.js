import React from "react";
import Header from "./Header";
import Footer from "./Footer";

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

const BreadcrumbArrow = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-breadcrumb-arrow">
    <polyline points="0.4 0.4 3.6 4.2 0.4 8.1" />
    <polyline points="4.5 0.4 7.7 4.2 4.5 8.1" />
  </svg>
);

const BackToTop = () => (
  <a id="eltdf-back-to-top" href="#">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="43.047px"
      height="43.031px"
      viewBox="0 0 43.047 43.031"
    >
      <circle fill="none" stroke="#BC9A6B" strokeMiterlimit="10" cx="21.523" cy="21.531" r="20.986" />
      <circle fill="none" stroke="#BC9A6B" className="eltdf-popout" strokeMiterlimit="10" cx="21.523" cy="21.531" r="16.049" />
      <polyline fill="none" stroke="#BC9A6B" strokeMiterlimit="10" points="15.205,23.875 21.523,18.573 27.842,23.875" />
    </svg>
  </a>
);

const PortfolioCard = ({ item }) => (
  <article className={`eltdf-pl-item eltdf-item-space ${item.id}`}>
    <div className="eltdf-pl-item-inner">
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
      <div className="eltdf-pli-text-holder">
        <div className="eltdf-pli-text-wrapper">
          <div className="eltdf-pli-text">
            <h5 itemProp="name" className="eltdf-pli-title entry-title">
              {item.title}
            </h5>
            <div className="eltdf-pli-category-holder">
              <a
                itemProp="url"
                className="eltdf-pli-category"
                href={`../portfolio-category/${item.categorySlug}/index.html`}
              >
                {item.category}
              </a>
            </div>
          </div>
        </div>
      </div>
      <a
        itemProp="url"
        className="eltdf-pli-link eltdf-block-drag-link"
        href={`../portfolio-item/${item.slug}/index.html`}
        target="_self"
      />
    </div>
  </article>
);

const Event = () => {
  return (
    <>
      <Header />

      <BackToTop />

      <div className="eltdf-content" >
        <div className="eltdf-content-inner">

          {/* Page Title / Breadcrumb */}
          <div
            className="eltdf-title-holder eltdf-standard-with-breadcrumbs-type eltdf-title-va-header-bottom"
            style={{ height: "189px", backgroundColor: "#0c1315" }}
            data-height="189"
          >
            <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className={`eltdf-grid-line eltdf-grid-column-${n}`} />
              ))}
            </div>
            <div className="eltdf-title-wrapper" style={{ height: "79px", paddingTop: "110px" }}>
              <div className="eltdf-title-inner">
                <div className="eltdf-grid">
                  <div className="eltdf-title-info">
                    <h5 className="eltdf-page-title entry-title"> Some of our recent events</h5>
                    
                  </div>
                  <div className="eltdf-breadcrumbs-info">
                    <div itemProp="breadcrumb" className="eltdf-breadcrumbs">
                      <a itemProp="url" href="../index.html">Home</a>
                      <span className="eltdf-delimiter">
                        <BreadcrumbArrow />
                      </span>
                      <span className="eltdf-current">Events</span>
                 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Description — between banner and gallery ── */}
          <div style={{
            backgroundColor: "#0c1315",
            padding: "40px 60px",
            textAlign: "center",
          }}>
            <p style={{
              color: "rgba(201,171,129,0.85)",
              fontSize: "15px",
              lineHeight: "1.8",
              maxWidth: "800px",
              margin: "0 auto",
              fontWeight: 300,
              letterSpacing: "0.03em",
            }}>
              We have successfully catered at weddings, corporate functions, parties and small
              gatherings for over 20 years. To give you a glimpse of what we do, we have picked
              out a selection of images that showcase some of our most recent events! For more
              information, please contact us at{" "}
              <strong style={{ color: "#C9AB81" }}>0208 3100 844</strong> or fill in our form.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="eltdf-full-width">
            <div className="eltdf-full-width-inner">

              <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <div key={n} className={`eltdf-grid-line eltdf-grid-column-${n}`} />
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
                                      <PortfolioCard key={item.id} item={item} />
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
