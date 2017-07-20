import React, { Component } from 'react';
import ClassNames from 'classnames';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ListItem} from 'material-ui/List';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {sideNavExpanded: true, switchJournalExpanded: false};
    this.toggleSwitchJournal = this.toggleSwitchJournal.bind(this);
  }

  toggleSwitchJournal() {
    console.log('eee');
    this.setState({switchJournalExpanded: !this.state.switchJournalExpanded});
  }

  render() {
    console.log(this.state.switchJournalExpanded);
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className={ClassNames({'App-side-nav': true, expanded: this.state.sideNavExpanded})}>
            <div className={ClassNames({'side-nav-header': true, expanded: this.state.sideNavExpanded})}>
              <ListItem className='header'>
                <div className='label'>Mentalist</div>
                <div className="App-logo nav-logo">
                  <img src={logo} className="App-logo" alt="logo" />
                </div>
              </ListItem>
            </div>
            <div className={ClassNames({'side-nav-contents': true, expanded: this.state.sideNavExpanded})}>
              <ListItem
                className='toggle-journal'
                open={this.state.switchJournalExpanded}
                onClick={this.toggleSwitchJournal}
                nestedItems={[
                  <ListItem className='toggle-journal'
                    key={1}
                    primaryText="Business Journal"
                  />,
                ]}>
                <div className='label'>Personal Journal</div>
              </ListItem>
              <ListItem className="nav-item">
                <div className='label'>Daily</div>
                <div className="App-logo nav-logo">
                  <img src={logo} className="App-logo" alt="logo" />
                </div>
              </ListItem>
              <ListItem className="nav-item">
                <div className='label'>Weekly</div>
                <div className="App-logo nav-logo">
                  <img src={logo} className="App-logo" alt="logo" />
                </div>
              </ListItem>
              <ListItem className="nav-item">
                <div className='label'>Monthly</div>
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
