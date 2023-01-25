import React from "react";
import User from "./user/user";
import style from "./users.module.scss";

export default function Users(props) {
  let users = [...props.state.users.data];
  
  users = users.map(user => 
    <User
        UID={user.uid}
        state={props.state}
        dispatch={props.dispatch}
        img={user.img}
        userName={user.uname}
        lastMsg={user.messages.slice(-1)[0].content}
        key={user.uid}
      />
  );

  return <div className={style.users}>{users}</div>;
}
