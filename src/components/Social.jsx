import React from "react";

export default function Social(props) {
  return (
    <a className="social-icon" href={props.link} target="_blank">
      <i className={props.fa}></i>
    </a>
  );
}
