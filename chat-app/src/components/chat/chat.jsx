import React from 'react'
import { useRef } from 'react'
import { send_message } from '../reduxToolkit/store';
import style from './chat.module.scss'

import Messages from './Messages';

export default function Chat(props) {
  let refLastdiv = useRef(), textarea = useRef(),
      selectedUser = props.state.users.data
      .filter(u => props.state.users.selectedId === u.uid)[0],
      messages = null;
  
  if(selectedUser !== undefined){
    let data = [...selectedUser.messages]
    
    messages = <Messages data={data} selectedUser={selectedUser}/>
  }

  React.useEffect(() => { 
    refLastdiv.current.scrollIntoView()
  }, [refLastdiv, messages])
  
  return (
    <div className={style.chat}>
      {messages}

      {
        messages !== null ? 
        <div id={style.input}>
          <textarea ref={textarea} placeholder='Write a message'/>
          <button type='button' onClick={() => { 
            if(textarea.current.value.trim().length > 0){
              props.dispatch(send_message(textarea.current.value))
              textarea.current.value = ''
            }
          }}>SEND</button>
        </div> 
        : null
      }
      <div ref={refLastdiv}></div>
    </div>
  )
}