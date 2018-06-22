const {MongoClient, ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log("Can't Connect to server");
    }
    console.log("Connected to server");
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID("5b2c30e2c1323409d4fce263")
    // }).toArray().then((docs) => {
    //     console.log("Todos");
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }, (err) => {
    //     console.log("Cant find todos", err);
    // });

    db.collection('Users').find({name: "EJ"}).toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs, undefined, 4));
    }, (err) => {
        console.log("Cant find todos", err);
    });

    db.collection('Todos').find().count().then((count) => {
        console.log("Todos: " + count);
    }, (err) => {
        console.log("Cant find todos", err);
    });

    client.close();
});