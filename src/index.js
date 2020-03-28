import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import '../src/style/customStyle.css'

import {Provider}  from 'react-redux';
import {createStore , applyMiddleware  } from 'redux';
import createSagaMiddleware from 'redux-saga';

import {watchAffeliateAsync , watchConfigAsync ,watchLoaddataAsync,watchUserAsync} from './redux/affeliateRedux';

import reducer from './redux/store/reducer'

import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchAffeliateAsync);
sagaMiddleware.run(watchConfigAsync);
sagaMiddleware.run(watchLoaddataAsync);
sagaMiddleware.run(watchUserAsync);



ReactDOM.render(<Provider store ={store}><App></App></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
