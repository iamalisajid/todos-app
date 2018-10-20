import React, { Component } from 'react';
import TodoItem from "./TodoItem";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 1, name: "abc", completed: true},
                {id: 2, name: "react", completed: false},
                {id: 3, name: "redux", completed: false}
                ]
        }
    }


    onSelection = () => {
        console.log('selection');
    }
    onDeletion = (event) => {
        event.stopPropagation();
        console.log('deleteion');
    }
    render() {
        return(
            <div className="container">
                <h2>Todos</h2>
                <ul className="list-group">
                    {this.state.todos.map(todos =>
                        <TodoItem
                            key={todos.id}
                            onSelection={this.onSelection}
                            text={todos.name}
                            onDeletion={this.onDeletion}/>)
                    }
                </ul>
            </div>
        );
    }

}

export default TodoList;