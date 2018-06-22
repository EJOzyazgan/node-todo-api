const {MongoClient, ObjectID}  = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log("Can't Connect to server");
    }
    console.log("Connected to server");
    const db = client.db('TodoApp');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b2d34d9458809d88527afec')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     console.log("Cant find todos", err);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b2d3322458809d88527af94')
    }, {
        $set: {
            name: "EJ"
        },
        $inc: {
            age: 1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log("Cant find todos", err);
    });

    client.close();
});