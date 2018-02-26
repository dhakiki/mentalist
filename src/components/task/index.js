import React, { Component } from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";

import "./index.styl";

class Task extends Component {
  render() {
    return (
      <div className={'task'} key={this.props.value.item}>{this.props.value.item}</div>
    )
  }
}

export default observer(Task);
