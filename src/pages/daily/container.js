import React from 'react';
import DailyPage from './index';
import { inject, observer } from 'mobx-react';

const DailyPageContainer = ({ tasksStore, ...props }) => (
  <DailyPage tasks={tasksStore.tasks} {...props} />
);

export default inject('tasksStore')(observer(DailyPageContainer));
