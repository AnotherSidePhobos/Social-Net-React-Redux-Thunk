import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import s from "./Dialogs.module.css";
import { Field, reduxForm } from "redux-form";
import { useSelector } from "react-redux";
import {Textarea} from './../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from "../../utils/Validators/validators";

const Dialogs = (props) => {

  let state = props.dialogsPage;
  let dialData = state.dialogsData;

  const messages = useSelector(state => state.dialogsPage.messagesData)


  let addNewMessage = (values) =>{
      props.sendMessage(values.newMessageBody);
  }

  let dialogsElements = dialData
      .map(d => <DialogItem key={d.id} name={d.name} id={d.id} />); // массив jsx компонент

  let messagesElements = messages
      .map(m => <MessageItem key={m.id} message={m.message} />)

  return (
      <div className={s.dialogs}>
          <div className={s.dialog_items}>
              {dialogsElements}
          </div>
          <div>
              <div className={s.messages}>
                  {
                      <div>
                          <div>{messagesElements}</div>

                          <AddMessageFormRedux onSubmit={addNewMessage}/>
                      </div>
                      
                  }
              </div>
              
          </div>

          
      </div>
  )
}

export default Dialogs;
const maxLength50 = maxLengthCreator(50);
const AddMessageForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={s.addPost}>
            <div>
                <Field component={Textarea}
                name="newMessageBody" 
                placeholder='enter your message...'
                validate={required, maxLength50}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: "dialogAddMessageForm"
})(AddMessageForm)
