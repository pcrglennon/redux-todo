import { connect } from 'react-redux';

import TodoList from '../components/TodoList.jsx';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
    todosLoading: state.ui.todosLoading
  };
};

const TodoListContainer = connect(
  mapStateToProps,
  {}
)(TodoList);

export default TodoListContainer;
