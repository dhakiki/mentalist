import React, { Component } from "react";
import PropTypes from "prop-types";
import ClassNames from "classnames";
import AppBar from "material-ui/AppBar";
import Avatar from "material-ui/Avatar";
import Dialog from "material-ui/Dialog";
import TextField from "material-ui/TextField";
import FlatButton from "material-ui/FlatButton";
import { ListItem } from "material-ui/List";
import Toggle from "material-ui/Toggle";
import { IconMenu } from "material-ui/IconMenu";
import IconButton from "material-ui/IconButton";
import MoreVertIcon from "material-ui/svg-icons/navigation/more-vert";
import { pull } from "lodash";
import { Link } from "react-router-dom";

import "./index.styl";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sideNavExpanded: true,
      activeJournals: ["pjnl"],
      createDialogOpened: false,
      newTask: "",
      journals: [
        {
          name: "Personal Journal",
          key: "pjnl"
        },
        {
          name: "Business Journal",
          key: "bjnl"
        }
      ]
    };
    this.setCurrentView = this.setCurrentView.bind(this);
    this.toggleActiveJournal = this.toggleActiveJournal.bind(this);
    this.renderCreateDialog = this.renderCreateDialog.bind(this);
    this.closeCreateDialog = this.closeCreateDialog.bind(this);
    this.openCreateDialog = this.openCreateDialog.bind(this);
    this.updateNewTask = this.updateNewTask.bind(this);
    this.addTaskAndClose = this.addTaskAndClose.bind(this);
  }

  setCurrentView(currentView) {
    this.setState({ currentView });
  }

  openCreateDialog() {
    this.setState({ createDialogOpened: true });
  }

  closeCreateDialog() {
    this.setState({ newTask: "", createDialogOpened: false });
  }

  updateNewTask(event, newTask) {
    this.setState({ newTask });
  }

  addTaskAndClose() {
    this.props.addTask(this.state.newTask);
    this.setState({ newTask: "", createDialogOpened: false });
  }

  toggleActiveJournal(activeJournal) {
    let newActiveJournals = this.state.activeJournals;
    if (newActiveJournals.indexOf(activeJournal) !== -1) {
      newActiveJournals = pull(newActiveJournals, activeJournal);
    } else {
      newActiveJournals.push(activeJournal);
    }
    this.setState({ activeJournals: newActiveJournals });
  }

  renderToggleView() {
    return (
      <div className="toggle-view">
        <div className="journals">
          <div className="header">My Journals</div>
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

  renderCreateDialog() {
    const actions = [
      <FlatButton label="Cancel" primary onClick={this.closeCreateDialog} />,
      <FlatButton
        label="Submit"
        primary
        keyboardFocused
        onClick={this.addTaskAndClose}
      />
    ];
    return (
      <Dialog
        title="Create New Task"
        actions={actions}
        modal={false}
        open={this.state.createDialogOpened}
        onRequestClose={this.closeCreateDialog}
      >
        <TextField
          hintText="Describe Task Here"
          floatingLabelText="Task"
          onChange={this.updateNewTask}
        />
      </Dialog>
    );
  }

  render() {
    return (
      <div className="App">
        <div
          className={ClassNames({
            "App-side-nav": true,
            expanded: this.state.sideNavExpanded
          })}
        >
          <div
            className={ClassNames({
              "side-nav-header": true,
              expanded: this.state.sideNavExpanded
            })}
          >
            <ListItem className="header">
              <div className="label">Mentalist</div>
              <div className="logo" />
            </ListItem>
          </div>
          <div
            className={ClassNames({
              "side-nav-contents": true,
              expanded: this.state.sideNavExpanded
            })}
          >
            <div className="full-menu">{this.renderToggleView()}</div>
            <div className="collapsed-menu">
              <IconMenu
                iconButtonElement={
                  <IconButton>
                    <MoreVertIcon />
                  </IconButton>
                }
                anchorOrigin={{ horizontal: "right", vertical: "top" }}
                targetOrigin={{ horizontal: "left", vertical: "top" }}
                menuStyle={{ padding: "20px", "max-width": "224px" }}
              >
                {this.renderToggleView()}
              </IconMenu>
            </div>
            <Link to="/dashboard/daily">
              <ListItem
                className={ClassNames({
                  "nav-item": true,
                  active: this.props.viewType === "daily"
                })}
              >
                <div className="label">Daily</div>
                <i className="material-icons">view_day</i>
              </ListItem>
            </Link>
            <Link to="/dashboard/weekly">
              <ListItem
                className={ClassNames({
                  "nav-item": true,
                  active: this.props.viewType === "weekly"
                })}
              >
                <div className="label">Weekly</div>
                <i className="material-icons">view_module</i>
              </ListItem>
            </Link>
            <Link to="/dashboard/monthly">
              <ListItem
                className={ClassNames({
                  "nav-item": true,
                  active: this.props.viewType === "monthly"
                })}
              >
                <div className="label">Monthly</div>
                <i className="material-icons">view_comfy</i>
              </ListItem>
            </Link>
            <ListItem
              className={ClassNames({ "nav-item": true })}
              primaryTogglesNestedList
              nestedItems={[
                <ListItem key={1} onClick={this.openCreateDialog}>
                  Task
                </ListItem>
              ]}
            >
              <div className="label">Create</div>
              <i className="material-icons">plus_one</i>
            </ListItem>
            {this.renderCreateDialog()}
          </div>
        </div>
        <div className="app-body">
          <AppBar
            className="horizontal-nav"
            iconElementLeft={
              <div
                className="toggle-collapse"
                onClick={() =>
                  this.setState({
                    sideNavExpanded: !this.state.sideNavExpanded
                  })}
              >
                {this.state.sideNavExpanded && (
                  <i className="material-icons">keyboard_arrow_left</i>
                )}
                {!this.state.sideNavExpanded && (
                  <i className="material-icons">keyboard_arrow_right</i>
                )}
              </div>
            }
            iconElementRight={
              <div className="actions">
                <div className="item">Welcome, John!</div>
                <div className="item">
                  <Avatar>J</Avatar>
                </div>
              </div>
            }
          />
          <div className="App-intro">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  addTask: PropTypes.func.isRequired,
  children: PropTypes.object,
  viewType: PropTypes.string
};

export default Dashboard;
