const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bdd771d1312ed9817226ef311';

if (!ObjectId.isValid(id)) {
    console.log('ID not valid');
}

User.findById({
    _id: id
}).then((user) => {
    return console.log(`User: `, user);
}).catch((e) => {
    console.log(`Invalid user!`, e);
});
 
Todo.find({
    _id: id
}).then((todos) => {
    console.log(`Todos`, todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log(`Todo: `, todo);
});

Todo.findById({
    _id: id
}).then((todoById) => {

    if (!todo) {
        return console.log(`Id not found!`);
    }
    console.log(`TodoById: `, todoById);
}).catch((e) => console.log(e));

