import React from "react";
import css from "./lineGrey.module.css";
const LineGrey = ({ classNameLine }) => (
  <div className={`${css.lineGrey} ${classNameLine}`}></div>
);
export default LineGrey;
