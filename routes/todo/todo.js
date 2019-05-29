var express = require('express');
var router = express.Router();

var todoController = require('./controllers/todoController');

/* GET home page. */
router.get('/', function(req, res, next) {
  
  const id = req.query.id;

  todoController.getAllTodos(id)
                .then( todos => {
                  console.log(todos)
                  res.json(todos);
                })
                .catch(error => {
                    res.json(error);
                })

});

router.post('/createtodo', function(req, res, next) {

    todoController.createTodo(req.body)
                  .then( todo => {
                    res.json(todo);
                  })
                  .catch(error => {
                      res.json(error);
                  })

})

router.put('/updatetodobyid', function(req, res) {

  let id = req.body.id;
  let newTodo = req.body.newTodo

  todoController.updateTodoByID(id, newTodo)
                .then( updated => {
                  console.log(updated)
                  res.json(updated)
                })
                .catch( error => {
                  res.json(error)
                })
             


});

router.delete('/deletetodobyid',function(req, res) {
  
  //let id = req.body.id;
  let id = req.query.id;

  todoController.deleteTodoByID(id)
                .then( deleted => {
                  res.json(deleted)
                })
                .catch( error => {
                  res.json(error);
                })

});

module.exports = router;
