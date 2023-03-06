import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ProductCard from './Components/ProductCard';

import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import MenPage from './Pages/MenPage';
import WomenPage from './Pages/WomenPage';
import LoginOrSignup from './Components/LoginOrSignup';
import ProductDetails from './Pages/ProductDetails';
import ImageMagnify from './Components/ImageMagnify';

function App() {

  return (
    <div className="App">
      <Navbar/>
      {/* <ProductCard/> */}
      {/* <br /> */}
      
  {/* <HomePage/> */}
  {/* <ProductsPage/> */}
  {/* <MenPage/> */}
  {/* <WomenPage/> */}
  {/* <LoginOrSignup/> */}
  <ProductDetails/>
  {/* <ImageMagnify/> */}
    </div>
  );
}

export default App;
