import React, {Component} from 'react';
import Dashboard from '../dashboard';

class Monthly extends Component {
  render () {
    return (
      <Dashboard viewType='monthly'>
        Hey this is a monthly view
      </Dashboard>
    );
  }
}

export default Monthly;
