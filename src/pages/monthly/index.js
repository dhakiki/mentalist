import React, {Component} from 'react';
import Dashboard from '../dashboard';
import { inject, observer } from 'mobx-react';

class Monthly extends Component {
  render () {
    return (
      <Dashboard viewType='monthly'>
        <div>Hey this is a monthly view</div>
        <div>
          {this.props.tasksStore.tasks.map( ({task}) =>
            <div key={task}>{task}</div>
          )}
        </div>
      </Dashboard>
    );
  }
}

export default inject('tasksStore')(observer(Monthly));
