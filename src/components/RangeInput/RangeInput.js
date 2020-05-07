import React, { useState } from 'react';
import styles from './RangeInput.module.css';

const RangeInput = () => {
  const [input, setInput] = useState(6);

  const handleChange = e => {
    setInput(e.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.range}>
        <span>0</span>
        <input
          type="range"
          min="0"
          max="100"
          value={input}
          onChange={handleChange}
          step="1"/>
        <span>100</span>
      </div>
      <p>Current value: {input}</p>
      <div>
        <h6>Range Input</h6>
      </div>
    </div>
  )
}

export default RangeInput;