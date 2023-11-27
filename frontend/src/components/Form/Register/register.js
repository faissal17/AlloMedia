import { validateConfirmPassword } from "../../../helpers/validations.js";
import { useEffect, useState } from "react";
import { validateCredentials } from "../../../helpers/validations/register.credentials.js";
import { RegisterAPI } from "../../../service/query/auth.js";
import useMutateHook from "../../../hooks/useMutations.jsx";
import { useRegisterMutation } from "../../../redux/service/auth/authApi.js";
import io from 'socket.io-client'
import { useNavigate } from "react-router-dom";
export const RegisterService = (socket) => {
  const navigate=useNavigate()
  const [submet, setSubmet] = useState(false);
  const [register, setRegister] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    mobile: "",
    password: "",
    password_confirmation: "",
  });
  const [registerStatus, setRegisterStatus] = useState({
    first_name: { error: false, message: "" },
    last_name: { error: false, message: "" },
    username: { error: false, message: "" },
    email: { error: false, message: "" },
    mobile: { error: false, message: "" },
    password: { error: false, message: "" },
    password_confirmation: { error: false, message: "" },
  });

  const [
    registerUser,
    {
      data: registerData,
      isSuccess: isregisterSuccess,
      isError: isregisterError,
      error: registerError,
    },
  ] = useRegisterMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmet(true);
    const isValid = validateCredentials(
      register.first_name,
      register.last_name,
      register.email,
      register.mobile,
      register.password,
      register.username
    );
    setRegisterStatus({
      ...registerStatus,
      first_name: {
        error: isValid[0].first_name.error,
        message: isValid[0].first_name.message,
      },
      last_name: {
        error: isValid[0].last_name.error,
        message: isValid[0].last_name.message,
      },
      email: {
        error: isValid[0].email.error,
        message: isValid[0].email.message,
      },
      mobile: {
        error: isValid[0].mobile.error,
        message: isValid[0].mobile.message,
      },
      password: {
        error: isValid[0].password.error,
        message: isValid[0].password.message,
      },
      username: {
        error: isValid[0].username.error,
        message: isValid[0].username.message,
      },
    });

    const password_confirmationValidate = validateConfirmPassword(
      register.password_confirmation,
      register.password
    );
    if (isValid && !password_confirmationValidate?.error) {
      // createUserMutation.mutate(register);
      // console.log(register);
      registerUser(register);
    }
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
    const isValid = validateCredentials(
      register.first_name,
      register.last_name,
      register.email,
      register.mobile,
      register.password,
      register.username
    );
    setRegisterStatus({
      ...registerStatus,
      first_name: {
        error: isValid[0].first_name.error,
        message: isValid[0].first_name.message,
      },
      last_name: {
        error: isValid[0].last_name.error,
        message: isValid[0].last_name.message,
      },
      email: {
        error: isValid[0].email.error,
        message: isValid[0].email.message,
      },
      mobile: {
        error: isValid[0].mobile.error,
        message: isValid[0].mobile.message,
      },
      password: {
        error: isValid[0].password.error,
        message: isValid[0].password.message,
      },
      username: {
        error: isValid[0].username.error,
        message: isValid[0].username.message,
      },
    });
  };

  useEffect(() => {
    if (isregisterSuccess) {
      // console.log(registerData);
      // console.log('mother fuckerssssssssssssssssssss')
      const userConnect=()=>{
        socket.emit("user_registration",register.first_name)
      }
      userConnect()
      // navigate('/')

    }
  }, [isregisterSuccess]);
  const createUserMutation = useMutateHook(RegisterAPI());
  //validate credentials
  return {
    createUserMutation,
    submet,
    register,
    registerStatus,
    handleSubmit,
    handleRegisterChange,
  };
};
