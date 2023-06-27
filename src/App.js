import React, { useEffect, useMemo, useRef, useState } from "react";
import Counter from "./components/Count";
import ClassCounter from "./components/ClassCount";
import "./styles/App.css";
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
import MyButton from "./components/UI/MyButton";
import MyInput from "./components/UI/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/MySelect";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal";
import { usePosts } from "./hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";


function App() {

  const [posts, setPosts] = useState([])  
  const [filter, setFilter] = useState({ sort: '', query: '' })  
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [isPostsLoading, setIsPostsLoading] = useState(false);

  useEffect(() => {
    fetchPosts()

  }, [filter])
  
   
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  async function fetchPosts() {
    setIsPostsLoading(true);
    setTimeout(async () => {
      const posts = await PostService.getAll();
      setPosts(posts)
      setIsPostsLoading(false);
    }, 1000)
    
  }
  
  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))

  }
    
  return (
    <div className="App">
      {/* <button onClick={fetchPosts}>GET POSTS</button> */}
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      
      />

      {isPostsLoading
        ? <h1>Loading...</h1>
        : <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
      }     
       
    </div>
  );
}

export default App;
