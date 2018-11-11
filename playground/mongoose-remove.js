const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

Todo.remove({}).then((result) => {
    console.log(result);
});

Todo.findOneAndRemove({_id: id});
Todo.findByIdAndRemove();

var id = '5be8058b2380174c72608761';
Todo.findOneAndRemove({_id: id}).then((doc) => {
    console.log(doc);
});

Todo.findByIdAndRemove('5be8049f2380174c72608709').then((todo) => {
    console.log(todo);
});