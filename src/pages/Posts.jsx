import React, { useEffect, useRef, useState } from "react";
import PostList from "../components/PostList";
import MyButton from "../components/UI/MyButton";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/MyModal";
import { usePosts } from "../hooks/usePosts";
import PostService from "../API/PostService";
import Loader from "../components/UI/Loader";
import { useFetching } from "../hooks/useFetching";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/MySelect";


function Posts() {

  const [posts, setPosts] = useState([])  
  const [filter, setFilter] = useState({ sort: '', query: '' })  
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();

  
  
  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  })
  console.log(totalPages);

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])
  
   
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    setModal(false)
  }

  
  // Получаем post из дочернего компонента
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }
    
    
  return (
    <div className="App">
      {/* <button onClick={fetchPosts}>GET POSTS</button> */}
      <MyButton style={{marginTop: 30}} onClick={() => setModal(true)}>
        Create new post
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      
      <hr style={{margin: '15px 0'}}/>
      <PostFilter
        filter={filter}
        setFilter={setFilter}      
      />

      <hr style={{margin: '15px 0'}}/>
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue='Количество элементов на странице'
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 25, name: '25' },
          { value: -1, name: 'View all' },
          
        ]}
      />

      {postError &&
        <h1>Произошла ошибка ${postError}</h1>
      }
      <PostList remove={removePost} posts={sortedAndSearchedPosts} title="Массив объектов. Infinite scroll" />
      <div ref={lastElement} style={{height: 10, background: 'gray'}}></div>

      {isPostsLoading &&
        <div style={{display: "flex", justifyContent: "center", marginTop: 50}}><Loader/></div>
      }  

      <Pagination
        page={page}
        changePage={changePage}
        totalPages={totalPages} />    
      
       
    </div>
  );
}

export default Posts;