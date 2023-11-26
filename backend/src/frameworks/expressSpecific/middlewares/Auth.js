const jwtToken = require("../../../config/jsonWebToken");

class auth {
  static isManager = async (req, res, next) => {
    const token = req.cookies._cks_ui;
    if (!token)
      return res.status(401).json({
        status: "error",
        message: "please login first",
      });
    const { role } = await jwtToken.verify(token);
    switch (role.role) {
      case "MANAGER":
        next();
        break;

      default:
        return res.status(401).json({
          status: "error",
          message: "you are not authorized",
        });
    }
  };

  static isDeliveryPerson = async (req, res, next) => {
    const token = req.cookies._cks_ui;
    const { role } = await jwtToken.verify(token);
    switch (role.role) {
      case "LIVREUR":
        next();
        break;

      default:
        return res.status(401).json({
          status: "error",
          message: "you are not authorized",
        });
    }
  };

  static isAdmin = async (req, res, next) => {
    const token = req.cookies._cks_ui;
    const { role } = await jwtToken.verify(token);
    switch (role.role) {
      case "ADMIN":
        next();
        break;

      default:
        return res.status(401).json({
          status: "error",
          message: "you are not authorized",
        });
    }
  };
}

module.exports = auth;
