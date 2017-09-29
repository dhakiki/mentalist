import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

import "./index.styl";

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  render() {
    return (
      <div className="sign-in">
        <div className="card">
          <Card>
            <CardHeader
              title="Welcome to Mentalist!"
              subtitle="Please sign in"
            />
            <CardText>
              <div>
                <TextField
                  hintText="Enter email"
                  onChange={event => this.setState({email: event.target.value})}
                />
              </div>
              <div>
                <TextField
                  hintText="Enter Password"
                  onChange={event => this.setState({password: event.target.value})}
                />
              </div>
            </CardText>
            <CardActions>
              <FlatButton
                label="Sign In"
                onClick={() => this.props.onSignIn({email: this.state.email, password: this.state.password})}
              />
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

SignInPage.propTypes = {
  history: PropTypes.object
};

export default SignInPage;
