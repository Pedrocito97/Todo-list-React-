import {useEffect, useState} from 'react'
import './App.css'
import Title from './components/Title';
import Todos from './components/Todos';
import NavBar from "./components/NavBar";

const LSKEY = "MyTodoApp";

function App() {

    const [todos, setTodos] = useState(() =>{
        const savedTodos = window.localStorage.getItem(LSKEY+".todos");
        return savedTodos ? JSON.parse(savedTodos) : [];
    }); // Moved state to App

    const handleAddTodo = (newTodo) => {
        setTodos([...todos, { text: newTodo, completed: false}]);
    };

    const toggleTodo = (index) => {
        setTodos(
            todos.map((todo, i) =>
                i === index ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    const remainingTodos = todos.filter(todo => !todo.completed).length

    const deleteTodo = index => {
        setTodos(todos.filter((_, i) => i !== index));
    }

    if(todos.length > 1){
        const deleteAll = () => {
            setTodos([]);
        }
    }
    const deleteAll = () => {
        setTodos([]);
    }

    useEffect(() => {
        window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos))
    }, [todos]);

    return (
        <div className="App">
            {/* Pass handleAddTodo to NavBar */}
            <Title />
            <NavBar onAddTodo={handleAddTodo} />

            {/* Pass todos to Todos */}
            <Todos todos={todos} onToggleTodo={toggleTodo} onDeleteTodo={deleteTodo} onCountingTodo={remainingTodos} onDeleteAllTasks={deleteAll} />
        </div>
    );
}

export default App;