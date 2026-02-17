import React, { useEffect, useState } from "react";
import axios from "axios";

import "./style.css";

import AppLoader from "./AppLoader";

import Header2 from "./Header2";
import Header3 from "./Header3";
import Banner from "./Banner";


const Home = () => {
  const [loading, setLoading] = useState(true);



  return (
    <>
      {/* <Header3 /> */}
    <Banner />
     {/* <Footer /> */}
    </>
  );
};

export default Home;
