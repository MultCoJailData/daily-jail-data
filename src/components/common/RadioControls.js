import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioControls.css';

const RadioControls = ({ handleChange, name, id }) => {

  return (
    <div className={styles.radioGroup}>
      <input
        type='radio'
        value='clackamas'
        name={name}
        id={id + '-clackamas'}
        onChange={handleChange}
        disabled={name === 'Agency-radio'}
      />
      <label  htmlFor={id + '-clackamas'}>C</label>

      <input
        type='radio'
        value='multnomah'
        name={name}
        id={id + '-multnomah'}
        defaultChecked
        onChange={handleChange}
      />
      <label htmlFor={id + '-multnomah'}>M</label>

      <input
        type='radio'
        value='washington'
        name={name}
        id={id + '-washington'}
        onChange={handleChange}
      />
      <label htmlFor={id + '-washington'}>W</label>
    </div>
  );
};

RadioControls.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default RadioControls;
