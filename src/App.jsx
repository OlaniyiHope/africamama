
import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import { GoogleOAuthProvider } from "@react-oauth/google"; // Import the provider
import { useEffect } from "react";
import "./app.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CartProvider } from "./context/CartContext";
import { AuthContextProvider } from "./context/AuthContext";
function App() {
  const content = useRoutes(routes);
  const navigate = useNavigate();

useEffect(() => {
  const imageUrls = [
    "/wp-content/uploads/2022/01/Image-1.jpg",
    "/wp-content/uploads/2022/01/Image-2.jpg",
    "/wp-content/uploads/2022/01/Image-3.jpg",
    "/wp-content/uploads/2022/01/Image-4.jpg",
    "/wp-content/uploads/2022/01/Image-5.jpg",
    "/wp-content/uploads/2022/01/Image-6.jpg",
  ];

  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
}, []);
  return (
    <div>
  

          <CartProvider>
              <AuthContextProvider>


      
          <GoogleOAuthProvider clientId="383086754449-8p3mg46a39tsepkgd47uof98qu32cmn5.apps.googleusercontent.com">
            {content} {/* Wrap routes with a single AuthProvider */}
          </GoogleOAuthProvider>
                  </AuthContextProvider>
          </CartProvider>
           <ToastContainer position="top-right" autoClose={2000} />

   
    </div>
  );
}

export default App;
