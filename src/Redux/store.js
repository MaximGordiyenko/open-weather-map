import {createStore, applyMiddleware, compose} from "redux";
import { todosReducer } from './reducer';
import thunk from "redux-thunk";
import logger from './logger';

const middlewareEnhancer = applyMiddleware(logger, thunk);
const composedEnhancers = compose(middlewareEnhancer);

export const store = createStore(todosReducer, undefined, composedEnhancers);
