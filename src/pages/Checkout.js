import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header from "./Header";
import Footer from "./Footer";
// import "./style.css";

const Checkout = () => {
  const { cartItems, clearCart } = useCart();
  const navigate = useNavigate();

  // Form states
  const [showLogin, setShowLogin] = useState(false);
  const [showCoupon, setShowCoupon] = useState(false);
  const [createAccount, setCreateAccount] = useState(false);
  const [shipToDifferentAddress, setShipToDifferentAddress] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("bacs");

  // Billing details
  const [billingDetails, setBillingDetails] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "NG",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: "",
    phone: "",
    email: ""
  });

  // Shipping details
  const [shippingDetails, setShippingDetails] = useState({
    firstName: "",
    lastName: "",
    company: "",
    country: "NG",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postcode: ""
  });

  // Login details
  const [loginDetails, setLoginDetails] = useState({
    username: "",
    password: "",
    rememberMe: false
  });

  const [couponCode, setCouponCode] = useState("");
  const [orderNotes, setOrderNotes] = useState("");
  const [accountPassword, setAccountPassword] = useState("");

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal;

  // Redirect if cart is empty
  // useEffect(() => {
  //   if (cartItems.length === 0) {
  //     navigate("/cart");
  //   }
  // }, [cartItems, navigate]);

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order placement logic here
    console.log("Order placed:", {
      billingDetails,
      shippingDetails: shipToDifferentAddress ? shippingDetails : billingDetails,
      paymentMethod,
      orderNotes,
      cartItems,
      total
    });
    
    // Navigate to order confirmation or success page
    // clearCart();
    // navigate("/order-confirmation");
  };

  // if (cartItems.length === 0) {
  //   return null;
  // }

  return (
    <body>
      <Header />
      
  <div class="eltdf-content" style={{marginTop: "-110px"}}>
                <div class="eltdf-content-inner">
<div class="eltdf-title-holder eltdf-standard-with-breadcrumbs-type eltdf-title-va-header-bottom" style={{height: "189px;", backgroundColor: "#0c1315"}} data-height="189">
    <div class="eltdf-grid-lines-holder eltdf-grid-columns-5"><div class="eltdf-grid-line eltdf-grid-column-1"></div><div class="eltdf-grid-line eltdf-grid-column-2"></div><div class="eltdf-grid-line eltdf-grid-column-3"></div><div class="eltdf-grid-line eltdf-grid-column-4"></div><div class="eltdf-grid-line eltdf-grid-column-5"></div></div>    	<div class="eltdf-title-wrapper" style={{height: "79px;", paddingTop: "110px"}}>
		<div class="eltdf-title-inner">
			<div class="eltdf-grid">
				<div class="eltdf-title-info">
											<h5 class="eltdf-page-title entry-title">Checkout</h5>
														</div>
				<div class="eltdf-breadcrumbs-info">
					<div itemprop="breadcrumb" class="eltdf-breadcrumbs "><a itemprop="url" href="https://laurent.qodeinteractive.com/">Home</a><span class="eltdf-delimiter"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.3 8.5" class="eltdf-breadcrumb-arrow"><polyline points="0.4 0.4 3.6 4.2 0.4 8.1 "></polyline><polyline points="4.5 0.4 7.7 4.2 4.5 8.1 "></polyline></svg></span><span class="eltdf-current">Checkout</span></div>				</div>
			</div>
	    </div>
	</div>
</div>


<div class="eltdf-container eltdf-default-page-template">
		
	<div class="eltdf-container-inner clearfix">
        <div class="eltdf-grid-lines-holder eltdf-grid-columns-5"><div class="eltdf-grid-line eltdf-grid-column-1"></div><div class="eltdf-grid-line eltdf-grid-column-2"></div><div class="eltdf-grid-line eltdf-grid-column-3"></div><div class="eltdf-grid-line eltdf-grid-column-4"></div><div class="eltdf-grid-line eltdf-grid-column-5"></div></div>					<div class="eltdf-grid-row ">
				<div class="eltdf-page-content-holder eltdf-grid-col-12">
					<div class="woocommerce"><div class="woocommerce-notices-wrapper"></div><div class="woocommerce-form-coupon-toggle">
	
	<div class="woocommerce-info">
		Have a coupon? <a href="#" class="showcoupon">Click here to enter your code</a>	</div>
</div>

<form class="checkout_coupon woocommerce-form-coupon" method="post" style={{display:"none"}}>

	<p>If you have a coupon code, please apply it below.</p>

	<p class="form-row form-row-first">
		<label for="coupon_code" class="screen-reader-text">Coupon:</label>
		<input type="text" name="coupon_code" class="input-text" placeholder="Coupon code" id="coupon_code" value="" />
	</p>

	<p class="form-row form-row-last">
		<button type="submit" class="button eltdf-btn-outline" name="apply_coupon" value="Apply coupon"><span class="eltdf-btn-before-line" style={{height: "0px;", left: "-3px;"}}></span>Apply coupon<span class="eltdf-btn-after-line" style={{height: "0px;", left: "0px;"}}></span></button>
	</p>

	<div class="clear"></div>
</form>
<div class="woocommerce-notices-wrapper"></div>
<form name="checkout" method="post" class="checkout woocommerce-checkout" action="https://laurent.qodeinteractive.com/checkout/" enctype="multipart/form-data" novalidate="novalidate">

	
		
		<div class="col2-set" id="customer_details">
			<div class="col-1">
		<input type="hidden" name="wc_order_attribution_source_type" value="typein" />
        
        <input type="hidden" name="wc_order_attribution_referrer" value="https://laurent.qodeinteractive.com/landing/" />
        
        <input type="hidden" name="wc_order_attribution_utm_campaign" value="(none)" />
        
        <input type="hidden" name="wc_order_attribution_utm_source" value="(direct)" />
        <input type="hidden" name="wc_order_attribution_utm_medium" value="(none)" />
        <input type="hidden" name="wc_order_attribution_utm_content" value="(none)" />
        <input type="hidden" name="wc_order_attribution_utm_id" value="(none)" />
        <input type="hidden" name="wc_order_attribution_utm_term" value="(none)" />
        <input type="hidden" name="wc_order_attribution_utm_source_platform" value="(none)" />
        <input type="hidden" name="wc_order_attribution_utm_creative_format" value="(none)" />
        <input type="hidden" name="wc_order_attribution_utm_marketing_tactic" value="(none)" />
        <input type="hidden" name="wc_order_attribution_session_entry" value="https://laurent.qodeinteractive.com/" />
         <input type="hidden" name="wc_order_attribution_session_start_time" value="2026-02-19 21:04:15" />
         <input type="hidden" name="wc_order_attribution_session_pages" value="7" />
         <input type="hidden" name="wc_order_attribution_session_count" value="2" />
         <input type="hidden" name="wc_order_attribution_user_agent" value="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145.0.0.0 Safari/537.36" />
        </div>
        <div class="woocommerce-billing-fields">
	
		<h3>Billing details</h3>

	
	
	<div class="woocommerce-billing-fields__field-wrapper">
			<p class="form-row form-row-first validate-required" id="billing_first_name_field" data-priority="10"><label for="billing_first_name" class="">
      First name&nbsp;<abbr class="required" title="required">*</abbr></label><span class="woocommerce-input-wrapper">
      <input type="text" class="input-text " name="billing_first_name" id="billing_first_name" placeholder="" value="" autocomplete="given-name" />
      
      </span></p><p class="form-row form-row-last validate-required" id="billing_last_name_field" data-priority="20"><label for="billing_last_name" class="">
      Last name&nbsp;<abbr class="required" title="required">*</abbr></label><span class="woocommerce-input-wrapper">
      <input type="text" class="input-text " name="billing_last_name" id="billing_last_name" placeholder="" value="" autocomplete="family-name" />
      
      </span></p><p class="form-row form-row-wide" id="billing_company_field" data-priority="30"><label for="billing_company" class="">Company name&nbsp;
      <span class="optional">(optional)</span></label><span class="woocommerce-input-wrapper">
      <input type="text" class="input-text " name="billing_company" id="billing_company" placeholder="" value="" autocomplete="organization" />
      </span></p><p class="form-row form-row-wide address-field update_totals_on_change validate-required" id="billing_country_field" data-priority="40">
      <label for="billing_country" class="">Country / Region&nbsp;<abbr class="required" title="required">*</abbr></label>
      <span class="woocommerce-input-wrapper">
      
      <select name="billing_country" id="billing_country" class="country_to_state country_select select2-hidden-accessible" autocomplete="country" data-placeholder="Select a country / region…" data-label="Country / Region" tabindex="-1" aria-hidden="true">
      
      <option value="">Select a country / region…</option><option value="AF">Afghanistan</option>
      
     </select>
     </span>
     </p>
     

	</div>

			</div>

			<div class="col-2">
				<div class="woocommerce-shipping-fields">
	</div>
<div class="woocommerce-additional-fields">
	
	
		
			<h3>Additional information</h3>

		
		<div class="woocommerce-additional-fields__field-wrapper">
							<p class="form-row notes" id="order_comments_field" data-priority=""><label for="order_comments" class="">Order notes&nbsp;<span class="optional">(optional)</span></label><span class="woocommerce-input-wrapper"><textarea name="order_comments" class="input-text " id="order_comments" placeholder="Notes about your order, e.g. special notes for delivery." rows="2" cols="5"></textarea></span></p>					</div>

	
	</div>
			</div>
		</div>

		
		
		
	<h3 id="order_review_heading">Your order</h3>
	
	
	<div id="order_review" class="woocommerce-checkout-review-order">
		<table class="shop_table woocommerce-checkout-review-order-table">
	<thead>
		<tr>
			<th class="product-name">Product</th>
			<th class="product-total">Subtotal</th>
		</tr>
	</thead>
	<tbody>
						<tr class="cart_item">
					<td class="product-name">
						Seafood&nbsp;						 <strong class="product-quantity">×&nbsp;1</strong>											</td>
					<td class="product-total">
						<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>22.00</bdi></span>					</td>
				</tr>
								<tr class="cart_item">
					<td class="product-name">
						Pimms jug&nbsp;						 <strong class="product-quantity">×&nbsp;1</strong>											</td>
					<td class="product-total">
						<span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>22.00</bdi></span>					</td>
				</tr>
					</tbody>
	<tfoot>

		<tr class="cart-subtotal">
			<th>Subtotal</th>
			<td><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>44.00</bdi></span></td>
		</tr>

		
		
		
		
		
		<tr class="order-total">
			<th>Total</th>
			<td><strong><span class="woocommerce-Price-amount amount"><bdi><span class="woocommerce-Price-currencySymbol">£</span>44.00</bdi></span></strong> </td>
		</tr>

		
	</tfoot>
</table>

<div id="payment" class="woocommerce-checkout-payment">
			<ul class="wc_payment_methods payment_methods methods">
			<li>
	<div class="woocommerce-info">
		Sorry, it seems that there are no available payment methods. Please contact us if you require assistance or wish to make alternate arrangements.	</div>
</li>		</ul>
		<div class="form-row place-order">
		<noscript>
			Since your browser does not support JavaScript, or it is disabled, please ensure you click the <em>Update Totals</em> button before placing your order. You may be charged more than the amount stated above if you fail to do so.			<br/><button type="submit" class="button alt" name="woocommerce_checkout_update_totals" value="Update totals">Update totals</button>
		</noscript>

			<div class="woocommerce-terms-and-conditions-wrapper">
		<div class="woocommerce-privacy-policy-text"><p>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <a href="https://laurent.qodeinteractive.com/?page_id=3" class="woocommerce-privacy-policy-link" target="_blank">privacy policy</a>.</p>
</div>
			</div>
	
		
		<button type="submit" class="button alt" name="woocommerce_checkout_place_order" id="place_order" value="Place order" data-value="Place order">Place order</button>
		
		<input type="hidden" id="woocommerce-process-checkout-nonce" name="woocommerce-process-checkout-nonce" value="f12c0623e9" /><input type="hidden" name="_wp_http_referer" value="/?wc-ajax=update_order_review" />	</div>
</div>

	</div>

	
</form>

</div>					</div>
							</div>
		        	</div>
	
	</div>

</div> 
	</div>

      <Footer />
    </body>
  );
};

export default Checkout;