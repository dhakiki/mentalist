import React from "react";
import PropTypes from "prop-types";
import { inject, observer } from "mobx-react";
import SignIn from "./index";

const SignInContainer = ({ usersStore, ...props }) => (
  <SignIn onSignIn={usersStore.login} {...props} />
);

SignInContainer.propTypes = {
  usersStore: PropTypes.object.isRequired
};

export default inject("usersStore")(observer(SignInContainer));
