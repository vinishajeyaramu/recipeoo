import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../../Resuable Components/Recipercards/Recipecards';
import Pageheader from '../../Resuable Components/Page Header/Pageheader';
import PopularTags from '../../Resuable Components/Populartags/Populatags';
import { recipecards } from '../All Recipies/AllRecipe';

const tagData = [
  { name: 'COMFORT FOOD', link: '/tags/comfort-food' },
  { name: 'DAIRY-FREE', link: '/tags/dairy-free' },
  { name: 'DESSERTS', link: '/tags/desserts' },
  { name: 'GLUTEN-FREE', link: '/tags/gluten-free' },
  { name: 'HEALTHY', link: '/tags/healthy' },
  { name: 'HIGH-PROTEIN', link: '/tags/high-protein' },
  { name: 'HOLIDAY', link: '/tags/holiday' },
  { name: 'KID-FRIENDLY', link: '/tags/kid-friendly' },
];

const tagData2 = [
  { name: 'LOW-CARB', link: '/tags/low-carb' },
  { name: 'MEAL PREP', link: '/tags/meal-prep' },
  { name: 'MEAT', link: '/tags/meat' },
  { name: 'ONE-POT', link: '/tags/one-pot' },
  { name: 'QUICK MEALS', link: '/tags/quick-meals' },
  { name: 'SPICY', link: '/tags/spicy' },
  { name: 'VEGETARIAN', link: '/tags/vegetarian' },
  { name: 'VIDEO RECIPE', link: '/tags/video-recipe' },
];

const RecipesByLetter = () => {
  const { letter } = useParams();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const match = recipecards.filter(recipe => {
      const firstChar = recipe.title.charAt(0).toLowerCase();
      if (letter === '0-9') return /\d/.test(firstChar);
      if (letter === '#') return !/[a-zA-Z0-9]/.test(firstChar);
      return firstChar === letter.toLowerCase();
    });
    setFiltered(match);
  }, [letter]);

  const pageProps = {
    title: `Recipes starting with "${letter.toUpperCase()}"`,
    description: `Browse all recipes starting with the letter ${letter.toUpperCase()}.`,
    totalRecipes: filtered.length,
  };

  return (
    <>
      <div className='page-header-sec'>
        <Pageheader pageheader={pageProps} />
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <h3>No recipes found starting with "{letter.toUpperCase()}"</h3>
        </div>
      ) : (
        <div className='recipes-container'>
          {filtered.map((recipe, idx) => (
            <RecipeCard key={recipe.id || idx} {...recipe} />
          ))}
        </div>
      )}

      <div className='tags-sec'>
        <PopularTags
          tags={tagData}
          tags2={tagData2}
          heading="Explore Popular Tags"
          subheading="From quick meals to healthy dishes, our popular tags make it easy to explore delicious options with one click."
        />
      </div>
    </>
  );
};

export default RecipesByLetter;