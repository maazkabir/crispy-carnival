import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import Header from "./header";
import { Helmet } from "react-helmet";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { navigate } from "gatsby-link";

function Layout({ children, noHeader, showOverlay }) {
  
  useEffect(() => {
    if (typeof window == undefined) {
      return;
    }

    let token = JSON.parse(localStorage.getItem("com.tdcx.token"));
    
    if(!token && window.location.pathname !== "/"){
      navigate("/");
    }

  }, [])
  
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <ToastContainer position="top-center" />
      <div className="flex flex-col font-sans min-h-screen text-gray-900">
        {!noHeader && 
          <Header />
        }
        {showOverlay && 
          <div className="absolute w-full h-full bg-black" style={{opacity: 0.4}} />
        }
        <main className="w-full px-8 py-20" style={{ fontFamily: "Montserrat"}}>
          {children}
        </main>
      </div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
