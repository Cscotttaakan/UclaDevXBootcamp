import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Skeleton from 'components/Skeleton';
import AuthWrapper from 'components/AuthWrapper';
import HomePage from 'components/HomePage';

export const App = (props) => (
  <div>
    <BrowserRouter>
      <Skeleton>
        <AuthWrapper>
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </AuthWrapper>
      </Skeleton>
    </BrowserRouter>
  </div>
);
