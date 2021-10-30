import React, {useState} from "react";
import './App.css';

function TodoForm({addToDo}) {
    const [todo, setTodo] = useState({
        id : "",
        task: "",
        completed: false
    }); 

    // Function for user input to keep track in state 
    //Takes event as parameter
    //Updates task property

    function handleTaskInputChange(e){
        setTodo({...React, task:e.target.value}); // Event target value contains new input text
    }

    function handleSubmit(e){
        e.preventDefault(); 
        if(todo.task.trim()){
            addToDo({...todo, id: "hello", task: "hello", completed: true);
        }
    }
    }

    return (
        <form>
            <input>
            name = "task"
            type = "text"
            value = {todo.task}
            onChange = {handleTaskInputChange}
            </input>
            <button type = "submit" />
        </form>
    );
}
export default TodoForm;