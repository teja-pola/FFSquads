import React from 'react'
import "./Sidebar.css"
import {NavLink} from "react-router-dom"

const Sidebar = () => {
  return (
    <div className='sidebar' >
      <div className="sidebar-options">
        <NavLink to='/add' className="sidebar-option">
          <img src="add_icon.png" alt="" />
          <p>Add Room</p>
        </NavLink>
        <NavLink to='/list' className="sidebar-option">
          <img src="order_icon.png" alt="" />
          <p>List Rooms</p>
        </NavLink>
      </div>
      
    </div>
  )
}

export default Sidebar
