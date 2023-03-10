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
import OtpVarification from './Components/OtpVarification';
import SignIn from './Components/SignIn';
import CartPage from './Pages/CartPage';

function App() {

  return (
    <div className="App">
      <Navbar/>
      {/* <ProductCard/> */}
      <br />
  {/* <HomePage/> */}
  {/* <ProductsPage/> */}
  {/* <MenPage/> */}
  {/* <WomenPage/> */}
  {/* <LoginOrSignup/> */}
  {/* <ProductDetails/> */}
  {/* <ImageMagnify/> */}
  {/* <OtpVarification/> */}
  {/* <SignIn/> */}


  <CartPage/>
    </div>
  );
}

export default App;
