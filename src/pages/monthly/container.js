import React from 'react';
import MonthlyPage from './index';
import { inject, observer } from 'mobx-react';

const MonthlyPageContainer = ({ tasksStore, ...props }) => {
  return (
    <MonthlyPage tasks={tasksStore.tasks} {...props} />
  );
};

export default inject('tasksStore')(observer(MonthlyPageContainer));
