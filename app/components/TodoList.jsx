import React from 'react';

import Todo from './Todo.jsx';

class TodoList extends React.Component {
  renderTodosLoading() {
    return (
      <h2>Loading...</h2>
    );
  }

  renderTodos() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
          />
        )}
      </ul>
    );
  }

  render() {
    if (this.props.todosLoading) {
      return this.renderTodosLoading();
    } else {
      return this.renderTodos();
    }
  }
}

export default TodoList;
