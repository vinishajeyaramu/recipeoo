import React from 'react';
import { useParams } from 'react-router-dom';
import { recipecards } from '../All Recipies/AllRecipe';
import Pageheader from '../../Resuable Components/Page Header/Pageheader';
import RecipeCard from '../../Resuable Components/Recipercards/Recipecards';
import PopularTags from '../../Resuable Components/Populartags/Populatags';

const cuisineDescriptions = {
  italian: "Indulge in Italian cuisine with pasta, pizza, risotto, and rich sauces. Known for fresh ingredients, olive oil, herbs, and regional variations across the country.",
  indian: "Rich Indian cuisine with aromatic curries, biryanis, tandoori dishes, and flavorful vegetarian options, using diverse regional spices and herbs.",
  chinese: "Enjoy Chinese cuisine with stir-fries, dumplings, and noodle dishes. A balance of flavors and textures from diverse regions and bold seasonings.",
  american: "Classic American dishes like burgers, BBQ, fried chicken, and apple pie. A melting pot of global influences and comfort food favorites.",
  brazilian: "Brazilian cuisine offers feijoada, churrasco, and cheese bread. A mix of Portuguese, African, and Indigenous culinary traditions.",
  ethiopian: "Ethiopian cuisine features injera, stews, and lentils. Bold spices, communal eating, and unique flavors like berbere and niter kibbeh.",
  french: "Classic French cuisine with rich sauces, quiches, and elegant pastries like croissants. Celebrates fresh ingredients, technique, and regional specialties.",
  german: "Hearty German cuisine with sausages, schnitzel, pretzels, and sauerkraut. Comforting dishes that celebrate meats, bread, and potatoes.",
  greek:"Greek dishes like gyros, moussaka, and fresh salads with feta and olives. Mediterranean flavors with herbs, olive oil, and grilled meats.",
  japanese: "Fresh and delicate Japanese dishes like sushi, ramen, and tempura. Focus on seasonal ingredients, umami flavors, and precise preparation.",
  korean: "Spicy and savory Korean dishes like kimchi, BBQ, bibimbap, and stews. Fermented flavors, bold seasonings, and vibrant side dishes.",
  lebanese: "Enjoy Lebanese mezes, falafel, hummus, and grilled meats. Fresh, healthy Mediterranean flavors with spices, olive oil, and herbs.",
  mexican: "Vibrant Mexican dishes like tacos, enchiladas, and tamales, featuring bold flavors from chili peppers, corn, beans, avocados, and zesty salsas.",
  moroccan: "Rich Moroccan dishes like tagines, couscous, and pastilla. Known for spices like saffron, cinnamon, and preserved lemons.",
  persian: "Persian cuisine offers kebabs, rice dishes, stews, and saffron-infused flavors. A blend of sweet and savory with nuts, fruits, and herbs.",
  spanish:"Spanish cuisine offers paella, tapas, and stews. Rich flavors with saffron, seafood, chorizo, and ingredients influenced by the Mediterranean.",
  thai:"Thai cuisine blends sweet, sour, salty, and spicy flavors in dishes like curries, stir-fries, and fresh salads with lemongrass and coconut milk.",
  turkish:"Turkish cuisine features kebabs, mezes, pide, and sweet treats like baklava. A fusion of Mediterranean, Middle Eastern, and Central Asian flavors.",
  vietnamese:"Light Vietnamese dishes like pho, spring rolls, and banh mi. Fresh herbs, vegetables, and a balance of sweet, sour, salty, and savory tastes.",
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

const CuisineDetail = () => {
  const { cuisineName } = useParams();

  // Filter recipes by cuisine (case-insensitive)
  const filtered = recipecards.filter(
    (card) => card.cuisine && card.cuisine.toLowerCase() === cuisineName.toLowerCase()
  );

  // Do NOT include subtitle here
  const pageProps = {
    title: cuisineName.charAt(0).toUpperCase() + cuisineName.slice(1),
    description: cuisineDescriptions[cuisineName.toLowerCase()] ||
      "Explore delicious recipes from this cuisine.",
    totalRecipes: filtered.length
  };

  return (
    <div>
      <Pageheader pageheader={pageProps} />
      <div className="recipe-cards-grid">
        {filtered.length > 0 ? (
          filtered.map((recipe, i) => <RecipeCard key={i} {...recipe} />)
        ) : (
          <p>No recipes found for this cuisine.</p>
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
    
    </div>
  );
};

export default CuisineDetail;