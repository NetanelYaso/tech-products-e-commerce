import { Routes, Route } from "react-router-dom"
import Home from './components/pages/Home/Home';
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} exact />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default Router;