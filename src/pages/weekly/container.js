import React from 'react';
import WeeklyPage from './index';
import { inject, observer } from 'mobx-react';

const WeeklyPageContainer = ({ tasksStore, ...props }) => (
  <WeeklyPage tasks={tasksStore.tasks} {...props} />
);

export default inject('tasksStore')(observer(WeeklyPageContainer));
