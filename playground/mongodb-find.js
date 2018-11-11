const { MongoClient, ObjectId } = require('mongodb');
const assert = require('assert');

const url = 'mongodb://localhost:27017/TodoApp';

MongoClient.connect(url, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const dbName = 'TodoApp';
    const db = client.db(dbName);

    db.collection('Todos').find({
        _id: new ObjectId('5bd58e39a554c457b03c29af')
    }).toArray().then((docs) => {
        console.log('Todos');
        console.log(JSON.stringify(docs, undefined, 2)); // undefined for filter function, 2 -> for spacing
    }, (err) => {
        console.log('Unable to fetch todos', err);
    });

    db.collection('Users').find({
        name: 'gango'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs, undefined, 2));
       
    }, (err) => {
        console.log('Unable to fetch Users', err);
    });


    db.collection('Users').find({}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch data', err);
    });


    // client.close();
});