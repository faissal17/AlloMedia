export const validateEmail = (email) => {
  //check if email is empty
  if (!email)
    return {
      error: true,
      message: "Email cannot be empty",
    };
  //check if email is valid
  const re = /\S+@\S+\.\S+/;
  if (!re.test(email))
    return {
      error: true,
      message: "Email address is invalid",
    };
  return {
    error: false,
    message: "Success email",
  };
};

export const validatePassword = (password) => {
  //check if password is empty
  if (!password)
    return {
      error: true,
      message: "Password cannot be empty",
    };
  //if password has less than 8 characters
  if (password.length < 8)
    return {
      error: true,
      message: "Password should be at least 8 characters long",
    };
  //if password has only letters error
  if (password.match(/^[a-zA-Z]+$/))
    return {
      error: true,
      message:
        "Password should contain at least one number and one special character",
    };
  //if password has only numbers error
  if (password.match(/^[0-9]+$/))
    return {
      error: true,
      message:
        "Password should contain at least one letter and one special character",
    };
  //if password has only special characters error
  if (password.match(/^[!@#$%^&_*]+$/))
    return {
      error: true,
      message: "Password should contain at least one letter and one number",
    };
  //if password has only letters and numbers error
  if (password.match(/^[a-zA-Z0-9]+$/))
    return {
      error: true,
      message: "Password should contain at least one special character",
    };
  //if password has only letters and special characters error
  if (password.match(/^[a-zA-Z!@#$%^&*]+$/))
    return {
      error: true,
      message: "Password should contain at least one number",
    };
  //if password has only numbers and special characters error
  if (password.match(/^[0-9!@#$%^&*]+$/))
    return {
      error: true,
      message: "Password should contain at least one letter",
    };
  //if password has letters, numbers and special characters error
  if (password.match(/^[a-zA-Z0-9!@#$_%^&*]+$/))
    return {
      error: false,
      message: "Success password",
    };
};

export const validateConfirmPassword = (confirmPassword, password) => {
  //check if confirm password is empty
  if (!confirmPassword)
    return {
      error: true,
      message: "Confirm password cannot be empty",
    };
  //check if confirm password matches password
  if (confirmPassword !== password)
    return {
      error: true,
      message: "Passwords do not match",
    };
  return {
    error: false,
    message: "Success confirm password",
  };
};

export const validateUsername = (username) => {
  //check if username is empty
  if (!username)
    return {
      error: true,
      message: "Username cannot be empty",
    };
  //username only characters lowercase  min 3 max 15
  if (!username.match(/^[a-zA-Z]+$/))
    return {
      error: true,
      message: "Username is invalid",
    };
  return {
    error: false,
    message: "Success username",
  };
};

export const validateMobile = (mobile) => {
  //check if mobile is empty
  if (!mobile)
    return {
      error: true,
      message: "Mobile cannot be empty",
    };
  //check if mobile is valid
  if (!mobile.match(/^[0-9]{10}$/))
    return {
      error: true,
      message: "Mobile number is invalid",
    };
  return {
    error: false,
    message: "Success mobile",
  };
};

export const validateFirstName = (firstName) => {
  //check if first name is empty
  if (!firstName)
    return {
      error: true,
      message: "First name cannot be empty",
    };
  //check if first name is valid
  if (!firstName.match(/^[a-zA-Z]+$/))
    return {
      error: true,
      message: "First name is invalid",
    };
  return {
    error: false,
    message: "Success first name",
  };
};

export const validateLastName = (lastName) => {
  //check if last name is empty
  if (!lastName)
    return {
      error: true,
      message: "Last name cannot be empty",
    };
  //check if last name is valid
  if (!lastName.match(/^[a-zA-Z]+$/))
    return {
      error: true,
      message: "Last name is invalid",
    };
  return {
    error: false,
    message: "Success last name",
  };
};
