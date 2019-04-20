const routes = require("express").Router();

// const { User } = require("./app/models");

const SessionController = require("./app/controllers/SessionController");

const authMiddleware = require("./app/middlewares/auth");

routes.post("/sessions", SessionController.store);

routes.get("/", (req, res) => res.send("Hello"));

routes.use(authMiddleware);

routes.get("/dashboard", (req, res) => {
  return res.status(200).send();
});

// routes.get("/user", async (req, res) => {
//   const user = await User.create({
//     name: "Eduardo2",
//     email: "edua2@gmail.com",
//     password_hash: "123"
//   });

//   return res.json({ user });
// });

module.exports = routes;
