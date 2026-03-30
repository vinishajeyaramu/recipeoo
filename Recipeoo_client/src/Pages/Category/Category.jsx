import React from 'react'
import './Category.css'
import Pageheader from '../../Resuable Components/Page Header/Pageheader';
import PopularTags from '../../Resuable Components/Populartags/Populatags';
import Pagecards from '../../Resuable Components/Page Cards/Pagecards';
import { LuPizza,LuSalad,LuSoup,LuSandwich,LuCroissant,LuCandyOff,LuEggFried,LuVegan,LuLeafyGreen ,LuCakeSlice,LuWheatOff,LuWheat,LuCookingPot, LuBeef } from "react-icons/lu";
import { TbMeat } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { FaFish } from 'react-icons/fa';
import { BiDrink } from "react-icons/bi";
import { GiChickenLeg } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { recipecards } from '../All Recipies/AllRecipe';

const pageProps = {
  title: "Categories",
  description: "Explore a wide range of recipes in each category, from appetizers to desserts, catering to all tastes and dietary needs. Find your next meal inspiration today!",
  subtitle: "Explore Now",
};

const slugToCategory = {
  'appetizers': 'Appetizers',
  'bbq': 'BBQ & Grilling',
  'breads': 'Breads',
  'breakfast': 'Breakfasts',
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
};

const pageCardsData = [
  { icon: <LuPizza />, title: "Appetizers", slug: "appetizers" },
  { icon: <TbMeat />, title: "BBQ & Grilling", slug: "bbq" },
  { icon: <LuCroissant />, title: "Breads", slug: "breads" },
  { icon: <LuEggFried />, title: "Breakfasts", slug: "breakfast" },
  { icon: <LuCakeSlice />, title: "Desserts", slug: "desserts" },
  { icon: <BiDrink />, title: "Drinks", slug: "drinks" },
  { icon: <LuWheatOff />, title: "Gluten-Free", slug: "gluten-free" },
  { icon: <LuWheat />, title: "Healthy", slug: "healthy" },
  { icon: <LuCookingPot />, title: "Instant Pot", slug: "instant-pot" },
  { icon: <LuBeef />, title: "Meat", slug: "meat" },
  { icon: <CiBowlNoodles />, title: "Pasta", slug: "pasta" },
  { icon: <LuSalad />, title: "Salads", slug: "salads" },
  { icon: <FaFish />, title: "Seafood", slug: "seafood" },
  { icon: <GiChickenLeg />, title: "Side Dishes", slug: "side-dishes" },
  { icon: <LuSandwich />, title: "Snacks", slug: "snacks" },
  { icon: <LuSoup />, title: "Soups", slug: "soups" },
  { icon: <LuCandyOff />, title: "Sugar-Free", slug: "sugar-free" },
  { icon: <LuVegan />, title: "Vegan", slug: "vegan" },
  { icon: <LuLeafyGreen />, title: "Vegetarian", slug: "vegetarian" },
].map(card => ({
  ...card,
  recipeCount: recipecards.filter(r =>
    r.category && r.category === (slugToCategory[card.slug] || card.title)
  ).length,
  link: `/category/${card.slug}`
}));

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

const Category = () => {
  return (
    <>
      <div className='page-header-sec'>
        <Pageheader pageheader={pageProps} />
      </div>
      <div className='page-card-section'>
        {pageCardsData.map((card, index) => (
          <Link key={index} to={`/category/${card.slug}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Pagecards pagecards={card} />
          </Link>
        ))}
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

export default Category;