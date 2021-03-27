// your JavaScript goes here, you can delete this comment
const object1 = { todo: "clone repo for starter code", status:"complete" }
const object2 = { todo: "push good commit messages", status:"started"}
const object3 = { todo: "Create a for loop for todo list", status:"started"}
let todoList = [object1, object2, object3]
const completedTodos = []
todoList.forEach(function(object) {
    if (object.status == 'complete') {
        completedTodos.push(object.todo)
    }
})
console.log('completed: ', completedTodos)