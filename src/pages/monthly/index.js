import React, {Component} from 'react';
import Dashboard from '../../containers/dashboard/container';
import { observer } from 'mobx-react';

class MonthlyPage extends Component {
  render () {
    return (
      <Dashboard viewType='monthly'>
        <div>Hey this is a monthly view</div>
        <div>
          {this.props.tasks.map( ({task}) =>
            <div key={task}>{task}</div>
          )}
        </div>
      </Dashboard>
    );
  }
}

export default MonthlyPage;
