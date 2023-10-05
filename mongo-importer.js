const People = require('./models/person');
const Tasks = require('./models/task');
const mongoose = require('mongoose');
require("dotenv").config();
mongoose.connect(process.env.MONGO_URI)

// // Person Info
// var personID = 1;
// let peopleNames = ["John", "Jack", "Jane","Josh", "Jacob"];
// let age = [21,23,22,24,153];
// // Person Creator
// async function createPeople(){
//     for(i=0; i<peopleNames.length; i++){
//         const person = new People({
//             "name": peopleNames[i],
//             "age": age[i],
//             "id": personID,
//             "check": false
//         })
//         await person.validate();
//         await person.save();
//         personID++;
//     }
// }
// createPeople();

// Task Info
let taskNames = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5", "Task 6", "Task 7", "Task 8", "Task 9", "Task 10", "Task 11", "Task 12", "Task 13", "Task 14", "Task 15", "Task 16", "Task 17", "Task 18", "Task 19", "Task 20"]
let taskDescs = ["Task 1 Description", "Task 2 Description", "Task 3 Description", "Task 4 Description", "Task 5 Description", "Task 6 Description", "Task 7 Description", "Task 8 Description", "Task 9 Description", "Task 10 Description", "Task 11 Description", "Task 12 Description", "Task 13 Description", "Task 14 Description", "Task 15 Description", "Task 16 Description", "Task 17 Description", "Task 18 Description", "Task 19 Description", "Task 20 Description"];
// Person Creator
var taskID = 1;
async function createTask(){
    for(i=0; i<taskNames.length; i++){
        const task = new Tasks({
            "name": taskNames[i],
            "desc": taskDescs[i],
            "id": taskID
        })
        await task.validate();
        await task.save();
        taskID++;
    }
}

createTask();

