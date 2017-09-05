import React, {Component} from 'react';
import Dashboard from '../../containers/dashboard/container';
import { observer } from 'mobx-react';

class DailyPage extends Component {
  render () {
    return (
      <Dashboard viewType='daily'>
        <div>Hey this is a daily view</div>
        <div>
          {this.props.tasks.map( ({task}) =>
            <div key={task}>{task}</div>
          )}
        </div>
      </Dashboard>
    );
  }
}

export default DailyPage;
