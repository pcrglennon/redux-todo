import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <li>
        {this.props.description}
      </li>
    );
  }
}

export default Todo;
