import React, { useState, useEffect } from 'react';
import styles from './Herbs.module.css';
import PageWrapper from '../PageWrapper/PageWrapper';
import Search from '../Search/Search';
import axios from 'axios';
import unsplash from '../../api/unsplash'
import { DATABASE_URL } from '../../index';
const Herbs = () => {
  const [results, setResults] = useState([]);

        useEffect(() => {
          const search = async () => {
            const res =  await axios.get(`${DATABASE_URL}herbs.json`)
            setResults(res.data)
            console.log(res.data)
          }
          search()
        }, []);
const renderedResults = results.map(result => {
  return(
    <div className={styles.herb}>
      
      <h1>{result.name}</h1>
      <div>{result.description}</div>
      <h3>It heals:</h3>
      <div>{result.heals}</div>
      <h3>How it cures?</h3>
      <dv>{result.cures}</dv>
    </div>
  )
})
  return (
    <PageWrapper>
      <div className={styles.title}>Find herbs that heal...</div>
      <Search />
      <div className={styles.herbList}>
    {renderedResults}
        </div>
    </PageWrapper>
  );
};

export default Herbs;
