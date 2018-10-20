import React, { Component } from 'react';
import TodoList from './viewes/Todos/TodoList';
import Header from './viewes/Header'

class App extends Component {
  render() {
    return(
        <div>
          <Header/>
            <TodoList/>
        </div>
    )
  }
}
export default App;
