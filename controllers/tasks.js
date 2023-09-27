let {tasks} = require('../data');

// Get function for all people
const readTasks = (req,res) => {
    res.json({success: true, data: tasks})
}

// Post function for creating people 
const createTasks = (req,res) => {
    let length = tasks.length + 1;
    const {name, description} = req.body;
    const id = length;
    if(!name){
        return res.status(400).json({data:[], success:false, msg:'Please enter a name'})
    }
    const task = {name: name, id: id, description: description, status: false};
    tasks.push(task);
    res.status(201).json({success:true, data:[tasks]})
}

// Put function for updating people
const updateTasks = (req,res) => {
    const {id} = req.params
    const {name, description, status} = req.body
    const task = tasks.find((task) => task.id === Number(id))

    if(!task){
        return express.json({success:false, data:[]})
    }

    const newTask = tasks.map((task) => {
        if(task.id === Number(id)){
            task.status = status;
            task.name = name;
            task.description = description;
        }
        return task;
    })
    res.status(202).json({data: newTask, success:true})
}

// Delete function for removing people
const deleteTasks = (req,res) => {
    const {id} = req.params
    const task = tasks.find((task) => task.id === Number(id))

    if(!task){
        return res.status(404).json({success:false, msg:"No matching id found"});
    }

    tasks = tasks.filter((task) => {
        return task.id !== Number(id)
    })
    res.status(202).json({data:tasks, success:true});
}

module.exports = {createTasks, readTasks, updateTasks, deleteTasks}