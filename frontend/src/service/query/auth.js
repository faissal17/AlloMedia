import { useNavigate } from "react-router-dom";
import APIClient from "../api.js";
import { useQueryClient } from "react-query";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const apiClient = new APIClient("/register");

export const RegisterAPI = () => {
  const queryClient = useQueryClient() 
  const navigate=useNavigate();
  return {
    mutationFn: data => {
      return apiClient.post(data);
    },
    onError: (error) => {
      //handle error
      console.log(error)
    },
    onSuccess: (data) => {
      //handle success
      queryClient.setQueryData(["users", data.saveUser], data)
      queryClient.invalidateQueries(["users"], { exact: true })
      navigate('/verifyEmail')
    },
  };
};

export const LoginAPI = () => {
  const queryClient = useQueryClient() 
  const navigate=useNavigate();
  return {
    mutationFn: data => {
      return apiClient.post(data);
    },
    onError: (error) => {
      //handle error
      console.log(error)
      toast.error(error.response.data.message);
    },
    onSuccess: (data) => {
      //handle success
      queryClient.setQueryData(["login-users", data.saveUser], data)
      queryClient.invalidateQueries(["login-users"], { exact: true })
      localStorage.setItem('token',data.data.token)
      Cookies.set('token', data.data.token, { httpOnly: true });
      navigate('/')
    },
  };
};

