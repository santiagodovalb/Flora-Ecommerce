import "./App.css";
import { Route, Redirect, Switch } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../state/products";
import Products from "../components/Products";
import SingleProduct from "../components/SingleProduct";
import Cart from "../components/Cart";
import Login from "../components/Login";
import Register from "../components/Register";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useSelector } from 'react-redux'
import Search from '../components/Search'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts());
  }, []);

  const products = useSelector((state) => state.products);

  return (
    <div className="App">
      <Navbar />
      {/* <Sidebar /> */}
      <Switch>
        <Route exact path="/" render={() => <Products products={products} />} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/cart/:id" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/search/:search" component={Search} />
        {/*<Route path='/user/:id' component={UserPage} />
        <Route path='/admin' component={Admin} />*/}
        <Redirect from="*" to="/" />
      </Switch>
      {/* <Footer />  */}
    </div>
  );
}

export default App;
