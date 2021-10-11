import { connect } from 'react-redux';
import {updateMessageActionCreater} from './../../redux/dialogsReducer';
import {sendMessageActionCreater} from './../../redux/dialogsReducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) =>{

    return{ 
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}
let mapDispatchToProps = (dispatch) =>{

    return{
        updateMessageBody: (body) =>{
            dispatch(updateMessageActionCreater(body));
        },
        sendMessage: () =>{
            dispatch(sendMessageActionCreater());
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);


export default DialogsContainer;