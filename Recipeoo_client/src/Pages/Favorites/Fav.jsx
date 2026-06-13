import React, { useEffect, useState } from 'react';
import './Fav.css';
import RecipeCard from '../../Resuable Components/Recipercards/Recipecards';
import Pageheader from '../../Resuable Components/Page Header/Pageheader';
import PopularTags from '../../Resuable Components/Populartags/Populatags';
import { useDispatch } from 'react-redux';
import { addToDownloads } from '../../Redux/Downloadslice';
import { getStoredFavorites, isSignedInUser, isVideoItem, requireSignedInUser, saveStoredFavorites, showAppMessage } from '../../utils/collectionAccess';

const Fav = () => {
  const [favorites, setFavorites] = useState([]);
  const dispatch = useDispatch();
  const signedIn = isSignedInUser();

  useEffect(() => {
    if (!signedIn) {
      setFavorites([]);
      return;
    }

    const storedFavorites = getStoredFavorites();
    const recipeFavorites = storedFavorites.filter((item) => !isVideoItem(item));
    setFavorites(recipeFavorites);

    if (recipeFavorites.length !== storedFavorites.length) {
      saveStoredFavorites(recipeFavorites);
    }
  }, [signedIn]);

const handleRemoveFromFavorites = (indexToRemove) => {
  const updatedFavorites = favorites.filter((_, index) => index !== indexToRemove);
  setFavorites(updatedFavorites);
  saveStoredFavorites(updatedFavorites);
};

const handleAddToDownload = (recipe) => {
  if (!requireSignedInUser()) {
    return;
  }

  if (isVideoItem(recipe)) {
    showAppMessage('Video recipes cannot be added to downloads.');
    return;
  }

  const recipeWithId = {
    ...recipe,
    id: recipe.id || Date.now() + Math.random(), // ensure unique ID
  };
  dispatch(addToDownloads(recipeWithId));
  showAppMessage('Recipe added to downloads.');
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
      <div className="page-header-sec">
        <Pageheader pageheader={{
          title: "My Favorites",
          description: "Your liked recipes, all in one placeView all your favorite recipes saved in one convenient place. Rediscover dishes you've liked and plan your next delicious creation!."
        }} />
      </div>

      <div className="fav-card-sec">
        {favorites.length === 0 ? (
          <p className="no-fav-msg">
            {signedIn
              ? 'Nothing added to favorites yet.'
              : 'Please sign in to view your favorite recipes.'}
          </p>
        ) : (
          <div className="recipes-container">
            {favorites.map((item, index) => (
              <div key={index} className="fav-card-with-download">
                <RecipeCard {...item} />
                  <button onClick={() => handleAddToDownload(item)} className="download-btn">Add to Download</button>
                  <button onClick={() => handleRemoveFromFavorites(index)} className="remove-btn">Remove from Favorites</button>
              </div>
            ))}
          </div>
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

export default Fav;
