import React, {Component} from 'react';
import Dashboard from '../dashboard/';
import { inject, observer } from 'mobx-react';

class Daily extends Component {
  render () {
    return (
      <Dashboard viewType='daily'>
        <div>Hey this is a daily view</div>
        <div>
          {this.props.tasksStore.tasks.map( ({task}) =>
            <div key={task}>{task}</div>
          )}
        </div>
      </Dashboard>
    );
  }
}

export default inject('tasksStore')(observer(Daily));
