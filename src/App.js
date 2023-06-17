import './App.css';
import { BrowserRouter as Router , Routes,Route} from "react-router-dom"
import Navbar from './components/navbar';
import Shop from './pages/shop_page/shop';
import Cart from './pages/cart_page/cart';
import  ShopContextProvider  from './context/shop-context';
function App() {
  return (
    <div className="App">
      <ShopContextProvider>
     <Router basename='/Shopzee'>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Shop/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
     </Router>
     </ShopContextProvider>
    </div>
  );
}

export default App;
