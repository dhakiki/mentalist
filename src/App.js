import React, { Component } from 'react';
import ClassNames from 'classnames';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ListItem} from 'material-ui/List';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {sideNavExpanded: true};
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className={ClassNames({'App-side-nav': true, expanded: this.state.sideNavExpanded})}>
            <div className={ClassNames({'side-nav-header': true, expanded: this.state.sideNavExpanded})}>
              <ListItem className="nav-item">
                <div className='label'>Daily</div>
                <div className="App-logo nav-logo">
                  <img src={logo} className="App-logo" alt="logo" />
                </div>
              </ListItem>
            </div>
            <div className={ClassNames({'side-nav-contents': true, expanded: this.state.sideNavExpanded})}>
              <ListItem className="nav-item">
                <div className='label'>Daily</div>
                <div className="App-logo nav-logo">
                  <img src={logo} className="App-logo" alt="logo" />
                </div>
              </ListItem>
              <ListItem className="nav-item">
                <div className='label'>Daily</div>
                <div className="App-logo nav-logo">
                  <img src={logo} className="App-logo" alt="logo" />
                </div>
              </ListItem>
              <ListItem className="nav-item">
                <div className='label'>Daily</div>
                <div className="App-logo nav-logo">
                  <img src={logo} className="App-logo" alt="logo" />
                </div>
              </ListItem>
            </div>
            <div className="toggle-collapse" onClick={() => this.setState({sideNavExpanded: !this.state.sideNavExpanded})}>
              {this.state.sideNavExpanded &&  'c'}
              {!this.state.sideNavExpanded &&  'e'}
            </div>
          </div>
          <div className="app-body">
            <div className="App-header">
              <h2>Welcome to React</h2>
            </div>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
            </p>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
