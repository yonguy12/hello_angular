const api = require("./controller.js");
const bp = require("body-parser");

module.exports = function(app){
    app.use(bp.json());
    
    app.get("/tasks", api.allTasks);
    
    app.get("/tasks/:id", api.oneTask);
    
    app.post("/tasks", api.createTasks);
    
    app.put("/tasks/:id", api.updateTasks);

    app.delete('/tasks/:id', api.deleteTasks)

    return app;
}