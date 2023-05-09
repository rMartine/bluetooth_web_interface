import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { scanDevices, filterDevices } from '../actions/bluetoothActions';
import DeviceItem from './DeviceItem';
import styles from '../styles/components/DeviceList.module.css';

const DeviceList = () => {
  const dispatch = useDispatch();
  const devices = useSelector((state) => state.bluetooth.filteredDevices);
  const nameFilter = useSelector((state) => state.bluetooth.nameFilter);

  const handleScanClick = () => {
    dispatch(scanDevices());
  };

  const handleFilterChange = (e) => {
    dispatch(filterDevices(e.target.value));
  };

  return (
    <div className={styles.deviceList}>
      <h2>Devices</h2>
      <button className={styles.scanButton} onClick={handleScanClick}>
        Scan
      </button>
      <input
        type="text"
        placeholder="Filter by name"
        value={nameFilter}
        onChange={handleFilterChange}
        className={styles.filterInput}
      />
      <div className={styles.deviceListContainer}>
        {devices.length === 0 ? (
          <p>No devices found.</p>
        ) : (
          devices.map((device) => <DeviceItem key={device.id} device={device} />)
        )}
      </div>
    </div>
  );
};

export default DeviceList;
