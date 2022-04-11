import { Router } from "express";
import { getHistoric, postHistoric } from "../controllers/Historic.js";

const router = new Router();

router.get("/:id", (req, res) => getHistoric(req, res));
router.post("/", (req, res) => postHistoric(req, res));

export default router;
