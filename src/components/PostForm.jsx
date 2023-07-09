import React, { useState } from "react";
import MyInput from "./UI/MyInput";
import MyButton from "./UI/MyButton";

const PostForm = ({create}) => {
    
    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
    
    create(newPost)
    setPost({title: '', body: ''})
  }
    
    return (
        <form>
        {/* Управляемый компонент */}
        <MyInput
          value={post.title}
          onChange={e => setPost({...post, title: e.target.value})}
          type="text"
          placeholder="Post title">
        </MyInput>


        {/* Неуправляемый компонент */}
        <MyInput
          value={post.body}
          onChange={e => setPost({...post, body: e.target.value})}         
          type="text"
          placeholder="Post description">
        </MyInput>

        <MyButton onClick={addNewPost}>Create new post</MyButton>
      </form>
    );

};

export default PostForm;