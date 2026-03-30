import React, { useState } from 'react';
import './Videorecipecard.css';
import { FaHeart, FaRegBookmark, FaClock, FaPlay } from 'react-icons/fa';
import { LuChefHat } from "react-icons/lu";
import { Link } from 'react-router-dom';

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
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

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
          <span onClick={() => setLiked(!liked)} className='icon'>
            <FaHeart color={liked ? 'red' : '#EBB22F'} />
          </span>
          <span onClick={() => setSaved(!saved)} className='icon'>
            <FaRegBookmark color={saved ? 'red' : '#EBB22F'} />
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
          <Link className='v-time-icon' to={timeLink}>
            <FaClock /> {time}
          </Link>
        </li>
        <li>
          <Link className='v-cuisine' to={cuisineLink}>
            {flag && <img src={flag} alt={`${cuisine} flag`} className="flag-icon" />} {cuisine}
          </Link>
        </li>
        {difficulty && (
          <li>
            <Link className='v-difficulty-icon' to={difficultyLink}>
              <LuChefHat /> {difficulty}
            </Link>
          </li>
        )}
        {servings && (
          <li>
            <Link className='v-servings-icon' to={servingsLink}>
              {servings}
            </Link>
          </li>
        )}
      </div>
    </div>
  );
};

export default VideoCard;