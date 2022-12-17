import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/featurs/Header/Header';
import Router from './Router';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;
