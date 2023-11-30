const jwt = require("jsonwebtoken");
class jsonWebToken {
  static async sign(payload) {
    console.log('payload')
    // console.làg(payload)
    try {
      const token = await jwt.sign(payload, process.env.SECRET_KEY_TOKEN, {
        expiresIn: "1d",
      });
      return token;
    } catch (err) {
      console.log(err);
    }
  }
  static async verify(token) {
    try {
      const decoded = await jwt.verify(token, process.env.SECRET_KEY_TOKEN);
      return decoded;
    } catch (err) {
      console.log(err);
    }
  }

}

module.exports = jsonWebToken;
