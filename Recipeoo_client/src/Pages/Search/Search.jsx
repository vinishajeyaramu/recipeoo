import React from 'react';
import './Search.css';
import { useLocation } from 'react-router-dom';
import { recipecards } from '../All Recipies/AllRecipe';
import RecipeCard from '../../Resuable Components/Recipercards/Recipecards';
import Pageheader from '../../Resuable Components/Page Header/Pageheader';
import PopularTags from '../../Resuable Components/Populartags/Populatags';
import {
  parseIngredientQuery,
  searchRecipesByIngredients,
  searchRecipesByName,
} from '../../utils/ingredientSearch';
import { useEffect, useState } from 'react';
import { getApiUrl } from '../../config/api';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const SearchResults = () => {
  const params = useQuery();
  const query = params.get('q') || '';
  const mode = params.get('mode') || 'recipe';
  const ingredientTerms = parseIngredientQuery(query);
  const results =
    mode === 'ingredients'
      ? searchRecipesByIngredients(recipecards, query)
      : searchRecipesByName(recipecards, query);
  const [googleResults, setGoogleResults] = useState([]);
  const [googleMessage, setGoogleMessage] = useState('');

  useEffect(() => {
    if (mode !== 'ingredients' || ingredientTerms.length === 0) {
      setGoogleResults([]);
      setGoogleMessage('');
      return;
    }

    const controller = new AbortController();

    const loadGoogleResults = async () => {
      try {
        const response = await fetch(
          getApiUrl(`/api/google-recipes/search?ingredients=${encodeURIComponent(query)}`),
          { signal: controller.signal }
        );
        const data = await response.json();

        if (!response.ok) {
          setGoogleResults([]);
          setGoogleMessage(data.message || 'Google recipe ideas are unavailable right now.');
          return;
        }

        setGoogleResults(Array.isArray(data) ? data : []);
        setGoogleMessage('');
      } catch (error) {
        if (error.name !== 'AbortError') {
          setGoogleResults([]);
          setGoogleMessage('Google recipe ideas are unavailable right now.');
        }
      }
    };

    loadGoogleResults();

    return () => controller.abort();
  }, [mode, query, ingredientTerms.length]);

  const pageProps = {
    title: mode === 'ingredients' ? 'Cook With Ingredients' : 'Search Results',
    description:
      mode === 'ingredients'
        ? 'Recipeoo matched your available ingredients with the closest recipes in the collection.'
        : 'Browse the recipes that match your search.',
  };

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

  return (
    <>
      <Pageheader pageheader={pageProps} />
      <div className="recipes-container">
        {results.length === 0 ? (
          <p>
            {mode === 'ingredients'
              ? `No recipe match found for these ingredients: ${ingredientTerms.join(', ')}`
              : `No recipes found for "${query}"`}
          </p>
        ) : (
          results.map((recipe) => (
            <RecipeCard key={recipe.id} {...recipe} />
          ))
        )}
      </div>
      {mode === 'ingredients' && googleResults.length > 0 && (
        <div className="recipes-section">
          <div className="section-header">
            <h2>Google Recipe Ideas</h2>
            <p>Extra external recipe ideas based on your ingredient list.</p>
          </div>
          <div className="google-search-results">
            {googleResults.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="google-search-card"
              >
                <h3>{item.title}</h3>
                <p>{item.snippet}</p>
                <span>{item.source}</span>
              </a>
            ))}
          </div>
        </div>
      )}
      {mode === 'ingredients' && googleMessage && (
        <div className="recipes-section">
          <p>{googleMessage}</p>
        </div>
      )}
      <div className="tags-sec">
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

export default SearchResults;
