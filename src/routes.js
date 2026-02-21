
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import GoogleAuthHandler from "./GoogleAuthHandler";
import Selling from "./pages/Selling";
import ShopCategory from "./pages/ShopCategory";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Policy from "./pages/Policy";
import ShipPolicy from "./pages/ShipPolicy";
import RefPolicy from "./pages/RefPolicy";
import Terms from "./pages/Terms";
import Contact from "./pages/Contact";
import OrderSuccess from "./pages/OrderSuccess";
import OrderFailed from "./pages/OrderFailed";
import Category from "./pages/Category";
import Single2 from "./pages/Single2";
import Cart2 from "./pages/Cart2";
import Checkout2 from "./pages/Checkout2";
import ContinuePay from "./pages/Continue";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import ParentCat from "./pages/ParentCat";
import Shop from "./pages/Shop";
import Single from "./pages/Single";
import WishList from "./pages/WishList";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Booking from "./pages/Booking";
import Coming from "./pages/Coming";
import Menu from "./pages/Menu";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";

import Header2 from "./pages/Header2";


const routes = [
  { path: "/oauth-callback", element: <GoogleAuthHandler /> },


  {
    path: "/", 
    element: <Home />,
  },
  {
    path: "/header", 
    element: <Header2 />,
  },
  {
    path: "/shop", 
    element: <Shop />,
  },
  {
    path: "/single", 
    element: <Single />,
  },
  {
    path: "/cart", 
    element: <Cart />,
  },
  {
    path: "/checkout", 
    element: <Checkout />,
  },
  {
    path: "/order-tracking", 
    element: <Orders />,
  },
  {
    path: "/wishlist", 
    element: <WishList />,
  },
  {
    path: "/my-account", 
    element: <Login />,
  },
  {
    path: "/about-us", 
    element: <About />,
  },
  {
    path: "/booking", 
    element: <Booking />,
  },
  {
    path: "/contact", 
    element: <Contact />,
  },
  {
    path: "/coming-soon", 
    element: <Coming />,
  },
  {
    path: "/our-menu", 
    element: <Menu />,
  },
  {
    path: "/faq", 
    element: <Faq />,
  },
  {
    path: "/blog-post", 
    element: <Blog />,
  },
  {
    path: "/single-blog-post", 
    element: <SingleBlog />,
  },

//   {
//  path: "/single-product/:id",
//     element: <Single />,
//   },

 

   

];

export default routes;
