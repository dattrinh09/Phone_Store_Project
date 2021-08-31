import React from 'react'
import GlobalStyle from './globalStyles'
import { Navbar} from './components'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/HomePage/Home';
import SignUp from './components/Forms/SignUp';
import Products from './components/Products/Products';
import FormLogin from './components/Forms/FormLogin';
import FormAddProduct from './components/Forms/FormAddProduct';
import Cart from './components/cart/Cart';
import AdminProduct from './components/Products/AdminProduct';
import ProductInfoSection from './components/InfoSection/ProductInfoSection';

function App() {
  return (
    <Router>
      <GlobalStyle/>
      <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/sign-up" component={SignUp}></Route>
        <Route path="/login" component={FormLogin}></Route>
        <Route path="/products"  component={Products}></Route>
        <Route path="/add-products"  component={FormAddProduct}></Route>
        <Route path="/cart"  component={Cart}></Route>
        <Route path="/admin-products"  component={AdminProduct}></Route>
        <Route path="/show-data-info"  component={ProductInfoSection}></Route>
      </Switch>
    </Router>
  );
}

export default App;
