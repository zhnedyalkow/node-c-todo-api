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

    // deleteMany
        // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        //     console.log(result);
        // });

    // deleteOne
        // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
        //     console.log(result);
        // });
    
    // findOneAndDelete
        // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        //     console.log(result);
        // });


        // db.collection('Users').deleteMany({ name: '1'}).then((result) => {
        //     console.log(result);
        // });


        db.collection('Users').deleteOne({ _id: new ObjectId('5bd58ff0887b4549d041623a')}).then((result) => {
            console.log(result);
        });
    // client.close();
});