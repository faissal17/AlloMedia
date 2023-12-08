import {validateConfirmPassword} from '../../../helpers/validations.js'
import { useState } from 'react'
import { validateCredentials } from '../../../helpers/validations/register.credentials.js'
import {RegisterAPI} from '../../../service/query/auth.js'
import useMutateHook from '../../../hooks/useMutations.jsx'
export const RegisterService = () => { 
  const [submet, setSubmet] = useState(false);
  const [register, setRegister] = useState({username: '',email: '',password: '',password_confirmation: ''});
  const [registerStatus, setRegisterStatus] = useState({
    username: {error: false,message: ''},
    email: {error: false,message: ''},
    password: {error: false,message: ''},
    password_confirmation: {error: false,message: ''},
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmet(true);
    const isValid =validateCredentials(register.email, register.password, register.username);
    setRegisterStatus({
      ...registerStatus,
      email: { error: isValid[0].email.error, message: isValid[0].email.message },
      password: { error: isValid[0].password.error, message: isValid[0].password.message },
      username: { error: isValid[0].username.error, message: isValid[0].username.message },
    });

    const password_confirmationValidate = validateConfirmPassword(register.password_confirmation, register.password);
    if (isValid && !password_confirmationValidate?.error) {
     createUserMutation.mutate(register);
    }
  };

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
    const isValid = validateCredentials(register.email, register.password, register.username);
    setRegisterStatus({
      ...registerStatus,
      email: { error: isValid[0].email.error, message: isValid[0].email.message },
      password: { error: isValid[0].password.error, message: isValid[0].password.message },
      username: { error: isValid[0].username.error, message: isValid[0].username.message },
    });
  };
  const createUserMutation=useMutateHook(RegisterAPI())
  //validate credentials
  return {
    createUserMutation,
    submet,
    register,
    registerStatus,
    handleSubmit,
    handleRegisterChange,
  }
}


