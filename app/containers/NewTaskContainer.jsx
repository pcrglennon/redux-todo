import { connect } from 'react-redux';

import { createTask } from '../actions/tasks';
import NewTask from '../components/NewTask.jsx';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (description) => {
      dispatch(createTask(description))
    }
  };
};

const NewTaskContainer = connect(
  null,
  mapDispatchToProps
)(NewTask);

export default NewTaskContainer;
