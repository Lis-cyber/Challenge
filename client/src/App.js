import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Features from './components/Features';

function App() {

  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path= "/" component={Home} />
        <Route exact path= "/search" component={Features} />
      </Switch>
      </BrowserRouter>
    </div>

  );
}

export default App;
