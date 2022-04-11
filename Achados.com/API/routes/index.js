import { Router } from "express";

import authMidleware from "../midlewares/authMidleware.js";
import requestRouter from "./Request.js";
import historicRouter from "./Historic.js";
import { loginController } from "../controllers/Login.js";

const router = new Router();

router.get("healths", (req, res) => res.status(200).json({ status: "UP" }));
router.post("/login", loginController);
router.use("/request", requestRouter);
router.use("/historic", historicRouter);

export default router;
