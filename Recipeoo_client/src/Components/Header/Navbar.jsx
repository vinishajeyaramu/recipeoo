import React, { useState ,useEffect,useRef} from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars ,} from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import { SiCodechef } from "react-icons/si";
import { MdFavoriteBorder } from "react-icons/md";
import logo from '../../Assets/Images/Recipeoo.png'
import SearchPopup from '../../Components/Search/Search';
import { recipecards } from '../../Pages/All Recipies/AllRecipe';
import { FaCartArrowDown } from "react-icons/fa";
import { getAdminAppUrl } from '../../config/api';

const Navbar = () => {
  const navigate = useNavigate();

  const handleAccountClick = () => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo?.role === 'admin') {
      window.location.href = getAdminAppUrl();
      return;
    }

    navigate('/account');
  };
  const [toggle, setToggle] = useState(false);

  const handleMenuClick = () => {
    setToggle((prev) => !prev);
  };
const handleMenuItemClick = () => {
  setToggle(false);
};
  const menuRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <>
      <nav>
        <div className='nav-left' ref={menuRef}>
          <li className='menu-icon' onClick={handleMenuClick}>
            {toggle ? <IoClose /> : <FaBars />}
          </li>
          
          {toggle && (
            <div className='menu-list'>
              <li><Link to="/home" onClick={handleMenuItemClick}>Home</Link></li>
              <li><Link to="/all-recipes" onClick={handleMenuItemClick}>Recipes</Link></li>
              <li><Link to="/cuisines" onClick={handleMenuItemClick}>Cuisines</Link></li>
              <li><Link to="/categories" onClick={handleMenuItemClick}>Categories</Link></li>
              <li><Link to="/blog" onClick={handleMenuItemClick}>Blog</Link></li>
              {/* <li><a href="/features">Features</a></li> */}
            </div>
          )}
          
        <Link to="/" className='logo' onClick={handleMenuItemClick}><img src={logo} alt="" /></Link>
        </div>
        <div className='nav-right'>
          <li><Link to="/favorites" onClick={handleMenuItemClick}><MdFavoriteBorder /></Link></li>
          <li><Link to="/download" onClick={handleMenuItemClick}><FaCartArrowDown /></Link></li>
          <li><Link to="/account" onClick={handleAccountClick}><SiCodechef /></Link></li>
          <li><SearchPopup recipes={recipecards} /></li>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
