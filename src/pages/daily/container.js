import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import DailyPage from "./index";

const DailyPageContainer = ({ tasksStore, ...props }) => (
  <DailyPage tasks={tasksStore.tasks} {...props} />
);

DailyPageContainer.propTypes = {
  tasksStore: PropTypes.object.isRequired
};

export default inject("tasksStore")(observer(DailyPageContainer));
