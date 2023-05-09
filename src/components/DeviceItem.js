import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { connectDevice, disconnectDevice } from '../actions/bluetoothActions';
import styles from '../styles/components/DeviceItem.module.css';

const DeviceItem = ({ device }) => {
  const dispatch = useDispatch();
  const connectedDevice = useSelector((state) => state.bluetooth.connectedDevice);

  const handleConnectClick = () => {
    if (!connectedDevice || connectedDevice.id !== device.id) {
      dispatch(connectDevice(device));
    }
  };

  const handleDisconnectClick = () => {
    dispatch(disconnectDevice());
  };

  const isConnected = connectedDevice && connectedDevice.id === device.id;

  return (
    <div className={styles.deviceItem}>
      <div className={styles.deviceName}>{device.name}</div>
      {!isConnected ? (
        <button className={styles.connectButton} onClick={handleConnectClick}>
          Connect
        </button>
      ) : (
        <button className={styles.disconnectButton} onClick={handleDisconnectClick}>
          Disconnect
        </button>
      )}
    </div>
  );
};

DeviceItem.propTypes = {
  device: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default DeviceItem;
