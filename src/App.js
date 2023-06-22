import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './component/Navbar';
import About from './pages/About';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './component/Products';
function App() {
  return (
    <>
      <Router >
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/about' element={<About/>}/> */}
          <Route path='/products' element={<Product/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </>
   
  );
}

export default App;
 