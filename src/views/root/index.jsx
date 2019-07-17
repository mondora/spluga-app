import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import "./style.css";

import { login } from "../../actions/auth";

export class Root extends Component {
  constructor() {
    super();
    this.state = {
      device: "desktop",
      isCompanyCreate: false,
      isLoadingCompany: true,
      firstLoad: true
    };
  }

  static propTypes = {
    auth: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    login: PropTypes.func
  };

  componentDidMount() {
    const { auth, login } = this.props;
    if (!auth.currentUser) {
      login();
    }
  }

  render() {
    const { auth } = this.props;
    return (
      <div>
        <div>{"Spluga"}</div>
        <div>
          {auth && auth.currentUser
            ? "Logged in as " + auth.currentUser.profile.data.name
            : "not Logged in"}
        </div>
      </div>
    );
  }
}

const actions = {
  login
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  actions
)(Root);
