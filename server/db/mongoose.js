let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://root:Demon5310!@ds115931.mlab.com:15931/node-course-todo' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};