import express, { Router } from 'express';//Import the 'express' library &'Router' object from it.

// Importing various controller functions for handling Todo-related operations
import {
  addTodo,
  getAllTodos,
  toggleTodoDone,
  updateTodo,
  deleteTodo
} from '../controller/todo-controller.js';


const route = express.Router();// Creating an instance of the Express Router

// RouteS
route.post('/todos', addTodo);
route.get('/todos', getAllTodos);
route.get('/todos/:id', toggleTodoDone);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);

// Exporting the configured Router to be used in other parts of the application
export default route;
