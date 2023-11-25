const { Signup, Login, SuperAdminLogin } = require("../controller/authController");

module.exports = (app) => {
  app.post("/auth/register", Signup);
  app.post("/auth/login", Login);

  app.post("/auth/super-admin/login", SuperAdminLogin)
};
