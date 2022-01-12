import React, { useState, useEffect } from 'react';
import styles from './Herbs.module.css';
import PageWrapper from '../PageWrapper/PageWrapper';
import Search from '../Search/Search';
import Title from '../Title/Title'
import axios from 'axios';
import unsplash from '../../api/unsplash'
import { DATABASE_URL } from '../../index';
const Herbs = () => {
  const [results, setResults] = useState([]);
  const [text, setText] = useState('')

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
      <div className={styles.photoContainer}>
        <div className={styles.name}>{result.name}</div>
        <div><img src={result.photo} className={styles.photo} alt="herb image"/></div>
      </div>
      <div>{result.description}</div>
      <h3>It heals:</h3>
      <div>• {result.heals.replaceAll('|', '•')}</div>
      <h3>How it cures?</h3>
      <div>{result.cures.replaceAll('|', '•')}</div>
    </div>
  )
})
const filteredResult = results.filter(result => result.name.toLowerCase().includes(text.toLowerCase()))
.map(result => {
  return(
    <div className={styles.herb}>
      <div className={styles.photoContainer}>
        <div className={styles.name}>{result.name}</div>
        <div><img src={result.photo} className={styles.photo} alt="herb image"/></div>
      </div>
      <div>{result.description}</div>
      <h3>It heals:</h3>
      <div>• {result.heals.replaceAll('|', '•')}</div>
      <h3>How it cures?</h3>
      <div>{result.cures.replaceAll('|', '•')}</div>
    </div>
  )
})

const handleOnInputChange = (text) => {
  setText(text)
}
  return (
    <PageWrapper>
      <Title title="Find herbs that heal..."/>
      <Search 
      search="Search for herbs..."
      query={text}
      onInputChange={handleOnInputChange}
      />
      {
        text
        ?  results.filter(result => result.name.toLowerCase().includes(text.toLowerCase()))
           .map(result => {
             return(
              <div className={styles.herbList}>
                {filteredResult}
              </div>
             )
           })
        : <div className={styles.herbList}>
            {renderedResults}
        </div>
      }

    </PageWrapper>
  );
};

export default Herbs;
