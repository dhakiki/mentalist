import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Redirect, Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import store from './store/';

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
            <Route exact={true} path = '/sign-in' component={SignInPage} />
            <Route exact={true} path = '/dashboard/daily' render={() => <Daily store={store} />} />
            <Route exact={true} path = '/dashboard/weekly' render={() => <Weekly store={store} />} />
            <Route exact={true} path = '/dashboard/monthly' render={() => <Monthly store={store} />} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }

}

export default App;
