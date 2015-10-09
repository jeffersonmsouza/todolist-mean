// setup
var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');

var app = express();

// configure db
mongoose.connect('mongodb://localhost/todo-list');


//configure app
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(methodOverride()); //simulates DELETE and PUT


var Todo = mongoose.model('Todo', {
    text: String
});


function listTodos(request, response){
    Todo.find(function(error, data){
        if (error){
            response.send(error);
        } else {
            response.json(data);
        }
    });
}

function saveTodo(request, response){
    Todo.create({
        text: request.body.text,
        done: false
    }, function(error, data){
        if (error){
            response.send(error);
        }
        
        listTodos(request, response);
    });
}

function deleteTodo(request, response){
    Todo.remove({
        _id: request.params.todo_id
    }, function(error, data){
        if (error){
            response.send(error);
        }
        
        listTodos(request, response);
   })
}



//defines the routes

//lists the todos
app.get('/api/todos', listTodos);
app.post('/api/todos', saveTodo);
app.delete('/api/todo/:todo_id', deleteTodo);

app.get('*', function(request, response){
    response.sendfile('./public/index.html')
});


//define app start params

app.listen(8080);
console.log('App started on port 8080');