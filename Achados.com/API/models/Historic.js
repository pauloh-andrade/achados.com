"use strict";
import Sequelize from "sequelize";
import connection from "../config/connectMySQL.js";

const Historic = connection.define(
	"tbl_historic",
	{
		id_historic: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		status: {
			type: Sequelize.ENUM("SOLICITADO", "VERIFICANDO", "DEVOLVIDO"),
			allowNull: false,
		},
		date_time: {
			type: Sequelize.DATE,
			allowNull: false,
		},
		description: {
			type: Sequelize.TEXT,
			allowNull: false,
		},
		id_request: {
			type: Sequelize.INTEGER,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

Historic.sync();

export default Historic;
