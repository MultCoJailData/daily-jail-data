import { useState, useEffect } from 'react';
import { getCategoryCount } from '../services/jailDataApi';
import { shapeAge } from '../utils/dailyCounts';
import { makeCSV } from '../data-shapers/makeCSV';

const useAgeCount = county => {
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);
  const updated = 'today';

  const fetchDailyAgencyCount = () => {
    setLoading(true);
    getCategoryCount(county, 'Age')
      .then(res => {
        setData(shapeAge(res));
        setCSV(makeCSV(res, county, updated, 'age range'));
      })
      .finally(() => setLoading(false));
  };
  
  useEffect(fetchDailyAgencyCount, [county]);

  return [data, csv, loading];
};

export default useAgeCount;
