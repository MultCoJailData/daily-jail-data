import { useState, useEffect } from 'react';
import { getTop20Charges } from '../services/jailDataApi';
import { vForVictory } from '../utils/dailyCounts';
import { makeCSV } from '../data-shapers/makeCSV';

const useChargeDescription = county => {
  const [data, setData] = useState([]);
  const [csv, setCSV] = useState({});
  const [loading, setLoading] = useState(true);
  const updated = 'today';

  const fetchChargeDescriptions = () => {
    setLoading(true);
    getTop20Charges(county)
      .then(res => {
        setData(vForVictory(res));
        setCSV(makeCSV(res, county, updated, 'top20Charges'));
      })
      .finally(() => setLoading(false));
  };

  useEffect(fetchChargeDescriptions, [county]);

  return [data, csv, loading];
};

export default useChargeDescription;

