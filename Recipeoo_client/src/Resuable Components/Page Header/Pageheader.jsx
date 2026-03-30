import React from 'react';
import './Pageheader.css';

const Pageheader = ({ pageheader }) => {
  const { title, description, totalRecipes, subtitle } = pageheader;

  return (
    <div className="page-header">
      {subtitle && <p className="sub">{subtitle}</p>}

      <h1 className="page-title">{title}</h1>
      
      <p className="page-description">{description}</p>
      
      {totalRecipes !== undefined && (
        <button className="page-button">
          Total {totalRecipes} Recipes
        </button>
      )}
    </div>
  );
};

export default Pageheader;
