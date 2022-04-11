"use strict";

import Historic from "../models/Historic.js";

const createDefaultHistoric = ({ id_request }) => {
	try {
		Historic.create({
			status: "SOLICITADO",
			date_time: new Date(),
			description: "Item foi solicitado",
			id_request: id_request,
		});
	} catch (error) {
		console.log(error);
		return false;
	}
};

const postHistoric = async ({ body }, res) => {
	try {
		const newHistoric = await Historic.create({
			date_time: new Date(),
			...body,
		});
		res.status(201).json(newHistoric);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			title: "Error",
			message: "Unable to process the request, check the request body",
		});
	}
};

const getHistoric = async ({ params }, res) => {
	try {
		const historics = await Historic.findAll({
			where: {
				id_request: params.id,
			},
		});
		res.status(200).json(historics);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			title: "Error",
			message: "Unable to process the request, check the request params",
		});
	}
};

export { postHistoric, getHistoric, createDefaultHistoric };
