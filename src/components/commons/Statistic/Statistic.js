import PropTypes from 'prop-types';
import React from 'react';

import './Statistic.css';

function Statistic(props) {
  return (
    <div className="statistic">
      <div className="statistic-title">{props.title}</div>
      <div className="statistic-value">{props.value}</div>
    </div>
  );
}

Statistic.propTypes = {
  title: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Statistic;
