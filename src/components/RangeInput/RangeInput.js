import React, { useState } from 'react';
import styles from './RangeInput.module.css';

const RangeInput = () => {
  const [input, setInput] = useState(3);

  const handleChange = e => {
    setInput(e.target.value)
  }

  return (
    <div className={styles.container}>
      <input
        type="range"
        min="0"
        max="100"
        value={input}
        onChange={handleChange}
        className={styles.range}
        step="1"/>
      <span>{input}</span>
    </div>
  )
}

export default RangeInput;