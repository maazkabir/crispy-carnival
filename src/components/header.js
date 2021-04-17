import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { navigate, Link } from "gatsby";
import { LoginAction, Logout } from "../actions/LoginAction";
import _ from "lodash";

function Header() {
 

  return (
    <header
      className={`w-full z-20 py-4 fixed bg-white shadow`}
      style={{ transition: "background .2s linear" }}
    >
      <div
        className={`w-full container mx-auto flex flex-wrap justify-between items-center mt-0 md:px-3 px-5`}
      >
       Header here
      </div>
    </header>
  );
}

// Header.propTypes = {
//   showLogin: PropTypes.bool
// };

export default Header;
