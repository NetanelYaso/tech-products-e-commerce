import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from './components/featurs/Header/Header';
import Router from './Router';
import { Container } from 'react-bootstrap';
import Footer from './components/featurs/Footer/Footer';
import Home from './components/pages/Home/Home';
import ProductScreen from './screens/ProductScreen/ProductScreen';

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <main className='py-3'>
          <Container>
            {/* <Router /> */}
            <Routes>
              <Route path='/' element={<Home />} exact />
              <Route path='/product/:id' element={<ProductScreen />} />
            </Routes>
          </Container>
        </main>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
