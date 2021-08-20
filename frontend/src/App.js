import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import ShippingPage from './pages/checkoutProcess/ShippingPage'
import PaymentPage from './pages/checkoutProcess/PaymentPage'
import PlaceOrderPage from './pages/checkoutProcess/PlaceOrderPage'
import OrderPage from './pages/OrderPage';
import UserListPage from './pages/UserListPage';
import UserEditPage from './pages/UserEditPage';
import ProductListPage from './pages/ProductListPage';
import ProductEditPage from './pages/ProductEditPage';


const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' component={HomePage} exact />
          <Route path='/product/:id' component={ProductPage} />
          <Route path='/cart/:id?' component={CartPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/register' component={RegisterPage} />
          <Route path='/profile' component={ProfilePage} />
          <Route path='/shipping' component={ShippingPage} />
          <Route path='/payment' component={PaymentPage} />
          <Route path='/placeorder' component={PlaceOrderPage} />
          <Route path='/order/:id' component={OrderPage} />
          <Route path='/admin/userlist' component={UserListPage} />
          <Route path='/admin/users/:id/edit' component={UserEditPage} />
          <Route path='/admin/productlist' component={ProductListPage} />
          <Route path='/admin/product/:id/edit' component={ProductEditPage} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
