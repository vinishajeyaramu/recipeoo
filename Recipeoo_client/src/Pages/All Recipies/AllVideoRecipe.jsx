import React, { useEffect, useState } from 'react';
import './AllRecipes.css';
import VideoCard from '../../Resuable Components/Recipercards/Videorecipecard';
import Pageheader from '../../Resuable Components/Page Header/Pageheader';
import PopularTags from '../../Resuable Components/Populartags/Populatags';
import { recipecards as Videorecipecards } from '../All Recipies/AllRecipe';
import { LuPizza } from "react-icons/lu";
import { GiCakeSlice } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { LuWheat } from "react-icons/lu";
import { GiSteak } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { IoFishOutline } from "react-icons/io5";
import { TbSoupFilled } from "react-icons/tb";
import { LuVegan } from "react-icons/lu";
import { getApiUrl } from '../../config/api';

const pageProps = {
  title: "Video Recipes",
  description: "Watch and learn with our collection of video recipes. Step-by-step cooking guides for every skill level!",
  subtitle: "Cook Along With Us",
};

export const categories = [
  { title: "Appetizers", count: `${Videorecipecards.filter(r => r.category === 'Appetizers').length} recipes`, icon: <LuPizza />, link: "/category/appetizers" },
  { title: "Desserts", count: `${Videorecipecards.filter(r => r.category === 'Desserts').length} recipes`, icon: <GiCakeSlice />, link: "/category/desserts" },
  { title: "Drinks", count: `${Videorecipecards.filter(r => r.category === 'Drinks').length} recipes`, icon: <BiSolidDrink />, link: "/category/drinks" },
  { title: "Healthy", count: `${Videorecipecards.filter(r => r.category === 'Healthy').length} recipes`, icon: <LuWheat />, link: "/category/healthy" },
  { title: "Meat", count: `${Videorecipecards.filter(r => r.category === 'Meat').length} recipes`, icon: <GiSteak />, link: "/category/meat" },
  { title: "Salads", count: `${Videorecipecards.filter(r => r.category === 'Salads').length} recipes`, icon: <GiFruitBowl />, link: "/category/salads" },
  { title: "Seafood", count: `${Videorecipecards.filter(r => r.category === 'Seafood').length} recipes`, icon: <IoFishOutline />, link: "/category/seafood" },
  { title: "Soups", count: `${Videorecipecards.filter(r => r.category === 'Soups').length} recipes`, icon: <TbSoupFilled />, link: "/category/soups" },
  { title: "Vegan", count: `${Videorecipecards.filter(r => r.category === 'Vegan').length} recipes`, icon: <LuVegan />, link: "/category/vegan" },
];

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
];

const RECIPES_PER_PAGE = 16;

const AllVideoRecipe = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dbVideoCards, setDbVideoCards] = useState([]);

  useEffect(() => {
    fetch(getApiUrl('/api/video-cards'))
      .then((res) => res.json())
      .then((data) => setDbVideoCards(Array.isArray(data) ? data : []))
      .catch(() => setDbVideoCards([]));
  }, []);

  const mergedVideoCards = [
    ...Videorecipecards,
    ...dbVideoCards.filter(
      (item) =>
        !Videorecipecards.some(
          (staticCard) => staticCard.title?.toLowerCase() === item.title?.toLowerCase()
        )
    ),
  ];

  const totalPages = Math.ceil(mergedVideoCards.length / RECIPES_PER_PAGE);
  const startIdx = (currentPage - 1) * RECIPES_PER_PAGE;
  const paginatedRecipes = mergedVideoCards.slice(startIdx, startIdx + RECIPES_PER_PAGE);

  const changePage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className='page-header-sec'>
        <Pageheader pageheader={pageProps} />
      </div>
      <div className="category-sec">
        {categories.map((item, i) => (
          <a href={item.link} key={i}>
            <div className="category-card">
              <div className="category-icon">{item.icon}</div>
              <div className='category-cont'>
                <h5 className="category-title">{item.title}</h5>
                <p className="category-count">{item.count}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className='recipes-container'>
        {paginatedRecipes.map((recipe, i) => (
          <VideoCard key={recipe.id || i} {...recipe} />
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

export { Videorecipecards };
export default AllVideoRecipe;
