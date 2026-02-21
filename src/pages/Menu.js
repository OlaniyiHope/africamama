import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const DecorSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
    <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"/>
    <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"/>
  </svg>
);

const ParallaxDivider = ({ image }) => (
  <div
    data-parallax-bg-image={image}
    data-parallax-bg-speed="1"
    className="vc_row wpb_row vc_row-fluid eltdf-parallax-row-holder"
    style={{backgroundImage: `url(${image})`, backgroundAttachment: "fixed", backgroundSize: "cover", backgroundPosition: "center"}}
  >
    <div className="wpb_column vc_column_container vc_col-sm-12">
      <div className="vc_column-inner">
        <div className="wpb_wrapper">
          <div className="eltdf-elements-holder eltdf-one-column eltdf-responsive-mode-768">
            <div className="eltdf-eh-item">
              <div className="eltdf-eh-item-inner">
                <div className="eltdf-eh-item-content" style={{padding: "14% 0"}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const PricingItem = ({ title, price, desc }) => (
  <div className="eltdf-pricing-item">
    <div className="eltdf-pricing-main">
      <h6 className="eltdf-pricing-title">{title}</h6>
      <div className="eltdf-pricing-lines"></div>
      <span className="eltdf-pricing-price">{price}</span>
    </div>
    <p className="eltdf-pricing-desc">{desc}</p>
  </div>
);

const SectionTitle = ({ tagline, title }) => (
  <div className="eltdf-section-title-holder eltdf-st-decor-animation" style={{textAlign: "center"}}>
    <div className="eltdf-st-inner">
      <span className="eltdf-st-tagline">{tagline}</span>
      <div className="eltdf-st-title-holder">
        <div className="decor"><DecorSVG /></div>
        <h4 className="eltdf-st-title">{title}</h4>
        <div className="decor"><DecorSVG /></div>
      </div>
    </div>
  </div>
);

const Menu = () => {
  const appetizersLeft = [
    { title: "Four Cheese Garlic Bread", price: "$32", desc: "Toasted French bread topped with romano, cheddar" },
    { title: "Shrimp Scampi",            price: "$25", desc: "Jumbo shrimp sauteed in white wine, butter and garlic" },
    { title: "Fried Calamari",           price: "$38", desc: "Breaded calamari, lightly fried in canola oil" },
    { title: "Peachy Jalapeno Guacamole",price: "$38", desc: "Ground cumin, avocados, peeled and cubed" },
  ];

  const appetizersRight = [
    { title: "Rastrami roll",       price: "$29", desc: "Spreadable cream cheese, crumbled blue cheese" },
    { title: "Brownie batter dip",  price: "$25", desc: "Cream cheese, softened butter, brown sugar" },
    { title: "Caprese salad kabobs",price: "$23", desc: "Cherry-size fresh mozzarella cheese balls" },
    { title: "Shrimp Scampi",       price: "$17", desc: "Jumbo shrimp sauteed in white wine, butter and garlic" },
  ];

  const mainLeft = [
    { title: "Corn fed chicken",           price: "$17", desc: "Wild mushrooms, truffle potatoes, braised leeks carrots" },
    { title: "Nduja pork chicken terrine", price: "$41", desc: "Smoked duck breast, pistachio, smoked pancetta" },
    { title: "Pan seared scallops",        price: "$29", desc: "Saffron, celeriac puree, black pudding, Parma ham" },
    { title: "Baked Camembert",            price: "$25", desc: "Red onion marmelade, garlic Foccacia bread, grilled figs" },
    { title: "Braised ox cheek ravioli",   price: "$23", desc: "Mediterranean olives casserole, celeriac puree, mushrooms" },
    { title: "Nduja pork chicken terrine", price: "$41", desc: "Smoked duck breast, pistachio, smoked pancetta" },
  ];

  const mainRight = [
    { title: "Beef burger meal",     price: "$32", desc: "Classic Greek salad, barrel aged Feta cheese, pitta bread" },
    { title: "Roasted lamb rump",    price: "$25", desc: "Grilled lamb cutlets, pomegranate glaze, butternut squash" },
    { title: "Pan seared sea bass",  price: "$38", desc: "Saffron and mussel's broth, new potatoes, edamame beans" },
    { title: "King prawns and lobster",price: "$38", desc: "Creamy saffron, sauce Vierge" },
    { title: "Citrus cured salmon",  price: "$41", desc: "Horseradish creme fraiche, beetroot mousse, citrus oil" },
    { title: "Pan seared sea bass",  price: "$38", desc: "Saffron and mussel's broth, new potatoes, edamame beans" },
  ];

  const dessertsLeft = [
    { title: "Creole Cream Cheesecake", price: "$17", desc: "Creole cream cheese, chocolate filigree and warm caramel" },
    { title: "Bananas Foster",          price: "$41", desc: "Bananas with Caribbean rum served with vanilla ice cream" },
    { title: "Southern Pecan Pie",      price: "$29", desc: "Warm buttery caramel, chocolate syrup and ice cream" },
  ];

  const dessertsRight = [
    { title: "Lemon meringue pie", price: "$32", desc: "Dark chocolate mousse, candied pecan crunch and caramel" },
    { title: "Bananas Foster",     price: "$25", desc: "Bananas with Caribbean rum served with vanilla ice cream" },
    { title: "Texas apple cobbler",price: "$38", desc: "Southern Pecan Streusel, creole cream and cheese ice cream" },
  ];

  return (
    <>
      <Header />

      <a id="eltdf-back-to-top" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="43.047px" height="43.031px" viewBox="0 0 43.047 43.031" xmlSpace="preserve">
          <circle fill="none" stroke="#BC9A6B" strokeMiterlimit="10" cx="21.523" cy="21.531" r="20.986"/>
          <circle fill="none" stroke="#BC9A6B" className="eltdf-popout" strokeMiterlimit="10" cx="21.523" cy="21.531" r="16.049"/>
          <polyline fill="none" stroke="#BC9A6B" strokeMiterlimit="10" points="15.205,23.875 21.523,18.573 27.842,23.875 "/>
        </svg>
      </a>

      <div className="eltdf-content" >
        <div className="eltdf-content-inner">

          {/* Hero Title */}
          <div
            className="eltdf-title-holder eltdf-centered-type eltdf-title-va-header-bottom eltdf-preload-background eltdf-has-bg-image eltdf-bg-parallax"
            style={{height: "530px", backgroundColor: "#0c1315", backgroundImage: "url(https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/Our-menu-title-img.jpg)"}}
            data-height="530"
          >
            <div className="eltdf-title-image">
              <img itemProp="image" src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/Our-menu-title-img.jpg" alt="Our Menu" />
            </div>
            <div className="eltdf-title-wrapper" style={{height: "420px", paddingTop: "110px"}}>
              <div className="eltdf-title-inner">
                <div className="eltdf-grid">
                  <div className="eltdf-title-holder-inner">
                    <div className="eltdf-title-decor"><DecorSVG /></div>
                    <h1 className="eltdf-page-title entry-title">Our Menu</h1>
                    <div className="eltdf-title-decor"><DecorSVG /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="eltdf-full-width">
            <div className="eltdf-full-width-inner">
              <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
                <div className="eltdf-grid-line eltdf-grid-column-1"></div>
                <div className="eltdf-grid-line eltdf-grid-column-2"></div>
                <div className="eltdf-grid-line eltdf-grid-column-3"></div>
                <div className="eltdf-grid-line eltdf-grid-column-4"></div>
                <div className="eltdf-grid-line eltdf-grid-column-5"></div>
              </div>

              <div className="eltdf-grid-row">
                <div className="eltdf-page-content-holder eltdf-grid-col-12">
                  <div className="wpb-content-wrapper">

                    {/* ── APPETIZERS ── */}
                    <div className="eltdf-row-grid-section-wrapper">
                      <div className="eltdf-row-grid-section">
                        <div className="vc_row wpb_row vc_row-fluid">
                          <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <SectionTitle tagline="Starters" title="Appetizers" />
                                <div className="vc_empty_space" style={{height: "63px"}}><span className="vc_empty_space_inner"></span></div>
                                <div className="eltdf-elements-holder eltdf-two-columns eltdf-responsive-mode-1024 fifty-fifty">

                                  <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-3647">
                                    <div className="eltdf-eh-item-inner">
                                      <div className="eltdf-eh-item-content eltdf-eh-custom-3647" style={{padding: "0 42px 0 0"}}>
                                        <div className="eltdf-pricing-holder">
                                          {appetizersLeft.map((item, i) => <PricingItem key={i} {...item} />)}
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-2219">
                                    <div className="eltdf-eh-item-inner">
                                      <div className="eltdf-eh-item-content eltdf-eh-custom-2219" style={{padding: "0 0 0 42px"}}>
                                        <div className="eltdf-pricing-holder">
                                          {appetizersRight.map((item, i) => <PricingItem key={i} {...item} />)}
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

                    {/* Parallax Divider 1 */}
                    <ParallaxDivider image="https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/Our-menu-img-1.jpg" />

                    {/* ── MAIN COURSES ── */}
                    <div className="eltdf-row-grid-section-wrapper">
                      <div className="eltdf-row-grid-section">
                        <div className="vc_row wpb_row vc_row-fluid">
                          <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <SectionTitle tagline="Reservations" title="Main courses" />
                                <div className="vc_empty_space" style={{height: "63px"}}><span className="vc_empty_space_inner"></span></div>
                                <div className="eltdf-elements-holder eltdf-two-columns eltdf-responsive-mode-1024 fifty-fifty">

                                  <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-4810">
                                    <div className="eltdf-eh-item-inner">
                                      <div className="eltdf-eh-item-content eltdf-eh-custom-4810" style={{padding: "0 42px 0 0"}}>
                                        <div className="eltdf-pricing-holder">
                                          {mainLeft.map((item, i) => <PricingItem key={i} {...item} />)}
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-9138">
                                    <div className="eltdf-eh-item-inner">
                                      <div className="eltdf-eh-item-content eltdf-eh-custom-9138" style={{padding: "0 0 0 42px"}}>
                                        <div className="eltdf-pricing-holder">
                                          {mainRight.map((item, i) => <PricingItem key={i} {...item} />)}
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

                    {/* Parallax Divider 2 */}
                    <ParallaxDivider image="https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/Our-menu-img-2.jpg" />

                    {/* ── DESSERTS ── */}
                    <div className="eltdf-row-grid-section-wrapper">
                      <div className="eltdf-row-grid-section">
                        <div className="vc_row wpb_row vc_row-fluid">
                          <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <SectionTitle tagline="Sweet dreams" title="Desserts" />
                                <div className="vc_empty_space" style={{height: "63px"}}><span className="vc_empty_space_inner"></span></div>
                                <div className="eltdf-elements-holder eltdf-two-columns eltdf-responsive-mode-1024 fifty-fifty">

                                  <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-6572">
                                    <div className="eltdf-eh-item-inner">
                                      <div className="eltdf-eh-item-content eltdf-eh-custom-6572" style={{padding: "0 42px 0 0"}}>
                                        <div className="eltdf-pricing-holder">
                                          {dessertsLeft.map((item, i) => <PricingItem key={i} {...item} />)}
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-6909">
                                    <div className="eltdf-eh-item-inner">
                                      <div className="eltdf-eh-item-content eltdf-eh-custom-6909" style={{padding: "0 0 0 42px"}}>
                                        <div className="eltdf-pricing-holder">
                                          {dessertsRight.map((item, i) => <PricingItem key={i} {...item} />)}
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

                    {/* Parallax Divider 3 */}
                    <ParallaxDivider image="https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/Our-menu-img-3.jpg" />

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

export default Menu;