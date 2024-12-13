import React, {useRef} from 'react';
import './NavBar.css'

function NavBar({ onAddTodo }) {

    const inputRef = useRef();

    function handleSubmit(event) {
        event.preventDefault();
        const inputValue = inputRef.current.value.trim();
        if (inputValue) {
            onAddTodo(inputValue); // Call the function passed from App
            inputRef.current.value = ""; // Clear input field
        }
    }

    return (
        <div className="navBar-container">
            <form onSubmit={handleSubmit}>
                <input
                    className="navBar-input"
                    type="text"
                    ref={inputRef}
                    name="todo"
                    placeholder="Type a new todo"
                />
                <button>
                    <span>Add Todo</span>
                </button>
            </form>
            <div className="grayLine">

            </div>
        </div>
    );
}

export default NavBar;