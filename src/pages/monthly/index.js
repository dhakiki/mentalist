import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import Dashboard from "../../containers/dashboard/container";

class MonthlyPage extends Component {
  render() {
    return (
      <Dashboard viewType="monthly">
        <div>Hey this is a monthly view</div>
        <div>
          {this.props.tasks.map(({ task }) => <div key={task}>{task}</div>)}
        </div>
      </Dashboard>
    );
  }
}

MonthlyPage.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default observer(MonthlyPage);
