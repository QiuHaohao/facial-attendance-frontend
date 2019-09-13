import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import 'antd/dist/antd.css';

import './App.css';

import { ProvideUser } from '../../hooks/userHook';

import MainView from '../MainView';

function App() {
  return (
    <ProvideUser>
      <Router>
        <div className="App">
          <MainView />
        </div>
      </Router>
    </ProvideUser>
  );
}

export default App;
