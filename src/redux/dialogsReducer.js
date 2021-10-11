const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messagesData: [
            { id: 1, message: "Hey dude" },
            { id: 2, message: "Don't make it bad" },
        ],
    dialogsData: [
        { id: 1, name: "Barsik" },
        { id: 2, name: "Pushok" },
        { id: 3, name: "Marsik" },
        { id: 4, name: "Murka" },
    ],
    newMessageBody: '',
};

export const dialogsReducer = (state = initialState, action) =>{
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            return {
                ...state,
                newMessageBody: '',
                messagesData: [...state.messagesData, {id: 7, message: state.newMessageBody}]
            };
        default:
            return state;
    }
}

export const updateMessageActionCreater = (text) =>{
    
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: text
    }
}

export const sendMessageActionCreater = () =>{
    
    return {
        type: SEND_MESSAGE
    }
}

export default dialogsReducer;