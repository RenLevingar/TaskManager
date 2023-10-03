const TASKS = require('../models/task'); 
const PEOPLE = require('../models/person');
require("dotenv").config();
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URI)

// Get function for all people
const readTasks = async(req,res) => {
    try {
        let answer = await TASKS.find({})
        res.json(answer);
    } catch (error) {
        console.log(error);
    }
}

// Post function for creating people 
let idValue = 5;
const createTasks = async(req,res) => {
    try {
        idValue++;
        const { name } = req.body; 
        const { desc } = req.body;
        let id = TASKS.length;
        await TASKS.create({name: name, id: idValue, desc: desc, status: false});
        let answer = await TASKS.find({})
        res.json(answer);
     } catch (error) {
         console.log(error);
     }
}

// Put function for updating people
const updateTasks = async(req,res) => {
    try {
        const { id } = req.params
        let { name, desc, status } = req.body;
        console.log({ name, desc, status })
        const thisTask = TASKS.findOne({id:id});
        console.log(thisTask)

        if(!name){
            name = thisTask.name;
        }
        if(!desc){
            desc = thisTask.desc;
        }
        // if(!status){
        //     status = thisTask.status;
        // }

       await TASKS.findOneAndUpdate({id: id}, {name:name,desc:desc, status: status});
       let answer = await TASKS.find({})
       console.log(answer)
       res.json(answer);
    } catch (error) {
        console.log(error)
    }
}

// Delete function for removing people
const deleteTasks = async(req,res) => {
    try {
        const { id } = req.params
        await TASKS.findOneAndDelete({id:id}); 
        let answer = await TASKS.find({});
        res.json(answer);
    } catch (error) {
        console.log(error)
    }
}

// Gets one task
const getTask = async(req,res) => {
    try {
        const { id } = req.params;
        let answer = await TASKS.findOne({id});
        res.json({answer});
    } catch (error) {
        console.log(error);
    }
}



// People function

// Get function for all people
const readPeople = async(req,res) => {
    try {
        await PEOPLE.find({}).then((x) => {res.json({x});});
    } catch (error) {
        console.log(error);
    }
}

// Post function for creating people
let idPeople = 5; 
const createPeople = async(req,res) => {
    try {
        idPeople++;
        const { name } = req.body; 
        const { age } =req.body;
        await PEOPLE.create({name: name, id: idPeople, age: age});
        let answer = await PEOPLE.find({})
        res.json(answer);
     } catch (error) {
         console.log(error);
     }
}

// Put function for updating people
const updatePeople = async(req,res) => {
    try {
        const { id } = req.params;
        const { name } = req.body; 
       await PEOPLE.findOneAndUpdate({id: id},{name: name});
       let answer = await PEOPLE.find({})
       res.json(answer);
    } catch (error) {
        console.log(error)
    }
}

// Delete function for removing people
const deletePeople = async(req,res) => {
    try {
        const { id } = req.params
        await PEOPLE.findOneAndDelete({id: id}); 
        let answer = await PEOPLE.find({});
        res.json(answer);
    } catch (error) {
        console.log(error)
    }
}

// Gets one task
const getPerson = async(req,res) => {
    try {
        const { id } = req.params;
        let answer = await PEOPLE.findOne({id});
        res.json({answer});
    } catch (error) {
        console.log(error);
    }
}

module.exports = {createPeople, readPeople, updatePeople, deletePeople, createTasks, readTasks, updateTasks, deleteTasks, getTask, getPerson}