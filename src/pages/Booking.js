import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Booking = () => {
  const [partySize, setPartySize] = useState("2");
  const [date, setDate] = useState("02/20/2026");
  const [time, setTime] = useState("11:00");

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

      <div className="eltdf-content">
        <div className="eltdf-content-inner">

          {/* Hero Title */}
          <div
            className="eltdf-title-holder eltdf-centered-type eltdf-title-va-header-bottom eltdf-preload-background eltdf-has-bg-image eltdf-bg-parallax"
            style={{height: "530px", backgroundColor: "#0c1315", backgroundImage: "url(https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/Booking-page-title-img.jpg)"}}
            data-height="530"
          >
            <div className="eltdf-title-image">
              <img itemProp="image" src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/Booking-page-title-img.jpg" alt="Booking Page" />
            </div>
            <div className="eltdf-title-wrapper" style={{height: "420px", paddingTop: "110px"}}>
              <div className="eltdf-title-inner">
                <div className="eltdf-grid">
                  <div className="eltdf-title-holder-inner">
                    <div className="eltdf-title-decor">
                      <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                        <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"/>
                        <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"/>
                      </svg>
                    </div>
                    <h1 className="eltdf-page-title entry-title">Booking Page</h1>
                    <div className="eltdf-title-decor">
                      <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                        <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"/>
                        <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"/>
                      </svg>
                    </div>
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

                    {/* Reservation Form Section */}
                    <div className="eltdf-row-grid-section-wrapper">
                      <div className="eltdf-row-grid-section">
                        <div className="vc_row wpb_row vc_row-fluid vc_row-has-fill">
                          <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="eltdf-elements-holder eltdf-one-column eltdf-responsive-mode-768">
                                  <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-7886">
                                    <div className="eltdf-eh-item-inner">
                                      <div className="eltdf-eh-item-content eltdf-eh-custom-7886" style={{padding: "0 8.4%"}}>

                                        {/* Section Title */}
                                        <div className="eltdf-section-title-holder eltdf-st-decor-animation" style={{textAlign: "center"}}>
                                          <div className="eltdf-st-inner">
                                            <span className="eltdf-st-tagline">Your table</span>
                                            <div className="eltdf-st-title-holder">
                                              <div className="decor">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                                                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"/>
                                                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"/>
                                                </svg>
                                              </div>
                                              <h2 className="eltdf-st-title">Reservation</h2>
                                              <div className="decor">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                                                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"/>
                                                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"/>
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="vc_empty_space" style={{height: "54px"}}><span className="vc_empty_space_inner"></span></div>

                                        {/* Booking Form */}
                                        <div className="eltdf-rf-holder eltdf-rf-inline">
                                          <form
                                            className="eltdf-rf"
                                            target="_blank"
                                            action="https://www.opentable.com/restref/client/"
                                            name="eltdf-rf"
                                          >
                                            <input type="hidden" name="rid" className="rid" defaultValue="161697" />
                                            <input type="hidden" name="restref" className="restref" defaultValue="161697" />

                                            <div className="eltdf-rf-row clearfix">

                                              {/* Party Size */}
                                              <div className="eltdf-rf-col-holder">
                                                <div className="eltdf-rf-field-holder clearfix">
                                                  <select
                                                    name="partysize"
                                                    className="eltdf-ot-people"
                                                    value={partySize}
                                                    onChange={(e) => setPartySize(e.target.value)}
                                                  >
                                                    <option value="1">1 Person</option>
                                                    <option value="2">2 People</option>
                                                    <option value="3">3 People</option>
                                                    <option value="4">4 People</option>
                                                    <option value="5">5 People</option>
                                                    <option value="6">6 People</option>
                                                    <option value="7">7 People</option>
                                                    <option value="8">8 People</option>
                                                    <option value="9">9 People</option>
                                                    <option value="10">10 People</option>
                                                  </select>
                                                </div>
                                              </div>

                                              {/* Date */}
                                              <div className="eltdf-rf-col-holder">
                                                <div className="eltdf-rf-field-holder eltdf-rf-date-col clearfix">
                                                  <input
                                                    type="text"
                                                    value={date}
                                                    className="eltdf-ot-date"
                                                    name="date"
                                                    onChange={(e) => setDate(e.target.value)}
                                                  />
                                                </div>
                                              </div>

                                              {/* Time */}
                                              <div className="eltdf-rf-col-holder eltdf-rf-time-col">
                                                <div className="eltdf-rf-field-holder clearfix">
                                                  <select
                                                    name="time"
                                                    className="eltdf-ot-time"
                                                    value={time}
                                                    onChange={(e) => setTime(e.target.value)}
                                                  >
                                                    <option value="00:30">00:30 am</option>
                                                    <option value="01:00">01:00 am</option>
                                                    <option value="01:30">01:30 am</option>
                                                    <option value="02:00">02:00 am</option>
                                                    <option value="02:30">02:30 am</option>
                                                    <option value="03:00">03:00 am</option>
                                                    <option value="03:30">03:30 am</option>
                                                    <option value="04:00">04:00 am</option>
                                                    <option value="04:30">04:30 am</option>
                                                    <option value="05:00">05:00 am</option>
                                                    <option value="05:30">05:30 am</option>
                                                    <option value="06:00">06:00 am</option>
                                                    <option value="06:30">06:30 am</option>
                                                    <option value="07:00">07:00 am</option>
                                                    <option value="07:30">07:30 am</option>
                                                    <option value="08:00">08:00 am</option>
                                                    <option value="08:30">08:30 am</option>
                                                    <option value="09:00">09:00 am</option>
                                                    <option value="09:30">09:30 am</option>
                                                    <option value="10:00">10:00 am</option>
                                                    <option value="10:30">10:30 am</option>
                                                    <option value="11:00">11:00 am</option>
                                                    <option value="11:30">11:30 am</option>
                                                    <option value="12:00">12:00 pm</option>
                                                    <option value="12:30">12:30 pm</option>
                                                    <option value="13:00">01:00 pm</option>
                                                    <option value="13:30">01:30 pm</option>
                                                    <option value="14:00">02:00 pm</option>
                                                    <option value="14:30">02:30 pm</option>
                                                    <option value="15:00">03:00 pm</option>
                                                    <option value="15:30">03:30 pm</option>
                                                    <option value="16:00">04:00 pm</option>
                                                    <option value="16:30">04:30 pm</option>
                                                    <option value="17:00">05:00 pm</option>
                                                    <option value="17:30">05:30 pm</option>
                                                    <option value="18:00">06:00 pm</option>
                                                    <option value="18:30">06:30 pm</option>
                                                    <option value="19:00">07:00 pm</option>
                                                    <option value="19:30">07:30 pm</option>
                                                    <option value="20:00">08:00 pm</option>
                                                    <option value="20:30">08:30 pm</option>
                                                    <option value="21:00">09:00 pm</option>
                                                    <option value="21:30">09:30 pm</option>
                                                    <option value="22:00">10:00 pm</option>
                                                    <option value="22:30">10:30 pm</option>
                                                    <option value="23:00">11:00 pm</option>
                                                    <option value="23:30">11:30 pm</option>
                                                    <option value="24:00">12:00 pm</option>
                                                  </select>
                                                </div>
                                              </div>

                                              {/* Submit Button */}
                                              <div className="eltdf-rf-col-holder eltdf-rf-btn-holder">
                                                <button type="submit" className="eltdf-btn eltdf-btn-huge eltdf-btn-outline">
                                                  <span className="eltdf-btn-text">Book Now</span>
                                                </button>
                                              </div>

                                            </div>
                                            <input type="hidden" name="datetime" className="datetime" defaultValue="" />
                                          </form>
                                          <p className="eltdf-rf-copyright">*Powered by OpenTable</p>
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

                    {/* Divider */}
                    <div className="vc_row wpb_row vc_row-fluid vc_row-has-fill">
                      <div className="wpb_column vc_column_container vc_col-sm-12">
                        <div className="vc_column-inner">
                          <div className="wpb_wrapper">
                            <div className="eltdf-separator-holder clearfix eltdf-separator-center eltdf-separator-full-width">
                              <div className="eltdf-separator" style={{borderColor: "#715b3e", borderBottomWidth: "1px", marginTop: "0px", marginBottom: "0px"}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Map + Location Info Section */}
                    <div className="eltdf-row-grid-section-wrapper">
                      <div className="eltdf-row-grid-section">
                        <div className="vc_row wpb_row vc_row-fluid">

                          {/* Left: Map */}
                          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-12">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="eltdf-elements-holder eltdf-one-column eltdf-responsive-mode-768">
                                  <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-5909">
                                    <div className="eltdf-eh-item-inner">
                                      <div className="eltdf-eh-item-content eltdf-eh-custom-5909">
                                        <div className="eltdf-google-map-holder">
                                          <iframe
                                            title="Restaurant Location"
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343077!2d-73.98984838459418!3d40.74881684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab8e98!2s380%20Flushing%20Ave%2C%20Brooklyn%2C%20NY%2011205!5e0!3m2!1sen!2sus!4v1607451268844!5m2!1sen!2sus"
                                            width="100%"
                                            height="510"
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
                          </div>

                          {/* Right: Location Info */}
                          <div className="wpb_column vc_column_container vc_col-sm-12 vc_col-lg-6 vc_col-md-12">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">

                                {/* Find Us Title */}
                                <div className="eltdf-elements-holder eltdf-one-column eltdf-responsive-mode-768">
                                  <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-2900">
                                    <div className="eltdf-eh-item-inner">
                                      <div className="eltdf-eh-item-content eltdf-eh-custom-2900" style={{padding: "0 0 0 12.5%"}}>
                                        <div className="eltdf-section-title-holder eltdf-st-decor-animation" style={{textAlign: "center"}}>
                                          <div className="eltdf-st-inner">
                                            <span className="eltdf-st-tagline">Visit Us</span>
                                            <div className="eltdf-st-title-holder">
                                              <div className="decor">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                                                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"/>
                                                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"/>
                                                </svg>
                                              </div>
                                              <h2 className="eltdf-st-title">Find us</h2>
                                              <div className="decor">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                                                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"/>
                                                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"/>
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Four Location Blocks */}
                                <div className="eltdf-elements-holder eltdf-two-columns eltdf-responsive-mode-768 fifty-fifty">

                                  {/* Manhattan + Brooklyn */}
                                  <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-4012">
                                    <div className="eltdf-eh-item-inner">
                                      <div className="eltdf-eh-item-content eltdf-eh-custom-4012" style={{padding: "36px 0px 0 60px"}}>

                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <h5 style={{textAlign: "center"}}>Manhattan</h5>
                                          </div>
                                        </div>
                                        <div className="vc_empty_space" style={{height: "1px"}}><span className="vc_empty_space_inner"></span></div>
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

                                        <div className="vc_empty_space" style={{height: "25px"}}><span className="vc_empty_space_inner"></span></div>

                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <h5 style={{textAlign: "center"}}>Brooklyn</h5>
                                          </div>
                                        </div>
                                        <div className="vc_empty_space" style={{height: "1px"}}><span className="vc_empty_space_inner"></span></div>
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
                                  <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-2215">
                                    <div className="eltdf-eh-item-inner">
                                      <div className="eltdf-eh-item-content eltdf-eh-custom-2215" style={{padding: "40px 0px 0 80px"}}>

                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <h5 style={{textAlign: "center"}}>Rahway</h5>
                                          </div>
                                        </div>
                                        <div className="vc_empty_space" style={{height: "1px"}}><span className="vc_empty_space_inner"></span></div>
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

                                        <div className="vc_empty_space" style={{height: "25px"}}><span className="vc_empty_space_inner"></span></div>

                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <h5 style={{textAlign: "center"}}>New Jersey</h5>
                                          </div>
                                        </div>
                                        <div className="vc_empty_space" style={{height: "1px"}}><span className="vc_empty_space_inner"></span></div>
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

export default Booking;