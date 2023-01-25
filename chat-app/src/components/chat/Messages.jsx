import React from "react";

import style from './chat.module.scss'

function condition(left, right) { 
  return left.own === right.own && left.dtime === right.dtime;
}

function messageConcat(data) {
  for (let i = 0; i < data.length - 1; ++i) {
    let left = data[i], right = data[i + 1], 
        leftIsArr = Array.isArray(left)
    
    if (condition(leftIsArr ? left[0] : left, right)) {
      if (leftIsArr)
        data[i].push(right)  
      else
        data[i] = [].concat(left, right)

      data.splice(i + 1, 1)
      i--
    }
  }
}

export default function Messages(props) {
  let data = props.data;
  messageConcat(data);

  return (
    <div className="messages">
      {data.map((item) => {
        let own = null,
          time = null;

        if (Array.isArray(item)) {
          own = item[0].own;
          time = item[0].dtime;
        } else {
          own = item.own;
          time = item.dtime;
        }

        let content =
          Array.isArray(item) && item.length > 1 ? (
            <div id={style.content_container}>
              {item.map((i) => (
                <div className={style.content}>{i.content}</div>
              ))}
            </div>
          ) : (
            <div className={style.container}>
              <div className={style.content}>{item.content}</div>
            </div>
          );

        if (own)
          return (
            <div id={style.own_msg}>
              <div className={style.time}>{time}</div>
              {content}
            </div>
          )
        else
          return (
            <div id={style.out_msg}>
              <img src={props.selectedUser.img} />
                {content}
              <div className={style.time}>{time}</div>
            </div>
          )
        })}
    </div>
  );
}
