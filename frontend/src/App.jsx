import React , {useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import Navbar from './componets/navbar/navbar.jsx';
import LoginPopup from './componets/loginpopup/LoginPopup.jsx';

const App = () => {

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
    <div className="app">
      <Navbar setShowLogin={setShowLogin}  />
      
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
    </>
  )
}

export default App