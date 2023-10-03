const express = require('express');
const router = express.Router();

const {createTasks, readTasks, updateTasks, deleteTasks} = require('../controllers/tasks');

router.get('/', readTasks);
router.post('/', createTasks);
router.put('/:id', updateTasks);
router.delete('/:id', deleteTasks);

module.exports = router;