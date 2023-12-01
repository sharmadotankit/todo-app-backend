const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const checkIfUser = require('../helper').checkIfUser;

router.post('/add-todo',checkIfUser,userController.addTodo);
router.post('/edit-todo',checkIfUser,userController.editTodo);
router.post('/delete-todo',checkIfUser,userController.deleteTodo);
router.post('/complete-todo',checkIfUser,userController.completeTodo);


module.exports = router;