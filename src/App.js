import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import SignInPage from './pages/sign_in';
import Dashboard from './pages/dashboard/';

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
            <Route exact={true} path = '/sign-in' component={SignInPage} />
            <Route exact={true} path = '/dashboard' component={Dashboard} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }

}

export default App;
