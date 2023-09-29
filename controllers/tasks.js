const TASKS = require('../models/task');

// Get function for all people
const readTasks = async(req,res) => {
    try {
        let answer = await TASKS.find({})
        res.json(answer);
        console.log(answer);
    } catch (error) {
        console.log(error);
    }
}

// Post function for creating people 
const createTasks = async(req,res) => {
    try {
        const { name } = req.body; 
        await TASKS.create({name: name});
        let answer = await TASKS.find({})
        res.json(answer);
     } catch (error) {
         console.log(error);
     }
}

// Put function for updating people
const updateTasks = async(req,res) => {
    try {
        const { _id } = req.params
        const { name } = req.body; 
       await TASKS.findOneAndUpdate({_id: _id},{name:name});
       let answer = await TASKS.find({})
       res.json(answer);
    } catch (error) {
        console.log(error)
    }
}

// Delete function for removing people
const deleteTasks = async(req,res) => {
    try {
        const { _id } = req.params
        await TASKS.findOneAndDelete({_id:_id}); 
        let answer = await TASKS.find({});
        res.json(answer);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {createTasks, readTasks, updateTasks, deleteTasks}

const PEOPLE = require('../models/person');

// Get function for all people
const readPeople = async(req,res) => {
    try {
        let answer = await PEOPLE.find({})
        res.json(answer);
        console.log(answer);
    } catch (error) {
        console.log(error);
    }
}

// Post function for creating people 
const createPeople = async(req,res) => {
    try {
        const { name } = req.body; 
        await PEOPLE.create({name: name});
        let answer = await PEOPLE.find({})
        res.json(answer);
     } catch (error) {
         console.log(error);
     }
}

// Put function for updating people
const updatePeople = async(req,res) => {
    try {
        const { _id } = req.params
        const { name } = req.body; 
       await PEOPLE.findOneAndUpdate({_id: _id},{name:name});
       let answer = await PEOPLE.find({})
       res.json(answer);
    } catch (error) {
        console.log(error)
    }
}

// Delete function for removing people
const deletePeople = async(req,res) => {
    try {
        const { _id } = req.params
        await PEOPLE.findOneAndDelete({_id:_id}); 
        let answer = await PEOPLE.find({});
        res.json(answer);
    } catch (error) {
        console.log(error)
    }
}

module.exports = {createPeople, readPeople, updatePeople, deletePeople}