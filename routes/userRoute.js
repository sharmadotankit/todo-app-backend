const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const checkIfUser = require('../helper').checkIfUser;

router.post('/add-todo',checkIfUser,userController.addTodo);
router.put('/edit-todo',checkIfUser,userController.editTodo);
router.delete('/delete-todo/:id',checkIfUser,userController.deleteTodo);
router.put('/complete-todo',checkIfUser,userController.completeTodo);


module.exports = router;