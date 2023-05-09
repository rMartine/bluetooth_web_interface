import { ADD_COMMAND, REMOVE_COMMAND, SEND_COMMAND, RECEIVE_UPDATE } from '../actions/commandActions';

const initialState = {
  commands: [],
  sentCommands: [],
  receivedUpdates: [],
};

const commandReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMAND:
      return {
        ...state,
        commands: [...state.commands, { id: Date.now(), text: action.payload }],
      };

    case REMOVE_COMMAND:
      return {
        ...state,
        commands: state.commands.filter((command) => command.id !== action.payload),
      };

    case SEND_COMMAND:
      return {
        ...state,
        sentCommands: [...state.sentCommands, action.payload],
      };

    case RECEIVE_UPDATE:
      return {
        ...state,
        receivedUpdates: [...state.receivedUpdates, action.payload],
      };

    default:
      return state;
  }
};

export default commandReducer;
