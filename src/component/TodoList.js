import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (

    <div className='todo'>
        <input type='text' placeholder='Add todo'/>
        <ul className='todo-list'>
            {
                props.todos.map( t => (
                    <li key={t.id} className='todo-item'>
                        <Todo todo={t}/>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default TodoList;
