import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import WeeklyPage from "./index";

const WeeklyPageContainer = ({ tasksStore, ...props }) => (
  <WeeklyPage tasks={tasksStore.tasks} {...props} />
);

WeeklyPageContainer.propTypes = {
  tasksStore: PropTypes.object.isRequired
};

export default inject("tasksStore")(observer(WeeklyPageContainer));
