import React, { Component } from "react";
import "./style.css";
class Tip extends Component {
  render() {
    const { message, onclose } = this.props;
    return (
      <div className="tip">
        <div className="tip__alert">
          <div className="tip__content">{message}</div>
          <div className="tip__btns">
            <a className="tip__btn" onClick={onclose}>
              确定
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Tip;
