import React, {Component} from 'react';
import TodoItem from '../TodoItem';
import {TODOS_LIST} from '../../../utils/constants';

class TodoList extends Component {
    state = {
        todos: TODOS_LIST
    };

    onSelection = (id) => {
        console.info(id)
    }

    onDeletion = (id) => {
        console.info(id);
    }

    render() {
        const {todos} = this.state;
        return (
            <div className="container">
                <h2>Todos</h2>
                <ul className="list-group">
                    {todos.map(todo =>
                        <TodoItem
                            key={todo.id}
                            id={todo.id}
                            onSelection={this.onSelection}
                            text={todo.text}
                            onDeletion={this.onDeletion}/>)
                    }
                </ul>
            </div>
        );
    }

}

export default TodoList;
