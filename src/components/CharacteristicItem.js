import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateSelectedCharacteristic } from '../actions/bluetoothActions';
import styles from '../styles/components/CharacteristicItem.module.css';

const CharacteristicItem = ({ characteristic }) => {
  const dispatch = useDispatch();
  const selectedCharacteristic = useSelector((state) => state.bluetooth.selectedCharacteristic);

  const handleClick = () => {
    dispatch(updateSelectedCharacteristic(characteristic));
  };

  const isSelected = selectedCharacteristic && selectedCharacteristic.uuid === characteristic.uuid;

  return (
    <div
      className={`${styles.characteristicItem} ${isSelected ? styles.selected : ''}`}
      onClick={handleClick}
    >
      <div className={styles.characteristicName}>{characteristic.uuid}</div>
    </div>
  );
};

CharacteristicItem.propTypes = {
  characteristic: PropTypes.shape({
    uuid: PropTypes.string.isRequired,
    properties: PropTypes.object.isRequired,
  }).isRequired,
};

export default CharacteristicItem;
