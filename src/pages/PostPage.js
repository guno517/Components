import axios from 'axios';
import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { Header, Spinner, Text } from '../components';
import { useAsync } from '../hooks';

const PostPage = () => {
  const { postId } = useParams();

  const post = useAsync(async () => {
    return await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.data);
  }, [postId]);

  return (
    <div>
      {post.idLoading ? (
        <Spinner />
      ) : (
        <Fragment>
          <Header string>{post.value?.title}</Header>
          <Text>{post.value?.body}</Text>
        </Fragment>
      )}
    </div>
  );
};

export default PostPage;
