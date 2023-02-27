import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ProductCard from './Components/ProductCard';

import HomePage from './Pages/HomePage';
import ProductsPage from './Pages/ProductsPage';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <ProductCard/>
      <br /> */}
  {/* <HomePage/> */}
  <ProductsPage/>
    </div>
  );
}

export default App;
