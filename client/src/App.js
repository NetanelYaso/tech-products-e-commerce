import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/featurs/Header/Header';
import { Container } from 'react-bootstrap';
import Footer from './components/featurs/Footer/Footer';
import Home from './components/pages/Home/Home';
import ProductScreen from './screens/ProductScreen/ProductScreen';
import CartScreen from './screens/CartScreen/CartScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <main className='py-3'>
          <Container>
            <Routes>
            <Route path='/login' element={<LoginScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/cart/:id?' element={<CartScreen />} />
              <Route path='/' element={<Home />} exact />
            </Routes>
          </Container>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
