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

const ShareButtons = ({ url, title, excerpt }) => (
  <div className="eltdf-blog-share">
    <div className="eltdf-social-share-holder eltdf-list">
      <ul>
        <li className="eltdf-facebook-share">
          <a itemProp="url" className="eltdf-share-link" href="#"
            onClick={(e) => { e.preventDefault(); window.open(`https://www.facebook.com/sharer.php?u=${url}`, 'sharer', 'toolbar=0,status=0,width=620,height=280'); }}>
            <span className="eltdf-social-network-icon ion-social-facebook-outline"></span>
          </a>
        </li>
        <li className="eltdf-twitter-share">
          <a itemProp="url" className="eltdf-share-link" href="#"
            onClick={(e) => { e.preventDefault(); window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(excerpt)}+${url}`, 'popupwindow', 'scrollbars=yes,width=800,height=400'); }}>
            <span className="eltdf-social-network-icon ion-social-twitter-outline"></span>
          </a>
        </li>
        <li className="eltdf-tumblr-share">
          <a itemProp="url" className="eltdf-share-link" href="#"
            onClick={(e) => { e.preventDefault(); const popup = window.open(`https://www.tumblr.com/share/link?url=${url}&name=${encodeURIComponent(title)}&description=${encodeURIComponent(excerpt)}`, 'popupwindow', 'scrollbars=yes,width=800,height=400'); popup.focus(); }}>
            <span className="eltdf-social-network-icon ion-social-tumblr-outline"></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const posts = [
  {
    id: "post-1",
    type: "standard",
    slug: "elegant-food",
    title: "Elegant food",
    author: "Diane Johnson",
    date: "October 5, 2019",
    category: "World restaurants",
    categorySlug: "world-restaurants",
    image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/post-img-1.jpg",
    srcSet: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/post-img-1.jpg 1300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/post-img-1-300x173.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/post-img-1-768x443.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/post-img-1-1024x591.jpg 1024w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/post-img-1-600x346.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/post-img-1-800x462.jpg 800w",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicin gelitsed do eiusmod temporinc ididunt utlabor met dolore magna sensal iqua. Ut enim ad minim veniamquis nostrud exercitation ullamco labori nisi ut aliquip ex ea commodo consequat. Duis auteirm ure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupin datat non proident, sunt in culpa",
    url: "https://laurent.qodeinteractive.com/elegant-food/",
  },
  {
    id: "post-1005",
    type: "quote",
    slug: "food-inspiration",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed tempor incididunt ut labore edol ore magna.",
    author: "Justin Ray",
    url: "https://laurent.qodeinteractive.com/food-inspiration/",
  },
  {
    id: "post-1014",
    type: "audio",
    slug: "the-royal-charm",
    title: "The Royal Charm",
    author: "Diane Johnson",
    date: "October 4, 2019",
    category: "Elegant food",
    categorySlug: "elegant-food",
    image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-2.jpg",
    srcSet: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-2.jpg 1300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-2-300x173.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-2-1024x591.jpg 1024w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-2-768x443.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-2-600x346.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-2-800x462.jpg 800w",
    audio: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/11/Fingers-In-The-Noise-Elixir.mp3",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicin gelitsed do eiusmod temporinc ididunt utlabor met dolore magna sensal iqua. Ut enim ad minim veniamquis nostrud exercitation ullamco labori nisi ut aliquip ex ea commodo consequat. Duis auteirm ure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupin datat non proident, sunt in culpa",
    url: "https://laurent.qodeinteractive.com/the-royal-charm/",
  },
  {
    id: "post-1017",
    type: "link",
    slug: "wnim-ad-minim",
    title: "Wnim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    url: "https://laurent.qodeinteractive.com/wnim-ad-minim-veniam/",
  },
  {
    id: "post-1019",
    type: "standard",
    slug: "fine-dining-space",
    title: "Fine dining space",
    author: "Diane Johnson",
    date: "October 4, 2019",
    category: "Recipes",
    categorySlug: "recipes",
    image: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-3.jpg",
    srcSet: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-3.jpg 1300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-3-300x173.jpg 300w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-3-1024x591.jpg 1024w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-3-768x443.jpg 768w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-3-600x346.jpg 600w, https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Blog-list-img-3-800x462.jpg 800w",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicin gelitsed do eiusmod temporinc ididunt utlabor met dolore magna sensal iqua. Ut enim ad minim veniamquis nostrud exercitation ullamco labori nisi ut aliquip ex ea commodo consequat. Duis auteirm ure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupin datat non proident, sunt in culpa",
    url: "https://laurent.qodeinteractive.com/fine-dining-space/",
  },
];

const igImages = [
  { src: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Carousel-showcase-img-1-150x150.jpg", title: "Carousel-showcase-img-1" },
  { src: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/Carousel-showcase-img-2-150x150.jpg", title: "Carousel-showcase-img-2" },
  { src: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/10/main-img-4-150x150.jpg",              title: "main-img-4" },
  { src: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/Our-menu-img-3-150x150.jpg",          title: "Our-menu-img-3" },
  { src: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/home-3-rev-img-2-150x150.jpg",        title: "home-3-rev-img-2" },
  { src: "https://laurent.qodeinteractive.com/wp-content/uploads/2019/12/Split-screen-img-7-150x150.jpg",      title: "Split-screen-img-7" },
];


const Blog = () => {
  const [activePage, setActivePage] = useState(1);
  const [search, setSearch] = useState("");

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

          {/* Page Title / Breadcrumb */}
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
                    <h5 className="eltdf-page-title entry-title">Blog Standard</h5>
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
                      <span className="eltdf-current">Blog Standard</span>
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

              <div className="eltdf-grid-row eltdf-grid-large-gutter">

                {/* ── BLOG POSTS (9 col) ── */}
                <div className="eltdf-page-content-holder eltdf-grid-col-9">
                  <div className="eltdf-blog-holder eltdf-blog-standard eltdf-blog-pagination-standard">
                    <div className="eltdf-blog-holder-inner">

                      {posts.map((post) => {

                        /* ── QUOTE post ── */
                        if (post.type === "quote") return (
                          <article key={post.id} id={post.id} className="eltdf-post-has-media post type-post format-quote hentry">
                            <div className="eltdf-post-content">
                              <div className="eltdf-post-text">
                                <div className="eltdf-post-text-inner">
                                  <div className="eltdf-post-text-main">
                                    <div className="eltdf-post-mark">
                                      <span className="eltdf-quote-mark"></span>
                                    </div>
                                    <div className="eltdf-post-quote-holder">
                                      <div className="eltdf-post-quote-holder-inner">
                                        <h5 itemProp="name" className="eltdf-quote-title eltdf-post-title">
                                          <a itemProp="url" href={`/${post.slug}`} title={post.title}>{post.title}</a>
                                        </h5>
                                        <span className="eltdf-quote-author">{post.author}</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                        );

                        /* ── LINK post ── */
                        if (post.type === "link") return (
                          <article key={post.id} id={post.id} className="eltdf-post-has-media post type-post format-link hentry">
                            <div className="eltdf-post-content">
                              <div className="eltdf-post-text">
                                <div className="eltdf-post-text-inner">
                                  <div className="eltdf-post-text-main">
                                    <div className="eltdf-post-mark">
                                      <span className="eltdf-link-mark"></span>
                                    </div>
                                    <div className="eltdf-post-link-holder">
                                      <div className="eltdf-post-link-holder-inner">
                                        <h5 itemProp="name" className="eltdf-link-title eltdf-post-title">
                                          <a itemProp="url" href={post.url} title={post.title} target="_blank" rel="noreferrer">{post.title}</a>
                                        </h5>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                        );

                        /* ── STANDARD + AUDIO posts ── */
                        return (
                          <article key={post.id} id={post.id} className={`eltdf-post-has-media post type-post format-${post.type} hentry`}>
                            <div className="eltdf-post-content">

                              {/* Image */}
                              <div className="eltdf-post-heading">
                                <div className="eltdf-post-image">
                                  <a itemProp="url" href={`/${post.slug}`} title={post.title}>
                                    <img
                                      width="1300" height="750"
                                      src={post.image}
                                      className="attachment-full size-full"
                                      alt={post.title}
                                      decoding="async"
                                      fetchPriority={post.id === "post-1" ? "high" : undefined}
                                      srcSet={post.srcSet}
                                      sizes="(max-width: 1300px) 100vw, 1300px"
                                    />
                                  </a>
                                </div>

                                {/* Audio player */}
                                {post.type === "audio" && (
                                  <div className="eltdf-blog-audio-holder">
                                    <audio className="eltdf-blog-audio" src={post.audio} controls>
                                      Your browser does not support the audio player
                                    </audio>
                                  </div>
                                )}
                              </div>

                              {/* Text */}
                              <div className="eltdf-post-text">
                                <div className="eltdf-post-text-inner">

                                  {/* Meta */}
                                  <div className="eltdf-post-info-top">
                                    <div className="eltdf-post-info-author">
                                      <a itemProp="author" className="eltdf-post-info-author-link" href="/author/diane-johnson">{post.author}</a>
                                      <ArrowSVG />
                                    </div>
                                    <div itemProp="dateCreated" className="eltdf-post-info-date entry-date published updated">
                                      <a itemProp="url" href="#">{post.date}</a>
                                      <ArrowSVG />
                                    </div>
                                    <div className="eltdf-post-info-category">
                                      <a href={`/category/${post.categorySlug}`} rel="category tag">{post.category}</a>
                                      <ArrowSVG />
                                    </div>
                                  </div>

                                  {/* Title + Excerpt */}
                                  <div className="eltdf-post-text-main">
                                    <h3 itemProp="name" className="entry-title eltdf-post-title">
                                      <a itemProp="url" href={`/${post.slug}`} title={post.title}>{post.title}</a>
                                    </h3>
                                    <div className="eltdf-post-excerpt-holder">
                                      <p itemProp="description" className="eltdf-post-excerpt">{post.excerpt}</p>
                                    </div>
                                  </div>

                                  {/* Bottom: Read More + Share */}
                                  <div className="eltdf-post-info-bottom clearfix">
                                    <div className="eltdf-post-info-bottom-left">
                                      <div className="eltdf-post-read-more-button">
                                        <a itemProp="url" href={`/${post.slug}`} target="_self" className="eltdf-btn eltdf-btn-medium eltdf-btn-simple eltdf-blog-list-button">
                                          <span className="eltdf-btn-text">Read More</span>
                                        </a>
                                      </div>
                                    </div>
                                    <div className="eltdf-post-info-bottom-right">
                                      <ShareButtons url={post.url} title={post.title} excerpt={post.excerpt} />
                                    </div>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </article>
                        );
                      })}

                    </div>

                    {/* Pagination */}
                    <div className="eltdf-blog-pagination">
                      <ul>
                        <li className={`eltdf-pag-number ${activePage === 1 ? "eltdf-pag-active" : ""}`}>
                          <a href="#" onClick={(e) => { e.preventDefault(); setActivePage(1); }}>1</a>
                        </li>
                        <li className={`eltdf-pag-number ${activePage === 2 ? "eltdf-pag-active" : ""}`}>
                          <a href="#" onClick={(e) => { e.preventDefault(); setActivePage(2); }}>2</a>
                        </li>
                        <li className="eltdf-pag-next">
                          <a href="#" onClick={(e) => { e.preventDefault(); setActivePage(p => Math.min(p + 1, 2)); }}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="10px" height="11px" viewBox="0 0 8.328 8.453" xmlSpace="preserve">
                              <polyline fill="none" stroke="#C6A270" strokeMiterlimit="10" points="0.449,0.36 3.587,4.234 0.449,8.109 "/>
                              <polyline fill="none" stroke="#C6A270" strokeMiterlimit="10" points="4.514,0.36 7.652,4.234 4.514,8.109 "/>
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>

                {/* ── SIDEBAR (3 col) ── */}
                <div className="eltdf-sidebar-holder eltdf-grid-col-3">
                  <aside className="eltdf-sidebar">

                    {/* About Widget */}
                    <div id="text-12" className="widget widget_text">
                      <div className="eltdf-widget-title-holder"><h6 className="eltdf-widget-title">About</h6></div>
                      <div className="textwidget">
                        <p>Lorem ipsum dolor sit amet, con sen sectetur adip isicing elit, sed do eiusa mod tempor incididunt</p>
                      </div>
                    </div>

                    {/* Categories Widget */}
                    <div id="categories-2" className="widget widget_categories">
                      <div className="eltdf-widget-title-holder"><h6 className="eltdf-widget-title">Categories</h6></div>
                      <ul>
                        <li className="cat-item"><a href="/category/elegant-food">Elegant food</a></li>
                        <li className="cat-item"><a href="/category/latest-menus">Latest menus</a></li>
                        <li className="cat-item"><a href="/category/recipes">Recipes</a></li>
                        <li className="cat-item"><a href="/category/world-restaurants">World restaurants</a></li>
                      </ul>
                    </div>

                    {/* Instagram Widget */}
                    <div className="widget eltdf-image-gallery-widget">
                      <div className="eltdf-widget-title-holder"><h6 className="eltdf-widget-title" style={{marginBottom: "21px"}}>Instagram</h6></div>
                      <div className="eltdf-image-gallery eltdf-grid-list eltdf-ig-grid-type eltdf-three-columns eltdf-tiny-space eltdf-image-behavior-custom-link">
                        <div className="eltdf-ig-inner eltdf-outer-space">
                          {igImages.map((img) => (
                            <div key={img.title} className="eltdf-ig-image eltdf-item-space">
                              <div className="eltdf-ig-image-inner">
                                <img width="150" height="150" src={img.src} className="attachment-thumbnail size-thumbnail" alt={img.title} decoding="async" loading="lazy" />
                                <a itemProp="url" className="eltdf-ig-custom-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer" title={img.title}>
                                  <div className="eltdf-ig-overlay">
                                    <InstagramPlusSVG />
                                  </div>
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Tags Widget */}
                    <div id="tag_cloud-3" className="widget widget_tag_cloud">
                      <div className="eltdf-widget-title-holder"><h6 className="eltdf-widget-title">Tags</h6></div>
                      <div className="tagcloud">
                        {[
                          { label: "Desserts", slug: "desserts", size: "13.25pt" },
                          { label: "Food",     slug: "food",     size: "22pt"    },
                          { label: "Menu",     slug: "menu",     size: "8pt"     },
                          { label: "Recipes",  slug: "recipes",  size: "13.25pt" },
                          { label: "Restaurant",slug:"restaurant",size: "19.67pt"},
                          { label: "Style",    slug: "style",    size: "8pt"     },
                        ].map(({ label, slug, size }) => (
                          <a key={slug} href={`/tag/${slug}`} className="tag-cloud-link" style={{fontSize: size}}>{label}</a>
                        ))}
                      </div>
                    </div>

                    {/* Search Widget */}
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

export default Blog;