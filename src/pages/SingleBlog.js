import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const ArrowSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="8.328px" height="8.453px" viewBox="0 0 8.328 8.453" xmlSpace="preserve">
    <polyline fill="none" stroke="currentColor" strokeMiterlimit="10" points="0.449,0.36 3.587,4.234 0.449,8.109 "/>
    <polyline fill="none" stroke="currentColor" strokeMiterlimit="10" points="4.514,0.36 7.652,4.234 4.514,8.109 "/>
  </svg>
);

const InstagramPlusSVG = () => (
  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="47.994px" height="47.994px" viewBox="0 0 47.994 47.994" xmlSpace="preserve">
    <line fill="none" stroke="#715B3E" strokeMiterlimit="10" x1="21.044" y1="3" x2="21.044" y2="47.994"/>
    <line fill="none" stroke="#715B3E" strokeMiterlimit="10" x1="27.044" y1="0" x2="27.044" y2="44.994"/>
    <line fill="none" stroke="#715B3E" strokeMiterlimit="10" x1="44.994" y1="21.484" x2="0" y2="21.484"/>
    <line fill="none" stroke="#715B3E" strokeMiterlimit="10" x1="47.994" y1="26.5" x2="3" y2="26.5"/>
  </svg>
);

const igImages = [
  { src: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Carousel-showcase-img-1-150x150.jpg", title: "Carousel-showcase-img-1" },
  { src: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Carousel-showcase-img-2-150x150.jpg", title: "Carousel-showcase-img-2" },
  { src: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-4-150x150.jpg",              title: "main-img-4" },
  { src: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/Our-menu-img-3-150x150.jpg",          title: "Our-menu-img-3" },
  { src: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/home-3-rev-img-2-150x150.jpg",        title: "home-3-rev-img-2" },
  { src: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/Split-screen-img-7-150x150.jpg",      title: "Split-screen-img-7" },
];

const SingleBlog = () => {
  const [search, setSearch] = useState("");
  const [comment, setComment] = useState({ text: "", name: "", email: "" });
  const [comments, setComments] = useState([
    {
      id: 9,
      name: "David Johnson",
      date: "November 4, 2019",
      image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/suscriber.jpg",
      text: "Mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantius m do loremque laudan tium, totam rem aperiam aq ue ipsa quae abillo inventore verit.",
      children: [
        {
          id: 10,
          name: "Jessica Houston",
          date: "November 4, 2019",
          image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/suscriber-1.jpg",
          text: "Tat em accusantium do loremque laudan tium, totam rem aperiam aq ue. Mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit vop",
        }
      ]
    }
  ]);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!comment.text || !comment.name || !comment.email) return;
    setComments([...comments, {
      id: Date.now(),
      name: comment.name,
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/suscriber.jpg",
      text: comment.text,
      children: []
    }]);
    setComment({ text: "", name: "", email: "" });
  };

  const postUrl = "https://laurent.qodeinteractive.com/elegant-food/";
  const postTitle = "Elegant food";
  const postExcerpt = "Lorem ipsum dolor sit amet, consectetur adipisicin gelitsed do eiusmod temporinc ididunt utlabor met dolore magna sensal iqua.";

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

          {/* Breadcrumb Title Bar */}
          <div className="eltdf-title-holder eltdf-standard-with-breadcrumbs-type eltdf-title-va-header-bottom" style={{height: "189px", backgroundColor: "#0c1315"}} data-height="189">
            <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
              <div className="eltdf-grid-line eltdf-grid-column-1"></div>
              <div className="eltdf-grid-line eltdf-grid-column-2"></div>
              <div className="eltdf-grid-line eltdf-grid-column-3"></div>
              <div className="eltdf-grid-line eltdf-grid-column-4"></div>
              <div className="eltdf-grid-line eltdf-grid-column-5"></div>
            </div>
            <div className="eltdf-title-wrapper" style={{height: "79px", paddingTop: "110px"}}>
              <div className="eltdf-title-inner">
                <div className="eltdf-grid">
                  <div className="eltdf-title-info">
                    <h5 className="eltdf-page-title entry-title">Laurent</h5>
                  </div>
                  <div className="eltdf-breadcrumbs-info">
                    <div itemProp="breadcrumb" className="eltdf-breadcrumbs">
                      <a itemProp="url" href="/">Home</a>
                      <span className="eltdf-delimiter">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-breadcrumb-arrow">
                          <polyline points="0.4 0.4 3.6 4.2 0.4 8.1 "/>
                          <polyline points="4.5 0.4 7.7 4.2 4.5 8.1 "/>
                        </svg>
                      </span>
                      <a href="/category/world-restaurants">World restaurants</a>
                      <span className="eltdf-delimiter">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" className="eltdf-breadcrumb-arrow">
                          <polyline points="0.4 0.4 3.6 4.2 0.4 8.1 "/>
                          <polyline points="4.5 0.4 7.7 4.2 4.5 8.1 "/>
                        </svg>
                      </span>
                      <span className="eltdf-current">Elegant food</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Container */}
          <div className="eltdf-container">
            <div className="eltdf-container-inner clearfix">
              <div className="eltdf-grid-lines-holder eltdf-grid-columns-5">
                <div className="eltdf-grid-line eltdf-grid-column-1"></div>
                <div className="eltdf-grid-line eltdf-grid-column-2"></div>
                <div className="eltdf-grid-line eltdf-grid-column-3"></div>
                <div className="eltdf-grid-line eltdf-grid-column-4"></div>
                <div className="eltdf-grid-line eltdf-grid-column-5"></div>
              </div>

              <div className="eltdf-grid-row eltdf-content-has-sidebar eltdf-grid-large-gutter">

                {/* ── MAIN CONTENT (9 col) ── */}
                <div className="eltdf-page-content-holder eltdf-grid-col-9">
                  <div className="eltdf-blog-holder eltdf-blog-single eltdf-blog-single-standard">

                    {/* Article */}
                    <article id="post-1" className="post-1 post type-post status-publish format-standard has-post-thumbnail hentry category-world-restaurants">
                      <div className="eltdf-post-content">

                        {/* Hero Image */}
                        <div className="eltdf-post-heading">
                          <div className="eltdf-post-image">
                            <img
                              width="1300" height="750"
                              src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-1.jpg"
                              className="attachment-full size-full wp-post-image"
                              alt="Elegant food"
                              decoding="async"
                              fetchPriority="high"
                              srcSet="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-1.jpg 1300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-1-300x173.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-1-1024x591.jpg 1024w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-1-768x443.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-1-600x346.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-1-800x462.jpg 800w"
                              sizes="(max-width: 1300px) 100vw, 1300px"
                            />
                          </div>
                        </div>

                        {/* Post Text */}
                        <div className="eltdf-post-text">
                          <div className="eltdf-post-text-inner">

                            {/* Meta */}
                            <div className="eltdf-post-info-top">
                              <div className="eltdf-post-info-author">
                                <a itemProp="author" className="eltdf-post-info-author-link" href="/author/diane-johnson">Diane Johnson</a>
                                <ArrowSVG />
                              </div>
                              <div itemProp="dateCreated" className="eltdf-post-info-date entry-date published updated">
                                <a itemProp="url" href="#">October 5, 2019</a>
                                <meta itemProp="interactionCount" content="UserComments: 2"/>
                                <ArrowSVG />
                              </div>
                              <div className="eltdf-post-info-category">
                                <a href="/category/world-restaurants" rel="category tag">World restaurants</a>
                                <ArrowSVG />
                              </div>
                            </div>

                            {/* Post Body */}
                            <div className="eltdf-post-text-main">
                              <h3 itemProp="name" className="entry-title eltdf-post-title">Elegant food</h3>

                              <div className="wpb-content-wrapper">
                                <div className="vc_row wpb_row vc_row-fluid">
                                  <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner">
                                      <div className="wpb_wrapper">
                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabor met dolore magna sens aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori nisi ut aliquip ex ea commodo consequat. Duis auteirm ure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupin datat non proident tusunt.</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="vc_row wpb_row vc_row-fluid">
                                  <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner">
                                      <div className="wpb_wrapper">
                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <p>Mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant tium doloremque laudan tiumotam rem aperiam aq ue ipsa quae ab illo inventore veritatis etquai sarchitecto beatae vitae dicta sunt expli cabos Nemoenim ipsam voluptatem quia voluptas sitasper.</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="vc_row wpb_row vc_row-fluid">
                                  <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner">
                                      <div className="wpb_wrapper">
                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <blockquote>
                                              <p>Lorem ipsum dolor sit amet, consectetur adipisicinge lit sensa omna tempor incididunt ut labore edol orei</p>
                                            </blockquote>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="vc_row wpb_row vc_row-fluid">
                                  <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner">
                                      <div className="wpb_wrapper">
                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <p>Mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant tium doloremque laudan tiumotam rem aperiam aq ue ipsa quae ab illo inventore veritatis etquai sarchitecto beatae vitae dicta sunt expli cabos Nemoenim ipsam voluptatem quia voluptas sitasper.</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Mid-article Image */}
                                <div className="vc_row wpb_row vc_row-fluid">
                                  <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner">
                                      <div className="wpb_wrapper">
                                        <div className="eltdf-single-image-holder eltdf-image-appear-none">
                                          <div className="eltdf-si-inner">
                                            <img
                                              decoding="async"
                                              width="952" height="550"
                                              src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-4.jpg"
                                              className="attachment-full size-full"
                                              alt="Elegant food"
                                              srcSet="https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-4.jpg 952w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-4-300x173.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-4-768x444.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-4-600x347.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-4-800x462.jpg 800w"
                                              sizes="(max-width: 952px) 100vw, 952px"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="vc_row wpb_row vc_row-fluid">
                                  <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner">
                                      <div className="wpb_wrapper">
                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <p>Mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusant tium doloremque laudan tiumotam rem aperiam aq ue ipsa quae ab illo inventore veritatis etquai sarchitecto beatae vitae dicta sunt expli cabos Nemoenim ipsam voluptatem quia voluptas sitasper.</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div className="vc_row wpb_row vc_row-fluid">
                                  <div className="wpb_column vc_column_container vc_col-sm-12">
                                    <div className="vc_column-inner">
                                      <div className="wpb_wrapper">
                                        <div className="wpb_text_column wpb_content_element">
                                          <div className="wpb_wrapper">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt utlabor met dolore magna sens aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco labori nisi ut aliquip ex ea commodo consequat. Duis auteirm ure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupin datat non proident tusun.</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            {/* Tags + Share */}
                            <div className="eltdf-post-info-bottom clearfix">
                              <div className="eltdf-post-info-bottom-left">
                                <div className="eltdf-tags-holder">
                                  <div className="eltdf-tags">
                                    <a href="/tag/food" rel="tag">Food</a>,{" "}
                                    <a href="/tag/recipes" rel="tag">Recipes</a>
                                  </div>
                                </div>
                              </div>
                              <div className="eltdf-post-info-bottom-right">
                                <div className="eltdf-blog-share">
                                  <div className="eltdf-social-share-holder eltdf-list">
                                    <ul>
                                      <li className="eltdf-facebook-share">
                                        <a itemProp="url" className="eltdf-share-link" href="#"
                                          onClick={(e) => { e.preventDefault(); window.open(`https://www.facebook.com/sharer.php?u=${postUrl}`, 'sharer', 'toolbar=0,status=0,width=620,height=280'); }}>
                                          <span className="eltdf-social-network-icon ion-social-facebook-outline"></span>
                                        </a>
                                      </li>
                                      <li className="eltdf-twitter-share">
                                        <a itemProp="url" className="eltdf-share-link" href="#"
                                          onClick={(e) => { e.preventDefault(); window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(postExcerpt)}+${postUrl}`, 'popupwindow', 'scrollbars=yes,width=800,height=400'); }}>
                                          <span className="eltdf-social-network-icon ion-social-twitter-outline"></span>
                                        </a>
                                      </li>
                                      <li className="eltdf-tumblr-share">
                                        <a itemProp="url" className="eltdf-share-link" href="#"
                                          onClick={(e) => { e.preventDefault(); const popup = window.open(`https://www.tumblr.com/share/link?url=${postUrl}&name=${encodeURIComponent(postTitle)}&description=${encodeURIComponent(postExcerpt)}`, 'popupwindow', 'scrollbars=yes,width=800,height=400'); popup.focus(); }}>
                                          <span className="eltdf-social-network-icon ion-social-tumblr-outline"></span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                    </article>

                    {/* Author Bio */}
                    <div className="eltdf-author-description">
                      <div className="eltdf-author-description-image">
                        <a itemProp="url" href="/author/diane-johnson" title="Elegant food">
                          <img
                            src="https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/author.jpg"
                            className="avatar pp-user-avatar avatar-335 photo"
                            height="335" width="335"
                            alt="Diane Johnson"
                          />
                        </a>
                      </div>
                      <div className="eltdf-author-description-content">
                        <h5 className="eltdf-author-name vcard author">
                          <a itemProp="url" href="/author/diane-johnson" title="Elegant food">
                            <span className="fn">Diane Johnson</span>
                          </a>
                        </h5>
                        <p itemProp="position" className="eltdf-author-position">Journalist</p>
                        <p itemProp="description" className="eltdf-author-text">Mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natue sit voluptatem accusantium doloremque laudan tium tota</p>
                        <div className="eltdf-author-social-icons clearfix">
                          <a itemProp="url" href="https://www.facebook.com/QodeInteractive/" target="_blank" rel="noreferrer">
                            <i className="eltdf-icon-ion-icon ion-social-facebook-outline eltdf-author-social-facebook eltdf-author-social-icon"></i>
                          </a>
                          <a itemProp="url" href="https://twitter.com/QodeInteractive" target="_blank" rel="noreferrer">
                            <i className="eltdf-icon-ion-icon ion-social-twitter-outline eltdf-author-social-twitter eltdf-author-social-icon"></i>
                          </a>
                          <a itemProp="url" href="https://www.instagram.com/qodeinteractive/" target="_blank" rel="noreferrer">
                            <i className="eltdf-icon-ion-icon ion-social-instagram-outline eltdf-author-social-instagram eltdf-author-social-icon"></i>
                          </a>
                        </div>
                      </div>
                    </div>

                    {/* Comments */}
                    <div className="eltdf-comment-holder clearfix" id="comments">
                      <div className="eltdf-comment-holder-inner">
                        <h4 className="eltdf-comments-title">Comments</h4>
                        <div className="eltdf-comments">
                          <ul className="eltdf-comment-list">
                            {comments.map((c) => (
                              <li key={c.id}>
                                <div className="eltdf-comment clearfix">
                                  <div className="eltdf-comment-image">
                                    <img src={c.image} className="avatar pp-user-avatar photo" height="112" width="112" alt={c.name} />
                                  </div>
                                  <div className="eltdf-comment-text">
                                    <div className="eltdf-comment-date">{c.date}</div>
                                    <div className="eltdf-comment-info">
                                      <h5 className="eltdf-comment-name vcard">{c.name}</h5>
                                    </div>
                                    <div className="eltdf-text-holder" id={`comment-${c.id}`}>
                                      <p>{c.text}</p>
                                    </div>
                                  </div>
                                </div>

                                {/* Nested replies */}
                                {c.children && c.children.length > 0 && (
                                  <ul className="children">
                                    {c.children.map((child) => (
                                      <li key={child.id}>
                                        <div className="eltdf-comment clearfix">
                                          <div className="eltdf-comment-image">
                                            <img src={child.image} className="avatar pp-user-avatar photo" height="112" width="112" alt={child.name} />
                                          </div>
                                          <div className="eltdf-comment-text">
                                            <div className="eltdf-comment-date">{child.date}</div>
                                            <div className="eltdf-comment-info">
                                              <h5 className="eltdf-comment-name vcard">{child.name}</h5>
                                            </div>
                                            <div className="eltdf-text-holder" id={`comment-${child.id}`}>
                                              <p>{child.text}</p>
                                            </div>
                                          </div>
                                        </div>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Comment Form */}
                    <div className="eltdf-comment-form">
                      <div id="respond" className="comment-respond">
                        <h4 id="reply-title" className="comment-reply-title">Post a Comment</h4>
                        <form id="commentform" className="comment-form" onSubmit={handleCommentSubmit}>
                          <textarea
                            id="comment"
                            placeholder="Your comment"
                            name="comment"
                            cols="45"
                            rows="6"
                            aria-required="true"
                            value={comment.text}
                            onChange={(e) => setComment({ ...comment, text: e.target.value })}
                            required
                          ></textarea>
                          <div className="eltdf-grid-row eltdf-grid-normal-gutter">
                            <div className="eltdf-grid-col-6">
                              <input
                                id="author"
                                name="author"
                                placeholder="Your Name"
                                type="text"
                                value={comment.name}
                                onChange={(e) => setComment({ ...comment, name: e.target.value })}
                                aria-required="true"
                                required
                              />
                            </div>
                            <div className="eltdf-grid-col-6">
                              <input
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                type="email"
                                value={comment.email}
                                onChange={(e) => setComment({ ...comment, email: e.target.value })}
                                aria-required="true"
                                required
                              />
                            </div>
                          </div>
                          <p className="comment-form-cookies-consent">
                            <input id="wp-comment-cookies-consent" name="wp-comment-cookies-consent" type="checkbox" defaultValue="yes" />
                            <label htmlFor="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                          </p>
                          <p className="form-submit">
                            <button name="submit" type="submit" id="submit_comment" className="eltdf-btn eltdf-btn-medium eltdf-btn-outline">
                              <span className="eltdf-btn-text">Send</span>
                            </button>
                          </p>
                        </form>
                      </div>
                    </div>

                  </div>
                </div>

                {/* ── SIDEBAR (3 col) ── */}
                <div className="eltdf-sidebar-holder eltdf-grid-col-3">
                  <aside className="eltdf-sidebar">

                    {/* About */}
                    <div id="text-12" className="widget widget_text">
                      <div className="eltdf-widget-title-holder"><h6 className="eltdf-widget-title">About</h6></div>
                      <div className="textwidget">
                        <p>Lorem ipsum dolor sit amet, con sen sectetur adip isicing elit, sed do eiusa mod tempor incididunt</p>
                      </div>
                    </div>

                    {/* Categories */}
                    <div id="categories-2" className="widget widget_categories">
                      <div className="eltdf-widget-title-holder"><h6 className="eltdf-widget-title">Categories</h6></div>
                      <ul>
                        <li className="cat-item"><a href="/category/elegant-food">Elegant food</a></li>
                        <li className="cat-item"><a href="/category/latest-menus">Latest menus</a></li>
                        <li className="cat-item"><a href="/category/recipes">Recipes</a></li>
                        <li className="cat-item"><a href="/category/world-restaurants">World restaurants</a></li>
                      </ul>
                    </div>

                    {/* Instagram */}
                    <div className="widget eltdf-image-gallery-widget">
                      <div className="eltdf-widget-title-holder"><h6 className="eltdf-widget-title" style={{marginBottom: "21px"}}>Instagram</h6></div>
                      <div className="eltdf-image-gallery eltdf-grid-list eltdf-ig-grid-type eltdf-three-columns eltdf-tiny-space eltdf-image-behavior-custom-link">
                        <div className="eltdf-ig-inner eltdf-outer-space">
                          {igImages.map((img) => (
                            <div key={img.title} className="eltdf-ig-image eltdf-item-space">
                              <div className="eltdf-ig-image-inner">
                                <img width="150" height="150" src={img.src} className="attachment-thumbnail size-thumbnail" alt={img.title} decoding="async" loading="lazy" />
                                <a itemProp="url" className="eltdf-ig-custom-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer" title={img.title}>
                                  <div className="eltdf-ig-overlay"><InstagramPlusSVG /></div>
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div id="tag_cloud-3" className="widget widget_tag_cloud">
                      <div className="eltdf-widget-title-holder"><h6 className="eltdf-widget-title">Tags</h6></div>
                      <div className="tagcloud">
                        {[
                          { label: "Desserts",   slug: "desserts",   size: "13.25pt" },
                          { label: "Food",       slug: "food",       size: "22pt"    },
                          { label: "Menu",       slug: "menu",       size: "8pt"     },
                          { label: "Recipes",    slug: "recipes",    size: "13.25pt" },
                          { label: "Restaurant", slug: "restaurant", size: "19.67pt" },
                          { label: "Style",      slug: "style",      size: "8pt"     },
                        ].map(({ label, slug, size }) => (
                          <a key={slug} href={`/tag/${slug}`} className="tag-cloud-link" style={{fontSize: size}}>{label}</a>
                        ))}
                      </div>
                    </div>

                    {/* Search */}
                    <div id="search-2" className="widget widget_search">
                      <div className="eltdf-widget-title-holder"><h6 className="eltdf-widget-title">Search</h6></div>
                      <div className="eltdf-searchform searchform">
                        <label className="screen-reader-text">Search for:</label>
                        <div className="input-holder clearfix">
                          <input
                            type="search"
                            className="search-field"
                            placeholder="Type here"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            title="Search for:"
                          />
                          <button type="button" className="eltdf-search-submit" onClick={() => console.log("Search:", search)}>
                            <span aria-hidden="true" className="eltdf-icon-font-elegant icon_search"></span>
                          </button>
                        </div>
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

export default SingleBlog;