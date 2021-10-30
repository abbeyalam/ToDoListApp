import './App.css';
import React, {useState} from "react"
import TodoForm from './components/ToDoForm';

function App() {
  const [todos, setTodos] = useState([])
  
  function addToDo(todo) {
    // Pass in array to setToDo Function

    setTodos([todo, ...todos]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>React ToDo List </p>
        <TodoForm addToDo = {addToDo} /> {/* Adding in TodoForm as a property */}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
