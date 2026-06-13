import React, { useEffect, useMemo, useRef, useState } from 'react';
import './RecipeDetails.css';
import { Link, useLocation, useParams } from 'react-router-dom';
import { CiHeart } from 'react-icons/ci';
import { FaClock, FaHeart, FaStar } from 'react-icons/fa';
import { LuChefHat } from 'react-icons/lu';
import { GiForkKnifeSpoon } from 'react-icons/gi';
import { BsCheck } from 'react-icons/bs';
import html2canvas from 'html2canvas';
import PopularTags from '../../Resuable Components/Populartags/Populatags';
import { recipecards } from '../All Recipies/AllRecipe';
import { blogData } from '../Blog/Blog';
import { getApiUrl } from '../../config/api';
import { animateToWishlist } from '../../utils/wishlistFly';
import { GiSpoon } from "react-icons/gi";
import { FaImage } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa6";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";
import { getStoredFavorites, requireSignedInUser, saveStoredFavorites, showAppMessage } from '../../utils/collectionAccess';
import { useDispatch } from 'react-redux';
import { addToDownloads } from '../../Redux/Downloadslice';

const slugify = (text) =>
  text?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

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

const ratings = [
  { stars: 5, count: 4 },
  { stars: 4, count: 8 },
  { stars: 3, count: 0 },
  { stars: 2, count: 0 },
  { stars: 1, count: 0 },
];

const totalRatings = ratings.reduce((sum, item) => sum + item.count, 0);
const averageRating = (
  ratings.reduce((sum, item) => sum + item.stars * item.count, 0) / totalRatings || 0
).toFixed(1);

const fallbackRecipe = recipecards[82] || {};

const getRelatedRecipes = (recipe) =>
  [
    ...recipecards.filter(
      (item) => item.title !== recipe.title && item.category === recipe.category
    ),
    ...recipecards.filter(
      (item) => item.title !== recipe.title && item.category !== recipe.category
    ),
  ]
    .filter(
      (item, index, array) =>
        array.findIndex((candidate) => candidate.title === item.title) === index
    )
    .slice(0, 6);

const sanitizeFileName = (value) =>
  (value || 'recipe').toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

const renderStars = (count) =>
  Array.from({ length: count }, (_, index) => <FaStar key={index} />);

const parseSingleAmount = (value) => {
  const trimmedValue = value?.trim();

  if (!trimmedValue) return null;

  if (trimmedValue.includes('/')) {
    const [numerator, denominator] = trimmedValue.split('/').map(Number);

    if (!numerator || !denominator) return null;

    return numerator / denominator;
  }

  const parsed = Number(trimmedValue);
  return Number.isFinite(parsed) ? parsed : null;
};

const parseQuantity = (quantity) => {
  const trimmedQuantity = quantity?.trim();

  if (!trimmedQuantity) return null;

  const rangeMatch = trimmedQuantity.match(
    /^(\d+(?:\.\d+)?|\d+\/\d+)\s*-\s*(\d+(?:\.\d+)?|\d+\/\d+)\s*(.*)$/
  );

  if (rangeMatch) {
    return {
      type: 'range',
      start: parseSingleAmount(rangeMatch[1]),
      end: parseSingleAmount(rangeMatch[2]),
      unit: rangeMatch[3]?.trim() || '',
    };
  }

  const mixedMatch = trimmedQuantity.match(/^(\d+)\s+(\d+\/\d+)\s*(.*)$/);

  if (mixedMatch) {
    const whole = Number(mixedMatch[1]);
    const fraction = parseSingleAmount(mixedMatch[2]);

    if (!Number.isFinite(whole) || fraction === null) return null;

    return {
      type: 'single',
      amount: whole + fraction,
      unit: mixedMatch[3]?.trim() || '',
    };
  }

  const singleMatch = trimmedQuantity.match(/^(\d+(?:\.\d+)?|\d+\/\d+)\s*(.*)$/);

  if (singleMatch) {
    return {
      type: 'single',
      amount: parseSingleAmount(singleMatch[1]),
      unit: singleMatch[2]?.trim() || '',
    };
  }

  return null;
};

const formatAmount = (value) => {
  if (!Number.isFinite(value)) return '';

  const roundedInteger = Math.round(value);
  if (Math.abs(value - roundedInteger) < 0.01) {
    return `${roundedInteger}`;
  }

  const whole = Math.floor(value);
  const fraction = value - whole;
  const denominators = [2, 3, 4, 8];

  for (const denominator of denominators) {
    const numerator = Math.round(fraction * denominator);

    if (numerator > 0 && Math.abs(fraction - numerator / denominator) < 0.03) {
      if (numerator === denominator) {
        return `${whole + 1}`;
      }

      return whole > 0
        ? `${whole} ${numerator}/${denominator}`
        : `${numerator}/${denominator}`;
    }
  }

  return `${Number(value.toFixed(2))}`;
};

const scaleQuantity = (quantity, multiplier) => {
  const parsedQuantity = parseQuantity(quantity);

  if (!parsedQuantity) return quantity;

  if (parsedQuantity.type === 'range') {
    if (parsedQuantity.start === null || parsedQuantity.end === null) return quantity;

    const scaledStart = formatAmount(parsedQuantity.start * multiplier);
    const scaledEnd = formatAmount(parsedQuantity.end * multiplier);

    return `${scaledStart}-${scaledEnd}${parsedQuantity.unit ? ` ${parsedQuantity.unit}` : ''}`;
  }

  if (parsedQuantity.amount === null) return quantity;

  const scaledAmount = formatAmount(parsedQuantity.amount * multiplier);
  return `${scaledAmount}${parsedQuantity.unit ? ` ${parsedQuantity.unit}` : ''}`;
};

const getDefaultPersonCount = (servings) => {
  if (typeof servings === 'number' && Number.isFinite(servings) && servings > 0) {
    return servings;
  }

  const matchedCount = `${servings || ''}`.match(/\d+/);
  const parsedServings = matchedCount ? Number.parseInt(matchedCount[0], 10) : NaN;

  return Number.isFinite(parsedServings) && parsedServings > 0 ? parsedServings : 1;
};

const RecipeDetails = () => {
  const { title } = useParams();
  const location = useLocation();
  const downloadRef = useRef(null);
  const recipe =
    recipecards.find((item) => slugify(item.title) === title) || fallbackRecipe;
  const defaultPersonCount = getDefaultPersonCount(recipe.servings);
  const [isFavorite, setIsFavorite] = useState(false);
  const [personCount, setPersonCount] = useState(defaultPersonCount);
  const isVideoRecipeRoute = location.pathname.startsWith('/video-recipe/');
  const dispatch = useDispatch();

  const relatedRecipes = useMemo(() => getRelatedRecipes(recipe), [recipe]);
  const bottomRelatedRecipes = useMemo(() => relatedRecipes.slice(0, 3), [relatedRecipes]);
  const sidebarRelatedRecipes = useMemo(() => relatedRecipes.slice(3, 6), [relatedRecipes]);
  const sidebarBlogs = useMemo(
    () => [...blogData].sort(() => Math.random() - 0.5).slice(0, 3),
    [title]
  );
  const directionImages = (recipe.directions || [])
    .map((step, index) =>
      step.image
        ? {
            id: `direction-image-${index + 1}`,
            src: step.image,
          }
        : null
    )
    .filter(Boolean);
  const galleryItems = directionImages.length
    ? directionImages
    : Array.from({ length: (recipe.directions || []).length || 0 }, (_, index) => ({
        id: `placeholder-${index + 1}`,
        src: '',
      }));
  const scaledIngredients = useMemo(() => {
    const multiplier = personCount / defaultPersonCount;

    return (recipe.ingredients || []).map((item) => ({
      ...item,
      quantity: scaleQuantity(item.quantity, multiplier),
    }));
  }, [defaultPersonCount, personCount, recipe.ingredients]);

  useEffect(() => {
    const favorites = getStoredFavorites();
    setIsFavorite(
      favorites.some((item) => slugify(item.title) === slugify(recipe.title))
    );
  }, [recipe.title]);

  useEffect(() => {
    setPersonCount(defaultPersonCount);
  }, [defaultPersonCount, recipe.title]);

  const handleToggleFavorite = (event) => {
    if (isVideoRecipeRoute) {
      showAppMessage('Video recipes cannot be added to favorites or downloads.');
      return;
    }

    if (!requireSignedInUser()) {
      return;
    }

    const favorites = getStoredFavorites();
    const recipeSlug = slugify(recipe.title);
    const alreadySaved = favorites.some(
      (item) => slugify(item.title) === recipeSlug
    );

    const updatedFavorites = alreadySaved
      ? favorites.filter((item) => slugify(item.title) !== recipeSlug)
      : [
          ...favorites,
          {
            ...recipe,
            id: recipe.id || recipe._id || recipeSlug,
            itemType: recipe.type || recipe.itemType || 'recipe',
          },
        ];

    saveStoredFavorites(updatedFavorites);
    setIsFavorite(!alreadySaved);

    if (!alreadySaved) {
      animateToWishlist(event.currentTarget);
    }
  };

  const trackDownload = async (format) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo') || 'null');

    try {
      await fetch(getApiUrl('/api/downloads'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipeId: recipe._id || recipe.id || recipe.title,
          recipeTitle: recipe.title,
          category: recipe.category || '',
          cuisine: recipe.cuisine || '',
          itemType: recipe.type || recipe.itemType || 'recipe',
          format,
          userId: userInfo?._id || '',
          userName: userInfo?.name || userInfo?.displayName || '',
          userEmail: userInfo?.email || '',
          snapshot: recipe,
        }),
      });
    } catch (error) {
      console.error('Failed to log download', error);
    }
  };

  const addRecipeToDownloads = () => {
    dispatch(
      addToDownloads({
        ...recipe,
        id: recipe.id || recipe._id || slugify(recipe.title),
        itemType: recipe.type || recipe.itemType || 'recipe',
      })
    );
  };

  const renderDetailsToCanvas = async () => {
    if (!downloadRef.current) return null;

    return html2canvas(downloadRef.current, {
      scale: 2,
      backgroundColor: '#ffffff',
      useCORS: true,
      scrollY: -window.scrollY,
    });
  };

  const handleJpgDownload = async () => {
    const canvas = await renderDetailsToCanvas();
    if (!canvas) return;

    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/jpeg', 0.95);
    link.download = `${sanitizeFileName(recipe.title)}-details.jpg`;
    link.click();

    addRecipeToDownloads();
    trackDownload('jpg');
  };

  const handlePdfDownload = async () => {
    const canvas = await renderDetailsToCanvas();
    if (!canvas) return;

    const imageUrl = canvas.toDataURL('image/jpeg', 0.95);
    const printWindow = window.open('', '_blank', 'width=1000,height=1200');

    if (!printWindow) return;

    printWindow.document.write(`
      <html>
        <head>
          <title>${recipe.title || 'Recipeoo Download'}</title>
          <style>
            body { margin: 0; padding: 24px; background: #ffffff; text-align: center; }
            img { max-width: 100%; height: auto; }
            @media print { body { padding: 0; } }
          </style>
        </head>
        <body>
          <img src="${imageUrl}" alt="${recipe.title || 'Recipe'}" onload="window.print(); window.onafterprint = () => window.close();" />
        </body>
      </html>
    `);
    printWindow.document.close();

    addRecipeToDownloads();
    trackDownload('pdf');
  };

  const handleDecreasePersons = () => {
    setPersonCount((currentCount) => Math.max(defaultPersonCount, currentCount - 1));
  };

  const handleIncreasePersons = () => {
    setPersonCount((currentCount) => currentCount + 1);
  };

  return (
    <>
      <div ref={downloadRef}>
        <div className="recipe-details">
          <div className="details-header">
            <div className="img-grid">
              <img src={recipe.image || ''} alt={recipe.title || 'Recipe'} />
            </div>
            <div className="details-grid">
              <p>{recipe.category || 'Recipe'}</p>
              <h3>{recipe.title || 'Recipe Details'}</h3>
              <div className="details-icons">
                <li>
                  <span className="time-icon"><FaClock /> {recipe.time || '-'}</span>
                  <p>Cooking Time</p>
                </li>
                <li>
                  <span className="cuisine">
                    {recipe.flag ? (
                      <img
                        src={recipe.flag}
                        className="flag-icon"
                        alt={recipe.cuisine || 'Cuisine'}
                      />
                    ) : null}
                    {recipe.cuisine || '-'}
                  </span>
                  <p>Cuisine</p>
                </li>
                <li>
                  <span className="difficulty-icon"><LuChefHat /> {recipe.difficulty || '-'}</span>
                  <p>Degree of Difficulty</p>
                </li>
                <li>
                  <span className="servings-icon"><GiForkKnifeSpoon /> {recipe.servings || '-'}</span>
                  <p>Serving</p>
                </li>
              </div>

            </div>
          </div>

          <div className="author-det">
            {/* <div></div> */}
            <div className="auth-grid">
              <div className="auth-sec">
                <div className="author-img">
                  <img src={recipe.authorImage || ''} alt={recipe.author || 'Author'} />
                </div>
                <div className="auth-name">
                  <h5>{recipe.author || 'Olivia Thompson'}</h5>
                  <p>Recipe Author</p>
                </div>
              </div>
              <div className="auth-icons">
                <li
                  onClick={handleToggleFavorite}
                  title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                  className={isFavorite ? 'favorite-active' : ''}
                >
                  {isFavorite ? (
                    <FaHeart className="icon" />
                  ) : (
                    <CiHeart className="icon" />
                  )}
                </li>
                <li><FaImage className="icon" onClick={handleJpgDownload}/></li>
                <li><FaRegFilePdf className="icon" onClick={handlePdfDownload}/></li>

              </div>
            </div>
          </div>

          <div className="recipe-ing">
            <div></div>
            <div className="ing-grid">
              <div className="ingredients-heading">
                <h5>
                  Ingredients
                  <span>{personCount} Person(s)</span>
                </h5>
                <div className="person-controls">
                  <button
                    type="button"
                    className="person-control-btn"
                    onClick={handleDecreasePersons}
                    aria-label="Decrease person count"
                  >
                    <CiSquareMinus />
                  </button>
                  <button
                    type="button"
                    className="person-control-btn"
                    onClick={handleIncreasePersons}
                    aria-label="Increase person count"
                  >
                    <CiSquarePlus />
                  </button>
                </div>
              </div>
              <div className="ing-list">
                {scaledIngredients.map((item, index) => (
                  <label key={`${item.name}-${index}`} className="ingredient-item">
                    <GiSpoon />
                    <span className="quantity">{item.quantity}</span>
                    <span className="name">{item.name}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid-division">
          <div className="directions-sec">
            <h5>Directions</h5>
            {(recipe.directions || []).map((step, index) => (
              <div key={`${step.title}-${index}`} className="direction-cont">
                <div className="direction-header">
                  <li><BsCheck className="d-icon" /></li>
                  <li className="d-head">{step.title}</li>
                  <li className="d-line"></li>
                </div>
                <div className="directions">
                  <img
                    src={step.image || ''}
                    alt={step.title || 'Step'}
                    className="directions-img"
                  />
                  <p className="instructions">{step.instruction}</p>
                </div>
              </div>
            ))}

            <div className="nutritions-sec">
              <h5>Nutritions</h5>
              <div className="first-para">
                <p className="rich-paragraph">{recipe.description || ''}</p>
                <p className="rich-paragraph-1">{recipe.description2 || ''}</p>
                <hr style={{ marginTop: '-7px' }} />
              </div>
            </div>

            <div className="rd-video-sec">
              <h5>Video - Similar recipe</h5>
              <div className="video-wrapper">
                <iframe
                  src={recipe.videoUrl || 'https://www.youtube.com/embed/D0X0JCk9H7A?si=ImoUMcwoCKJGZHV3'}
                  title="YouTube video player"
                  width="100%"
                  height="480"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className="images-sec">
              <h5>Images</h5>
              <div className="images-grid">
                {galleryItems.map((image, index) => (
                  <div key={image.id || `${image.src}-${index}`} className="img-grid-item">
                    {image.src ? (
                      <img src={image.src} alt={`${recipe.title || 'Recipe'} ${index + 1}`} />
                    ) : (
                      <div className="img-placeholder"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="rating-container">
              <h5>Rating Overview</h5>
              <div className="rating-content">
                <div className="rating-summary">
                  <div className="average-rating">{averageRating}</div>
                  <div>
                    <div className="stars">{renderStars(Math.round(averageRating))}</div>
                    <p className="rating-count">{totalRatings} ratings</p>
                  </div>
                </div>

                <div className="rating-bars">
                  {ratings.map((item) => (
                    <div key={item.stars} className="rating-bar">
                      <div className="bar-count">{item.count}</div>
                      <div className="bar-track">
                        <div
                          className="bar-fill"
                          style={{ width: `${(item.count / totalRatings) * 100 || 0}%` }}
                        ></div>
                      </div>
                      <div className="bar-stars">{renderStars(item.stars)}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="related-recipe">
              <h5>Related Recipe</h5>
              <div className="related-recipe-grid">
                {bottomRelatedRecipes.map((item) => (
                  <Link
                    key={item.id}
                    className="related-recipe-item"
                    to={`/recipe/${slugify(item.title)}`}
                    style={{textDecoration:'none'}}
                  >
                    <div className="related-recipe-card-image">
                      <img src={item.image || ''} alt={item.title} />
                    </div>
                    <div className="related-recipe-card-copy">
                      <p>{item.category}</p>
                      <h6>{item.title}</h6>
                      <div className="related-recipe-card-meta">
                        <div><FaClock /> {item.time || '-'}</div>
                        <div>{item.cuisine || '-'}</div>
                        <div>{item.difficulty || '-'}</div>
                        <div>{item.servings || '-'}</div>
                      </div>
                        
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* <div className="details-bottom-actions">
              <button className="details-download-btn" onClick={handleJpgDownload}>
                Download JPG
              </button>
              <button className="details-download-btn" onClick={handlePdfDownload}>
                Save PDF
              </button>
            </div> */}
          </div>

          <div className="related-sec">
            <div className="related-recipe-sec sidebar-card-block">
              <h5>Recipes</h5>
              {sidebarRelatedRecipes.map((item) => (
                <Link
                  key={item.id}
                  className="related-recipes"
                  to={`/recipe/${slugify(item.title)}`}
                >
                  <div className="related-recipe-img">
                    <img src={item.image || ''} alt={item.title} />
                  </div>
                  <div className="related-recipe-content">
                    <p className="cat">{item.category}</p>
                    <h5>{item.title}</h5>
                    <p className="star-icon"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                  </div>
                </Link>
              ))}
            </div>

            <div className="related-recipe-sec sidebar-card-block">
              <h5>Latest Blogs</h5>
              {sidebarBlogs.map((item) => (
                <Link
                  key={item.slug}
                  className="related-recipes"
                  to={`/blog/${item.slug}`}
                >
                  <div className="related-recipe-img">
                    {item.image ? (
                      <img src={item.image} alt={item.title} />
                    ) : (
                      <div className="related-blog-placeholder"></div>
                    )}
                  </div>
                  <div className="related-recipe-content">
                    <p className="cat">{item.tag || 'Blog'}</p>
                    <h5>{item.title}</h5>
                    <p className="blog-meta-line">{item.readTime || '5 Min'} read</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
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

export default RecipeDetails;
