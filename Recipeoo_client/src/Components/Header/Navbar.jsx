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
import { useSelector } from 'react-redux';
import { selectCurrentUserDownloads } from '../../Redux/Downloadslice';
import { APP_MESSAGE_EVENT, isVideoItem } from '../../utils/collectionAccess';

const Navbar = () => {
  const navigate = useNavigate();
  const [appMessage, setAppMessage] = useState('');
  const downloads = useSelector(selectCurrentUserDownloads);
  const downloadCount = downloads.filter((item) => !isVideoItem(item)).length;

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
  const messageTimeoutRef = useRef(null);

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

  useEffect(() => {
    const handleAppMessage = (event) => {
      const nextMessage = event.detail?.message;
      if (!nextMessage) return;

      setAppMessage(nextMessage);

      if (messageTimeoutRef.current) {
        clearTimeout(messageTimeoutRef.current);
      }

      messageTimeoutRef.current = setTimeout(() => {
        setAppMessage('');
      }, 3000);
    };

    window.addEventListener(APP_MESSAGE_EVENT, handleAppMessage);

    return () => {
      window.removeEventListener(APP_MESSAGE_EVENT, handleAppMessage);
      if (messageTimeoutRef.current) {
        clearTimeout(messageTimeoutRef.current);
      }
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
          <li>
            <Link
              to="/favorites"
              onClick={handleMenuItemClick}
              data-wishlist-target="true"
              className="wishlist-nav-link"
            >
              <MdFavoriteBorder />
            </Link>
          </li>
          <li>
            <Link to="/download" onClick={handleMenuItemClick} className="download-nav-link">
              <FaCartArrowDown />
              <span className="download-count-badge">{downloadCount}</span>
            </Link>
          </li>
          <li><Link to="/account" onClick={handleAccountClick}><SiCodechef /></Link></li>
          <li><SearchPopup recipes={recipecards} /></li>
        </div>
      </nav>
      {appMessage ? <div className="app-message-toast">{appMessage}</div> : null}
    </>
  );
};

export default Navbar;
