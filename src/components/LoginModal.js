import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { navigate, Link } from "gatsby";
import { LoginAction, Logout } from "../actions/LoginAction";
import _ from "lodash";

function LoginModal() {
 

  return (
      <div style={{ height: "249px", width:"296px"}} className="bg-white shadow-md rounded-lg px-1 py-1 flex flex-col absolute self-center items-center content-center inset-0 m-auto">
        <p className="py-4 pr-6 self-start" style={{color:"#537178", fontSize:"20px", textAlign:"left", paddingLeft: "14%"}}>
          Login
        </p>
          <div className="mb-3">
            <input className="shadow appearance-none border bg-light-gray rounded-lg w-full py-2 px-3 text-dark-gray font-medium" id="username" type="text" placeholder="Id"/>
          </div>
          <div className="mb-2">
            <input className="shadow appearance-none border border-red rounded-lg w-full py-2 px-3 text-dark-gray bg-light-gray mb-3 font-medium " id="password" type="password" placeholder="Name"/>
          </div>
          <div className="w-3/4 items-center justify-between">
            <button className="bg-light-blue hover:bg-dark-blue text-white font-medium w-full py-2 px-4 rounded" type="button">
              Login
            </button>
          </div>
      </div>
  );
}

export default LoginModal;
