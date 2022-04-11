"use strict";
import Sequelize from "sequelize";
import connection from "../config/connectMySQL.js";
import Historic from "./Historic.js";

const Request = connection.define(
	"tbl_request",
	{
		id_request: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING(100),
			allowNull: false,
		},
		contact: {
			type: Sequelize.STRING(16),
			allowNull: false,
		},
		date_time_loss: {
			type: Sequelize.DATE,
			allowNull: false,
		},
		latitude: {
			type: Sequelize.STRING(255),
			allowNull: false,
		},
		longitude: {
			type: Sequelize.STRING(255),
			allowNull: false,
		},
		description: {
			type: Sequelize.STRING(255),
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

Request.hasMany(Historic, {
	foreignKey: {
		name: "id_request",
	},
});

Request.sync();

export default Request;
