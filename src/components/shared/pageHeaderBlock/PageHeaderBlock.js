import React, { Component } from "react";
import { PageHeader } from "antd";
import { LeftCircleOutlined } from "@ant-design/icons";
import css from "./pageHeader.module.css";

export class UserChoosePlan extends Component {
  render() {
    const { tittle, subTitle, desktop = false, indicator } = this.props;
    return (
      <div className={css.wrapper}>
        <PageHeader
          backIcon={
            <LeftCircleOutlined style={{ fontSize: "23px", color: "red" }} />
          }
          className={css.pageHeader}
          title={tittle}
          subTitle={subTitle}
          onBack={() => window.history.back()}
        />
        {desktop && (
          <div className={css.lineIndicator}>
            {Number(indicator) === 1 && <div className={css.indicator1}></div>}
            {Number(indicator) === 2 && <div className={css.indicator2}></div>}
            {Number(indicator) === 3 && <div className={css.indicator3}></div>}
            {Number(indicator) === 4 && <div className={css.indicator4}></div>}
          </div>
        )}
      </div>
    );
  }
}
export default UserChoosePlan;
