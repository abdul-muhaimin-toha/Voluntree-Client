import axios from "axios";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: "https://voluntree-server.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  // const { logout } = useAuth();
  // const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        // if (error.response.status == 401 || error.response.status == 403) {
        //   logout()
        //     .then(() => {
        //       navigate("/sign-in");
        //     })
        //     .catch((err) => {
        //       console.log(err.message);
        //     });
        // }
        return Promise.reject(error);
      },
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
