import React, { Component } from "react";
import './style.css'

class Confirm extends Component {
  render() {
    const {
      content,
      onCancel,
      cancelText,
      onConfirm,
      confirmText
    } = this.props;
    return (
      <div className="confirm">
        <div className="confirm__alert">
          <div className="confirm__content">{content}</div>
          <div className="confirm__btns">
            <a href='#' className="confirm__btn" onClick={onCancel}>
              {cancelText}
            </a>
            <a className="confirm__btn" onClick={onConfirm}>
              {confirmText}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
