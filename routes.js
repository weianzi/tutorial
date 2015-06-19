var Save = require("./app/controllers/save");
var GetData = require("./app/controllers/getData");

module.exports = function(app) {

	app.get("/data", GetData.getData);
	app.post("/data", Save.save);

}