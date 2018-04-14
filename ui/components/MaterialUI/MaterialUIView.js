import React, { Component } from 'react'
import * as ReactDOM from "react-dom";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
// import Styles from "./MaterialUIStyle";

class MaterialUIView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  } 

  render() {
    return (
      <div>
        <Button variant="raised" color="primary">
          Hello World
        </Button>
      </div>
      
    );
  }
}

export default MaterialUIView;
