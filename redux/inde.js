import { combineReducers } from 'redux';
import rootReducer from './reducer';

const Reducer = combineReducers({
  saludo: rootReducer,
  // Add other reducers here if needed
});

export default Reducer;
