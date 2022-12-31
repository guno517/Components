import { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Spinner } from '../..';
import { usePostContext } from '../../../contexts/PostProvider';

const PostItem = ({ post }) => {
  const [loading, setLoading] = useState(false);
  const { onDeletePost } = usePostContext();

  const handleDeletePost = useCallback(
    async (id) => {
      setLoading(true);
      await onDeletePost(id);
      setLoading(false);
    },
    [onDeletePost]
  );

  return (
    <li>
      <Header strong level={3}>
        {post.title}
      </Header>
      <Link to={`/posts/${post.id}`}>Detail -&gt;</Link>
      <div>
        {loading ? (
          <Spinner />
        ) : (
          <button onClick={() => handleDeletePost(post.id)}>
            Delete
          </button>
        )}
      </div>
    </li>
  );
};

export default PostItem;
