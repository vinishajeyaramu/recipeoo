import React from 'react';
import './Videorecipecard.css';
import { FaHeart, FaRegBookmark, FaClock, FaPlay } from 'react-icons/fa';
import { LuChefHat } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { showAppMessage } from '../../utils/collectionAccess';

// Utility function to convert string into URL-friendly slug
const slugify = (text) =>
  text?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const VideoCard = ({
  image,
  rating,
  category,
  title,
  time,
  cuisine,
  difficulty,
  flag,
  servings
}) => {
  const handleBlockedAction = (event) => {
    event.preventDefault();
    event.stopPropagation();
    showAppMessage('Video recipes cannot be added to favorites or downloads.');
  };

  // Auto-generated links
  const link = `/video-recipe/${slugify(title)}`;
  const categoryLink = `/category/${slugify(category)}`;
  const timeLink = `/time/${slugify(time)}`;
  const cuisineLink = `/cuisine/${slugify(cuisine)}`;
  const difficultyLink = difficulty ? `/difficulty/${slugify(difficulty)}` : '';
  const servingsLink = servings ? `/servings/${slugify(servings.replace(/serves/i, '').trim())}` : '';

  return (
    <div className='v-recipe-card'>
      <div className='v-card-img'>
        <Link to={link}>
          <img src={image} alt={title} />
        </Link>
        <div className='v-play-circle'>
          <FaPlay className='v-play-icon' />
        </div>
        <p className='v-rating'>⭐ {rating}</p>
        <div className='v-r-icons'>
          <span onClick={handleBlockedAction} className='icon'>
            <FaHeart color={'#EBB22F'} />
          </span>
          <span onClick={handleBlockedAction} className='icon'>
            <FaRegBookmark color={'#EBB22F'} />
          </span>
        </div>
      </div>

      <Link to={categoryLink}>
        <p className='v-category'>{category}</p>
      </Link>

      <Link to={link}>
        <h5 className='v-recipe-title'>{title}</h5>
      </Link>

      <div className='v-info'>
        <li>
          <Link className='v-cuisine' to={cuisineLink}>
            {flag && <img src={flag} alt={`${cuisine} flag`} className="flag-icon" />} {cuisine}
          </Link>
        </li>
        <li>
          <Link className='v-time-icon' to={timeLink}>
            <FaClock /> {time}
          </Link>
        </li>
        {servings && (
          <li>
            <Link className='v-servings-icon' to={servingsLink}>
              {servings}
            </Link>
          </li>
        )}
        {difficulty && (
          <li>
            <Link className='v-difficulty-icon' to={difficultyLink}>
              <LuChefHat /> {difficulty}
            </Link>
          </li>
        )}
      </div>
    </div>
  );
};

export default VideoCard;
