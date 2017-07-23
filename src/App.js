import React, { Component } from 'react';
import ClassNames from 'classnames';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import { IconMenu, MenuItem } from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { dropRight, pull } from 'lodash';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    injectTapEventPlugin();
    this.state = {
      sideNavExpanded: true,
      viewMode: 'view',
      activeJournals: ['pjnl'],
      journals: [
        {
          name: 'Personal Journal',
          key: 'pjnl'
        },
        {
          name: 'Business Journal',
          key: 'bjnl'
        }
      ]
    };
    this.setViewMode = this.setViewMode.bind(this);
    this.toggleActiveJournal = this.toggleActiveJournal.bind(this);
  }

  //<div className='expanded-toggle-view'>
  //</div>
  //<div className='collapsed-toggle-view'>
  //  <IconMenu
  //    iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
  //    anchorOrigin={{horizontal: 'left', vertical: 'top'}}
  //    targetOrigin={{horizontal: 'left', vertical: 'top'}}
  //  >
  //    {this.renderToggleView()}
  //  </IconMenu>
  //</div>

  render() {
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
              <div className='full-menu'>
                {this.renderToggleView()}
              </div>
              <div className='collapsed-menu'>
                <IconMenu
                  iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
                  anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                  targetOrigin={{horizontal: 'left', vertical: 'top'}}
                  menuStyle={{padding: '20px', 'max-width': '224px'}}
                >
                  {this.renderToggleView()}
                </IconMenu>
              </div>
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

  renderToggleView () {
    return (
      <div className='toggle-view'>
        <div className='header'>Mode</div>
        <RaisedButton label='View' onClick={() => this.setViewMode('view')} primary={this.state.viewMode==='view'} />
        <RaisedButton label='Plan' onClick={() => this.setViewMode('plan')} primary={this.state.viewMode==='plan'} />
        <div className='journals'>
          <div className='header'>My Journals</div>
            {this.state.journals.map(({ name, key }) => (
              <Toggle
                key={key}
                label={name}
                toggled={this.state.activeJournals.indexOf(key) !== -1}
                onToggle={() => this.toggleActiveJournal(key)}
              />
            ))}
        </div>
      </div>
    );
  }

  setViewMode (viewMode) {
    this.setState({viewMode});
    if (viewMode==='plan' && this.state.activeJournals.length > 1) {
      this.setState({activeJournals: dropRight(this.state.activeJournals)});
    }
  }

  toggleActiveJournal (activeJournal) {
    let newActiveJournals = this.state.activeJournals;
    if (this.state.viewMode ==='view') {
      if (newActiveJournals.indexOf(activeJournal) !== -1) {
        newActiveJournals = pull(newActiveJournals, activeJournal);
      } else {
        newActiveJournals.push(activeJournal);
      }
      this.setState({activeJournals: newActiveJournals});
    } else {
      this.setState({activeJournals: [activeJournal]});
    }
  }
}

export default App;
