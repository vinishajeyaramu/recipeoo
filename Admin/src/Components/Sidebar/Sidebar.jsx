import React from 'react'
import { NavLink } from 'react-router-dom'
import './Sidebar.css'
import logo from '../../Assets/Images/Recipeoo.png'
import { getClientAppUrl } from '../../config/appUrls'

const Sidebar = () => {
  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('role')
    localStorage.removeItem('userInfo')
    localStorage.removeItem('isLoggedIn')
    window.location.href = getClientAppUrl('/account')
  }

  return (
    <>
      <div className='sidebar'>
        <div className='logo'>
          <a href={getClientAppUrl('/')}>
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className='sidebar-nav'>
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/recipe" className={({ isActive }) => isActive ? 'active' : ''}>Recipe</NavLink>
          </li>
          <li>
            <NavLink to="/videorecipe" className={({ isActive }) => isActive ? 'active' : ''}>Video Recipe</NavLink>
          </li>
          <li>
            <NavLink to="/category" className={({ isActive }) => isActive ? 'active' : ''}>Category</NavLink>
          </li>
          <li>
            <NavLink to="/cuisine" className={({ isActive }) => isActive ? 'active' : ''}>Cuisine</NavLink>
          </li>
          <li>
            <NavLink to="/downloads" className={({ isActive }) => isActive ? 'active' : ''}>Downloads</NavLink>
          </li>
          <li>
            <NavLink to="/users" className={({ isActive }) => isActive ? 'active' : ''}>Users</NavLink>
          </li>
          <li>
            <NavLink to="/blog" className={({ isActive }) => isActive ? 'active' : ''}>Blog</NavLink>
          </li>
          <li>
            <button type="button" className='sidebar-logout' onClick={handleLogout}>Logout</button>
          </li>
        </div>
      </div>
    </>
  )
}

export default Sidebar
