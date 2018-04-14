import React, { Component } from "react";
import { connect } from "react-redux";
import View from "./ReactstrapView";

const mapStateToProps = state => ({
  pages: state.pages
});

const mapDispatchToProps = dispatch => ({
  onInit: () => console.log("xxx")
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
