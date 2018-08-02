import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import FeedPage from '../FeedsPage/index';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/feeds" component={FeedPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
