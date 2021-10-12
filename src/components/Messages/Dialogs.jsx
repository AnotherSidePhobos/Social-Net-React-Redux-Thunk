import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import s from "./Dialogs.module.css";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {

  let state = props.dialogsPage;
  let dialData = state.dialogsData;
  let mesData = state.messagesData;
  let messageBody = state.newMessageBody;
  let txa = React.createRef();

  let onSendMessageChange = (e) =>{
      let body = e.target.value;
      props.updateMessageBody(body);
  }


  let onSendMessageClick = () =>{
      props.sendMessage();
  }

  let dialogsElements = dialData
      .map(d => <DialogItem key={d.id} name={d.name} id={d.id} />); // массив jsx компонент

  let messagesElements = mesData
      .map(m => <MessageItem key={m.id} message={m.message} />)

  return (
      <div className={s.dialogs}>
          <div className={s.dialog_items}>
              {
                  dialogsElements
              }
          </div>
          <div>
              <div className={s.messages}>
                  {
                      <div>
                          <div>{messagesElements}</div>
                          
                          <div className={s.addPost}>
                              <div>
                                  <textarea onChange={onSendMessageChange} placeholder='text...' ref={txa} value={state.newMessageBody}></textarea>
                              </div>
                              <div>
                                  <button onClick={onSendMessageClick}>Add post</button>
                              </div>
                          </div>
                      </div>
                      
                  }
              </div>
              
          </div>

          
      </div>
  )
}

export default Dialogs;
