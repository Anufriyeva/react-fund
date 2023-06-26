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


function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", body: "Description" },
  { id: 2, title: "Javascript 2", body: "Description" },
  { id: 3, title: "Javascript 3", body: "Description" },
  ])  

  const [selectedSort, setSelectedSort] = useState('')

  const [searchQuery, setSearchQuery] = useState('')

  
  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;

  }, [selectedSort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
    
    
  }, [searchQuery, sortedPosts])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  
  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))

  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
  }
    
  return (
    <div className="App">
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput
          placeholder="Поиск"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Сортировка"
          options={[
            { value: 'title', name: 'По названию' },
            { value: 'body', name: 'По описанию' },
            
          ]}
        
        />
      </div>
      {sortedAndSearchedPosts.length
        ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про JS" />
        : <h1 style={{ textAlign: 'center' }}>
          Посты не найдены
        </h1>      
      }     
      
    </div>
  );
}

export default App;
