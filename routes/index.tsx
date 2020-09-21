import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// route components
import App from '../src/App';
import ImageGame from '../src/game/ImageGame';

const browserHistory = createBrowserHistory();

const Root: React.FC = () => (
  <Router history={browserHistory}>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/game/image-game" exact component={ImageGame} />
    </Switch>
  </Router>
);

export default Root;