import React, {Component} from 'react';
import Dashboard from '../dashboard';
import { inject, observer } from 'mobx-react';

class Weekly extends Component {
  render () {
    return (
      <Dashboard viewType='weekly'>
        <div>Hey this is a weekly view</div>
        <div>
          {this.props.tasksStore.tasks.map( ({task}) =>
            <div key={task}>{task}</div>
          )}
        </div>
      </Dashboard>
    );
  }
}

export default inject('tasksStore')(observer(Weekly));
