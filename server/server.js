const express = require('express');
const bodyParser = require('body-parser');
const {
    ObjectId
} = require('mongodb');
const {
    mongoose
} = require('./db/mongoose');
const {
    Todo
} = require('./models/todo');
const {
    User
} = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

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

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    console.log(id);

    if (!ObjectId.isValid(id)) {
        console.log('Id is not valid');
        res.status(404).send({});
    }

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
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if (!ObjectId.isValid(id)) {
        res.status(404).send({});
    };


    Todo.findOneAndRemove({
        _id: id
    }).then((todo) => {
        if (!todo) {
            return res.status(404).send({});
        }

        res.send({todo: todo});
    }).catch((e) => {
        res.status(400).send({});
    });
});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {
    app
};

// get from client JSON convert it into obj and attached it to req
// app.use() => middleware