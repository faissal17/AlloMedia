import {
  validateEmail,
  validatePassword,
  validateUsername,
  validateFirstName,
  validateLastName,
  validateMobile,
} from "../validations";

export const validateCredentials = (
  first_name,
  last_name,
  email,
  mobile,
  password,
  username
) => {
  const emailValidate = validateEmail(email);
  const passwordValidate = validatePassword(password);
  const usernameValidate = validateUsername(username);
  const firstNameValidate = validateFirstName(first_name);
  const lastNameValidate = validateLastName(last_name);
  const mobileValidate = validateMobile(mobile);

  return [
    {
      first_name: {
        error: firstNameValidate.error,
        message: firstNameValidate.message,
      },
      last_name: {
        error: lastNameValidate.error,
        message: lastNameValidate.message,
      },
      mobile: {
        error: mobileValidate.error,
        message: mobileValidate.message,
      },
      email: {
        error: emailValidate.error,
        message: emailValidate.message,
      },
      password: {
        error: passwordValidate.error,
        message: passwordValidate.message,
      },
      username: {
        error: usernameValidate.error,
        message: usernameValidate.message,
      },
    },
  ];
};
