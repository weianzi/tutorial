var mongoose = require("mongoose");

var CommentSchema = new mongoose.Schema({
	author: String,
	text: String,
	createAt: {
		type: Date,
		default: Date.now()
	}
});

CommentSchema.pre("save", function(next) {
	this.createAt = Date.now();
	next();
});

CommentSchema.statics = {
	fetch: function(cb) {
		return this.find({})
		//.sort({"createAt": -1})
		.exec(cb);
	},
	findById: function(id, cb) {
		return this.findOne({
			_id: id
		}).exec(cb);
	}
}

module.exports = CommentSchema;