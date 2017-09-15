import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import * as mobx from 'mobx';
import createHistory from 'history/createBrowserHistory';
import { withRouter } from 'react-router';
import * as stores from './store';

import SignInPage from './pages/sign_in';

import DailyPage from './pages/daily/container';
import WeeklyPage from './pages/weekly/container';
import MonthlyPage from './pages/monthly/container';

// forces state updates to occur only on explicitly declared action methods
mobx.useStrict(true);

class App extends Component {
  constructor(props) {
    super(props);
    injectTapEventPlugin();
  }

  render() {
    return (
      <Provider {...stores}>
        <MuiThemeProvider>
          <Router history={createHistory()}>
            <Switch>
              <Route exact path="/" render={() => <Redirect to={{ pathname: '/sign-in' }} />} />
              <Route exact path="/sign-in" component={withRouter(SignInPage)} />
              <Route exact path="/dashboard" render={() => <Redirect to={{ pathname: '/dashboard/daily' }} />} />
              <Route exact path="/dashboard/daily" component={withRouter(DailyPage)} />
              <Route exact path="/dashboard/weekly" component={withRouter(WeeklyPage)} />
              <Route exact path="/dashboard/monthly" component={withRouter(MonthlyPage)} />
            </Switch>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
