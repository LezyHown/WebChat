import React from "react";

import style from "./user.module.scss";

import { select_uid } from "../../reduxToolkit/store";

export default function User(props) {
  return (
    <div
      className={style.user}
      style={{ backgroundColor: props.UID === props.state.users.selectedId ? "lightgray" : "white" }}
      onClick={() => props.dispatch(select_uid(props.UID))}
    >
      <img src={props.img} />
      <div>
      <p className={style.username}>{props.userName}</p>
      <p className={style.lastmsg}>{props.lastMsg}</p>
      </div>
    </div>
  );
}