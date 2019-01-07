import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose
} from 'redux';
import { reducer as formReducer } from 'redux-form';

const store = createStore(
    combineReducers({
        form: formReducer
    }),
    undefined,
    compose(applyMiddleware())
);

export default store;
