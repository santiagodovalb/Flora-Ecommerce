import "./App.css";
import { Route, Redirect, Switch } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import SingleProduct from "../components/SingleProduct";
import Cart from "../components/Cart";
import Login from "../components/Login";
import Register from "../components/Register";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import axios from "axios";
import { setUser } from "../state/user";
import User from "../components/User";
import Checkout from "../components/Checkout";
import UpdateUser from "../components/UpdateUser";
import Home from "../components/Home";
import Categories from "../components/Categories";
import SingleOrder from "../components/SingleOrder";
import Admin from "../components/Admin";
import AdminCategories from "../components/AdminCategories";
import AdminProducts from "../components/AdminProducts";
import EditProduct from "../components/EditProduct";
import AdminUsers from "../components/AdminUsers";
import AdminOrders from "../components/AdminOrders";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/users/me")
      .then((res) => res.data)
      .then((user) => {
        dispatch(setUser(user));
      })
      .catch((err) => {
        console.log("err", err);
        return err;
      });
  }, [dispatch]);


  return (
    <div className="App">
      <Navbar />
      {/* <Sidebar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/search/:search" component={Search} />
        <Route path="/user" component={User} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/edit-user" component={UpdateUser} />
        <Route path="/categorie/:type" component={Categories} />
        <Route path="/order/:id" component={SingleOrder} />
        <Route exact path='/admin' component={Admin} />
        <Route exact path='/admin/products' component={AdminProducts} />
        <Route path='/admin/products/:id' component={EditProduct} />
        <Route path='/admin/categories' component={AdminCategories} />
        <Route path='/admin/users' component={AdminUsers} />
        <Route path='/admin/orders' component={AdminOrders} />
        <Redirect from="*" to="/" />
      </Switch>
      {/* <Footer />  */}
    </div>
  );
}

export default App;
