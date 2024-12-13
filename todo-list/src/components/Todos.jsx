import React, { useState } from 'react'
import "./Todos.css";


function Todos({ todos, onToggleTodo, onDeleteTodo, onCountingTodo, onDeleteAllTasks }) {
    return (
        <div>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        <input
                            className="checkbox"
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => onToggleTodo(index)}
                        />
                        <span
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                color: todo.completed ? 'green' : 'black',
                            }}
                        >
                           {todo.text}
                        </span>
                        <button
                            className="deleteButton"
                            onClick={() => onDeleteTodo(index)}
                            onMouseOver={(e) => e.target.style.backgroundColor = "lightGrey"}
                            onMouseOut={(e) => e.target.style.backgroundColor = "darkGrey"}
                        >
                            X
                        </button>
                    </li>
                ))}
            </ul>
            {todos.length > 1 && (
                <button
                    className="deleteAllButton"
                    onClick={() => onDeleteAllTasks()}
                    onMouseOver={(e) => e.target.style.backgroundColor = 'darkred'}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'red'
                    }}
                >
                    delete all
                </button>
            )}
            {todos.length > 0 && (
                <p>tasks left : {onCountingTodo}</p>
            )}

        </div>
    );
}

export default Todos;