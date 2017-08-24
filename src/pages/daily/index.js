import React, {Component} from 'react';
import Dashboard from '../dashboard/';

class Daily extends Component {
  render () {
    return (
      <Dashboard viewType='daily'>
        Hey this is a daily view
      </Dashboard>
    );
  }
}

export default Daily;
