import React from 'react'
import './Cuisines.css'
import Pageheader from '../../Resuable Components/Page Header/Pageheader';
import PopularTags from '../../Resuable Components/Populartags/Populatags';
import Pagecards from '../../Resuable Components/Page Cards/Pagecards';
import { Link } from 'react-router-dom';
import { recipecards } from '../All Recipies/AllRecipe';

const pageProps = {
  title: "Cuisines",
  description: "Explore a world of diverse cuisines from all corners of the globe. Discover unique recipes and rich food cultures that cater to every taste and preference!",
  subtitle: "Global flavors",
};

// ✅ Dynamically generate cuisine cards from recipecards
const pageCardsData = [
  ...new Map(
    recipecards
      .filter(r => r.cuisine && r.flag)
      .map(r => [r.cuisine.toLowerCase(), {
        image: r.flag,
        title: r.cuisine,
        recipeCount: recipecards.filter(c =>
          c.cuisine?.toLowerCase() === r.cuisine.toLowerCase()
        ).length,
        link: `/cuisine/${r.cuisine.toLowerCase()}`
      }])
  ).values()
].sort((a, b) => a.title.localeCompare(b.title));

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

const Cuisines = () => {
  return (
    <>
      <div className='page-header-sec'>
        <Pageheader pageheader={pageProps} />
      </div>
      <div className='page-card-section'>
        {pageCardsData.map((card, index) => (
          <Link key={index} to={card.link} style={{ textDecoration: 'none', color: 'inherit' }}>
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

export default Cuisines;