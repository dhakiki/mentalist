import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";
import Dashboard from "../../containers/dashboard/container";
import Task from "../../components/task";

import "./index.styl";

class DailyPage extends Component {
  render() {
    return (
      <Dashboard viewType="daily" history={this.props.history}>
        <div className={'page-container'}>  
          <div className={'header'}>Hey this is a daily view</div>
          <div className={'tasks-container'}>
            <div className={'assigned-tasks-container'}>
              <div className={'section-label'}>Assigned Tasks</div>
							<div className={'agenda'}>
							</div>
            </div>
            <div className={'unassigned-tasks-container'}>
              <div className={'section-label'}>Unassigned Tasks</div>
              {this.props.tasks.length ?
                (
                   <div className={'added-tasks'}>
                      {this.props.tasks.map(task => (
                        <div className={'task-wrapper'}>
                          <Task type='task' value={task} />
                        </div>
                      ))}
                   </div>
                ) : (
                   <div className={'no-tasks-added'}>
                     <div className={'label'}>No Tasks Yet</div>
                   </div>
                )
              }
            </div>
          </div>
        </div>
      </Dashboard>
    );
  }
}

DailyPage.propTypes = {
  tasks: PropTypes.array.isRequired
};

export default observer(DailyPage);
