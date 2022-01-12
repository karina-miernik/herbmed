import React, { useState, useEffect } from 'react';
import styles from './Herbs.module.css';
import PageWrapper from '../PageWrapper/PageWrapper';
import Search from '../Search/Search';
import Title from '../Title/Title'
import axios from 'axios';
import unsplash from '../../api/unsplash'
import { DATABASE_URL } from '../../index';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
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
    <Card
      description={result.description}
      photo={result.photo}
      name={result.name}
      heals={result.heals.replaceAll('|', '•')}
      cures={result.cures.replaceAll('|', '•')}
    />
  )
})
const filteredResult = results.filter(result => result.name.toLowerCase().includes(text.toLowerCase()))
.map(result => {
  return(
    <Card
      description={result.description}
      photo={result.photo}
      name={result.name}
      heals={result.heals.replaceAll('|', '•')}
      cures={result.cures.replaceAll('|', '•')}
    />
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
