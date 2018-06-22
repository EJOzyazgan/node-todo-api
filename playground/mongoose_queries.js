const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5b2d451064b2d7e0513474dd11';
//
// if(!ObjectID.isValid(id)){
//     console.log("ID not valid");
// }
//
// Todo.find({
//     _id: id
// }).then((todos) => {
//    console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log("ID not found");
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.findById('5b2d3a898c36bfd035400f47').then((user) => {
    if(!user){
        return console.log("Unable to find user");
    }

    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
   console.log(e);
});