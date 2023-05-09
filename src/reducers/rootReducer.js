import { combineReducers } from 'redux';
import bluetoothReducer from './bluetoothReducer';
import commandReducer from './commandReducer';

const rootReducer = combineReducers({
  bluetooth: bluetoothReducer,
  command: commandReducer,
});

export default rootReducer;
