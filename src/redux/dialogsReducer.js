const SEND_MESSAGE = 'DIALOG/SEND_MESSAGE';

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
    ]
};

export const dialogsReducer = (state = initialState, action) =>{
    switch(action.type){

        case SEND_MESSAGE:
            let body = action.newMessageBody
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 7, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageActionCreater = (newMessageBody) =>{
    
    return {
        type: SEND_MESSAGE,
        newMessageBody
    }
}

export default dialogsReducer;