import React, { useState, useEffect } from 'react';
import styles from './Herbs.module.css';
import PageWrapper from '../PageWrapper/PageWrapper';
import Search from '../Search/Search';
import Title from '../Title/Title'
import axios from 'axios';
import { DATABASE_URL } from '../../index';
import Card from '../Card/Card';
const Herbs = () => {
  const [results, setResults] = useState([]);
  const [text, setText] = useState('')
        useEffect(() => {
          const search = async () => {
            const res =  await axios.get(`${DATABASE_URL}herbs.json`)
            setResults(Object.keys(res.data).map(key => {
              return {
                id: key,
                ...res.data[key]
              }
            }))
            console.log()
          }
          search()
        }, []);

const renderedResults = results.map(result => {
  return(
    <Card
      photo={result.photo}
      name={result.name}
      heals={result.heals.replaceAll('|', '•')}
      id={result.name}
      buttonText="More"
      linkTo={`/herbmed/herbs/${result.name}`}
      headerLink={`/herbmed/herbs/${result.name}`}
    />
  )
})
const filteredResult = results.filter(result => result.name.toLowerCase().includes(text.toLowerCase()))
.map(result => {
  return(
    <Card
      photo={result.photo}
      name={result.name}
      heals={result.heals.replaceAll('|', '•')}
      id = {results.id}
      buttonText="More"
      linkTo={`/herbmed/herbs/${result.name}`}
      headerLink={`/herbmed/herbs/${result.name}`}
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
