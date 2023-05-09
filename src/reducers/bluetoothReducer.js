import {
    SCAN_DEVICES,
    FILTER_DEVICES,
    CONNECT_DEVICE,
    DISCONNECT_DEVICE,
    UPDATE_SELECTED_CHARACTERISTIC,
    UPDATE_CHARACTERISTICS
  } from '../actions/bluetoothActions';
  
  const initialState = {
    devices: [],
    filteredDevices: [],
    nameFilter: '',
    connectedDevice: null,
    characteristics: [],
    selectedCharacteristic: null,
  };
  
  const bluetoothReducer = (state = initialState, action) => {
    switch (action.type) {
      case SCAN_DEVICES:
        return {
          ...state,
          devices: action.payload,
          filteredDevices: action.payload.filter((device) =>
            device.name.toLowerCase().includes(state.nameFilter.toLowerCase())
          ),
        };
  
      case FILTER_DEVICES:
        return {
          ...state,
          nameFilter: action.payload,
          filteredDevices: state.devices.filter((device) =>
            device.name.toLowerCase().includes(action.payload.toLowerCase())
          ),
        };
  
      case CONNECT_DEVICE:
        return {
          ...state,
          connectedDevice: action.payload,
        };
  
      case DISCONNECT_DEVICE:
        return {
          ...state,
          connectedDevice: null,
          characteristics: [],
          selectedCharacteristic: null,
        };
  
      case UPDATE_CHARACTERISTICS:
        return {
          ...state,
          characteristics: action.payload,
        };
  
      case UPDATE_SELECTED_CHARACTERISTIC:
        return {
          ...state,
          selectedCharacteristic: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default bluetoothReducer;
  