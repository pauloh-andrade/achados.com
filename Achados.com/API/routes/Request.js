import { Router } from "express";
import {
	getAllRequests,
	getRequestById,
	postRequest,
	putRequest,
} from "../controllers/Request.js";

const router = new Router();

router.get("/", (req, res) => getAllRequests(res));
router.get("/:id", (req, res) => getRequestById(req, res));
router.post("/", (req, res) => postRequest(req, res));
router.put("/:id", (req, res) => putRequest(req, res));

export default router;
