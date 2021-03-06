const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2)); 
    });

    // Insert new doc into Users collection (name, age, location)

    db.collection('Users').insertOne({
        name: 'gango2',
        age: '27',
        location: 'Sofia, Bulgaria'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert user', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops); // array with all documents inserted
        console.log(result.ops[0]._id.getTimestamp()); // array with all documents inserted
    });
    client.close();
});