import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './assets/pages/Home';
import Users from './assets/pages/Users';
import User from './assets/pages/User';
import NotFoundPage from './assets/pages/NotFoundPage';
import Layout from './components/Layout/Layout';
import Posts from './assets/pages/Posts';

// import Title from './components/Title/Title';
// import Card from './components/Card/Card';
// import Counter from './components/Counter/Counter';
// import Album from './components/Album/Album';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/posts" element={<Posts />}></Route>
            <Route path="/users/:id" element={<User />}></Route>
          </Route>

          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
