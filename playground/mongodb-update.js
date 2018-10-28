// const MongoClient = require('mongodb').MongoClient;

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

    // findOneAndUpdate

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectId('5bd59e593dc19d28fc9c60fa')
    }, {
        $set: {
            name: 'Zhitomir'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
});