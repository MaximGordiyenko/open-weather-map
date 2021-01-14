import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import { reducer } from './reducer';
import logger from './logger';

const middlewareEnhancer = applyMiddleware(logger, thunk);
const composedEnhancers = compose(middlewareEnhancer);

export const store = createStore(reducer, undefined, composedEnhancers);
