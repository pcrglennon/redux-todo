import { connect } from 'react-redux';

import TaskList from '../components/TaskList.jsx';

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    tasksLoading: state.ui.tasksLoading
  };
};

const TaskListContainer = connect(
  mapStateToProps,
  {}
)(TaskList);

export default TaskListContainer;
