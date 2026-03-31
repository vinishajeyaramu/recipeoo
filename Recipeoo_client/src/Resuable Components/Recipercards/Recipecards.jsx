import React, { useState } from 'react';
import './Recipecards.css';
import { FaHeart, FaRegBookmark, FaClock } from 'react-icons/fa';
import { LuChefHat } from "react-icons/lu";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { getAssetUrl } from '../../config/api';

// Utility function to convert string into URL-friendly slug
const slugify = (text) =>
  text?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const RecipeCard = ({
  image,
  rating,
  category,
  title,
  time,
  cuisine,
  difficulty,
  servings,
  flag
}) => {
   console.log(image,"image in crecu")
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  const link = `/recipe/${slugify(title)}`;
  const categoryLink = `/category/${slugify(category)}`;
  const timeLink = `/time/${slugify(time)}`;
  const cuisineLink = `/cuisine/${slugify(cuisine)}`;
  const difficultyLink = difficulty ? `/difficulty/${slugify(difficulty)}` : '';
  const servingsLink = servings ? `/servings/${slugify(servings.replace(/serves/i, '').trim())}` : '';
  
const handleLike = () => {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (!liked) {
    favorites.push({
      image,
      title,
      category,
      rating,
      time,
      cuisine,
      difficulty,
      servings,
      flag
    });
  } else {
    favorites = favorites.filter(item => item.title !== title);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
  setLiked(!liked);
};

  
  return (
    
    <div className='recipe-card' onClick={() => navigate(`/recipe/${slugify(title)}`)}>
      <div className='card-img'>
        <a href={link}>
          <img  src={ image?.startsWith('/uploads') ? getAssetUrl(image) : image }
            alt={title} className="recipe-img"
          />
        </a>
        <p className='rating'>â­ {rating}</p>
        <div className='rating-icons'>
          <span onClick={handleLike} className='icon'>
            <FaHeart color={liked ? 'red' : '#EBB22F'} />
          </span>
          <span onClick={() => setSaved(!saved)} className='icon'>
            <FaRegBookmark color={saved ? 'red' : '#EBB22F'} />
          </span>
        </div>
      </div>

      <a href={categoryLink}>
        <p className='category'>{category}</p>
      </a>

      <a href={link}>
        <h5 className='recipe-title'>{title}</h5>
      </a>

      <div className='info'>
        <li>
          <a className='time-icon' href={timeLink}>
            <FaClock /> {time}
          </a>
        </li>

        <li>
          <a className='cuisine' href={cuisineLink}>
            {flag && <img src={flag} alt={`${cuisine} flag`} className="flag-icon" />} {cuisine}
          </a>
        </li>

        {difficulty && (
          <li>
            <a className='difficulty-icon' href={difficultyLink}>
              <LuChefHat /> {difficulty}
            </a>
          </li>
        )}

        {servings && (
          <li>
            <a className='servings-icon' href={servingsLink}>
              <GiForkKnifeSpoon /> {servings}
            </a>
          </li>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
