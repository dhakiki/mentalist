import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import Dashboard from "../../containers/dashboard/container";

class WeeklyPage extends Component {
  render() {
    return (
      <Dashboard viewType="weekly">
        <div>Hey this is a weekly view</div>
        <div>
          {this.props.tasks.map(({ task }) => <div key={task}>{task}</div>)}
        </div>
      </Dashboard>
    );
  }
}

WeeklyPage.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default observer(WeeklyPage);
