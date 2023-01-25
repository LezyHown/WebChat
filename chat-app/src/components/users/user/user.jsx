import React from "react";

import style from "./user.module.scss";

import { select_uid } from "../../reduxToolkit/store";

export default function User(props) {
  let isSelected = props.UID === props.state.users.selectedId;

  return (
    <div
      className={style.user}
      style={{ backgroundColor: isSelected ? "lightgray" : "white" }}
      onClick={() => props.dispatch(select_uid(props.UID))}
    >
      <div className={style.highlight} style={{ visibility: isSelected ? "visible" : "hidden" }}></div>
      <img src={props.img} />
      <div className={style.content}>
        <p className={style.username}>{props.userName}</p>
        <p className={style.lastmsg}>{props.lastMsg}</p>
      </div>
    </div>
  );
}