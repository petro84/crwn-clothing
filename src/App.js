import React from 'react';
import { Route, Switch } from 'react-router';

import './App.css';
import HomePage from './pages/homepage/homepage.component';

const Hats = () => <div>HATS PAGE</div>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/hats' component={Hats} />
      </Switch>
    </div>
  );
}

export default App;
