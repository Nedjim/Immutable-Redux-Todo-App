import React from 'react';
import Todo from './Todo';

const TodoList = (props) => (

    <div className='todo'>
        <input type='text' placeholder='Add todo'/>
        <ul className='todo-list'>
            {
                props.todos.map(e => (
                    <li key={e.get('id')} className='todo-item'>
                        <Todo todo={e}/>
                    </li>
                ))
            }
        </ul>
    </div>
)

export default TodoList;
