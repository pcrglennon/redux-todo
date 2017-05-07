import fetch from 'isomorphic-fetch';

import actionTypes from '../constants/actionTypes';

function fetchBegin() {
  return {
    type: actionTypes.TODOS_FETCH_BEGIN
  };
}

function fetchError() {
  return {
    type: actionTypes.TODOS_FETCH_ERROR
  };
}

function fetchSuccess(todos) {
  return {
    type: actionTypes.TODOS_FETCH_SUCCESS,
    todos: todos
  };
}

export function fetchTodos() {
  return ((dispatch) => {
    dispatch(fetchBegin());

    return fetch('https://todo-api-1.herokuapp.com/tasks.json')
      .then(
        (response) => response.json(),
        (error) => {
          console.log('An error occured.', error);
          dispatch(fetchError());
        }
      )
      .then((json) => {
        dispatch(fetchSuccess(json));
      });
  });
}
