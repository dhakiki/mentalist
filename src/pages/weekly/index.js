import React, {Component} from 'react';
import Dashboard from '../dashboard';

class Weekly extends Component {
  render () {
    return (
      <Dashboard viewType='weekly' store={this.props.store}>
        <div>Hey this is a weekly view</div>
        <div>
          {this.props.store.tasks.tasks.map( ({task}) =>
            <div key={task}>{task}</div>
          )}
        </div>
      </Dashboard>
    );
  }
}

export default Weekly;
