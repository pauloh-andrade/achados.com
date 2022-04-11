import jwt from "jsonwebtoken";
import config from "../config/auth.js";
import { promisify } from "util";

const authMidleware = async (req, res, next) => {
	const auth = req.headers.authorization;

	if (!auth) {
		return res.status(401).json({
			title: "Error",
			code: 130,
			message: "1",
		});
	}
	const [, token] = auth.split(" ");

	try {
		const decoded = await promisify(jwt.verify)(token, config.secret);

		if (!decoded) {
			return res.status(401).json({
				title: "Error",
				code: 130,
				message: "2",
			});
		} else {
			req.id_admin = decoded.id;
			next();
		}
	} catch (error) {
		return res.status(401).json({
			title: "Error",
			code: 130,
			message: "3",
		});
	}
};

export default authMidleware;
