import { combineReducers,createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReduser from './products';

let reducers = combineReducers({store:productReduser});

const store = () => {
    return createStore(reducers,composeWithDevTools());
}

export default store();
