import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ProductCard from './Components/ProductCard';

import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';
import MenPage from './Pages/MenPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <ProductCard/>
      <br /> */}
  {/* <HomePage/> */}
  {/* <ProductsPage/> */}
  <MenPage/>
    </div>
  );
}

export default App;
