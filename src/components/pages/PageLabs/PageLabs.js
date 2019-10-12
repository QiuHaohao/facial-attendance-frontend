import React from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route, Redirect, Switch } from 'react-router-dom';
import LabNav from './LabNav/LabNav';
import LabSessions from './LabSessions/LabSessions';
import LabStudents from './LabStudents/LabStudents';
import LabSessionSummary from './LabSessionSummary/LabSessionSummary';
import LabStudentSummary from './LabStudentSummary/LabStudentSummary';

import './PageLabs.css';

function PageLabs(props) {
  const labId = props.match.params.id;
  const curPath = props.location.pathname;
  const defaultPath = `/labs/${labId}/`;
  return (
    <div>
      <LabNav id={labId} curPath={curPath} />
      <div className="lab-container">
        <Switch>
          <Route
            path={`${defaultPath}sessions/:id`}
            component={LabSessionSummary}
          />
          <Route
            path={`${defaultPath}students/:id`}
            component={LabStudentSummary}
          />
          <Route path={`${defaultPath}sessions`} component={LabSessions} />
          <Route path={`${defaultPath}students`} component={LabStudents} />
          <Redirect from="/labs/:id" to={`${defaultPath}sessions`} />
        </Switch>
      </div>
    </div>
  );
}

PageLabs.propTypes = {
  match: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(PageLabs);
