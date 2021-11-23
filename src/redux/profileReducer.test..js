import profileReducer, {addPostActionCreater} from "./profileReducer";
import React, { PureComponent } from 'react'


it('new post should be added', () => {
    let action = addPostActionCreater("react app")
    let state = {
        posts: [
            { id: 1, message: "Hi, How are you?", likesCount: 12 },
            { id: 2, message: "it's raining men", likesCount: 4 },
            { id: 3, message: "halilullah", likesCount: 23 },
        ]
    };
    let newState = profileReducer(state, action)
    expect(newState.posts.length).toBe(5)
  });
