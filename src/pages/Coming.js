import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Coming = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const target = new Date("2028-01-01T11:07:00");

    const tick = () => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ months: 0, days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ months, days, hours, minutes, seconds });
    };

    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

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

                    <div
                      className="eltdf-row-grid-section-wrapper eltdf-content-aligment-center"
                      style={{backgroundImage: "url(https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/inner-pages-img-5.jpg)"}}
                    >
                      <div className="eltdf-row-grid-section">
                        <div className="vc_row wpb_row vc_row-fluid vc_row-o-full-height vc_row-o-columns-middle vc_row-flex">
                          <div className="wpb_column vc_column_container vc_col-sm-12">
                            <div className="vc_column-inner">
                              <div className="wpb_wrapper">
                                <div className="eltdf-elements-holder eltdf-one-column eltdf-responsive-mode-768">
                                  <div className="eltdf-eh-item" data-item-class="eltdf-eh-custom-4941">
                                    <div className="eltdf-eh-item-inner">
                                      <div className="eltdf-eh-item-content eltdf-eh-custom-4941" style={{padding: "7% 8% 0 8%"}}>

                                        {/* Title */}
                                        <div className="eltdf-section-title-holder" style={{textAlign: "center"}}>
                                          <div className="eltdf-st-inner">
                                            <div className="eltdf-st-title-holder">
                                              <div className="decor">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                                                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"/>
                                                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"/>
                                                </svg>
                                              </div>
                                              <h1 className="eltdf-st-title">Coming Soon</h1>
                                              <div className="decor">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="41.125" height="9.146">
                                                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881 8.576L20.562.591.244 8.576"/>
                                                  <path fill="none" stroke="#9C7C57" strokeMiterlimit="10" d="M40.881.591L20.562 8.576.243.591"/>
                                                </svg>
                                              </div>
                                            </div>
                                          </div>
                                        </div>

                                        <div className="vc_empty_space" style={{height: "45px"}}><span className="vc_empty_space_inner"></span></div>

                                        {/* Countdown Timer */}
                                        <div className="eltdf-countdown" id="countdown2541" style={{display: "flex", justifyContent: "center", gap: "40px", textAlign: "center"}}>
                                          {[
                                            { value: pad(timeLeft.months ?? 0),  label: "Months"  },
                                            { value: pad(timeLeft.days ?? 0),    label: "Days"    },
                                            { value: pad(timeLeft.hours ?? 0),   label: "Hours"   },
                                            { value: pad(timeLeft.minutes ?? 0), label: "Minutes" },
                                            { value: pad(timeLeft.seconds ?? 0), label: "Seconds" },
                                          ].map(({ value, label }) => (
                                            <div key={label} className="eltdf-countdown-item">
                                              <span className="eltdf-countdown-number" style={{display: "block", fontSize: "48px", fontWeight: "300", color: "#fff", letterSpacing: "4px"}}>
                                                {value}
                                              </span>
                                              <span className="eltdf-countdown-label" style={{display: "block", fontSize: "11px", letterSpacing: "3px", textTransform: "uppercase", color: "#BC9A6B", marginTop: "8px"}}>
                                                {label}
                                              </span>
                                            </div>
                                          ))}
                                        </div>

                                        <div className="vc_empty_space" style={{height: "80px"}}><span className="vc_empty_space_inner"></span></div>

                                        {/* CTA Button */}
                                        <a itemProp="url" href="/our-menu" target="_self" className="eltdf-btn eltdf-btn-large eltdf-btn-outline">
                                          <span className="eltdf-btn-text">View Menu</span>
                                        </a>

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

export default Coming;