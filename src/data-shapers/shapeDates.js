const moment = require('moment');
moment().format();

export const makePrettyDate = date => {
  return moment(date).format('LLLL');
};

export const findLatest = res => {
  const [latest] = res.slice(-1);
  const lastUpdated = latest.date;

  return moment(lastUpdated).format('MMMM D YYYY, h:mm a');
};

export const findCSVUpDate = res => {
  const i = res.length - 1;
  const lastUpdated = res[i].date;
  return moment(lastUpdated).format('YYYY-MM-DD');
};
