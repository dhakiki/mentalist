import PropTypes from "prop-types";
import React from "react";
import { inject, observer } from "mobx-react";
import Dashboard from "./index";

const DashboardContainer = ({ tasksStore, usersStore, ...props }) => (
  <Dashboard
    onLogout={usersStore.logout}
    addTask={tasksStore.addTask}
    {...props}
  />
);

DashboardContainer.propTypes = {
  tasksStore: PropTypes.object.isRequired,
  usersStore: PropTypes.object.isRequired
};

export default inject("tasksStore", "usersStore")(observer(DashboardContainer));
