import React from 'react';
import Dashboard from './index';
import things, { inject, observer } from 'mobx-react';

const DashboardContainer = ({ tasksStore, ...props }) => (
  <Dashboard addTask={tasksStore.addTask} {...props} />
);

export default inject('tasksStore')(observer(DashboardContainer));
