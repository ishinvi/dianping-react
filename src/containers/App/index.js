import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import ErrorToast from "../../components/ErrorToast";
import { actions as appActions, getError } from "../../redux/modules/app";
import "./style.css";
function App() {
  const {
    error,
    appActions: { clearError }
  } = this.props;
  return (
    <div className="App">
      {error ? <ErrorToast msg={error} clearError={clearError} /> : null}
    </div>
  );
}

const mapStateToProps = (state, props) => {
  return {
    error: getError(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    appActions: bindActionCreators(appActions, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
