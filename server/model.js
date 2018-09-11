const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3
    },
    description: {
        type: String,
        default: ""
    },
    is_compelted:{
        type: Boolean,
        default: false
    }
},{timestamps: true});

mongoose.connect("mongodb://localhost:27017/tasks", {useNewUrlParser: true}, (errs)=>console.log(errs?errs:"db gucci"));

module.exports = mongoose.model("Task", taskSchema);