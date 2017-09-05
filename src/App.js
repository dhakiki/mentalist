import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import * as mobx from 'mobx';
import createHistory from 'history/createBrowserHistory';
import * as stores from './store';

import SignInPage from './pages/sign_in';
import Dashboard from './pages/dashboard/';

import Daily from './pages/daily/';
import Weekly from './pages/weekly/';
import Monthly from './pages/monthly/';

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
                <Route exact={true} path='/' render={() => <Redirect to={{ pathname: '/sign-in' }} />} />
                <Route exact={true} path = '/sign-in' component={SignInPage} />
                <Route exact={true} path = '/dashboard/daily' component={Daily} />
                <Route exact={true} path = '/dashboard/weekly' component={Weekly} />
                <Route exact={true} path = '/dashboard/monthly' component={Monthly} />
              </Switch>
          </Router>
        </MuiThemeProvider>
      </Provider>
    );
  }

}

export default App;
