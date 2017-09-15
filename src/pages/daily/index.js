import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import Dashboard from "../../containers/dashboard/container";

class DailyPage extends Component {
  render() {
    return (
      <Dashboard viewType="daily">
        <div>Hey this is a daily view</div>
        <div>
          {this.props.tasks.map(({ task }) => <div key={task}>{task}</div>)}
        </div>
      </Dashboard>
    );
  }
}

DailyPage.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default observer(DailyPage);
