module.exports.User = class User {
  constructor({
    id,
    first_name=null,
    last_name=null,
    username=null,
    email=null,
    password=null, 
    mobile=null,
  }) {
    this.id = id;
    this.username=username
    this.first_name = first_name;
    this.last_name= last_name;
    this.email = email;
    this.password = password;
    this.mobile = mobile;
  }
};

const genders = {
  NOT_SPECIFIED: 0,
  FEMALE: 1,
  MALE: 2,
};

module.exports.userConstants = {
  genders,
};
