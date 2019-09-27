import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { Button } from 'antd';

import { getDisplayNameFromLab } from '../../../../../hooks/userHook';
import { useSession } from '../../../../../hooks/sessionHook';

import AbstractSelect from '../../../../commons/AbstractSelect';

import './LabSelector.css';

function SessionSelector(props) {
  const session = useSession();
  const [labSelected, setLabSelected] = useState(null);
  const options = props.labs.map(lab => {
    return { value: lab.lid, name: getDisplayNameFromLab(lab) };
  });
  return (
    <div className="lab-selector">
      <div className="lab-selector-text">Which Lab?</div>
      <AbstractSelect
        className="lab-selector-dropdown"
        options={options}
        onChange={console.log(1)}
      />
      <Button
        type="primary"
        onClick={() => {
          session.startSession(
            props.labs.filter(lab => lab.lid === labSelected)[0]
          );
        }}
        disabled={labSelected === null}
      >
        Start Session
      </Button>
    </div>
  );
}

SessionSelector.propTypes = {
  labs: PropTypes.array.isRequired
};

export default SessionSelector;
