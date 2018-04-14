import React, { Component } from "react";
import { connect } from "react-redux";
// import * as Actions from "./OfficeDevAction";
import View from "./OfficeDevView";

const mapStateToProps = state => ({
  pages: state.pages
});

const mapDispatchToProps = dispatch => ({
//   onInit: () => Actions.init()
  onInit: () => console.log("xxx")
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
