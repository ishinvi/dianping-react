import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
class Tip extends Component {
  render() {
    const { message, onClose } = this.props;
    return (
      <div className="tip">
        <div className="tip__alert">
          <div className="tip__content">{message}</div>
          <div className="tip__btns">
            <Link to='#' className="tip__btn" onClick={onClose}>
              确定
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Tip;
