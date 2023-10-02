const express = require('express');
const router = express.Router();

const {createPeople, readPeople, updatePeople, deletePeople, createTasks, readTasks, updateTasks, deleteTasks, getTask, getPerson} = require('../controllers/tasks');

// People
router.get('/people', readPeople);
router.post('/people', createPeople);
router.put('/people/:id', updatePeople);
router.delete('/people/:id', deletePeople);
router.get('/people/:id', getPerson);

// Tasks
router.get('/tasks', readTasks);
router.post('/tasks', createTasks);
router.put('/tasks/:id', updateTasks);
router.delete('/tasks/:id', deleteTasks);
router.get('/tasks/:id', getTask);

module.exports = router;