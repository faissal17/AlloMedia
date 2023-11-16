module.exports.User = class User {
  constructor({
    id,
    firstName = null,
    lastName = null,
    email = null,
    password = null,
    role = null,
    image = null,
    phone = null,
    address = null,
    gender = genders.NOT_SPECIFIED,
    meta = {},
  }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.role = role;
    this.image = image;
    this.phone = phone;
    this.address = address;
    this.gender = gender;
    this.meta = meta;
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
