import PropTypes from 'prop-types';
import React from 'react';

import { Select } from 'antd';

const { Option } = Select;

function AbstractSelect(props) {
  return (
    <Select className={props.className} onChange={v => props.onChange(v)}>
      {props.options.map((option, index) => (
        <Option key={index} value={option.value}>
          {option.name}
        </Option>
      ))}
    </Select>
  );
}


AbstractSelect.propTypes = {
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default AbstractSelect;
