import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DeviceList from './DeviceList';
import CharacteristicList from './CharacteristicList';
import CommandList from './CommandList';
import Notifications from './Notifications';
import { listenForUpdates } from '../actions/commandActions';
import '../styles/global.css';

const App = () => {
  const dispatch = useDispatch();
  const selectedCharacteristic = useSelector((state) => state.bluetooth.selectedCharacteristic);

  useEffect(() => {
    if (selectedCharacteristic) {
      dispatch(listenForUpdates(selectedCharacteristic));
    }
  }, [selectedCharacteristic, dispatch]);

  return (
    <div className="app-container">
      <h1>Bluetooth Device Scanner</h1>
      <div className="main-container">
        <DeviceList />
        <CharacteristicList />
        <CommandList />
      </div>
      <Notifications />
    </div>
  );
};

export default App;
