import React, { Component } from "react";
import LoginHeader from "./components/LoginHeader";
import LoginForm from "./components/LoginForm";
import {
  actions as loginActions,
  getUsername,
  getPassword,
  isLogin
} from "../../redux/modules/login";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
class Login extends Component {
  render() {
    const { username, password, login } = this.props;
    if (login) {
      return <Redirect to="/user" />;
    }
    return (
      <div>
        <LoginHeader />
        <LoginForm
          username={username}
          password={password}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    );
  }

  //input 元素改变的响应函数
  handleChange = e => {
    if (e.target.name === "username") {
      this.props.loginActions.setUsername(e.target.value);
    } else if (e.target.name === "password") {
      this.props.loginActions.setPassword(e.target.value);
    }
  };

  // 提交
  handleSubmit = () => {
    this.props.loginActions.login();
  };
}

const mapStateToProps = (state, props) => {
  return {
    username: getUsername(state),
    password: getPassword(state),
    login: isLogin(state)
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    loginActions: bindActionCreators(loginActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
