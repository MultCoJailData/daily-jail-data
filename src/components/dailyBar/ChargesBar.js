import React, { useState } from 'react';
import useUpDated from '../../hooks/useUpDated';
import Header from './Header';
import RadioControls from './RadioControls';
import styles from './VerticalBar.css';
import DailyCharges from '../charts/DailyCharges';

const ChargesBar = () => {
  const [county, setCounty] = useState('multnomah');

  const handleChange = ({ target }) => {
    setCounty(target.value);
  };

  return (
    <>
      <section className={styles.VerticalBar}>
        <header className={styles.headWrapper}>
          <Header upDateHook={useUpDated}>Number of People in Custody by Charge Severity</Header>
          <RadioControls handleChange={handleChange} name={'charge-radio'} id={'charge'}/>
        </header>
        <section className={styles.chartArea}>

          <DailyCharges county={county} />
        </section>
      </section>
    </>
  );
};

export default ChargesBar;

