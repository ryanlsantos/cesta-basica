const express = require("express");

const routes = express.Router();
const UserController = require("./controllers/UserController");

routes.post("/user", UserController.store);
routes.get("/users", UserController.list);
routes.get("/users/:id", UserController.index);
routes.put("/user/:id", UserController.update);
routes.delete("/delete/:id", UserController.destroy);

module.exports = routes;
