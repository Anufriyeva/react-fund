import React, { useMemo, useRef, useState } from "react";
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


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
  { id: 2, title: "Javascript 2", body: "Description" },
  { id: 3, title: "Javascript 3", body: "Description" },
  ])  

  const [filter, setFilter] = useState({ sort: '', query: '' })
  
  const [modal, setModal] = useState(false);

  
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
    }
    return posts;

  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
    
    
  }, [filter.query, sortedPosts])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }
  
  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))

  }
    
  return (
    <div className="App">
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
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
       
    </div>
  );
}

export default App;
