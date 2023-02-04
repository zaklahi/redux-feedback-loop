import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
///import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';

const feeling = (state = '', action) => {
    if (action.type === 'SET_FEELING') {
        // dispatch will have type of 'SET_NAME'
        // and payload with the value to set
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}

const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        // dispatch will have type of 'SET_NAME'
        // and payload with the value to set
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}

const understanding = (state = '', action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        // dispatch will have type of 'SET_NAME'
        // and payload with the value to set
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}
const support = (state = '', action) => {
    if (action.type === 'SET_SUPPORT') {
        // dispatch will have type of 'SET_NAME'
        // and payload with the value to set
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    }
    return state;
}

const storeInstance = createStore(
    // reducers go here
    combineReducers(
        {
            feeling,
           comments, 
           understanding,
           support
        }
    ),
    applyMiddleware(logger)
);










ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);