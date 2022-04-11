import Admin from "../models/Admin.js";
import jwt from "jsonwebtoken";
import config from "../config/auth.js";

const loginController = async (req, res) => {
	const { login, password } = req.body;
	const userExist = await Admin.findOne({ where: { login } });

	if (!userExist) {
		console.log("asdas");
		return res.status(400).json({
			title: "Error",
			message: "User does not exist",
		});
	}

	if (userExist.password != password) {
		return res.status(400).json({
			title: "Error",
			message: "User does not exist",
		});
	}

	return res.status(200).json({
		admin: {
			name: userExist.name,
			login: userExist.login,
		},
		token: jwt.sign(
			{
				id: userExist.id_admin,
			},
			config.secret,
			{
				expiresIn: config.expireIn,
			}
		),
	});
};

export { loginController };
