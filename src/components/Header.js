import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  const heading = 'Financial Stock Companies';
  return (
    <h1 className={styles.header}>
      {heading}
    </h1>
  );
};

export default Header;
