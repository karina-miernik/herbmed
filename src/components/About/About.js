import React from 'react';
import PageWrapper from '../PageWrapper/PageWrapper';
import Card from '../Card/Card'
import Title from '../Title/Title'
import styles from './About.module.css'
const About = () => {
  return (
    <PageWrapper>
      <div className={styles.container}>
        <div className={styles.image} />
        <div className={styles.containerText}>
        <Title title="Caution"/>
        <div className={styles.text}>Lorem</div>
        </div>

      </div>
      {/* <Card
      photo={result.photo}
      name={result.name}
      heals={result.heals.replaceAll('|', '•')}
      id = {results.id}
      buttonText="More"
      linkTo={`/herbs/${result.name}`}
      headerLink={`/herbs/${result.name}`}
    /> */}
    </PageWrapper>
  );
};

export default About;
