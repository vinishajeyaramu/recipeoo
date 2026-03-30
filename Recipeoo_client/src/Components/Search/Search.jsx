import React, { useState, useEffect } from 'react';
import './Search.css';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  parseIngredientQuery,
  searchRecipesByIngredients,
  searchRecipesByName,
  slugify,
} from '../../utils/ingredientSearch';
import { getApiUrl } from '../../config/api';

const SearchPopup = ({ recipes }) => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState('recipe');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [googleResults, setGoogleResults] = useState([]);
  const [googleMessage, setGoogleMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setQuery('');
    setResults([]);
    setGoogleResults([]);
    setGoogleMessage('');
  }, [location.pathname]);

  useEffect(() => {
    const ingredientTokens = parseIngredientQuery(query);

    if (mode !== 'ingredients' || ingredientTokens.length === 0) {
      setGoogleResults([]);
      setGoogleMessage('');
      return;
    }

    const controller = new AbortController();

    const fetchGoogleResults = async () => {
      try {
        const response = await fetch(
          getApiUrl(`/api/google-recipes/search?ingredients=${encodeURIComponent(query)}`),
          { signal: controller.signal }
        );
        const data = await response.json();

        if (!response.ok) {
          setGoogleResults([]);
          setGoogleMessage(data.message || 'Google recipe results are unavailable right now.');
          return;
        }

        setGoogleResults(Array.isArray(data) ? data : []);
        setGoogleMessage('');
      } catch (error) {
        if (error.name !== 'AbortError') {
          setGoogleResults([]);
          setGoogleMessage('Google recipe results are unavailable right now.');
        }
      }
    };

    fetchGoogleResults();

    return () => controller.abort();
  }, [mode, query]);

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (mode === 'recipe') {
      setResults(searchRecipesByName(recipes, value).slice(0, 6));
      return;
    }

    if (parseIngredientQuery(value).length === 0) {
      setResults([]);
      setGoogleResults([]);
      return;
    }

    setResults(searchRecipesByIngredients(recipes, value).slice(0, 6));
  };

  const handleModeChange = (nextMode) => {
    setMode(nextMode);
    setQuery('');
    setResults([]);
    setGoogleResults([]);
    setGoogleMessage('');
  };

  const handleSubmit = () => {
    if (!query.trim()) return;

    navigate(`/search-results?q=${encodeURIComponent(query)}&mode=${mode}`);
    setOpen(false);
    setQuery('');
    setResults([]);
  };

  const placeholder =
    mode === 'recipe'
      ? 'Search recipes by name or ingredient...'
      : 'Enter ingredients like tomato, onion, garlic, egg';

  return (
    <>
      <FaSearch className="search-icon" onClick={() => setOpen(true)} style={{ cursor: 'pointer' }} />
      {open && (
        <div className="search-popup-overlay" onClick={() => setOpen(false)}>
          <div className="search-popup" onClick={(event) => event.stopPropagation()}>
            <div className="search-mode-switch">
              <button
                className={mode === 'recipe' ? 'active' : ''}
                onClick={() => handleModeChange('recipe')}
                type="button"
              >
                Search Recipes
              </button>
              <button
                className={mode === 'ingredients' ? 'active' : ''}
                onClick={() => handleModeChange('ingredients')}
                type="button"
              >
                Cook With Ingredients
              </button>
            </div>

            <div className="search-popup-header">
              <input
                type="text"
                placeholder={placeholder}
                value={query}
                onChange={handleSearch}
                onKeyDown={(event) => {
                  if (event.key === 'Enter') {
                    handleSubmit();
                  }
                }}
                autoFocus
              />
              <button className="search-submit-btn" onClick={handleSubmit} type="button">
                Find
              </button>
              <FaTimes className="close-icon" onClick={() => setOpen(false)} />
            </div>

            <div className="search-helper-text">
              {mode === 'recipe'
                ? 'Search by recipe title or a single ingredient.'
                : 'Add 2 to 6 ingredients separated by commas and Recipeoo will suggest the closest recipes.'}
            </div>

            <div className="search-popup-results">
              {mode === 'recipe' && query && query.trim().length < 3 && (
                <div className="no-results">Type at least 3 characters to search...</div>
              )}

              {mode === 'ingredients' && query && parseIngredientQuery(query).length === 0 && (
                <div className="no-results">Add ingredients separated with commas.</div>
              )}

              {query &&
                ((mode === 'recipe' && query.trim().length >= 3) ||
                  (mode === 'ingredients' && parseIngredientQuery(query).length > 0)) &&
                results.length === 0 && (
                  <div className="no-results">
                    {mode === 'recipe'
                      ? `No recipes found for "${query}"`
                      : `No close ingredient match found for "${query}"`}
                  </div>
                )}

              {results.map((recipe) => (
                <div
                  key={recipe.id}
                  className="search-result-item"
                  onClick={() => navigate(`/recipe/${slugify(recipe.title)}`)}
                  style={{ cursor: 'pointer' }}
                >
                  <strong>{recipe.title}</strong>
                  {mode === 'ingredients' ? (
                    <div className="ingredients">
                      <small>
                        Match: {recipe.matchCount}/{recipe.totalRequested} ingredients
                        {recipe.matchedIngredients?.length
                          ? ` | ${recipe.matchedIngredients.join(', ')}`
                          : ''}
                      </small>
                    </div>
                  ) : (
                    <div className="ingredients">
                      <small>
                        Ingredients: {recipe.ingredients?.slice(0, 4).map((item) => item.name).join(', ')}
                      </small>
                    </div>
                  )}
                </div>
              ))}

              {mode === 'ingredients' && googleResults.length > 0 && (
                <div className="search-result-group">
                  <h4>Google Recipe Ideas</h4>
                  {googleResults.map((item) => (
                    <a
                      key={item.id}
                      className="search-result-item google-result-item"
                      href={item.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <strong>{item.title}</strong>
                      <div className="ingredients">
                        <small>{item.source}</small>
                      </div>
                      <div className="google-snippet">{item.snippet}</div>
                    </a>
                  ))}
                </div>
              )}

              {mode === 'ingredients' && googleMessage && (
                <div className="no-results">{googleMessage}</div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchPopup;
