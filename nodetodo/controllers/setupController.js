const Todo = require('../models/mode.js');

module.exports = function (app) {
    app.get('/api/setupTodos', (req, res) => {
        const starterTodos = [
            {
                username: 'test',
                todo: 'Buy Milk',
                isDone: false,
                hasAttachment: false
            },
            {
                username: 'test',
                todo: 'Learn Node.js',
                isDone: false,
                hasAttachment: false
            }, {
                username: 'test',
                todo: 'Learn MongoDB',
                isDone: false,
                hasAttachment: false
            }
        ];
        Todo.create(starterTodos, function (err, results) {
            res.send(results)
        })
    })
}