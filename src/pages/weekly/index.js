import React, {Component} from 'react';
import Dashboard from '../dashboard';

class Weekly extends Component {
  render () {
    return (
      <Dashboard viewType='weekly'>
        Hey this is a weekly view
      </Dashboard>
    );
  }
}

export default Weekly;
