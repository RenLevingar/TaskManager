const express = require('express');
const router = express.Router();

const {createPeople, readPeople, updatePeople, deletePeople, createTasks, readTasks, updateTasks, deleteTasks} = require('../controllers/tasks');

// People
const {createPeople, readPeople, updatePeople, deletePeople, createTasks, readTasks, updateTasks, deleteTasks} = require('../controllers/tasks');
router.get('/', readPeople);
router.post('/', createPeople);
router.put('/:id', updatePeople);
router.delete('/:id', deletePeople);

// Tasks
router.get('/', readTasks);
router.post('/', createTasks);
router.put('/:id', updateTasks);
router.delete('/:id', deleteTasks);

module.exports = router;