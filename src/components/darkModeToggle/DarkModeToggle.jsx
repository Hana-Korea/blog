'use client';

import { ThemeContext } from '@/context/ThemeContext';
import React, { useContext } from 'react';
import styles from './darkModeToggle.module.css';

function DarkModeToggle() {
  const { toggle, mode } = useContext(ThemeContext);
  return (
    <div className={styles.toggleContainer} onClick={toggle}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>☀️</div>
      <div
        className={styles.ball}
        style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
      ></div>
    </div>
  );
}

export default DarkModeToggle;
