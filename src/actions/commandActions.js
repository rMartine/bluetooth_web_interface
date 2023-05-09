// Action Types
export const ADD_COMMAND = "ADD_COMMAND";
export const REMOVE_COMMAND = "REMOVE_COMMAND";
export const SEND_COMMAND = "SEND_COMMAND";
export const RECEIVE_UPDATE = "RECEIVE_UPDATE";

// Action Creators
export const addCommand = (command) => {
  return {
    type: ADD_COMMAND,
    payload: command,
  };
};

export const removeCommand = (commandId) => {
  return {
    type: REMOVE_COMMAND,
    payload: commandId,
  };
};

export const sendCommand = (command, characteristic) => async (dispatch) => {
  // Send the command to the selected characteristic using the Web Bluetooth API
  // Dispatch the SEND_COMMAND action with the sent command
};

export const receiveUpdate = (update) => {
  return {
    type: RECEIVE_UPDATE,
    payload: update,
  };
};

// Optional: You can create a helper function to listen for characteristic updates
// and dispatch the receiveUpdate action when an update is received.
export const listenForUpdates = (characteristic) => async (dispatch) => {
  // Listen for updates from the selected characteristic using the Web Bluetooth API
  // Dispatch the RECEIVE_UPDATE action with the received update
};