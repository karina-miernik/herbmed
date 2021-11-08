import React from 'react';
import styles from './Search.module.css';

const Search = ({ query, handleOnChange, handleOnPress }) => {
  return (
    <div>
      <input
        value={query}
        onChange={handleOnChange}
        placeholder="Search..."
        className={styles.input}
        onKeyPress={handleOnPress}
      />
    </div>
  );
};

export default Search;
