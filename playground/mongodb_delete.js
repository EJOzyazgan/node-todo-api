const {MongoClient, ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log("Can't Connect to server");
    }
    console.log("Connected to server");
    const db = client.db('TodoApp');

    // db.collection('Todos').deleteMany({text: "Eat"}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log("Cant find todos", err);
    // });
    //
    // db.collection('Todos').deleteOne({text: "Grocerys"}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log("Cant find todos", err);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: "EJ"}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log("Cant find Users", err);
    // });

    // db.collection('Users').deleteOne({name: "Laura"}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log("Cant find User", err);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5b2d332e458809d88527af98')
    }).then((result) => {
        console.log(result);
    });

    client.close();
});