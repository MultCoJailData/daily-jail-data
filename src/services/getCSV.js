export const getCSVTriCountyTrend = () => {
  return fetch('https://pdx-jail-data.herokuapp.com/api/v1/dailyCounts/download')
    .then(res => res.json());
};