import React, { Component } from 'react';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

import './index.styl';

class SignInPage extends Component {
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
                <TextField hintText="Enter Username" />
              </div>
              <div>
                <TextField hintText="Enter Password" />
              </div>
            </CardText>
            <CardActions>
              <FlatButton label="Sign In" onClick={() => this.props.history.push('/dashboard')} />
            </CardActions>
          </Card>
        </div>
      </div>
    );
  }
}

export default SignInPage;
