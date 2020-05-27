import React from 'react';
import PropTypes from 'prop-types';
import styles from '../chart-scroll/VerticalBar.css';
import { CSVLink } from 'react-csv';
import { dailyCounts } from '../../data/daily-counts';

const HeaderBasic = ({ title, category }) => {

  return (
    <header className={styles.titleWrapper}>
      <h4>{title}</h4>
      <h3>{category}</h3>
      <CSVLink data={dailyCounts}>Download Data</CSVLink>
    </header>
  );
};

HeaderBasic.propTypes = {
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default HeaderBasic;
