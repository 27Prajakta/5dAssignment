import { createStore } from 'redux';
import charactersReducer from '../reducers/charactersReducer';

const store = createStore(charactersReducer);

export default store;