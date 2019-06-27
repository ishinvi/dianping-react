import React, { Component } from "react";
import Category from "./components/Category";
import HeadLine from "./components/Headline";
class Home extends Component {
  render() {
    return (
      <div>
        <Category />
        <HeadLine />
      </div>
    );
  }
}

export default Home;
