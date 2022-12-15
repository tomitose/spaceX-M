import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import MissionsContainer from './components/MissionsContainer/MissionsContainer';
import Mission from './components/Mission/Mission';


function App() {

  return (
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/missions' element={<MissionsContainer/>}></Route>
          <Route path='missions/:missionId' element={<Mission/>}></Route>
        </Routes>
        <Footer/>   
      </BrowserRouter>
  )
}

export default App
