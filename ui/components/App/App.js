import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FlashMessage } from "../../components";
import styles from "./App.scss";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className={styles["content"]}>
            <FlashMessage />
            {this.props.children}
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
