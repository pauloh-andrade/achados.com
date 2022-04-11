"use strict";
import Request from "../models/Request.js";

import { createDefaultHistoric } from "./historic.js";

const postRequest = async ({ body }, res) => {
	try {
		const newRequest = await Request.create({
			...body,
		});
		createDefaultHistoric(newRequest);
		res.status(201).json(newRequest);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			title: "Error",
			message: "Unable to process the request, check the request body",
		});
	}
};

const putRequest = async ({ params, body }, res) => {
	try {
		const updatedRequest = await Request.update(
			{
				...body,
			},
			{
				where: {
					id_request: params.id,
				},
			}
		);
		if (updatedRequest != 0) {
			res.status(200).json({
				title: "Sucess",
				message: "Successfully updated",
			});
		} else {
			res.status(200).json({
				title: "Sucess",
				message: "Resource was not updated, check the request body",
			});
		}
	} catch (error) {
		console.log(error);
		res.status(400).json({
			title: "Error",
			message: "Unable to process the request, check the request body",
		});
	}
};

const getAllRequests = async (res) => {
	try {
		const requests = await Request.findAll();
		res.status(200).json(requests);
	} catch (error) {
		console.log(error);
		res.status(500).json({
			title: "Error",
			message: "Unable to process the request, check the request params",
		});
	}
};

const getRequestById = async ({ params }, res) => {
	try {
		const request = await Request.findByPk(params.id);
		res.status(200).json(request);
	} catch (error) {
		console.log(error);
		res.status(400).json({
			title: "Error",
			message: "Unable to process the request, check the request params",
		});
	}
};

export { postRequest, getAllRequests, getRequestById, putRequest };
