import React from 'react';

class Task extends React.Component {
  render() {
    return (
      <div>
        {this.props.description}
      </div>
    );
  }
}

export default Task;
