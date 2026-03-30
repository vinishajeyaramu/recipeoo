import React from 'react'
import './Footer.css'
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa";
import logo from '../../Assets/Images/Recipeoo.png'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
        <footer>
            <div className='footer-top-div'>
                {/* <div className='footer-top-left'>
                    <li><a href=""><IoLogoInstagram /></a></li>
                    <li><a href=""><RiTwitterXFill /></a></li>
                    <li><a href=""><FaYoutube /></a></li>
                    <li><a href=""><FaPinterestP /></a></li>
                </div> */}
                <div className='footer-top-right'>
                    <li><Link to="/all-recipes">All Recipes</Link></li>
                    <li><Link to="/video-recipes">Video Recipes</Link></li>
                    <li><Link to="/a-z-recipes">A-Z recipes</Link></li>
                    <li><Link to="/privacypolicy">Refund Policy</Link></li>
                    <li><Link to="/terms&conditions">Terms and Conditions</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </div>
            </div>
            <div className='footer-bottom-div'>
                <span>Recipeoo offers a world of delicious recipes, cooking inspiration, and culinary tips. Explore new flavors, master techniques, and bring your passion for cooking to life.</span>
                <p>© 2025 Recipeoo. All rights reserved. Designed by Vinisha.</p>
                <Link to="/" className='f-logo'><img src={logo} alt="" /></Link>
            </div>
        </footer>
    </>
  )
}

export default Footer