import React, { Component } from 'react';
import ClassNames from 'classnames';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Avatar from 'material-ui/Avatar';
import FlatButton from 'material-ui/FlatButton';
import {ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';
import { IconMenu } from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { dropRight, pull } from 'lodash';
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
      ],
      currentView: 'daily'
    };
    this.setViewMode = this.setViewMode.bind(this);
    this.setCurrentView = this.setCurrentView.bind(this);
    this.toggleActiveJournal = this.toggleActiveJournal.bind(this);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <div className={ClassNames({'App-side-nav': true, expanded: this.state.sideNavExpanded})}>
            <div className={ClassNames({'side-nav-header': true, expanded: this.state.sideNavExpanded})}>
              <ListItem className='header'>
                <div className='label'>Mentalist</div>
                <div className='logo'></div>
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
              <ListItem className={ClassNames({"nav-item": true, active: this.state.currentView === 'daily'})} onClick={() => this.setCurrentView('daily')}>
                <div className='label'>Daily</div>
                <i className="material-icons">view_day</i>
              </ListItem>
              <ListItem className={ClassNames({"nav-item": true, active: this.state.currentView === 'weekly'})} onClick={() => this.setCurrentView('weekly')}>
                <div className='label'>Weekly</div>
                <i className="material-icons">view_module</i>
              </ListItem>
              <ListItem className={ClassNames({"nav-item": true, active: this.state.currentView === 'monthly'})} onClick={() => this.setCurrentView('monthly')}>
                <div className='label'>Monthly</div>
                <i className="material-icons">view_comfy</i>
              </ListItem>
            </div>
          </div>
          <div className="app-body">
            <AppBar
              className='horizontal-nav'
              iconElementLeft={
                <div className='toggle-collapse' onClick={() => this.setState({sideNavExpanded: !this.state.sideNavExpanded})}>
                  {this.state.sideNavExpanded &&
                    <i className="material-icons">keyboard_arrow_left</i>
                  }
                  {!this.state.sideNavExpanded &&
                    <i className="material-icons">keyboard_arrow_right</i>
                  }
                </div>
              }
              iconElementRight={
                <div className='actions'>
                  <div className='item'>
                    <FlatButton label="Collections" />
                  </div>
                  <div className='item'>
                    Welcome, John!
                  </div>
                  <div className='item'>
                    <Avatar>J</Avatar>
                  </div>
                </div>
              }
            />
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

  setCurrentView (currentView) {
    this.setState({currentView});
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
