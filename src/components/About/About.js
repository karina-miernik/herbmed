import React from 'react';
import PageWrapper from '../PageWrapper/PageWrapper';
import styles from './About.module.css'
const About = () => {
  return (
    <PageWrapper>
      <div className={styles.container}>
        <div className={styles.image} />
        <div className={styles.containerText}>
        <div className={styles.titleAbout}>Caution</div>
        
        <div className={styles.text}>
          <p>This app was created for learning and entertainment purposes. Information presented here is either from the Internet or books dedicated to herbs.</p>
          <p>I don't take a resposibility for medical advice presented over here.</p>  
        </div>
        </div>
      </div>

    </PageWrapper>
  );
};

export default About;
