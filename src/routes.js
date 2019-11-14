const { Router } = require("express");

const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");

const authMiddleware = require("./middlewares/auth");

const routes = Router();

routes.get("/users/:email", UserController.index);
routes.post("/sessions", SessionController.store);
routes.post("/users", UserController.store);
routes.get("/list", UserController.list);

routes.use(authMiddleware);
routes.delete("/users/:id", UserController.destroy);
routes.get("/teste", (req, res) => res.json({ ok: true }));

module.exports = routes;
