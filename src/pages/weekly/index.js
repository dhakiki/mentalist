import React, {Component} from 'react';
import Dashboard from '../../containers/dashboard/container';
import { observer } from 'mobx-react';

class WeeklyPage extends Component {
  render () {
    return (
      <Dashboard viewType='weekly'>
        <div>Hey this is a weekly view</div>
        <div>
          {this.props.tasks.map( ({task}) =>
            <div key={task}>{task}</div>
          )}
        </div>
      </Dashboard>
    );
  }
}

export default WeeklyPage;
