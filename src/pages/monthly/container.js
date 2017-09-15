import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import MonthlyPage from "./index";

const MonthlyPageContainer = ({ tasksStore, ...props }) => (
  <MonthlyPage tasks={tasksStore.tasks} {...props} />
);

MonthlyPageContainer.propTypes = {
  tasksStore: PropTypes.object.isRequired
};

export default inject("tasksStore")(observer(MonthlyPageContainer));
