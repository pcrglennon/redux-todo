import React from 'react';

import Task from './Task.jsx';
import NewTaskContainer from '../containers/NewTaskContainer.jsx';

class TaskList extends React.Component {
  renderTasksLoading() {
    return (
      <h2>Loading...</h2>
    );
  }

  renderTasks() {
    return (
      <ul>
        {this.props.tasks.map(task =>
          <li key={task.id}>
            <Task {...task} />
          </li>
        )}
        <li key="new-task">
          <NewTaskContainer />
        </li>
      </ul>
    );
  }

  render() {
    if (this.props.tasksLoading) {
      return this.renderTasksLoading();
    } else {
      return this.renderTasks();
    }
  }
}

export default TaskList;
