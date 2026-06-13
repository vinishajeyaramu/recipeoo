import React, { useEffect, useState } from 'react';
import './Recipecards.css';
import { FaHeart, FaRegBookmark, FaClock,FaStar } from 'react-icons/fa';
import { LuChefHat } from "react-icons/lu";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { getAssetUrl } from '../../config/api';
import { animateToWishlist } from '../../utils/wishlistFly';
import { useDispatch, useSelector } from 'react-redux';
import { addToDownloads, removeFromDownloads, selectCurrentUserDownloads } from '../../Redux/Downloadslice';
import { getStoredFavorites, requireSignedInUser, saveStoredFavorites, showAppMessage } from '../../utils/collectionAccess';

// Utility function to convert string into URL-friendly slug
const slugify = (text) =>
  text?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const RecipeCard = ({
  id,
  _id,
  image,
  rating,
  category,
  title,
  time,
  cuisine,
  difficulty,
  servings,
  flag,
  type,
  itemType,
  showActions = true,
  ...recipeData
}) => {
  const [liked, setLiked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const downloads = useSelector(selectCurrentUserDownloads);

  const link = `/recipe/${slugify(title)}`;
  const categoryLink = `/category/${slugify(category)}`;
  const timeLink = `/time/${slugify(time)}`;
  const cuisineLink = `/cuisine/${slugify(cuisine)}`;
  const difficultyLink = difficulty ? `/difficulty/${slugify(difficulty)}` : '';
  const servingsLink = servings ? `/servings/${slugify(servings.replace(/serves/i, '').trim())}` : '';

  useEffect(() => {
    const favorites = getStoredFavorites();
    setLiked(favorites.some((item) => item.title === title));
  }, [title]);

  const recipeId = id || _id || title;
  const isSaved = downloads.some(
    (item) => (item.id || item._id || item.title) === recipeId
  );

  const recipePayload = {
    id,
    _id,
    image,
    rating,
    category,
    title,
    time,
    cuisine,
    difficulty,
    servings,
    flag,
    ...recipeData,
    itemType: itemType || type || 'recipe',
  };
  
const handleLike = (event) => {
  event.preventDefault();
  event.stopPropagation();
  if (!requireSignedInUser()) {
    return;
  }

  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites = getStoredFavorites();
  const shouldAddToWishlist = !liked;

  if (shouldAddToWishlist) {
    favorites.push(recipePayload);
  } else {
    favorites = favorites.filter(item => item.title !== title);
  }

  saveStoredFavorites(favorites);
  setLiked(shouldAddToWishlist);

  if (shouldAddToWishlist) {
    animateToWishlist(event.currentTarget);
  }
};

const handleDownloadToggle = (event) => {
  event.preventDefault();
  event.stopPropagation();

  if (!requireSignedInUser()) {
    return;
  }

  if (recipePayload.itemType === 'video') {
    showAppMessage('Video recipes cannot be added to downloads.');
    return;
  }

  if (isSaved) {
    dispatch(removeFromDownloads(recipeId));
    showAppMessage('Recipe removed from downloads.');
    return;
  }

  dispatch(addToDownloads(recipePayload));
  showAppMessage('Recipe added to downloads.');
};

  
  return (
    
    <div className='recipe-card' onClick={() => navigate(`/recipe/${slugify(title)}`)}>
      <div className='card-img'>
        <a href={link}>
          <img  src={ image?.startsWith('/uploads') ? getAssetUrl(image) : image }
            alt={title} className="recipe-img"
          />
        </a>
        <p className='rating'><FaStar className='star-icon'/>{rating}</p>
        {showActions ? (
          <div className='rating-icons'>
            <span onClick={handleLike} className='icon'>
              <FaHeart color={liked ? 'red' : '#EBB22F'} />
            </span>
            <span onClick={handleDownloadToggle} className='icon'>
              <FaRegBookmark color={isSaved ? 'red' : '#EBB22F'} />
            </span>
          </div>
        ) : null}
      </div>

      <a href={categoryLink}>
        <p className='category'>{category}</p>
      </a>

      <a href={link}>
        <h5 className='recipe-title'>{title}</h5>
      </a>

      <div className='info'>
        <li>
          <a className='cuisine' href={cuisineLink}>
            {flag && <img src={flag} alt={`${cuisine} flag`} className="flag-icon" />} {cuisine}
          </a>
        </li>
        <li>
          <a className='time-icon' href={timeLink}>
            <FaClock /> {time}
          </a>
        </li>
        {servings && (
          <li>
            <a className='servings-icon' href={servingsLink}>
              <GiForkKnifeSpoon /> {servings}
            </a>
          </li>
        )}
        {difficulty && (
          <li>
            <a className='difficulty-icon' href={difficultyLink}>
              <LuChefHat /> {difficulty}
            </a>
          </li>
        )}
      </div>
    </div>
  );
};

export default RecipeCard;
