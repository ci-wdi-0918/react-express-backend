const Todo = require('../model/Todo');
const User = require('../../users/model/User');

module.exports = {

    getAllTodos: (params) => {

        return new Promise((resolve, reject) => {

            Todo.find(params)
                .then( todos => {
                    resolve(todos);
                })
                .catch( error => {
                    reject(error);
                })
        });
    },
    createTodo: (params) => {

        return new Promise((resolve, reject) => {

          
            User.findById(params.id)
                .then(user => {

                    let newTodo = new Todo({
                        todo: params.todo,
                        user_id: user.id
                    });

                    newTodo
                        .save()
                        .then( savedTodo => {

                            user.todos.push(savedTodo);

                            user.save()
                                .then( () => {
                                    resolve(savedTodo);
                                })
                                .catch(error => {
                                    reject(error);
                                })

                        })
                        .catch(error => {
                            reject(error);
                        })

                })
                .catch( error => {
                    reject(error);
                })



        });


    },

    updateTodoByID: (id, newTodo) => {

        return new Promise((resolve, reject) => {

            Todo.findByIdAndUpdate(id, { todo:newTodo }, { new: true })
                .then( newTodo => {
                    resolve(newTodo);
                })
                .catch( error => {
                    reject(error);
                })



        });
    },


    deleteTodoByID: (id) => {


        return new Promise((resolve, reject) => {

            Todo.findByIdAndDelete(id)
                .then( deleted => {
                    resolve(deleted);
                })
                .catch( error => {
                    reject(error);
                })



        });

    }


}