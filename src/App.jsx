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

import Layout from "./components/layout/Layout";



const App = () => {
  return (
    <div>
      
      <Router>
        

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NoPage />} />
          <Route path="/menproduct" element={<Layout><MenProduct /></Layout>} />
          <Route path="/femaleproduct" element={<Layout><FemaleProduct /></Layout>} />
          <Route path="/productinfo" element={<ProductInfo />} />
          
         
           

        </Routes>
      </Router>
    </div>
  );
}

export default App;