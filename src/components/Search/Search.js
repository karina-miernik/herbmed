import React from 'react';
import styles from './Search.module.css';

const Search = ({ query, onInputChange, handleOnPress, search}) => {
  const handleOnChange = (e) => {
    onInputChange(e.target.value)
  }
  return (
    <div  className={styles.search}>
      <input
        value={query}
        onChange={handleOnChange}
        placeholder={search}
        onKeyPress={handleOnPress}
      />
    </div>
  );
};

export default Search;
