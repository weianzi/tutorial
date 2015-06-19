var Comment = require("../models/comment");
var moment = require("moment");

exports.save = function(req, res) {

	var _comment;
	_comment = new Comment({
		author: req.body.author,
		text: req.body.text
	});

	_comment.save(function(err, comment) {
		if (err) {
			console.log(err);
		} else {
			console.log("Data is successfully saved to the mongoDB -- " + moment(comment.createAt).format('YYYY-MM-DD HH:mm:ss'));
		}
	});
}