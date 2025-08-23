const Todo = require('../models/mode.js');
const bodyParser = require('body-parser');
const app = require('express')();


module.exports = function (app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/todos/:uname', function (req, res) {
        Todo.find({
            username: req.params.uname,
            function(err, todos) {
                if (err) throw err;
                res.send(todos);
            }
        })
    })

    app.get('/api/todo/:id', function (req, res) {
        Todo.findById({ _id: req.params.id }, function (err, todo) {
            if (err) throw err;
            res.send(todo);
        })
    })

    app.post('/api/todo', function (req, res) {
        if (req.body.id) {
            Todo.findByIdAndUpdate(req.body.id, {
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            }, function (err, todo) {
                if (err) throw err;
                res.send('Success');
            })
        } else {
            const newTodo = new Todo({
                username: 'test',
                todo: req.body.todo,
                isDone: req.body.isDone,
                hasAttachment: req.body.hasAttachment
            })
            newTodo.save(function (err, todo) {
                if (err) throw err;
                res.send(todo);
            })
        }
    })

    app.delete('/api/todo/:id', function (req, res) {
        Todo.findByIdAndRemove(req.params.id, function (err, todo) {
            if (err) throw err;
            res.send('Success');
        })
    })
}