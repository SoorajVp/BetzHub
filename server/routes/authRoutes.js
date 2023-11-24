const { Signup, Login } = require("../controller/authController");

module.exports = (app) => {
  app.post("/auth/register", Signup);
  app.post("/auth/login", Login);
};
