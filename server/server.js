var express = require('express');
var bodyParser = require('body-parser');
const {ObjectId} = require('mongodb');

var {
    mongoose
} = require('./db/mongoose');
var {
    Todo
} = require('./models/todo');
var {
    User
} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    console.log(req.body);

    console.log(`Req.body.text = ${req.body.text}`);

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        console.log(e);
        res.status(400).send(e);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos
        });
    }, (e) => {
        res.status(400).send(e);
    });
});


// GET /todos/121345
// params => {key:value}
// key value pair => url

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);

    // Valid id using isValid
    if (!ObjectId.isValid(id)) {
        console.log('Id is not valid');
        res.status(404).send({});
    } 

    // if not valid return 404 - send back empty body

    Todo.findById({
        _id: id
    }).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({
            todo
        });
    }, (e) => {
        res.status(400).send(e);
    }).catch((e) => {
        res.status(400).send();
    });


    
    // Todo.findById({
    //     _id: id
    // }).then((todo) => {
    //     res.send({
    //         todos
    //     });
    // }).catch((e) => {
    //     res.status(404).send({});
    // });

    // findById()
    // success
    // err 
       // 400 - request was not valid
       // send back nothing
       // if todo - send it back
       // if not todo - send back 404 empty body
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {
    app
};


// get from client JSON convert it into obj and attached it to req
// app.use() => middleware