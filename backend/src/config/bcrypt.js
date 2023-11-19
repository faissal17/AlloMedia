const bcryptjs = require("bcryptjs");
class bcrypt {
  static async hashPassword(password) {
    try {
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);
      return hashedPassword;
    } catch (err) {
      console.log(err);
    }
  }
  static async comparePassword(password, hashedPassword) {
    try {
      const isMatch = await bcryptjs.compare(password, hashedPassword);
      return isMatch;
    } catch (err) {
      console.log(err);
    }
  }
}

module.exports = bcrypt;
