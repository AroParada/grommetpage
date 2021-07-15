import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home';
import Portfolio from './pages/portfolio'


function App () {

  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Portfolio" component={Portfolio} />
      </Switch>
    </div>
  </Router>
  );
}
export default App;