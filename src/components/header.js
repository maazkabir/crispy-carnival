import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { navigate, Link } from "gatsby";
import { LoginAction, Logout } from "../actions/LoginAction";
import _ from "lodash";
import profileImage from "../images/donn-gabriel-baleva.png"

function Header() {
 

  return (
    <header
      className={`w-full z-20 py-4 fixed bg-white shadow`}
      style={{ transition: "background .2s linear" }}
    >
      <div
        className={`w-full container mx-auto flex flex-wrap justify-between items-center mt-0 md:px-3 px-5 text-title-color`}
      >
       <div className={`flex flex-row justify-between`} style={{ width:"1.75rem" }}>
        <img src={profileImage}/>
         <p className={`ml-4`}>Ali</p>
        </div>
       <p>
         Logout
       </p>
      </div>
    </header>
  );
}

// Header.propTypes = {
//   showLogin: PropTypes.bool
// };

export default Header;
