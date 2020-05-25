import React, { useState, useEffect } from 'react';
import { getDailyRaceCount } from '../../services/getDailyCounts';
import { shapeWash, shapeClack, shapeMult } from '../../utils/dailyCounts';
import Header from '../common/Header';
import VBar from '../chart-templates/VBar';
import styles from './VerticalBar.css';

const DailyCountRaceVBar = () => {
  const [county, setCounty] = useState('multnomah');
  const [rawRaceData, setRawRaceData] = useState([]);

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  useEffect(() => {
    getDailyRaceCount(county)
      .then(res => {setRawRaceData(res);});
  }, [county]);

  const data = (county === 'multnomah') ? shapeMult(rawRaceData)
    : (county === 'clackamas') ? shapeClack(rawRaceData) 
      : shapeWash(rawRaceData); 

  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header 
            handleChange={handleChange} 
            name={'race-radio'} 
            id={'race'}
            title={'Daily Snapshot'}
            category={'Population by Race'}> 
          </Header>
        </header>
        <VBar 
          county={county} 
          data={data} 
          xLabel={'Number of People in Detention'} 
          yLabel={'Race'} />
      </section>
    </>
  );
};

export default DailyCountRaceVBar;

