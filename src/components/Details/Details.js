import React, {useState, useEffect} from "react";
import styles from './Details.module.css'
import Card from '../Card/Card';
import { useParams } from "react-router-dom";
import { DATABASE_URL } from '../../index';
import axios from 'axios';
const Details = () =>{
  const { id } = useParams();
  const [result, setResult] = useState([]);
  useEffect(() => {
    const search = async () => {
      const res =  await axios.get(`${DATABASE_URL}herbs.json`)
      setResult(Object.keys(res.data).map(key => {
        return {
          id: key,
          ...res.data[key]
        }
      }))
    }
    search()
  }, []);
  const details = result.filter(result => result.name === id)[0]
  const renderedDetails = details
  ?  <div className={styles.details}>
      <Card
      description={details.description}
      photo={details.photo}
      name={details.name}
      heals={details.heals.replaceAll('|', '•')}
      cures={details.cures.replaceAll('|', '•')}
      id={details.id}
      buttonText="Go Back"
      linkTo={`/herbs`}
      curesText="How it cures?"
      />
    </div>
  : <div></div>
  return renderedDetails
  
}

export default Details