import React from "react";
import Header2 from "./Header2";
import Footer from "./Footer";
import Header from "./Header";

const Orders = () => {
  return (
 <>
 <Header />

 	<div id="bwp-main" class="bwp-main" style={{paddingTop: "150px"}}>
						<div data-bg_default ="https://papzi.wpbingosite.com/wp-content/uploads/2022/02/Image-9-1.jpg" class="page-title bwp-title"  style={{backgroundImage:"url(../wp-content/uploads/2022/02/Image-9-1.jpg);"}}>
				<div class="container" >	
										<div class="content-title-heading">
		<span class="back-to-shop">Shop</span>
		<h1 class="text-title-heading">
			Order Tracking		</h1>
	</div>
									<div id="breadcrumb" class="breadcrumb"><div class="bwp-breadcrumb"><a href="../index.html">Home</a> <span class="delimiter"></span> <span class="current">Order Tracking</span> </div></div>			
												</div>
			</div>
			<div class="container">
	<div class="row">
		<div class="col-lg-12 col-md-12">    
			<div id="main-content" class="main-content">
				<div id="primary" class="content-area">
					<div id="content" class="site-content" role="main">
						<article id="post-14932" class="post-14932 page type-page status-publish hentry">
		<div class="entry-content clearfix">
		<div class="woocommerce"><div class="woocommerce-page-header">
	<ul>
		<li class="shopping-cart-link">
			<a href="/cart">Shopping Cart<span class="cart-count">(0)</span></a>
		</li>
		<li class="checkout-link"><a href="/checkout">Checkout</a></li>
					<li class="order-tracking-link active"><a href="index.html">Order Tracking</a></li>
			</ul>
</div>
<form action="https://papzi.wpbingosite.com/order-tracking/" method="post" class="woocommerce-form woocommerce-form-track-order track_order">

	<p>To track your order please enter your Order ID in the box below and press the &quot;Track&quot; button. This was given to you on your receipt and in the confirmation email you should have received.</p>

	<p class="form-row form-row-first"><label for="orderid">Order ID</label> <input class="input-text" type="text" name="orderid" id="orderid" value="" placeholder="Found in your order confirmation email." /></p>	<p class="form-row form-row-last"><label for="order_email">Billing email</label> <input class="input-text" type="text" name="order_email" id="order_email" value="" placeholder="Email you used during checkout." /></p>	<div class="clear"></div>

	<p class="form-row"><button type="submit" class="button" name="track" value="Track">Track</button></p>
	<input type="hidden" id="woocommerce-order-tracking-nonce" name="woocommerce-order-tracking-nonce" value="b974de9f47" /><input type="hidden" name="_wp_http_referer" value="/order-tracking/" />
</form>
</div>	</div>
</article>			</div>
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

export default Orders;
