import React, { useState, useEffect } from 'react'
import styles from './Diseases.module.css';
import PageWrapper from '../PageWrapper/PageWrapper';
import Search from '../Search/Search';
import Title from '../Title/Title'
import axios from 'axios';
import { DATABASE_URL } from '../../index';
import { Link } from "react-router-dom";


const Diseases = () => {
  const [results, setResults] = useState([]);
  const [data, setData] = useState([])
  const [text, setText] = useState('')
        useEffect(() => {
          const search = async () => {
            const res =  await axios.get(`${DATABASE_URL}herbs.json`)
            const d = res.data
            let newA = []
            d.map(e => newA.push(e.heals.split('|')))
            const mergedArray = newA.concat.apply([], newA).filter(e => !!e)
            const uniqueValues = [...new Set(mergedArray)]
            setResults(uniqueValues)
          }
          search()
        }, []);

        useEffect(() => {
          const search = async () => {
            const res =  await axios.get(`${DATABASE_URL}herbs.json`)
            setData(Object.keys(res.data).map(key => {
              return {
                id: key,
                ...res.data[key]
              }
            }))
            console.log('d', data)
          }
          search()
        }, []);
  const renderedResults = results.map(result => {
    return(
      <div className={styles.disease}>
      <Link to={`diseases/${result}`} className={styles.link}>
        {result}
      </Link>
      </div>
    )
  })
  const filteredResult = results.filter(result => result.toLowerCase().includes(text.toLowerCase()))
  .map(result => {
    return(
      <div className={styles.disease}>
        <Link to={`diseases/${result}`} className={styles.link}>
        {result}
        </Link>
      </div>
    )
  })
  // const filteredData = data.filter(d => d.heals.includes)

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
        ? <div className={styles.list}>
          {filteredResult}  
          </div>
          
        : <div className={styles.list}>
        {renderedResults}
        </div>
      }
   
    </PageWrapper>
  );
};

export default Diseases