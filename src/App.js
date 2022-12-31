import { Route, Routes } from 'react-router';
import DefaultTemplate from './components/template/DefaultTemplate';
import NotFoundPage from './pages/NotFoundPage';
import PostPage from './pages/PostPage';
import PostsPage from './pages/PostsPage';

const App = () => {
  return (
    <DefaultTemplate>
      <Routes>
        <Route path="/" exact element={<h1>Home</h1>} />
        <Route path="/posts" exact element={<PostsPage />} />
        <Route path="/posts/:postId" exact element={<PostPage />} />
        <Route path="*" exact element={<NotFoundPage />} />
      </Routes>
    </DefaultTemplate>
  );
};

export default App;
