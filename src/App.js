import React, { useState } from "react";
import Counter from "./components/Count";
import ClassCounter from "./components/ClassCount";
import "./styles/App.css";
import PostItem from "./components/PostItem";


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
  { id: 1, title: "Javascript", body: "Description" },
  { id: 2, title: "Javascript 2", body: "Description" },
  ])
  
  
    
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>
        Список постов
      </h1>
      {posts.map(post => 
        <PostItem post={post} key={post.id} />
      )}
      
    </div>
  );
}

export default App;
