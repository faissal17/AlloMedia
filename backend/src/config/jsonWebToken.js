const jwt = require("jsonwebtoken");
class jsonWebToken {
  static async sign(payload, secret, options) {
    try {
      const token = await jwt.sign(payload, secret, options);
      return token;
    } catch (err) {
      console.log(err);
    }
  }
  static async verify(token, secret, options) {
    try {
      const decoded = await jwt.verify(token, secret, options);
      return decoded;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = jsonWebToken;
