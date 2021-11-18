import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import Payment from './components/payment/Payment';
import CurrentProduct from './components/currentProduct/CurrentProduct';
import CategoryItems from './components/categoryItems/CategoryItems';
import Register from './components/register/Register';

function App() {

  return (
    <Router >
      <div className="App">
        <Routes>

          <Route path="/Amazon/" element={
            <>
              <Header />
              <Home />
              <div className="footer">
                footer
              </div>
            </>
          } />
          <Route path="/checkout" element={
            <>
              <Header />
              <Checkout />
              <div className="footer">
                footer
              </div>
            </>
          } />
          <Route path="/login" element={
            <>
              <Login />
            </>
          } />
          <Route path="/register" element={
            <>
              <Register />
            </>
          } />
          <Route path="/payment" element={
            <>
              <Header />
              <Payment />
              <div className="footer">
                footer
              </div>
            </>

          } />
          <Route path="/currentProduct" element={
            <>
              <Header />
              <CurrentProduct />
            </>

          } />
          <Route path="/categoryItems" element={
            <>
              <Header />
              <CategoryItems />
              <div className="footer">
                footer
              </div>
            </>

          } />

        </Routes>
      </div>

    </Router>
  );
}

export default App;
