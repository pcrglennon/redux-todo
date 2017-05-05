import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { initialize } from './actions/todos';
import todosReducer from './reducers/todos';
import App from './components/App.jsx';

const rootReducer = combineReducers({
  todos: todosReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, {}, composeEnhancers(
  applyMiddleware(thunk)
));

store.dispatch(initialize());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
