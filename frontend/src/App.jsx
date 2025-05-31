import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contactus from './pages/Contactus';
import Home from './pages/Home';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgetPass from './pages/ForgetPass';
import ShoppingCart from './pages/ShoppingCart';
import Products from './pages/Products';
import { CartProvider } from './pages/CartContext'; // ✅ Make sure path is correct

const App = () => {
  const location = useLocation();
  const hideNavbarFooter = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <CartProvider> {/* ✅ Wrap everything in CartProvider */}
      {!hideNavbarFooter && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetPassword" element={<ForgetPass />} />
        <Route path="/shoppingcart" element={<ShoppingCart />} />
      </Routes>

      {!hideNavbarFooter && <Footer />}
    </CartProvider>
  );
};

export default App;
