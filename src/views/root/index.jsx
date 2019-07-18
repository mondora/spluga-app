import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button } from "antd";

import { connect } from "react-redux";

import { login } from "../../actions/auth";
import { getCompany, addCompany } from "../../actions/companies";

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
    login: PropTypes.func,
    company: PropTypes.object,
    getCompany: PropTypes.func,
    addCompany: PropTypes.func
  };

  componentDidMount() {
    const { auth, login, company, getCompany } = this.props;

    //Login
    if (!auth.currentUser) {
      login();
    } else if (company) {
      //getCompany
      getCompany({});
    }
  }

  render() {
    const { auth, company, addCompany } = this.props;
    const data = {
      name: "mondora srl sb"
    };

    return (
      <div>
        <div>{"Spluga"}</div>
        <div>
          {auth && auth.currentUser
            ? "Logged in as " + auth.currentUser.profile.data.name
            : "not Logged in"}
        </div>
        <div>
          {company && company.companies
            ? "Company " + company.companies["0"].name
            : null}
        </div>

        <div>
          <Button onClick={() => addCompany(data, auth.currentUser.id)}>
            Write
          </Button>
        </div>
      </div>
    );
  }
}

const actions = {
  login,
  getCompany,
  addCompany
};

function mapStateToProps(state) {
  return {
    auth: state.auth,
    company: state.read,
    write: state.write
  };
}

export default connect(
  mapStateToProps,
  actions
)(Root);
