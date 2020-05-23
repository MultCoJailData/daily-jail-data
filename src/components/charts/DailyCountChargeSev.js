import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import React, { useState, useEffect } from 'react';
import { getDailyChargeCount } from '../../services/getDailyCounts';
import { shapeCharge } from '../../utils/dailyCounts';
import PropTypes from 'prop-types';
import styles from './Charts.css';

const DailyCountChargeSev = ({ county }) => {
  const [chargeData, setChargeData] = useState([]);
  useEffect(() => {
    if(county !== 'multnomah'){
      console.log('error');
    } else {
      getDailyChargeCount(county)
        .then(res => {setChargeData(res);});
    }
  }, [county]);

  if(county !== 'multnomah') {
    return <div className={styles.countyError}>Data not available for {county} county</div>;
  } else {
    const data = shapeCharge(chargeData);

    return (
      <div className={styles.ChartWrapper}>
        <VictoryChart
          domainPadding={25}
          width={400}
          height={225}
        >
          <VictoryLabel 
            text={county.toUpperCase() + ' COUNTY'}
            x={155} 
            y={30}
            style={{
              fontSize: 7.5,
            }}
          />
          <VictoryBar
            barRatio={0.8}
            style={{
              data: { fill: 'black' },
              labels: { fontSize: 5 }
            }}
            data={data}
            horizontal={true}
            padding={{ top: 20, bottom: 60 }}
            labels={({ datum }) => datum.y}
          />
          <VictoryAxis
            style={{
              axisLabel: { padding: 15, fontSize: 8 },
              tickLabels: {
                fontSize: 4.5,
                fontFamily: 'Roboto Condensed, sans-serif',
                fillOpacity: 1,
                margin: 0,
                padding: 2
              }
            }} 
          />
          <VictoryAxis dependentAxis
            label='number'
            style={{
              axisLabel: { padding: 20, fontSize: 8 },
              tickLabels: {
                fontSize: 5,
                fontFamily: 'Roboto Condensed, sans-serif',
                fillOpacity: 1,
                margin: 0,
                padding: 0
              }
            }}
          />
        </VictoryChart>
      </div>
    );
  }
};

DailyCountChargeSev.propTypes = {
  county: PropTypes.string.isRequired,
};

export default DailyCountChargeSev;