import React, { useState, useEffect } from 'react'
import styles from './Diseases.module.css';
import PageWrapper from '../PageWrapper/PageWrapper';
import Search from '../Search/Search';
import Title from '../Title/Title'
import axios from 'axios';
import unsplash from '../../api/unsplash'
import { DATABASE_URL } from '../../index';
const Diseases = () => {
  const [results, setResults] = useState([]);
  const [text, setText] = useState('')
        useEffect(() => {
          const search = async () => {
            const res =  await axios.get(`${DATABASE_URL}herbs.json`)
            const d = res.data
            let newA = []
            d.map(e => newA.push(e.heals.split('|')))
            const mergedArray = newA.concat.apply([], newA)
            const uniqueValues = [...new Set(mergedArray)]
            console.log('unique',uniqueValues)
            setResults(uniqueValues)
          }
          search()
        }, []);
  const renderedResults = results.map(result => {
    console.log(result)
    return(
      <div className={styles.disease}>{result}</div>
    )
  })
  const handleOnInputChange = (text) => {
    setText(text)
  }
  return (
    <PageWrapper>
      <Title title="Find diseases..." />
      <Search 
        search="Search for diseases..." 
        onInputChange={handleOnInputChange}
        query={text}
      />
      {
        text
        ?  results.filter(result => result.includes(text))
           .map(result => {
             return(
              <div className={styles.list}>
                <div className={styles.disease}>
                  {result}
                </div>
              </div>
             )
           })
        : <div className={styles.list}>
        {renderedResults}
        </div>
      }
   
    </PageWrapper>
  );
};

export default Diseases