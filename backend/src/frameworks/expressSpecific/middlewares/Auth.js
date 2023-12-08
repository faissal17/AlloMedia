const jwtToken = require("../../../config/jsonWebToken");

class auth {
  static isManager = async (req, res, next) => {
    const token = req.cookies._cks_ui;
    console.log('fucking token')
    console.log(token)
    if (!token)
      return res.status(401).json({
        status: "error",
        message: "please login first",
      });
    const { _id, role } = await jwtToken.verify(token);
    console.log('fucking role')
    console.log(role)
    switch (role.role) {
      case "MANAGER":
        req.user = _id;
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

  static isAuthenticated = async (req, res, next) => {
    const token = req.cookies._cks_ui;
    if (!token)
      return res.status(401).json({
        status: "error",
        message: "Please log in first",
      });

    try {
      const { role } = await jwtToken.verify(token);
      req.userRole = role.role; // Optional: Store user role in request for future use
      next();
    } catch (error) {
      return res.status(401).json({
        status: "error",
        message: "Invalid or expired token",
      });
    }
  };
}

module.exports = auth;
