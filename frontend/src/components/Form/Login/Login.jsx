import "./login.css";
import CustomInput from "../../common/Input";
import { Link } from "react-router-dom";
import { FormButton } from "../../common/Buttons";
import { Toaster } from "react-hot-toast";
import { LoginService } from "./login";
import loginInputs from "../../../constants/login";
import { useLoginMutation } from "../../../redux/service/auth/authApi";
import { useEffect } from "react";

//import { validateEmail, validatePassword } from '../../helpers/validations'
export const Login = () => {
  //react query
  const loginservice = LoginService();
  const {
    submet,
    handleSubmit,
    handleLoginChange,
    loginUserMutation,
    loginStatus,
  } = loginservice;

  // const [
  //   loginUser,
  //   {
  //     data: loginData,
  //     isSuccess: isLoginSuccess,
  //     isError: isLoginError,
  //     error: loginError,
  //   },
  // ] = useLoginMutation();

  // useEffect(() => {
  //   if (isLoginSuccess) {
  //     console.log(loginData);
  //   }
  // }, [isLoginSuccess]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   console.log(e.target.email.value, e.target.password.value);
  //   await loginUser({
  //     email: e.target.email.value,
  //     password: e.target.password.value,
  //   });
  // };
  return (
    <form onSubmit={handleSubmit} className=" my-4 flex flex-col gap-4">
      {loginInputs.map((item, index) => {
        return (
          <CustomInput
            key={index}
            icon={<item.icon />}
            type={item.type}
            name={item.name}
            id={item.id}
            placeholder={item.placeholder}
            onChange={handleLoginChange}
            className={`${item.className}`}
            submit={submet}
            validate={loginStatus[item.name].error}
            errorMessage={loginStatus[item.name].message}
          />
        );
      })}
      <Toaster position="top-right" reverseOrder={false}>
        {/* Add any toasts you want to display when an error occurs */}
      </Toaster>
      <FormButton disabled={loginUserMutation.isLoading}>
        {loginUserMutation.isLoading ? "Login..." : "Login"}
      </FormButton>
      <div className=" text-white w-[80%] mx-auto hover:underline transition text-sm">
        <Link to="/forgotPassword">Forgot password</Link>
      </div>
      <div className=" flex items-center gap-2 w-[80%] mx-auto">
        <span className=" h-[1px] w-[49%] bg-white mt-1"></span>
        <span className=" text-white">or</span>
        <span className=" h-[1px] w-[49%] bg-white mt-1"></span>
      </div>
      <div className=" text-white w-[80%] mx-auto hover:underline transition text-sm">
        <Link to="/">Back home</Link>
      </div>
    </form>
  );
};
