import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import NoPage from "./pages/nopage/NoPage";
import MenProduct from "./pages/menproduct/MenProduct";
import FemaleProduct from "./pages/femaleproduct/FemaleProduct";
import ProductInfo from "./pages/productinfo/ProductInfo";
import { CartProvider } from './context/CartContext';
import Layout from "./components/layout/Layout";
import Cart from './pages/cart/CartPage';
import Signup from "./pages/registration/Signup";
import Login from "./pages/registration/Login";
import UserDashboard from "./pages/user/UserDashboard";



const App = () => {
  return (
    <div>
      <CartProvider>
      
        <Router>
          

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/*" element={<NoPage />} />
            <Route path="/menproduct" element={<Layout><MenProduct /></Layout>} />
            <Route path="/femaleproduct" element={<Layout><FemaleProduct /></Layout>} />
            <Route path="/productinfo" element={<Layout><ProductInfo /></Layout>} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user-dashboard" element={<UserDashboard />} />

            
          
            

          </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;