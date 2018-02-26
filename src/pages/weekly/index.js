import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import Dashboard from "../../containers/dashboard/container";
import Task from "../../components/task";

class WeeklyPage extends Component {
  render() {
    return (
      <Dashboard viewType="weekly" history={this.props.history}>
        <div>Hey this is a weekly view</div>
        <div>
          {this.props.tasks.map(task => (
            <Task type='task' value={task} />
          ))}
        </div>
      </Dashboard>
    );
  }
}

WeeklyPage.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default observer(WeeklyPage);
