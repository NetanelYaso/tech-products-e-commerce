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

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <main className='py-3'>
          <Container>
            <Routes>
              <Route path='/' element={<Home />} exact />
              <Route path='/product/:id' element={<ProductScreen />} />
              <Route path='/cart/:id?' element={<CartScreen />} />
            </Routes>
          </Container>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
