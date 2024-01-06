import Todo from '../model/Todo.js';// Import the 'Todo' model for interacting with the database

// Controller function to add a new Todo
export const addTodo = async (request, response) => {
    try {
        // Creating a new Todo using the 'Todo' model
        const newTodo = await Todo.create({
            data: request.body.data,
            createdAt: Date.now()
        });

        // Saving the new Todo to the database
        await newTodo.save();

        // Sending a success response with the new Todo
        return response.status(200).json(newTodo);
    } catch (error) {
        // Handling errors and sending an error response
        return response.status(500).json(error.message);
    }
};

// Controller function to retrieve all Todos
export const getAllTodos = async (request, response) => {
    try {
        // Finding all Todos from the database and sorting by creation date
        const todos = await Todo.find({}).sort({ 'createdAt': -1 });

        // Sending a success response with the list of Todos
        return response.status(200).json(todos);
    } catch (error) {
        // Handling errors and sending an error response
        return response.status(500).json(error.message);
    }
};

// Controller function to toggle the 'done' status of a Todo
export const toggleTodoDone = async (request, response) => {
    try {
        // Finding the Todo by ID
        const todoRef = await Todo.findById(request.params.id);

        // Updating the 'done' status of the Todo
        const todo = await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todoRef.done }
        );

        // Saving the updated Todo to the database
        await todo.save();

        // Sending a success response with the updated Todo
        return response.status(200).json(todo);
    } catch (error) {
        // Handling errors and sending an error response
        return response.status(500).json(error.message);
    }
};

// Controller function to update the text content of a Todo
export const updateTodo = async (request, response) => {
    try {
        // Updating the 'data' field of the Todo by ID
        await Todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        );

        // Finding the updated Todo by ID
        const todo = await Todo.findById(request.params.id);

        // Sending a success response with the updated Todo
        return response.status(200).json(todo);
    } catch (error) {
        // Handling errors and sending an error response
        return response.status(500).json(error.message);
    }
};

// Controller function to delete a Todo by ID
export const deleteTodo = async (request, response) => {
    try {
        // Finding and deleting a Todo by ID
        const todo = await Todo.findByIdAndDelete(request.params.id);

        // Sending a success response with the deleted Todo
        return response.status(200).json(todo);
    } catch (error) {
        // Handling errors and sending an error response
        return response.status(500).json(error.message);
    }
};
