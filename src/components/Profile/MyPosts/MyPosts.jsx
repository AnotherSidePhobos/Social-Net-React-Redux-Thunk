import React, { createRef } from 'react';
import Post  from './Post/Post';
import s from './MyPosts.module.css';


const MyPosts = (props) => {
    
    let postsData = props.posts;
    let postsElements = postsData.map(
        p => <Post message={p.message} likes={p.likesCount} />
    )

    let newPostElement = React.createRef();
    let onAddPost = () =>{
        props.addPost();
        
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return <div>
        My post
        <div className={s.myPost}>
            <div>
                <textarea onChange={onPostChange} 
                ref={newPostElement} 
                value={props.newPostText}/>
            </div>
            <div>
                <br />
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>

    </div>



}

export default MyPosts;
