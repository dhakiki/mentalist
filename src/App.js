import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { withRouter } from 'react-router';
import SignInPage from './pages/sign_in';
import Dashboard from './pages/dashboard/';

import Daily from './pages/daily/';
import Weekly from './pages/weekly/';
import Monthly from './pages/monthly/';

class App extends Component {

  constructor(props) {
    super(props);
    injectTapEventPlugin();
  }

  render() {
    return (
      <MuiThemeProvider>
        <Router history={createHistory()}>
          <Switch>
            <Route exact={true} path='/' render={() => <Redirect to={{ pathname: '/sign-in' }} />} />
            <Route exact={true} path = '/sign-in' component={withRouter(SignInPage)} />
            <Route exact={true} path='/dashboard' render={() => <Redirect to={{ pathname: '/dashboard/daily' }} />} />
            <Route exact={true} path = '/dashboard/daily' component={withRouter(Daily)} />
            <Route exact={true} path = '/dashboard/weekly' component={withRouter(Weekly)} />
            <Route exact={true} path = '/dashboard/monthly' component={withRouter(Monthly)} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }

}

export default App;
