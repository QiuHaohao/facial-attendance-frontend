import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';

import './App.css';

import { ProvideUser } from '../../hooks/userHook';
import { ProvideSession } from '../../hooks/sessionHook';

import MainView from '../MainView';

function App() {
  return (
    <ProvideUser>
      <ProvideSession>
        <Router>
          <div className="App">
            <MainView />
          </div>
        </Router>
      </ProvideSession>
    </ProvideUser>
  );
}

export default App;
