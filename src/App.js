import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Product from './Component/Product';
import About from './Component/About';
import Contact from './Component/Contact';
import ProductDetail from './Component/ProductDetail';
import Login from './Boxes/Login';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />

      </Routes>
    </div>

  );
}

export default App;
