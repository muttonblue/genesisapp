import React, { Component } from 'react'
import * as ReactDOM from "react-dom";
import { Fabric } from "office-ui-fabric-react/lib/Fabric";
import { Button, ButtonType } from "office-ui-fabric-react/lib/Button";
import {
  Dialog,
  DialogType,
  DialogFooter
} from "office-ui-fabric-react/lib/Dialog";
import { initializeIcons } from "@uifabric/icons";
// import Styles from "./OfficeDevStyle";

class OfficeDevView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  componentWillMount() {
    initializeIcons("https://my.cdn.com/path/to/icons/");
  }

  open = () => this.setState({ isOpen: true });

  close = () => this.setState({ isOpen: false });

  officeFabric() {
    return (
      <Fabric className="App">
        <div style={{ margin: "5em" }}>
          <Button onClick={this.open}>I am a button.</Button>
        </div>
        <Dialog
          isOpen={this.state.isOpen}
          type={DialogType.close}
          onDismiss={this.close.bind(this)}
          title="Dialog title"
          subText="Dialog subText"
          isBlocking={false}
          closeButtonAriaLabel="Close"
        >
          <h1>Hello, World!</h1>
          <DialogFooter>
            <Button buttonType={ButtonType.primary} onClick={this.close}>
              OK
            </Button>
          </DialogFooter>
        </Dialog>
      </Fabric>
    );
  }

  render() {
    return (
      <div>
        {this.officeFabric()}
      </div>
    );
  }
}

export default OfficeDevView;
