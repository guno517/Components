import axios from 'axios';
import { useAsync } from '../hooks';
import { Header, Spinner } from '../components';
import PostList from '../components/domain/PostList';
import PostProvider from '../contexts/PostProvider';
import { useCallback } from 'react';
import PostAddForm from '../components/domain/PostAddForm';

// 컴포넌트는 최대한 순수할 수록 좋습니다
// 1.사이드 이펙트를 걱정하지 않아도 된다
// 2.확장에 유연하다
// 3.테스트가 쉽다

const PostsPage = () => {
  const initialPosts = useAsync(async () => {
    return await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.data);
  }, []);

  const handleAddPost = useCallback(async (post) => {
    return await axios
      .post(`https://jsonplaceholder.typicode.com/posts/`, post)
      .then((res) => res.data);
  }, []);

  const handleDeletePost = useCallback(async (id) => {
    return await axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(() => ({ id }));
  }, []);

  return (
    <PostProvider
      initialPosts={initialPosts.value}
      handleAddPost={handleAddPost}
      handleDeletePost={handleDeletePost}
    >
      <div>
        <Header>Posts</Header>
        <PostAddForm />
        <ul>{initialPosts.isLoading ? <Spinner /> : <PostList />}</ul>
      </div>
    </PostProvider>
  );
};

export default PostsPage;
