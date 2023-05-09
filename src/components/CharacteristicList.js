import React from 'react';
import { useSelector } from 'react-redux';
import CharacteristicItem from './CharacteristicItem';
import styles from '../styles/components/CharacteristicList.module.css';

const CharacteristicList = () => {
  const characteristics = useSelector((state) => state.bluetooth.characteristics);

  return (
    <div className={styles.characteristicList}>
      <h2>Characteristics</h2>
      <div className={styles.characteristicListContainer}>
        {characteristics.length === 0 ? (
          <p>No characteristics found.</p>
        ) : (
          characteristics.map((characteristic) => (
            <CharacteristicItem key={characteristic.uuid} characteristic={characteristic} />
          ))
        )}
      </div>
    </div>
  );
};

export default CharacteristicList;
