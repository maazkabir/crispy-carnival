import axios from "axios";
import urls from "../urls/urls";
import { toast } from "react-toastify";

export const LoginAction = (data, setLoading) => {
  if (typeof window == undefined) {
    return;
  }

  if(!data.hasOwnProperty("userToken")){
    if (data.username == "" || data.username.length < 3) {
      toast.warn("Please enter username");
      return;
    }
    if (data.password == "") {
      toast.warn("Please enter password");
      return;
    }  
  }

  setLoading(true);
  return axios
    .post(`${urls.sls}/loginUser`, { ...data})
    .then((response) => {
      setLoading(false);
      if (response.data.result === false) {
        return response.data;
      } else {
        sessionStorage.setItem(
          "com.tdcx.userKey",
          JSON.stringify(response.data.userInfo)
        );
        sessionStorage.setItem(
          "com.tdcx.userSession",
          JSON.stringify(response.data.sessionId)
        );
        return response.data;
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error("Invalid username and/or password.");
      setLoading(false);
      return false;
    });
};

export const Logout = () => {
  sessionStorage.clear();
  window.open("/", "_self");
};
