const express = require('express');
const app = express();
const router = express.Router();

//  Below here is to work with the router app

let {tasks} = require('../data')

router.get('/', (req,res) => {
    res.json({success: true, data: tasks})
})

router.post('/', (req, res) => {
    console.log(req.body)
    const {name} = req.body
    if(name){
        return res.json({success: true, person: name})
    }
    res.status(404).json({success: false, msg:"Please provide a name."})
})

// PUT request
router.put('/:id', (req,res) => {
    const {id} = req.params
    const {name} = req.body
    const task = tasks.find((task) => task.id === Number(id))

    if(!task){
        return res.json({success:false, data:[]})
    }

    const newTasks = tasks.map((task) => {
        if(task.id === Number(id)){
            task.name = name;
        }
        return task;
    })
    res.status(202).json({data: newTasks, success:true})

})

// Delete request
app.delete('/:id', (req,res) => {
    const {id} = req.params
    const task = tasks.find((task) => task.id === Number(id))

    if(!task){
        return res.status(404).json({success:false, msg:"No matching id found"});
    }

    tasks = tasks.filter((person) => {
        return task.id !== Number(id)
    })
    res.status(202).json({data:tasks, success:true});
})


module.exports = router
