const Todo = require('../model/Todo');

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

            Todo.create(params)
                .then( todo => {
                    resolve(todo);
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