import React from "react";
import User from "./user/user";
import style from "./users.module.scss";

export default function Users(props) {
  let Users = [];
  
  for(let i = 0; i < 10; i++)
    Users = [Users, 
          <User 
            UID={i}
            state={props.state}
            dispatch={props.dispatch}
            img={
              "https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png"
            }
            userName="Uknown"
            lastMsg="Okay, she keep cryin', she keep cryin' every single night"
          />]

  return (
    <div className={style.users}>
      {Users}
    </div>
  );
}
