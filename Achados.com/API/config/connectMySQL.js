"use strict";
import { Sequelize } from "sequelize";

const connection = new Sequelize("db_achados", "root", "bcd127", {
	host: "localhost",
	dialect: "mysql",
});

connection
	.authenticate()
	.then(() => {
		console.log("Sucess database connection");
	})
	.catch((error) => {
		console.log(error || "Failed database connection");
	});

export default connection;
