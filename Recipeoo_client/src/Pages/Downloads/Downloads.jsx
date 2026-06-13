import React from 'react';
import { useSelector } from 'react-redux';
import RecipeCard from '../../Resuable Components/Recipercards/Recipecards';
import './Downloads.css';
import { selectCurrentUserDownloads } from '../../Redux/Downloadslice';
import Pageheader from '../../Resuable Components/Page Header/Pageheader';
import PopularTags from '../../Resuable Components/Populartags/Populatags';
import { isSignedInUser, isVideoItem } from '../../utils/collectionAccess';
const pageProps = {
  title: 'Downloads',
  description:
    "Easily access the recipes you've saved for later. Whether you're planning a feast or cooking on the go, all your favorite downloads are just a click away. Start exploring and enjoy a seamless cooking experience with Recipeoo.",
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

const Downloads = () => {
  const downloads = useSelector(selectCurrentUserDownloads);
  const signedIn = isSignedInUser();
  const recipeDownloads = signedIn
    ? downloads.filter((recipe) => !isVideoItem(recipe))
    : [];

  return (
    <>
      <div className="page-header-sec">
        <Pageheader pageheader={pageProps} />
      </div>
      <div className="downloads-container">
        {recipeDownloads.length === 0 ? (
          <p>{signedIn ? 'Nothing added to downloads yet.' : 'Please sign in to view your downloaded recipes.'}</p>
        ) : (
          <div className="recipes-container">
            {recipeDownloads.map((recipe, index) => {
              const recipeKey = recipe._id || recipe.id || `${recipe.title}-${index}`;

              return (
                <div key={recipeKey} className="download-card">
                  <RecipeCard {...recipe} showActions={false} />
                </div>
              );
            })}
          </div>
        )}
      </div>
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

export default Downloads;
