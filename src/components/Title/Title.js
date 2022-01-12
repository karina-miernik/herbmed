import React from 'react';
import styles from './Title.module.css';

const Search = ({title}) => {
  return (
    <div className={styles.title}>{title}</div>
  );
};

export default Search;
