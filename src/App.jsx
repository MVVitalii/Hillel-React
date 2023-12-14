import { NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './assets/pages/Home';
import About from './assets/pages/About';
import Products from './assets/pages/Products';

function App() {
  return (
    <div className="app">
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/products">Products</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
