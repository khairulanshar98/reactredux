import { reducers } from '../reducer/index'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

const middlewares:any[] = [];
const logger = createLogger();
let enablelogger = true;
if (enablelogger) middlewares.push(logger);
export const store = createStore(reducers, applyMiddleware(thunk,  ...middlewares))