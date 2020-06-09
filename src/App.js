import React from "react";
import album from "./vendor/Album";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import motivation from "./components/motivation";
import yoga from "./components/yoga";
import relax from "./components/relax";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={album} />
        <Route exact path="/motivation" component={motivation} />
        <Route exact path="/yoga" component={yoga} />
        <Route exact path="/relaxation" component={relax} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
