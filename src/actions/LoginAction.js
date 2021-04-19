import axios from "axios";
import urls from "../urls/urls";
import { toast } from "react-toastify";

export const LoginAction = (data, setLoading) => {
  if (typeof window == undefined) {
    return;
  }

  if (data.userName == "" || data.userName.length < 3) {
    toast.warn("Please enter username");
    return;
  }
  if (data.id == "") {
    toast.warn("Please enter id");
    return;
    }  

  setLoading(true);
  return axios
    .post(`${urls.sls}/login`, { ...data})
    .then((response) => {
      setLoading(false);
      if (response.data.result === false) {
        return response.data;
      } else {
        localStorage.setItem(
          "com.tdcx.token",
          JSON.stringify(response.data.data.token)
        );
        localStorage.setItem(
          "com.tdcx.userName",
          JSON.stringify(response.data.data.userName)
        );
        return response.data;
      }
    })
    .catch((err) => {
      console.log(err);
      toast.error("Invalid username and/or id.");
      setLoading(false);
      return false;
    });
};

export const Logout = () => {
  localStorage.clear();
  window.open("/", "_self");
};
