/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';

import ajax from 'src/middlewares/ajax';
import validation from 'src/middlewares/validation';
import websocket from 'src/middlewares/websocket';

const middlewares = applyMiddleware(ajax, validation, websocket);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = composeEnhancers(middlewares);

const store = createStore(reducer, enhancers);

export default store;
