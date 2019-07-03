import React, { Component } from "react";
import "./style.css";
class SearchHistory extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="searchHistory">
        <div className="searchHistory__header">搜索记录</div>
        <ul className="searchHistory__list">
          {data.map((item, index) => {
            return (
              <li
                className="searchHistory__item"
                onClick={this.handleClick.bind(this, item)}
                key={item.id}
              >
                {item.keyword}
              </li>
            );
          })}
        </ul>
        <div className="searchHistory__clear" onClick={this.handleClear}>
          消除搜索记录
        </div>
      </div>
    );
  }
  handleClick = item => {
    this.props.onClickItem(item);
  };
  handleClear = () => {
    this.props.onClear();
  };
}

export default SearchHistory;
