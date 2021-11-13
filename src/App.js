import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import ExploreProducts from './Pages/ExploreProducts/ExploreProducts';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddProduct from './Pages/AddProduct/AddProduct';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
import AddReview from './Pages/AddReview/AddReview';
import MyOrder from './Pages/MyOrder/MyOrder';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';
import ManageProducts from './Pages/ManageProducts/ManageProducts';
import Navigation from './Pages/Home/Home/Shared/Navigation/Navigation';
import Payment from './Pages/Payment/Payment';
import Dashboard from './Pages/Dashboard/Dashboard'
import Footer from './Pages/Home/Home/Shared/Footer/Footer';

function App() {
  return (

    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute path="/product/:_id">
            <ProductDetail></ProductDetail>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/AddProduct">
            <AddProduct></AddProduct>
          </Route>
          <Route path="/review">
            <AddReview></AddReview>
          </Route>
          <Route path="/myOrder">
            <MyOrder></MyOrder>
          </Route>
          <Route path="/manageAll">
            <ManageAllOrders></ManageAllOrders>
          </Route>
          <Route path="/manageProducts">
            <ManageProducts></ManageProducts>
          </Route>
          <Route path="/payment">
            <Payment></Payment>
          </Route>
          <PrivateRoute path="/exploreproducts">
            <ExploreProducts></ExploreProducts>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>

  );
}

export default App;
