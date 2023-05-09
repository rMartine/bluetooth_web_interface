import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { sendCommand, removeCommand } from '../actions/commandActions';
import styles from '../styles/components/CommandItem.module.css';

const CommandItem = ({ command }) => {
  const dispatch = useDispatch();
  const selectedCharacteristic = useSelector((state) => state.bluetooth.selectedCharacteristic);

  const handleSendClick = () => {
    if (selectedCharacteristic) {
      dispatch(sendCommand(command.text, selectedCharacteristic));
    }
  };

  const handleRemoveClick = () => {
    dispatch(removeCommand(command.id));
  };

  return (
    <div className={styles.commandItem}>
      <div className={styles.commandText}>{command.text}</div>
      <button className={styles.sendButton} onClick={handleSendClick}>
        Send
      </button>
      <button className={styles.removeButton} onClick={handleRemoveClick}>
        Remove
      </button>
    </div>
  );
};

CommandItem.propTypes = {
  command: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default CommandItem;
