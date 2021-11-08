import React from 'react';
import styles from './Home.module.css';
import PageWrapper from '../PageWrapper/PageWrapper';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <PageWrapper>
      <div className={styles.title}>Find herbs that heal...</div>
      <div className={styles.home}>
        <div className={styles.container}>
          <Link to="/diseases" className={styles.titleTwo}>
            <div className={styles.imageOne} />
            <div className={styles.text}>Diseases</div>
          </Link>
        </div>
        <div className={styles.container}>
          <Link to="/herbs" className={styles.titleTwo}>
            <div className={styles.imageTwo}></div>
            <div className={styles.text}>Herbs</div>
          </Link>
        </div>
      </div>
      <div className={styles.footer}>Footer</div>
    </PageWrapper>
  );
};

export default Home;
