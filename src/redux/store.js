import { legacy_createStore, combineReducers, applyMiddleware, compose } from "redux";
import { HeaderReducer } from './reducers/HeaderReducer';
import thunkMiddleware  from "redux-thunk"; 


let reducers = combineReducers({
    HeaderPart: HeaderReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = legacy_createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default store;