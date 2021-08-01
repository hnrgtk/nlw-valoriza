import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { CreateTagController } from "./controllers/CreateTagController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListTagController } from "./controllers/ListTagController";
import { ListUserController } from "./controllers/ListUserController";
import { ListUserReceivedComplimentController } from "./controllers/ListUserReceivedComplimentController";
import { ListUserSendComplimentController } from "./controllers/ListUserSendComplimentController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();

const listUserSendComplimentController = new ListUserSendComplimentController();
const listUserReceivedComplimentController =
  new ListUserReceivedComplimentController();

const listTagController = new ListTagController();
const listUserController = new ListUserController();

router.post("/user", createUserController.handle);
router.post(
  "/tags",
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post(
  "/compliment",
  ensureAuthenticated,
  createComplimentController.handle
);
router.post("/login", authenticateUserController.handle);

router.get(
  "/user/compliment/send",
  ensureAuthenticated,
  listUserSendComplimentController.handle
);
router.get(
  "/user/compliment/received",
  ensureAuthenticated,
  listUserReceivedComplimentController.handle
);

router.get("/tags", ensureAuthenticated, listTagController.handle);

router.get("/user", ensureAuthenticated, listUserController.handle);

export { router };
