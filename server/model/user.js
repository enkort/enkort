var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
	email: {type: String, required: true},
	password: {type: String, required: true},
	role: {type: String, enum: ['admin', 'client', 'user'], default: 'user'},
	title: {type: String, enum: ['Mr.', 'Ms.', 'Mrs.'], required: true},
	fname: {type: String, required: true},
	mname: {type: String, default: null},
	lname: {type: String, required: true},
	mobile: {type: String, required: true},
	dob: {type: Date, default: null},
	everified: {type: Boolean, required: true, default: false},
	mverified: {type: Boolean, required: true, default: false},
	created: {type: Date, required: true},
	updated: {type: Date, required: true}
});

//console.log(User.schema.path('role').enumValues);