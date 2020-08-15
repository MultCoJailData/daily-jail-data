const facilityMap = {
  'CC': 'WaCo Community Corrections Center',
  'JL': 'Washington County Jail',
  'OA': 'Non-Washington County Facility',
  'MCDC': 'Multnomah County Detention Center',
  'MCIJ': 'Inverness Jail',
  null: 'Clackamas County Jail'
};

export const shapeFacility = arr => {
  return arr.map(obj => 
    Object.keys(obj).reduce((acc, key) => ({ 
      ...acc, ...{ _id: facilityMap[`${obj._id}`] || obj._id, total: obj[key] }
    }), {})
  ).map(item => {
    return ({
      x: item._id,
      y: item.total
    });
  });
};
