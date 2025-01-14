// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import {Routes, Route} from 'react-router-dom';
import Products from './component/Products'
import Product from './component/Product';
import Admin from './component/Admin';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/products' Component={Products} />
        <Route exact path='/products/:id' Component={Product} />
        <Route exact path='/admin' Component={Admin} />

      </Routes>
    </>
  );
}

export default App;
