import React, { useState, useEffect } from 'react';
import styles from './Herbs.module.css';
import PageWrapper from '../PageWrapper/PageWrapper';
import Search from '../Search/Search';
import axios from 'axios';
import unsplash from '../../api/unsplash'
const Herbs = () => {
  

  return (
    <PageWrapper>
      <div className={styles.title}>Find herbs that heal...</div>
      <Search />
      <div>
        </div>
    </PageWrapper>
  );
};

export default Herbs;
