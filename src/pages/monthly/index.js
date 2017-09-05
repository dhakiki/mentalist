import React, {Component} from 'react';
import Dashboard from '../dashboard';

class Monthly extends Component {
  render () {
    return (
      <Dashboard viewType='monthly' store={this.props.store}>
        <div>Hey this is a monthly view</div>
        <div>
          {this.props.store.tasks.tasks.map( ({task}) =>
            <div key={task}>{task}</div>
          )}
        </div>
      </Dashboard>
    );
  }
}

export default Monthly;
