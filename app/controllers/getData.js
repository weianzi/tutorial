var Comment = require("../models/comment");

exports.getData = function(req, res) {

	//console.log("----------");

	Comment.fetch(function(err, comments) {

		if (err) {
			console.log(err);
		}

		//console.log(typeof comments);
		res.setHeader('Content-Type', 'application/json');
		res.send(comments);
	});
};