const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

Todo.findOneAndRemove({_id: '5b2d4e31ad91eb0f0080c78d'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('5b2d4e31ad91eb0f0080c78d').then((todo) => {
    console.log(todo);
});