import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useReducer,
} from 'react';

const PostContext = createContext();
export const usePostContext = () => useContext(PostContext);

// reduce안에서 asyc await을 통한 데이터 통신을 하면 안된다.
// 최대한 순수하게 만들어줘야한다. 상태만 관리하도록 하기
const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT_POSTS': {
      return action.payload;
    }
    case 'ADD_POST': {
      return [...state, action.payload];
    }
    case 'DELETE_POST': {
      const payload = action.payload;
      return state.filter((item) => item.id !== payload.id);
    }
    default: {
      console.lerror('wrong type');
      break;
    }
  }
};

const PostProvider = ({
  children,
  initialPosts,
  handleAddPost,
  handleDeletePost,
}) => {
  const [posts, dispatch] = useReducer(reducer, initialPosts || []);

  useEffect(() => {
    dispatch({ type: 'INIT_POSTS', payload: initialPosts || [] });
  }, [initialPosts]);

  const onAddPost = useCallback(
    async (post) => {
      const payload = await handleAddPost(post);

      dispatch({ type: 'ADD_POST', payload });
    },
    [handleAddPost]
  );

  const onDeletePost = useCallback(
    async (id) => {
      const payload = await handleDeletePost(id);

      dispatch({ type: 'DELETE_POST', payload });
    },
    [handleDeletePost]
  );

  return (
    <PostContext.Provider value={{ posts, onAddPost, onDeletePost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
