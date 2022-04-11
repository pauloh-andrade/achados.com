"use strict";
import app from "./app.js";

try {
	app.listen(8080, () => {
		console.log("server is running, url: http://localhost:8080");
	});
} catch (error) {
	console.log(error);
}
