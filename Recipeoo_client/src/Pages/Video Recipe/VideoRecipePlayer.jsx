import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaClock, FaPlayCircle } from 'react-icons/fa';
import { recipecards } from '../All Recipies/AllRecipe';
import './VideoRecipePlayer.css';

const slugify = (text) =>
  text?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const fallbackVideoRecipe =
  recipecards.find((item) => item.videoUrl) || recipecards[0] || {};

const VideoRecipePlayer = () => {
  const { title } = useParams();

  const recipe = useMemo(
    () => recipecards.find((item) => slugify(item.title) === title) || fallbackVideoRecipe,
    [title]
  );

  return (
    <div className="video-player-page">
      <div className="video-player-shell">
        <div className="video-player-copy">
          <p className="video-player-category">{recipe.category || 'Video Recipe'}</p>
          <h1>{recipe.title || 'Recipe Video'}</h1>
          <div className="video-player-meta">
            <span>
              <FaClock /> {recipe.time || 'Quick Watch'}
            </span>
            {recipe.cuisine ? <span>{recipe.cuisine}</span> : null}
            {recipe.difficulty ? <span>{recipe.difficulty}</span> : null}
          </div>
          <p className="video-player-text">
            Press play and follow the full cooking process through the video only.
          </p>
        </div>

        <div className="video-player-frame">
          <iframe
            src={recipe.videoUrl || 'https://www.youtube.com/embed/D0X0JCk9H7A?si=ImoUMcwoCKJGZHV3'}
            title={recipe.title || 'Recipe video'}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="video-player-footer">
          <Link to="/video-recipes" className="video-player-back">
            <FaPlayCircle />
            Back to Video Recipes
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoRecipePlayer;
