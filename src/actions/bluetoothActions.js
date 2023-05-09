import {
  getBluetoothDevices,
  connectToDevice,
  getDeviceCharacteristics,
} from '../utils/bluetooth';


export const SCAN_DEVICES = 'SCAN_DEVICES';
export const FILTER_DEVICES = 'FILTER_DEVICES';
export const CONNECT_DEVICE = 'CONNECT_DEVICE';
export const DISCONNECT_DEVICE = 'DISCONNECT_DEVICE';
export const UPDATE_CHARACTERISTICS = 'UPDATE_CHARACTERISTICS';
export const UPDATE_SELECTED_CHARACTERISTIC = 'UPDATE_SELECTED_CHARACTERISTIC';

export const scanDevices = () => async (dispatch) => {
  try {
    console.log('Scanning devices...');
    const devices = await getBluetoothDevices(); // Replace this with your own implementation
    dispatch({ type: SCAN_DEVICES, payload: devices });
  } catch (error) {
    console.error('Failed to scan devices:', error);
  }
};

export const filterDevices = (nameFilter) => ({
  type: FILTER_DEVICES,
  payload: nameFilter,
});

export const connectDevice = (device) => async (dispatch) => {
  try {
    const connectedDevice = await connectToDevice(device); // Replace this with your own implementation
    dispatch({ type: CONNECT_DEVICE, payload: connectedDevice });

    const characteristics = await getDeviceCharacteristics(connectedDevice); // Replace this with your own implementation
    dispatch({ type: UPDATE_CHARACTERISTICS, payload: characteristics });
  } catch (error) {
    console.error('Failed to connect to device:', error);
  }
};

export const disconnectDevice = () => async (dispatch, getState) => {
  try {
    const { bluetooth } = getState();
    if (bluetooth.connectedDevice) {
      await bluetooth.connectedDevice.gatt.disconnect();
      console.log('Disconnected from device:', bluetooth.connectedDevice.name);
      dispatch({ type: DISCONNECT_DEVICE });
    } else {
      console.log('No device connected');
    }
  } catch (error) {
    console.error('Failed to disconnect from device:', error);
  }
};

export const updateSelectedCharacteristic = (characteristic) => ({
  type: UPDATE_SELECTED_CHARACTERISTIC,
  payload: characteristic,
});
