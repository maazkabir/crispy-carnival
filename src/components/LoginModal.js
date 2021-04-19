import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { navigate, Link } from "gatsby";
import { LoginAction } from "../actions/LoginAction";
import _ from "lodash";

function LoginModal() {
  const [loading, setLoading] = useState(false);
  const [userName, setUserName] = useState("");
  const [id, setId] = useState("");

  const handleLogin = () => {
    const request = {
      id,
      userName
    };
    (async () => {
      setLoading(true);
      const response = await LoginAction(request, setLoading);
      if(response.hasOwnProperty("result") && response.result){
        navigate("dashboard");
      }
    })();
  };

  return (
      <div style={{ height: "249px", width:"296px"}} className="bg-white shadow-md rounded-lg px-1 py-1 flex flex-col absolute self-center items-center content-center inset-0 m-auto">
        <p className="py-4 pr-6 self-start text-title-color" style={{fontSize:"20px", textAlign:"left", paddingLeft: "14%"}}>
          Login
        </p>
          <div className="mb-3">
            <input onChange={(e)=> setUserName(e.target.value)} className="shadow appearance-none border bg-light-gray rounded-lg w-full py-2 px-3 text-dark-gray font-medium" id="username" type="text" placeholder="Name"/>
          </div>
          <div className="mb-2">
            <input  onChange={(e)=> setId(e.target.value)} className="shadow appearance-none border border-red rounded-lg w-full py-2 px-3 text-dark-gray bg-light-gray mb-3 font-medium " id="id" type="text" placeholder="Id"/>
          </div>
          <div className="w-3/4 items-center justify-between">
            <button onClick={()=> handleLogin()} className="bg-light-blue hover:bg-dark-blue text-white font-medium w-full py-2 px-4 rounded" type="button">
              Login
            </button>
          </div>
      </div>
  );
}

export default LoginModal;
