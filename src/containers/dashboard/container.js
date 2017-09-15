import PropTypes from "prop-types";
import React from "react";
import { inject, observer } from "mobx-react";
import Dashboard from "./index";

const DashboardContainer = ({ tasksStore, ...props }) => (
  <Dashboard addTask={tasksStore.addTask} {...props} />
);

DashboardContainer.propTypes = {
  tasksStore: PropTypes.object.isRequired
};

export default inject("tasksStore")(observer(DashboardContainer));
