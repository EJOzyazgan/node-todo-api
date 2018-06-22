const MongoClient  = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err){
        return console.log("Can't Connect to server");
    }
    console.log("Connected to server");
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: "Something to do",
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log("Cant insert todo");
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 4));
    // });

    db.collection('Users').insertOne({
        name: "EJ",
        age: 19,
        location: "San Diego"
    }, (err, result) => {
        if(err){
            return console.log("Cant insert user");
        }

        console.log(JSON.stringify(result.ops, undefined, 4));
    });

    client.close();
});