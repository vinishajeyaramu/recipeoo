import React, { useState, useRef, useEffect ,useMemo} from 'react';
import { useParams } from 'react-router-dom';
import { recipecards } from '../All Recipies/AllRecipe';
import Pageheader from '../../Resuable Components/Page Header/Pageheader';
import RecipeCard from '../../Resuable Components/Recipercards/Recipecards';
import PopularTags from '../../Resuable Components/Populartags/Populatags';

// Maps URL slug → exact category name used in recipecards
const categoryMap = {
  'appetizers': 'Appetizers',
  'bbq': 'BBQ & Grilling',
  'bread': 'Breads',
  'breads': 'Breads',
  'breakfast': 'Breakfasts',
  'breakfasts': 'Breakfasts',
  'desserts': 'Desserts',
  'drinks': 'Drinks',
  'gluten-free': 'Gluten-Free',
  'healthy': 'Healthy',
  'instant-pot': 'Instant Pot',
  'meat': 'Meat',
  'pasta': 'Pasta',
  'salads': 'Salads',
  'seafood': 'Seafood',
  'side-dishes': 'Side Dishes',
  'snacks': 'Snacks',
  'soups': 'Soups',
  'sugar-free': 'Sugar-Free',
  'vegan': 'Vegan',
  'vegetarian': 'Vegetarian',
  'main-dishes': 'Main Dishes',   // ← add this
  'other-recipes': 'Other Recipes',
};

const categoryDescriptions = {
  'appetizers': 'Start your meal with these delicious appetizers.',
  'bbq': 'Fire up the grill with these smoky BBQ recipes.',
  'bread': 'Fresh baked breads and rolls for every occasion.',
  'breads': 'Fresh baked breads and rolls for every occasion.',
  'breakfast': 'Kickstart your morning with these breakfast recipes.',
  'breakfasts': 'Kickstart your morning with these breakfast recipes.',
  'desserts': 'Indulge in sweet treats and desserts.',
  'drinks': 'Refresh yourself with our drink recipes.',
  'gluten-free': 'Delicious gluten-free recipes for every meal.',
  'healthy': 'Nutritious and healthy recipes for every lifestyle.',
  'instant-pot': 'Quick and easy Instant Pot recipes.',
  'meat': 'Hearty meat dishes for meat lovers.',
  'pasta': 'Comforting pasta recipes for every occasion.',
  'salads': 'Fresh and vibrant salad recipes.',
  'seafood': 'Delightful seafood recipes from the ocean.',
  'side-dishes': 'Perfect side dishes to complement any meal.',
  'snacks': 'Quick and tasty snack recipes.',
  'soups': 'Warm up with comforting soup recipes.',
  'sugar-free': 'Guilt-free sugar-free recipes.',
  'vegan': 'Plant-based vegan recipes for everyone.',
  'vegetarian': 'Delicious vegetarian recipes for every taste.',
  'main-dishes': 'Explore hearty and delicious main dish recipes.',
  'other-recipes': 'Explore a variety of other delicious recipes.',
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

const RECIPES_PER_PAGE = 16;

const CategoryDetail = () => {
  const { categoryName } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const topRef = useRef(null);

  const exactCategory = categoryMap[categoryName.toLowerCase()];
  
  const filtered = useMemo(() => {
    const mainDishCategories = ['Meat', 'Side Dishes', 'Pasta', 'BBQ & Grilling'];
    const landingPageCategories = ['Pasta', 'Salads', 'Meat', 'Breakfasts', 'Desserts', 'Side Dishes', 'BBQ & Grilling', 'Gluten-Free', 'Drinks', 'Vegetarian'];

    if (categoryName.toLowerCase() === 'main-dishes') {
      return recipecards.filter((r) => mainDishCategories.includes(r.category));
    }
    if (categoryName.toLowerCase() === 'other-recipes') {
      const pool = recipecards.filter((r) => !landingPageCategories.includes(r.category));
      const randomCount = Math.floor(Math.random() * (Math.min(64, pool.length) - 13 + 1)) + 13;
      return [...pool].sort(() => Math.random() - 0.5).slice(0, randomCount);
    }
    return recipecards.filter(
      (card) => card.category && card.category.toLowerCase() === (exactCategory || categoryName).toLowerCase()
    );
  }, [categoryName, exactCategory]);

  useEffect(() => {
    setCurrentPage(1);
  }, [categoryName]);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentPage]);

  const totalPages = Math.ceil(filtered.length / RECIPES_PER_PAGE);
  const startIdx = (currentPage - 1) * RECIPES_PER_PAGE;
  const paginatedRecipes = filtered.slice(startIdx, startIdx + RECIPES_PER_PAGE);

  const changePage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const pageProps = {
    title: exactCategory || categoryName.charAt(0).toUpperCase() + categoryName.slice(1),
    description: categoryDescriptions[categoryName.toLowerCase()] || 'Explore delicious recipes from this category.',
    totalRecipes: filtered.length,
  };

  return (
    <>
      <div ref={topRef} className='page-header-sec'>
        <Pageheader pageheader={pageProps} />
      </div>

      {filtered.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem' }}>
          <p>No recipes found for this category.</p>
        </div>
      ) : (
        <>
          <div className='recipes-container'>
            {paginatedRecipes.map((recipe, i) => (
              <RecipeCard key={recipe.id || i} {...recipe} />
            ))}
          </div>

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
        </>
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

export default CategoryDetail;
