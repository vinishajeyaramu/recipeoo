import React, { useState, useMemo } from 'react';
import { recipecards } from '../All Recipies/AllRecipe';
import RecipeCard from '../../Resuable Components/Recipercards/Recipecards';
import PopularTags from '../../Resuable Components/Populartags/Populatags';
import './Overallfilter.css';

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

const RECIPES_PER_PAGE = 16;

const Overallfilter = () => {
  const [filters, setFilters] = useState({
    category: '',
    cuisine: '',
    servings: '',
    difficulty: '',
    time: '',
  });
  const [currentPage, setCurrentPage] = useState(1);

  // Dynamically get unique values from recipecards
  const categories = [...new Set(recipecards.map(r => r.category).filter(Boolean))].sort();
  const cuisines = [...new Set(recipecards.map(r => r.cuisine).filter(Boolean))].sort();
  const servings = [...new Set(recipecards.map(r => r.servings).filter(Boolean))].sort();
  const difficulties = [...new Set(recipecards.map(r => r.difficulty).filter(Boolean))].sort();
  const times = [...new Set(recipecards.map(r => r.time).filter(Boolean))].sort((a, b) => {
    return parseInt(a) - parseInt(b);
  });

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
    setCurrentPage(1);
  };

  const handleReset = () => {
    setFilters({ category: '', cuisine: '', servings: '', difficulty: '', time: '' });
    setCurrentPage(1);
  };

  const filtered = useMemo(() => {
    return recipecards.filter(r => {
      if (filters.category && r.category !== filters.category) return false;
      if (filters.cuisine && r.cuisine !== filters.cuisine) return false;
      if (filters.servings && r.servings !== filters.servings) return false;
      if (filters.difficulty && r.difficulty !== filters.difficulty) return false;
      if (filters.time && r.time !== filters.time) return false;
      return true;
    });
  }, [filters]);

  const totalPages = Math.ceil(filtered.length / RECIPES_PER_PAGE);
  const startIdx = (currentPage - 1) * RECIPES_PER_PAGE;
  const paginatedRecipes = filtered.slice(startIdx, startIdx + RECIPES_PER_PAGE);

  const changePage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const isAnyFilterActive = Object.values(filters).some(v => v !== '');

  return (
    <>
      {/* <div className='page-header-sec'>
        <Pageheader pageheader={pageProps} />
      </div> */}

      {/* Filter Bar */}
      <div className='filter-bar'>
        <div className='filter-dropdowns'>
          <select
            value={filters.category}
            onChange={e => handleFilterChange('category', e.target.value)}
            className='filter-select'
          >
            <option value=''>Categories</option>
            {categories.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={filters.cuisine}
            onChange={e => handleFilterChange('cuisine', e.target.value)}
            className='filter-select'
          >
            <option value=''>Cuisines</option>
            {cuisines.map((c, i) => (
              <option key={i} value={c}>{c}</option>
            ))}
          </select>

          <select
            value={filters.servings}
            onChange={e => handleFilterChange('servings', e.target.value)}
            className='filter-select'
          >
            <option value=''>Servings</option>
            {servings.map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>

          <select
            value={filters.difficulty}
            onChange={e => handleFilterChange('difficulty', e.target.value)}
            className='filter-select'
          >
            <option value=''>Difficulties</option>
            {difficulties.map((d, i) => (
              <option key={i} value={d}>{d}</option>
            ))}
          </select>

          <select
            value={filters.time}
            onChange={e => handleFilterChange('time', e.target.value)}
            className='filter-select'
          >
            <option value=''>Cooking Times</option>
            {times.map((t, i) => (
              <option key={i} value={t}>{t}</option>
            ))}
          </select>

          {isAnyFilterActive && (
            <button className='filter-reset-btn' onClick={handleReset}>
              Reset Filters ✕
            </button>
          )}
        </div>

        {/* <div className='filter-results-count'>
          {filtered.length} {filtered.length === 1 ? 'Recipe' : 'Recipes'} Found
        </div> */}
      </div>

      {/* Recipe Cards */}
      {filtered.length === 0 ? (
        <div className='filter-no-results'>
          <h3>No recipes found for selected filters.</h3>
          <button onClick={handleReset} className='filter-reset-btn'>Reset Filters</button>
        </div>
      ) : (
        <div className='recipes-container'>
          {paginatedRecipes.map((recipe, i) => (
            <RecipeCard key={recipe.id || i} {...recipe} />
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className='pagination'>
          {currentPage > 1 && (
            <button onClick={() => changePage(currentPage - 1)} className="pagination-btn">
              ← Previous
            </button>
          )}
          {[...Array(totalPages)].map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => changePage(pageNum)}
                className={`pagination-btn ${currentPage === pageNum ? 'active' : ''}`}
              >
                {pageNum}
              </button>
            );
          })}
          {currentPage < totalPages && (
            <button onClick={() => changePage(currentPage + 1)} className="pagination-btn">
              Next →
            </button>
          )}
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

export default Overallfilter
