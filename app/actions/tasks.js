import fetch from 'isomorphic-fetch';

import actionTypes from '../constants/actionTypes';

const baseApiUrl = 'https://todo-api-1.herokuapp.com';

function fetchBegin() {
  return {
    type: actionTypes.FETCH_TASKS_BEGIN
  };
}

function fetchError() {
  return {
    type: actionTypes.FETCH_TASKS_ERROR
  };
}

function fetchSuccess(tasks) {
  return {
    type: actionTypes.FETCH_TASKS_SUCCESS,
    tasks: tasks
  };
}

export function fetchTasks() {
  return ((dispatch) => {
    dispatch(fetchBegin());

    return fetch(`${baseApiUrl}/tasks.json`)
      .then(
        (response) => response.json(),
        (error) => {
          console.log('An error occured while fetching Tasks.', error);
          dispatch(fetchError());
        }
      )
      .then((json) => {
        dispatch(fetchSuccess(json));
      });
  });
}

function createBegin() {
  return {
    type: actionTypes.CREATE_TASK_BEGIN
  };
}

function createError() {
  return {
    type: actionTypes.CREATE_TASK_ERROR
  };
}

function createSuccess(task) {
  return {
    type: actionTypes.CREATE_TASK_SUCCESS,
    id: task.id,
    description: task.description,
  };
}

export function createTask(description) {
  return((dispatch) => {
    dispatch(createBegin());

    return fetch(`${baseApiUrl}/tasks.json`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ task: { description: description } })
    })
      .then(
        (response) => response.json(),
        (error) => {
          console.log('An error occured while creating a Task.', error);
          dispatch(createError());
        }
      )
      .then((json) => {
        dispatch(createSuccess(json));
      });
  });
}
