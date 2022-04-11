"use strict";
import Sequelize from "sequelize";
import connection from "../config/connectMySQL.js";

const Admin = connection.define(
	"tbl_admin",
	{
		id_admin: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: {
			type: Sequelize.STRING(100),
			allowNull: false,
		},
		login: {
			type: Sequelize.STRING(14),
			allowNull: false,
		},
		password: {
			type: Sequelize.STRING(255),
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

Admin.sync();

export default Admin;
