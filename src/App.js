import React from 'react';
import { BrowserRouter as Route } from "react-router-dom";
import Home from './pages/home';
import Portfolio from './pages/portfolio'

function App () {
  return (
    <div>
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/Portfolio" component={Portfolio} />
    </div>
  );
}
export default App;