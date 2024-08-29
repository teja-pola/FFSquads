import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';   
import Nav from './components/nav/Nav.jsx';
import Sidebar from './components/sidebar/Sidebar.jsx';
import Add from './pages/add/Add.jsx';
import List from './pages/list/List.jsx';
import Registration from './pages/registrations/Registration.jsx';

const App = () => {

  const url = "http://localhost:4000"
  
  return (
    <div>
      <ToastContainer/>
      <Nav />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path='/add' element={<Add url={url}/>}/>
          <Route path='/list' element={<List url={url}/>}/>
          <Route path='/registrations' element={<Registration url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App