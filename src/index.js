import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import {composeWithDevTools} from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
const store=createStore(
    rootReducer,composeWithDevTools(applyMiddleware(thunk,logger))
)

ReactDOM.render(<Router><Provider store={store}><App /></Provider></Router>, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
