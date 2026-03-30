import React from 'react';
import './Pagecards.css';

const Pagecards = ({ pagecards }) => {
  const { icon, image, title, recipeCount, link } = pagecards;

  return (
    <a href={link} className="page-card">
      <div className="card-media">
        {image ? (
          <img src={image} alt={title} className="card-image" />
        ) : (
          <div className="card-icon">{icon}</div>
        )}
      </div>
      <h4 className="card-title">{title}</h4>
      <p className="card-count">{recipeCount} Recipes</p>
    </a>
  );
};

export default Pagecards;
