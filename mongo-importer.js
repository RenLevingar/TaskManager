// const People = require('./models/person');
// const Tasks = require('./models/task');
// const mongoose = require('mongoose');
// require("dotenv").config();
// mongoose.connect(process.env.MONGO_URI)

// // // Person Info
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

// // Task Info
// let taskNames = ["Task 1", "Task 2", "Task 3", "Task 4", "Task 5"]
// let taskDescs = ["Task 1 Description", "Task 2 Description", "Task 3 Description", "Task 4 Description", "Task 5 Description"];
// // Person Creator
// var taskID = 1;
// async function createTask(){
//     for(i=0; i<taskNames.length; i++){
//         const task = new Tasks({
//             "name": taskNames[i],
//             "desc": taskDescs[i],
//             "id": taskID
//         })
//         await task.validate();
//         await task.save();
//         taskID++;
//     }
// }

// // createTask();

