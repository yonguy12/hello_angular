const Tasks = require("./model.js");

module.exports = {
    allTasks: (req, res) =>{
        console.log("all tasks")
        Tasks.find({})
            .then(task=>console.log("tasks find")||res.json(task))
            .catch(errs=>console.log("errors on find")||res.json(errs))
    },
    createTasks: (req, res) => {
        console.log("create tasks")
        Tasks.create(req.body)
            .then(task=>console.log("creating a task")||res.json(task))
            .catch(errs=>console.log("errors on create")||res.json(errs))
    },
    oneTask: (req, res) => {
        console.log("one task found")
        Tasks.findById(req.params.id)
            .then(task=>console.log("found one task")||res.json(task))
            .catch(errs=>console.log("errors on find one task")||res.json(errs))
    },
    updateTasks: (req, res) => {
        console.log("update task")
        Tasks.findByIdAndUpdate(req.params.id, req.body, {new:true})
            .then(task=>console.log("updating task")||res.json(task))
            .catch(errs=>console.log("errors on update")||res.json(errs))
    },
    deleteTasks: (req, res) => {
        console.log("delete task")
        Tasks.findByIdAndRemove(req.params.id)
            .then(task=>console.log("deleting one task homie")||res.json(task))
            .catch(errs=>console.log("errors on delete")||res.json(errs))
    }
}