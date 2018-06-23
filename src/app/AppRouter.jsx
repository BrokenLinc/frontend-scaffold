import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { hot } from 'react-hot-loader';

import Home from 'app/pages/Home';
import ExampleColors from 'app/pages/ExampleColors';
import ExampleTextFlow from 'app/pages/ExampleTextFlow';
import ExampleGravityForms from 'app/pages/ExampleGravityForms';

const AppRouter = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Pile-o-Junk</Link></li>
        <li><Link to="/colors">Colors</Link></li>
        <li><Link to="/text-flow">Text Flow</Link></li>
        <li><Link to="/gravity-forms">Gravity Forms</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/colors" component={ExampleColors} />
      <Route path="/text-flow" component={ExampleTextFlow} />
      <Route path="/gravity-forms" component={ExampleGravityForms} />
    </div>
  </Router>
);

export default hot(module)(AppRouter);
