import React, { useState, useEffect } from 'react';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

import './Count.css';

const Count = ({ changeCallback, initialNumber, minNumber, maxNumber }) => {
  const [count, setCount] = useState(
    typeof initialNumber === 'undefined' ? 1 : initialNumber
  );
  const [warn, setWarn] = useState(false);

  useEffect(() => {
    if (!warn) changeCallback(count);
    // eslint-disable-next-line
  }, [count]);

  return (
    <div className="count">
      <IconButton
        onClick={e => {
          setCount(state =>
            isNaN(state) || state <= minNumber ? state : state - 1
          );
        }}
      >
        <RemoveIcon />
      </IconButton>
      <input
        type="text"
        value={count}
        className={
          warn ? 'count__userInput count__userInput--warn' : 'count__userInput'
        }
        onChange={e => {
          setCount(
            isNaN(parseInt(e.currentTarget.value))
              ? e.currentTarget.value
              : parseInt(e.currentTarget.value)
          );
          setWarn(isNaN(parseInt(e.currentTarget.value)));
        }}
      />
      <div className="count__max"> / {maxNumber}</div>
      <IconButton
        onClick={e => {
          setCount(state =>
            isNaN(state) || state >= maxNumber ? state : state + 1
          );
        }}
      >
        <AddIcon />
      </IconButton>
    </div>
  );
};

export default Count;
