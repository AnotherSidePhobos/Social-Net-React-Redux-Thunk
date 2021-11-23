import Post  from './Post/Post';
import s from './MyPosts.module.css';
import { Field, reduxForm } from 'redux-form';
import {required, maxLengthCreator} from './../../../utils/Validators/validators';
import {Textarea} from './../../Common/FormsControls/FormsControls';

import React, { Component } from 'react'

// class MyPosts extends React.PureComponent {

//     componentDidMount(){
//         setInterval(()=>{
//             this.setState({a: 12})
//         }, 1000)
//     }
//     // shouldComponentUpdate(nextProps, nextState){
//     //     if (nextState !== this.state) {
//     //         return true
//     //     }
//     // }
//     render() {
//         let postsData = this.props.posts;
//         let postsElements = postsData.map(
//             p => <Post message={p.message} likes={p.likesCount} />
//         )
    
        
//         let onAddPost = (values) =>{
//             this.props.addPost(values.newPostText);
            
//         }
//         console.log('render y');
//         return (
//             <div>
//                 <h3>My post</h3>
//                 <AddNewPostFormRedux onSubmit={onAddPost}/>
//                 <div>
//                     {postsElements}
//                 </div>
//             </div>
//         )
//     }
// }

const MyPosts = React.memo((props) => {
    
    let postsData = props.posts;

    let postsElements = postsData.map(
        p => <Post message={p.message} likes={p.likesCount} />
    )

    
    let onAddPost = (values) =>{
        props.addPost(values.newPostText);
        
    }

    return <div>
        <h3>My post</h3>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
        <div>
            {postsElements}
        </div>
    </div>
})

export default MyPosts;

let maxLength30 = maxLengthCreator(30);

let AddNewPostForm = (props) => {
    return(
        <form onSubmit={props.handleSubmit} className={s.myPost}>
            <div>
                <Field name="newPostText" component={Textarea} placeholder='type post'
                validate={[required, maxLength30]}/>
            </div>
            <div>
                <br />
                <button >Add post</button>
            </div>

        </form>
    )
}
let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)