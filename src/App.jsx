import './App.css';
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';


function App() {

  return (
      <BrowserRouter>
        <Navbar/>
        <Home/>
        <Footer/>   
      </BrowserRouter>
  )
}

export default App
