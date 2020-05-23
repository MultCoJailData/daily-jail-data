import { VictoryArea, VictoryChart, VictoryAxis, VictoryLegend } from 'victory';
import React, { useState, useEffect } from 'react';
import { getDailyCounts } from '../../services/getTriCountyDaily';
import styles from './Charts.css';

const TrendTriCountyTotals = () => {
  const [rawTrendData, setRawTrendData] = useState([]);
  
  useEffect(() => {
    getDailyCounts()
      .then(res => {setRawTrendData(res[0].counts);});
  }, []);

  const shapeTrend = rawData => {
    let clackamas = [];
    let washington = [];
    let multnomah = [];

    rawData.map(i => {
      clackamas.push({
        x: i.date.slice(0, 10),
        y: i.clack });
      multnomah.push({
        x: i.date.slice(0, 10),
        y: i.mult });
      washington.push({
        x: i.date.slice(0, 10),
        y: i.wash });
    });
    return [clackamas, multnomah, washington];
  };
  
  const data = shapeTrend(rawTrendData);

  return (
    <div className={styles.ChartWrapper}>
      <VictoryChart
        // domainPadding={5}
        width={400}
        height={215}
      >
        <VictoryArea 
          data={[...data[1]]}
          fixLabelOverlap={true}
          style={{
            data: { stroke: '#252525', fill: '#252525' },
            parent: { border: '1px solid #ccc' },
            labels: {
              fontSize: 4,
              fontFamily: 'Roboto Condensed, sans-serif',
            }
          }}
          // labels={({ datum }) => datum.y}
        />
        <VictoryArea 
          data={[...data[2]]}
          style={{
            data: { stroke: '#737373', fill: '#737373' },
            parent: { border: '1px solid #ccc' },
            labels: {
              fontSize: 4,
              fontFamily: 'Roboto Condensed, sans-serif',
              fill: 'white'
            }
          }}
          // labels={({ datum }) => datum.y}
        />
        <VictoryArea 
          data={[...data[0]]} 
          style={{
            data: { stroke: '#525252', fill: '#525252' },
            parent: { border: '1px solid #ccc' },
            labels: {
              fontSize: 4,
              fontFamily: 'Roboto Condensed, sans-serif',
              fill: 'white'
            }
          }}
          // labels={({ datum }) => datum.y}
        />
        <VictoryAxis
          label='date'
          fixLabelOverlap={true}
          style={{
            axisLabel: { padding: 20, fontSize: 8 },
            tickLabels: {
              fontSize: 4.5,
              fontFamily: 'Roboto Condensed, sans-serif',
              fillOpacity: 1,
              margin: 2,
              padding: 8,
              // angle: 40
            }
          }} 
        />
        <VictoryAxis dependentAxis
          label='people in custody'
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
        <VictoryLegend x={108} y={10}
          title="County"
          centerTitle
          orientation="horizontal"
          gutter={20}
          style={{ 
            // border: { stroke: 'black' }, 
            labels: { 
              fontSize: 6, 
              fontFamily: 'Roboto Condensed, sans-serif'
            },
            title: { fontSize: 8 }
          }}
          colorScale={['#252525', '#737373', '#525252']}
          data={[
            { name: 'Multnomah' }, { name: 'Washington' }, { name: 'Clackamas' }
          ]}
        />
      </VictoryChart>
    </div>
  );
};


export default TrendTriCountyTotals;