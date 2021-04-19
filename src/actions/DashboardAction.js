import axios from "axios";
import urls from "../urls/urls";
import { header } from "../urls/utils";
import { toast } from "react-toastify";

export const getDashboardAction = (data, setLoading) => {
  if (typeof window == undefined) {
    return;
  }
  setLoading(true);
  return axios
    .post(`${urls.sls}/dashboard`, { ...data}, { headers: header() })
    .then((response) => {
      setLoading(false);
        return response.data;
    })
    .catch((err) => {
      console.log(err);
      toast.error("Invalid token.");
      setLoading(false);
      return false;
    });
};

export const getTasksAction = (data, setLoading) => {
  if (typeof window == undefined) {
    return;
  }
  setLoading(true);
  return axios
    .get(`${urls.sls}/tasks`, { headers: header() })
    .then((response) => {
      setLoading(false);
        return response.data;
    })
    .catch((err) => {
      console.log(err);
      toast.error("Invalid token.");
      setLoading(false);
      return false;
    });
};

export const updateTasksAction = (data, setLoading) => {
  if (typeof window == undefined) {
    return;
  }
  setLoading(true);
  return axios
    .put(`${urls.sls}/tasks`, {...data}, { headers: header() })
    .then((response) => {
      setLoading(false);
        return response.data;
    })
    .catch((err) => {
      console.log(err);
      toast.error("Invalid token.");
      setLoading(false);
      return false;
    });
};

export const deleteTasksAction = (data, setLoading) => {
  if (typeof window == undefined) {
    return;
  }
  setLoading(true);
  return axios
    .delete(`${urls.sls}/tasks`, { headers: header(), data })
    .then((response) => {
      setLoading(false);
        return response.data;
    })
    .catch((err) => {
      console.log(err);
      toast.error("Invalid token.");
      setLoading(false);
      return false;
    });
};


export const addTasksAction = (data, setLoading) => {
    if (typeof window == undefined) {
      return;
    }
    setLoading(true);
    return axios
      .post(`${urls.sls}/tasks`, {...data}, { headers: header() })
      .then((response) => {
        setLoading(false);
          return response.data;
      })
      .catch((err) => {
        console.log(err);
        toast.error("Invalid token.");
        setLoading(false);
        return false;
      });
  };