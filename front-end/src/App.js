import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ProductCard from './Components/ProductCard';
import Carauser from './Components/HomePageComponents/Carousel';
import Deals from './Components/HomePageComponents/Deals';
import BestOfMyntra from './Components/HomePageComponents/BestOfMyntra';

function App() {
  return (
    <div className="App">
      <Navbar/>
     <Carauser/>
     <Deals/>
     <BestOfMyntra/>
    </div>
  );
}

export default App;
