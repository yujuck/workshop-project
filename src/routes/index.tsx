import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// route components
import App from '../App';
import ImageGame from '../game/ImageGame';
import Count from '../pages/Count';

const browserHistory = createBrowserHistory();

const Root: React.FC = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/game/image-game" exact component={ImageGame} />
      <Route path="/count" exact component={Count} />
    </Switch>
  </Router>
);

export default Root;