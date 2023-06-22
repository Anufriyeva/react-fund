import React, { useState } from "react";
import Counter from "./components/Count";
import ClassCounter from "./components/ClassCount";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/MyButton";
import MyInput from "./components/UI/MyInput";


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
  { id: 2, title: "Javascript 2", body: "Description" },
  { id: 3, title: "Javascript 3", body: "Description" },
  ])  

  const [title, setTitle] = useState("")

  // 50 минута //

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
  }
  
    
  return (
    <div className="App">
      <form>
        {/* Управляемый компонент */}
        <MyInput
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Название поста">
        </MyInput>

        <MyInput type="text" placeholder="Описание поста">
        </MyInput>
        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
      
    </div>
  );
}

export default App;
