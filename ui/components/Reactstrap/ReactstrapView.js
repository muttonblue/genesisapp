import React, { Component } from 'react'
import * as ReactDOM from "react-dom";
import { Button } from "reactstrap";
// import Styles from "./ReactstrapStyle";

class ReactstrapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  } 

  render() {
    return (
      <div>
        <Button color="danger">Danger!</Button>{" "}
        <Button color="info">reactstrap</Button>
      </div>
      
    );
  }
}

export default ReactstrapView;
