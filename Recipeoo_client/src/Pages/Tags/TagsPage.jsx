import React, { useState, useRef, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { recipecards } from '../All Recipies/AllRecipe';
import RecipeCard from '../../Resuable Components/Recipercards/Recipecards';
import Pageheader from '../../Resuable Components/Page Header/Pageheader';

const RECIPES_PER_PAGE = 16;

const TagsPage = () => {
  const { tagname } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const topRef = useRef(null);

  const tagLabel = tagname.replace(/-/g, ' ').toUpperCase();

  const filteredRecipes = recipecards.filter(card =>
    card.tags && (
      card.tags.map(t => t.toUpperCase()).includes(tagLabel) ||
      card.tags.map(t => t.toUpperCase()).includes(tagname.toUpperCase())
    )
  );

  // Reset to page 1 when tag changes
  useEffect(() => {
    setCurrentPage(1);
  }, [tagname]);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  const totalPages = Math.ceil(filteredRecipes.length / RECIPES_PER_PAGE);
  const startIdx = (currentPage - 1) * RECIPES_PER_PAGE;
  const paginatedRecipes = filteredRecipes.slice(startIdx, startIdx + RECIPES_PER_PAGE);

  const changePage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const pageProps = {
    title: tagLabel,
    description: `Explore all recipes tagged with "${tagLabel}"`,
    totalRecipes: filteredRecipes.length,
  };

  return (
    <>
      <div ref={topRef} className='page-header-sec'>
        <Pageheader pageheader={pageProps} />
      </div>

      {filteredRecipes.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <h3>No recipes found for "{tagLabel}"</h3>
        </div>
      ) : (
        <>
          <div className='recipes-container'>
            {paginatedRecipes.map((recipe, i) => (
              <RecipeCard key={recipe.id || i} {...recipe} />
            ))}
          </div>

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
        </>
      )}

      
    </>
  );
};

export default TagsPage;