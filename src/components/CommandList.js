import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCommand } from '../actions/commandActions';
import CommandItem from './CommandItem';
import styles from '../styles/components/CommandList.module.css';

const CommandList = () => {
  const [commandText, setCommandText] = useState('');
  const dispatch = useDispatch();
  const commands = useSelector((state) => state.command.commands);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commandText.trim()) {
      dispatch(addCommand(commandText.trim()));
      setCommandText('');
    }
  };

  return (
    <div className={styles.commandList}>
      <h2>Commands</h2>
      <form className={styles.commandForm} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter command"
          value={commandText}
          onChange={(e) => setCommandText(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div className={styles.commandListContainer}>
        {commands.length === 0 ? (
          <p>No commands found.</p>
        ) : (
          commands.map((command) => <CommandItem key={command.id} command={command} />)
        )}
      </div>
    </div>
  );
};

export default CommandList;
