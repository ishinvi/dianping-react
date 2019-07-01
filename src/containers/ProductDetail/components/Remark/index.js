import React, { Component } from "react";
import './style.css'
class Remark extends Component {
  render() {
    return (
      <div className="remark">
        <div className="remark__header">
          购买须知
          <i className="remark__icon" />
        </div>
        <div className="remark__list">
          <dl className="remark__item">
            <dt className="remark__itemTitle">有效期</dt>
            <dd className="remark__itemDesc">2018-11-11至2019-11-11</dd>
          </dl>
          <dl className="remark__item">
            <dt className="remark__itemTitle">除外日期</dt>
            <dd className="remark__itemDesc">有效期内周末、法定节假日可用</dd>
          </dl>
          <dl className="remark__item">
            <dt className="remark__itemTitle">使用时间</dt>
            <dd className="remark__itemDesc">团购券使用时间：11:00-22:00</dd>
          </dl>
          <dl className="remark__item">
            <dt className="remark__itemTitle">预约提醒</dt>
            <dd className="remark__itemDesc">无需预约，消费高峰时可能需要等位</dd>
          </dl>
          <dl className="remark__item">
            <dt className="remark__itemTitle">规则提醒</dt>
            <dd className="remark__itemDesc">每张团购券建议2人使用</dd>
          </dl>
          <dl className="remark__item">
            <dt className="remark__itemTitle">包间</dt>
            <dd className="remark__itemDesc">可用包间，条件为：详询商户</dd>
          </dl>
          <dl className="remark__item">
            <dt className="remark__itemTitle">堂食外带</dt>
            <dd className="remark__itemDesc">仅限堂食，不提供餐前外带，餐毕未吃完可打包，打包费详情咨询商家</dd>
          </dl>
          <dl className="remark__item">
            <dt className="remark__itemTitle">商家服务</dt>
            <dd className="remark__itemDesc">提供免费WiFi</dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default Remark;
