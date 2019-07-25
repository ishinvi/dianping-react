import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            <Link to='#' className="confirm__btn" onClick={onCancel}>
              {cancelText}
            </Link>
            <Link to='#' className="confirm__btn" onClick={onConfirm}>
              {confirmText}
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Confirm;
