import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Contact form error:", err);
    }
  };

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

      <div className="eltdf-content" style={{marginTop: "-110px"}}>
        <div className="eltdf-content-inner">
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

                    {/* Google Map */}
                    <div className="eltdf-row-grid-section-wrapper">
                      <div className="eltdf-row-grid-section">
                        <div className="vc_row wpb_row vc_row-fluid">
                          <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="eltdf-google-map-holder">
                                  <iframe
                                    title="Contact Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343077!2d-73.98984838459418!3d40.74881684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab8e98!2s380%20Flushing%20Ave%2C%20Brooklyn%2C%20NY%2011205!5e0!3m2!1sen!2sus!4v1607451268844!5m2!1sen!2sus"
                                    width="100%"
                                    height="477"
                                    style={{border: 0, filter: "grayscale(100%) brightness(40%)"}}
                                    allowFullScreen=""
                                    loading="lazy"
                                  ></iframe>
                                  <div className="eltdf-google-map-overlay"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Form + Location Info */}
                    <div className="eltdf-row-grid-section-wrapper eltdf-content-aligment-center">
                      <div className="eltdf-row-grid-section">
                        <div className="vc_row wpb_row vc_row-fluid">

                          {/* Left: Contact Form */}
                          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-12">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">

                                {/* Section Title */}
                                <div className="eltdf-section-title-holder eltdf-st-decor-animation" style={{textAlign: "center"}}>
                                  <div className="eltdf-st-inner">
                                    <span className="eltdf-st-tagline">Write to us</span>
                                    <div className="eltdf-st-title-holder">
                                      <div className="decor">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                                          <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"/>
                                          <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"/>
                                        </svg>
                                      </div>
                                      <h2 className="eltdf-st-title">Contact Us</h2>
                                      <div className="decor">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                                          <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"/>
                                          <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"/>
                                        </svg>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="vc_empty_space" style={{height: "55px"}}><span className="vc_empty_space_inner"></span></div>

                                {/* Contact Form */}
                                <div className="wpcf7" id="wpcf7-f812-p682-o1" lang="en-US" dir="ltr">
                                  {submitted ? (
                                    <p style={{textAlign: "center", color: "#BC9A6B", padding: "20px 0"}}>
                                      Thank you! Your message has been sent.
                                    </p>
                                  ) : (
                                    <form
                                      className="wpcf7-form cf7_custom_style_2"
                                      onSubmit={handleSubmit}
                                      noValidate
                                    >
                                      <div className="qodef-cf7-contact">
                                        <p>
                                          <span className="wpcf7-form-control-wrap" data-name="your-name">
                                            <input
                                              size="40"
                                              maxLength="400"
                                              className="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                                              aria-required="true"
                                              aria-invalid="false"
                                              placeholder="Name"
                                              type="text"
                                              name="name"
                                              value={formData.name}
                                              onChange={handleChange}
                                              required
                                            />
                                          </span>
                                          <br />
                                          <span className="wpcf7-form-control-wrap" data-name="your-email">
                                            <input
                                              size="40"
                                              maxLength="400"
                                              className="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                                              aria-required="true"
                                              aria-invalid="false"
                                              placeholder="E-mail"
                                              type="email"
                                              name="email"
                                              value={formData.email}
                                              onChange={handleChange}
                                              required
                                            />
                                          </span>
                                          <br />
                                          <span className="wpcf7-form-control-wrap" data-name="your-message">
                                            <textarea
                                              cols="40"
                                              rows="10"
                                              maxLength="2000"
                                              className="wpcf7-form-control wpcf7-textarea"
                                              aria-invalid="false"
                                              name="message"
                                              placeholder="Message"
                                              value={formData.message}
                                              onChange={handleChange}
                                            ></textarea>
                                          </span>
                                        </p>
                                        <div className="qodef-cf7-contact-btn-holder">
                                          <p>
                                            <button
                                              className="wpcf7-form-control wpcf7-submit eltdf-btn eltdf-btn-medium eltdf-btn-outline"
                                              type="submit"
                                            >
                                              <span className="eltdf-btn-text">Send</span>
                                            </button>
                                          </p>
                                        </div>
                                      </div>
                                    </form>
                                  )}
                                </div>

                              </div>
                            </div>
                          </div>

                          {/* Right: Location Info */}
                          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-12">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="eltdf-elements-holder eltdf-two-columns eltdf-responsive-mode-680 fifty-fifty">

                                  {/* Manhattan + Brooklyn */}
                                  <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-3549">
                                    <div className="eltdf-eh-item-inner">
                                      <div className="eltdf-eh-item-content eltdf-eh-custom-3549" style={{padding: "28px 0px 0 60px"}}>

                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <h5 style={{textAlign: "center"}}>Manhattan</h5>
                                          </div>
                                        </div>
                                        <div className="vc_empty_space" style={{height: "2px"}}><span className="vc_empty_space_inner"></span></div>
                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <p style={{textAlign: "center"}}>
                                              <a style={{lineHeight: "36px"}} href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">71 Madison Ave</a><br />
                                              <a style={{lineHeight: "36px"}} href="tel:914-309-7011"> 914-309-7011 </a>,
                                              <a href="tel:914-329-2131"> 914-329-2131</a><br />
                                              <a style={{lineHeight: "36px"}} href="mailto:info@laurent.com">info@laurent.com</a>
                                            </p>
                                          </div>
                                        </div>

                                        <div className="vc_empty_space" style={{height: "57px"}}><span className="vc_empty_space_inner"></span></div>

                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <h5 style={{textAlign: "center"}}>Brooklyn</h5>
                                          </div>
                                        </div>
                                        <div className="vc_empty_space" style={{height: "2px"}}><span className="vc_empty_space_inner"></span></div>
                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <p style={{textAlign: "center"}}>
                                              <a style={{lineHeight: "36px"}} href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">380 Flushing Ave</a><br />
                                              <a style={{lineHeight: "36px"}} href="tel:914-309-7011"> 914-309-7011 </a>,
                                              <a href="tel:914-329-2131"> 914-329-2131</a><br />
                                              <a style={{lineHeight: "36px"}} href="mailto:brooklyn@laurent.com">brooklyn@laurent.com</a>
                                            </p>
                                          </div>
                                        </div>

                                      </div>
                                    </div>
                                  </div>

                                  {/* Rahway + New Jersey */}
                                  <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-6092">
                                    <div className="eltdf-eh-item-inner">
                                      <div className="eltdf-eh-item-content eltdf-eh-custom-6092" style={{padding: "28px 0px 0 80px"}}>

                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <h5 style={{textAlign: "center"}}>Rahway</h5>
                                          </div>
                                        </div>
                                        <div className="vc_empty_space" style={{height: "2px"}}><span className="vc_empty_space_inner"></span></div>
                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <p style={{textAlign: "center"}}>
                                              <a style={{lineHeight: "36px"}} href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">71 Madison Ave</a><br />
                                              <a style={{lineHeight: "36px"}} href="tel:914-309-7011"> 914-309-7011 </a>,
                                              <a href="tel:914-329-2131"> 914-329-2131</a><br />
                                              <a style={{lineHeight: "36px"}} href="mailto:rahway@laurent.com">rahway@laurent.com</a>
                                            </p>
                                          </div>
                                        </div>

                                        <div className="vc_empty_space" style={{height: "57px"}}><span className="vc_empty_space_inner"></span></div>

                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <h5 style={{textAlign: "center"}}>New Jersey</h5>
                                          </div>
                                        </div>
                                        <div className="vc_empty_space" style={{height: "2px"}}><span className="vc_empty_space_inner"></span></div>
                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <p style={{textAlign: "center"}}>
                                              <a style={{lineHeight: "36px"}} href="https://www.google.com/maps" target="_blank" rel="noopener noreferrer">71 Madison Ave</a><br />
                                              <a style={{lineHeight: "36px"}} href="tel:914-309-7011"> 914-309-7011 </a>,
                                              <a href="tel:914-329-2131"> 914-329-2131</a><br />
                                              <a style={{lineHeight: "36px"}} href="mailto:nj@laurent.com">nj@laurent.com</a>
                                            </p>
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;