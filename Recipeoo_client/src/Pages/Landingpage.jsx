import React from 'react'
import "./Landingpage.css"
import { TbChefHat } from "react-icons/tb";
import { HiComputerDesktop } from "react-icons/hi2";
import { GoTrophy } from "react-icons/go";
import { LuPizza } from "react-icons/lu";
import { GiCakeSlice } from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { LuWheat } from "react-icons/lu";
import { GiSteak } from "react-icons/gi";
import { GiFruitBowl } from "react-icons/gi";
import { IoFishOutline } from "react-icons/io5";
import { TbSoupFilled } from "react-icons/tb";
import { LuVegan } from "react-icons/lu";
import SectionHeader from '../Resuable Components/Section header/Sectionheader';
import RecipeCard from '../Resuable Components/Recipercards/Recipecards';
import { recipecards as allRecipecards } from '../Pages/All Recipies/AllRecipe';
import recipe1 from '../Assets/Images/garlic mushroom.jpg'
import recipe2 from '../Assets/Images/zesty lemon quinoa.jpg'
import recipe3 from '../Assets/Images/recipe-4-630x785.jpg'
import recipe4 from '../Assets/Images/recipe-5-630x785.jpg'
import recipe5 from '../Assets/Images/recipe-6-630x785.jpg'
import recipe6 from '../Assets/Images/recipe-7-630x785.jpg'
import recipe7 from '../Assets/Images/recipe-30-630x785.jpg'
import recipe8 from '../Assets/Images/recipe-9-630x785.jpg'
import recipe9 from '../Assets/Images/recipe-35-630x785.jpg'
import recipe10 from '../Assets/Images/recipe-34-630x785.jpg'
import recipe11 from '../Assets/Images/recipe-33-630x785.jpg'
import recipe12 from '../Assets/Images/recipe-32-630x785.jpg'
import flag1 from '../Assets/Images/lb.png'
import flag2 from '../Assets/Images/ma.png'
import flag3 from '../Assets/Images/fr.png'
import flag4 from '../Assets/Images/th.png'
import flag5 from '../Assets/Images/et.png'
import flag6 from '../Assets/Images/kr.png'
import flag7 from '../Assets/Images/tr.png'
import flag8 from '../Assets/Images/mx.png'
import flag9 from '../Assets/Images/us.png'
import flag10 from '../Assets/Images/de.png'
import flag11 from '../Assets/Images/gr.png'
import flag12 from '../Assets/Images/in.png'
import flag13 from '../Assets/Images/ir.png'
import flag14 from '../Assets/Images/it.png'
import flag15 from '../Assets/Images/vn.png'
import flag16 from '../Assets/Images/br.png'
import flag17 from '../Assets/Images/cn.png'
import flag18 from '../Assets/Images/es.png'
import flag19 from '../Assets/Images/jp.png'
import vr1 from '../Assets/Images/recipe-6-800x520.png'
import vr2 from '../Assets/Images/recipe-21-800x520.png'
import vr3 from '../Assets/Images/recipe-20-800x520.png'
import vr4 from '../Assets/Images/recipe-19-800x520.png'
import vr5 from '../Assets/Images/recipe-18-800x520.png'
import vr6 from '../Assets/Images/recipe-13-800x520.png'
import vr7 from '../Assets/Images/recipe-28-800x520.png'
import vr8 from '../Assets/Images/recipe-35-800x520.png'
import vr9 from '../Assets/Images/recipe-44-800x520.png'
import vr10 from '../Assets/Images/recipe-52-800x520.png'
import vr11 from '../Assets/Images/recipe-63-800x520.png'
import vr12 from '../Assets/Images/recipe-1-800x520.png'
import VideoCard from '../Resuable Components/Recipercards/Videorecipecard';
import BlogCard from '../Resuable Components/Blogcards/Blogcards';
import PopularTags from '../Resuable Components/Populartags/Populatags';
import blog1 from '../Assets/Images/post-1-800x520.png'
import blog2 from '../Assets/Images/post-2-800x520.png'
import blog3 from '../Assets/Images/post-5-800x520.png' 


export const widgets = [
  {
    title: "Unique Meats",
    description: "Explore unique meat recipes that bring bold flavors and creative ideas to your table!",
    icon: <TbChefHat />, // Use a component or image instead in real UI
  },
  {
    title: "Real Content",
    description: "Experience authentic recipes, tips, and stories crafted to inspire your cooking journey!",
    icon: <HiComputerDesktop />
,
  },
  {
    title: "Quality Receipts",
    description: "Discover high-quality recipes designed to deliver delicious flavors and perfect results!",
    icon:<GoTrophy />
,
  },
];

export const categories = [
  { title: "Appetizers", count: `${allRecipecards.filter(r => r.category === 'Appetizers').length} recipes`, icon: <LuPizza />, link: "/category/appetizers" },
  { title: "Desserts", count: `${allRecipecards.filter(r => r.category === 'Desserts').length} recipes`, icon: <GiCakeSlice />, link: "/category/desserts" },
  { title: "Drinks", count: `${allRecipecards.filter(r => r.category === 'Drinks').length} recipes`, icon: <BiSolidDrink />, link: "/category/drinks" },
  { title: "Healthy", count: `${allRecipecards.filter(r => r.category === 'Healthy').length} recipes`, icon: <LuWheat />, link: "/category/healthy" },
  { title: "Meat", count: `${allRecipecards.filter(r => r.category === 'Meat').length} recipes`, icon: <GiSteak />, link: "/category/meat" },
  { title: "Salads", count: `${allRecipecards.filter(r => r.category === 'Salads').length} recipes`, icon: <GiFruitBowl />, link: "/category/salads" },
  { title: "Seafood", count: `${allRecipecards.filter(r => r.category === 'Seafood').length} recipes`, icon: <IoFishOutline />, link: "/category/seafood" },
  { title: "Soups", count: `${allRecipecards.filter(r => r.category === 'Soups').length} recipes`, icon: <TbSoupFilled />, link: "/category/soups" },
  { title: "Vegan", count: `${allRecipecards.filter(r => r.category === 'Vegan').length} recipes`, icon: <LuVegan />, link: "/category/vegan" },
];

const recipecards = [
    {
      image: recipe1,
      rating: 4.8,
      category: 'Pasta',
      title: 'Creamy Garlic Mushroom Penne Pasta',
      time: '5 min',
      cuisine: 'Lebanese',
      difficulty: 'Beginner',
      flag: flag1,
      link: "/recipe/creamy-garlic-mushroom-penne-pasta",
      categoryLink: "/category/pasta",
      timeLink: "/time/5-mins",
      cuisineLink: "/cuisine/lebanese",
      difficultyLink: "/difficulty/beginner",
      tags:['main-dishes']
    },
    {
      image: recipe2,
      rating: 4.5,
      category: 'Salads',
      title: 'Zesty Lemon Quinoa with Fresh Herbs',
      time: '60 min',
      cuisine: 'Moroccan',
      difficulty: 'Beginner',
      flag: flag2,
      link: "/recipe/zesty-lemon-quinoa-with-fresh-herbs",
      categoryLink: "/category/salads",
      timeLink: "/time/60-mins",
      cuisineLink: "/cuisine/moroccan",
      difficultyLink: "/difficulty/beginner"
    },
     {
      image: recipe3,
      rating: 4.8,
      category: 'Meat',
      title: 'Smoky Barbecue Pulled Beef Sandwiches',
      time: '15 min',
      cuisine: 'French',
      difficulty: 'Easy',
      flag: flag3,
      link: "/recipe/smoky-barbecue-pulled-beef-sandwiches",
      categoryLink: "/category/meat",
      timeLink: "/time/15-mins",
      cuisineLink: "/cuisine/french",
      difficultyLink: "/difficulty/easy",
      tags:['main-dishes']
    },
    {
      image: recipe4,
      rating: 4.8,
      category: 'Breakfasts',
      title: 'Fluffy Banana Pancakes with Maple Syrup',
      time: '60 min',
      cuisine: 'Thai',
      difficulty: 'Advanced',
      flag: flag4,
      link: "/recipe/fluffy-banana-pancakes-with-maple-syrup",
      categoryLink: "/category/breakfasts",
      timeLink: "/time/60-mins",
      cuisineLink: "/cuisine/thai",
      difficultyLink: "/difficulty/advanced"
    },
    {
      image: recipe5,
      rating: 4.9,
      category: 'Desserts',
      title: 'Molten Chocolate Lava Cake Dessert',
      time: '80 min',
      cuisine: 'Ethiopian',
      difficulty: 'Advanced',
      flag: flag5,
      link: "/recipe/molten-chocolate-lava-cake-dessert",
      categoryLink: "/category/desserts",
      timeLink: "/time/80-mins",
      cuisineLink: "/cuisine/ethiopian",
      difficultyLink: "/difficulty/advanced"
    },
    {
      image: recipe6,
      rating: 4.4,
      category: 'Side Dishes',
      title: 'Crispy Parmesan Garlic Zucchini Sticks',
      time: '100 min',
      cuisine: 'Korean',
      difficulty: 'Advanced',
      flag: flag6,
      link: "/recipe/crispy-parmesan-garlic-zucchini-sticks",
      categoryLink: "/category/side-dishes",
      timeLink: "/time/100-mins",
      cuisineLink: "/cuisine/korean",
      difficultyLink: "/difficulty/advanced",
      tags:['main-dishes']
    },
     {
      image: recipe7,
      rating: 4.9,
      category: 'BBQ & Grilling',
      title: 'Smoky Barbeque Beef Ribs with Dry Rub',
      time: '85 min',
      cuisine: 'Lebanese',
      difficulty: 'Advanced',
      flag: flag1,
      link: "/recipe/smoky-barbeque-beef-ribs-with-dry-rub",
      categoryLink: "/category/bbq-&-grilling",
      timeLink: "/time/85-mins",
      cuisineLink: "/cuisine/lebanese",
      difficultyLink: "/difficulty/easy",
      tags:['main-dishes']
    },
    {
      image: recipe8,
      rating: 4.8,
      category: 'Gluten-Free',
      title: 'Gluten-Free Almond Waffles with Berries',
      time: '20 min',
      cuisine: 'Lebanese',
      difficulty: 'Advanced',
      flag: flag1,
      link: "/recipe/gluten-free-almond-waffles-with-berries",
      categoryLink: "/category/gluten-free",
      timeLink: "/time/20-mins",
      cuisineLink: "/cuisine/lenanese",
      difficultyLink: "/difficulty/advanced"
    },
    {
      image: recipe9,
      rating: 4.8,
      category: 'Meat',
      title: 'Slow Cooker Beef and Black Bean Chili',
      time: '45 min',
      cuisine: 'Turkish',
      difficulty: 'Intermediate',
      flag: flag7,
      link: "/recipe/slow-cooker-beef-and-black-bean-chili",
      categoryLink: "/category/meat",
      timeLink: "/time/45-mins",
      cuisineLink: "/cuisine/turkish",
      difficultyLink: "/difficulty/intermediate",
      tags:['main-dishes']
    },
    {
      image: recipe10,
      rating: 4.8,
      category: 'Drinks',
      title: 'Cucumber Mint Smoothie with Lime Zest',
      time: '100 min',
      cuisine: 'French',
      difficulty: 'Easy',
      flag: flag3,
      link: "/recipe/cucumber-mint-smoothie-with-line-zest",
      categoryLink: "/category/drinks",
      timeLink: "/time/100-mins",
      cuisineLink: "/cuisine/french",
      difficultyLink: "/difficulty/easy"
    },
     {
      image: recipe11,
      rating: 4.5,
      category: 'Side Dishes',
      title: 'Butternut Squash Risotto with Parmesan',
      time: '115 min',
      cuisine: 'Mexican',
      difficulty: 'Advanced',
      flag: flag8,
      link: "/recipe/butternut-squash-with-parmesan",
      categoryLink: "/category/side-dishes",
      timeLink: "/time/115-mins",
      cuisineLink: "/cuisine/mexican",
      difficultyLink: "/difficulty/advanced",
      tags:['main-dishes']
    },
    {
      image: recipe12,
      rating: 4.6,
      category: 'Vegetarian',
      title: 'Vegetable and Halloumi Grilled Skewers',
      time: '75 min',
      cuisine: 'American',
      difficulty: 'Advanced',
      flag: flag9,
      link: "/recipe/vegetable-and-halloumi-grilled-skewers",
      categoryLink: "/category/vegetarian",
      timeLink: "/time/75-mins",
      cuisineLink: "/cuisine/american",
      difficultyLink: "/difficulty/advanced",
    },
  ];
  const videos = [
    {
      image: vr1,
      rating: 4.9,
      category: 'Desserts',
      title: 'Molten Chocolate Lava Cake Dessert',
      time: '80 min',
      cuisine: 'Ethiopian',
      difficulty: 'Advanced',
      flag: flag5,
      link: "/recipe/molten-chocolate-lava-cake-dessert",
      categoryLink: "/category/desserts",
      timeLink: "/time/80-mins",
      cuisineLink: "/cuisine/lebanese",
      difficultyLink: "/difficulty/beginner",
    },
    {
      image: vr2,
      rating: 4.6,
      category: 'Vegetarian',
      title: 'Spinach Ricotta Stuffed Vegan Pasta Shells',
      time: '25 min',
      cuisine: 'Italian',
      difficulty: 'Expert',
      flag: flag14,
      link: "/recipe/spianch-ricotta-stuffed-vegan-pasta-shells",
      categoryLink: "/category/vegetarian",
      timeLink: "/time/25-mins",
      cuisineLink: "/cuisine/italian",
      difficultyLink: "/difficulty/expert"
    },
     {
      image: vr3,
      rating: 5,
      category: 'Desserts',
      title: 'Apple Crumble with Cinnamon Oat Topping',
      time: '35 min',
      cuisine: 'Korean',
      difficulty: 'Easy',
      flag: flag6,
      link: "/recipe/apple-crumble-with-cinnamon-oat-topping",
      categoryLink: "/category/desserts",
      timeLink: "/time/35-mins",
      cuisineLink: "/cuisine/korean",
      difficultyLink: "/difficulty/easy"
      
    },
    {
      image: vr4,
      rating: 4.6,
      category: 'vegan',
      title: 'Vegan Black Bean Tacos with Avocado Salsa',
      time: '15 min',
      cuisine: 'Greek',
      difficulty: 'Advanced',
      flag: flag11,
      link: "/recipe/vegan-black-bean-tacos-with-avocado-salsa",
      categoryLink: "/category/vegan",
      timeLink: "/time/15-mins",
      cuisineLink: "/cuisine/greek",
      difficultyLink: "/difficulty/advanced"
    },
    {
      image: vr5,
      rating: 4.6,
      category: 'Healthy',
      title: 'Chickpea and Kale Salad with Lemon Dressing',
      time: '5 min',
      cuisine: 'Spanish',
      difficulty: 'Intermediate',
      flag: flag18,
      link: "/recipe/chickpea-and-kale-salad-with-lemon-dressing",
      categoryLink: "/category/healthy",
      timeLink: "/time/5-mins",
      cuisineLink: "/cuisine/spanish",
      difficultyLink: "/difficulty/intermediate"
    },
    {
      image: vr6,
      rating: 4.8,
      category: 'Breads',
      title: 'Savory Garlic Herb Butter Dinner Rolls',
      time: '85 min',
      cuisine: 'Mexican',
      difficulty: 'Begginer',
      flag: flag8,
      link: "/recipe/savory-garlic-herb-butter-dinner-rolls",
      categoryLink: "/category/breads",
      timeLink: "/time/85-mins",
      cuisineLink: "/cuisine/Mexican",
      difficultyLink: "/difficulty/Begginer"
    },
     {
      image: vr7,
      rating: 4.5,
      category: 'Salads',
      title: 'Asian Sesame Noodles with Crunchy Veggies',
      time: '60 min',
      cuisine: 'Moroccan',
      difficulty: 'Begginer',
      flag: flag2,
      link: "/recipe/asian-sesame-noodles-with-crunchy-veggies",
      categoryLink: "/category/salads",
      timeLink: "/time/60-mins",
      cuisineLink: "/cuisine/moroccan",
      difficultyLink: "/difficulty/begginer"
    },
    {
      image: vr8,
      rating: 4.8,
      category: 'Meat',
      title: 'Slow Cooker Beef and Black Bean Chili',
      time: '45 min',
      cuisine: 'Turkish',
      difficulty: 'Intermediate',
      flag: flag7,
      link: "/recipe/slow-cooker-beef-and-black-bean-chili",
      categoryLink: "/category/meat",
      timeLink: "/time/45-mins",
      cuisineLink: "/cuisine/turkish",
      difficultyLink: "/difficulty/intermediate"
    },
    {
      image: vr9,
      rating: 4.6,
      category: 'desserts',
      title: 'Spiced Apple Cake with Cinnamon Glaze',
      time: '45 min',
      cuisine: 'Chinese',
      difficulty: 'Begginer',
      flag: flag17,
      link: "/recipe/spiced-apple-cake-with-cinnamon-glaze",
      categoryLink: "/category/desserts",
      timeLink: "/time/55-mins",
      cuisineLink: "/cuisine/chinese",
      difficultyLink: "/difficulty/begginer"
    },
    {
      image: vr10,
      rating: 4.6,
      category: 'Snacks',
      title: 'Classic Italian Margherita Pizza Slices',
      time: '90 min',
      cuisine: 'Italian',
      difficulty: 'Advanced',
      flag: flag14,
      link: "/recipe/classic-italian-margherita-pizza-slices",
      categoryLink: "/category/snacks",
      timeLink: "/time/90-mins",
      cuisineLink: "/cuisine/italian",
      difficultyLink: "/difficulty/advanced"
    },
     {
      image: vr11,
      rating: 4.4,
      category: 'Instant Pot',
      title: 'Vegan Lentil Curry in the Instant Pot',
      time: '5 min',
      cuisine: 'Ethiopian',
      difficulty: 'Easy',
      flag: flag5,
      link: "/recipe/vegan-lentil-curry-in-the-instant-pot",
      categoryLink: "/category/instant-pot",
      timeLink: "/time/5-mins",
      cuisineLink: "/cuisine/ethiopian",
      difficultyLink: "/difficulty/easy"
    },
    {
      image: vr12,
      rating: 4.5,
      category: 'BBQ & Grilling',
      title: 'Spicy Grilled Chicken Skewers with Lemon and Herbs',
      time: '30 min',
      cuisine: 'Turkish',
      difficulty: 'Intermediate',
      flag: flag7,
      link: "/recipe/spicy-grilled-chicken-skewers-with-lemon-and-herbs",
      categoryLink: "/category/bbq-&-grilling",
      timeLink: "/time/30-mins",
      cuisineLink: "/cuisine/turkish",
      difficultyLink: "/difficulty/intermediate",
    },
  ];

  const blogData = [
  {
    image: blog1,
    tag: 'HEALTH',
    title: 'Power Up Your Mornings: 5 Quick and Healthy Breakfast Ideas',
    author: 'Olivia Thompson',
    time: '6 months ago',
    comments: 4,
    readTime: '5 Min',
    link: '/blog/5-quick-breakfast-ideas',
    authorLink:'/author/olivia-thompson',
    tagLink:'/tag/health',
  },
  {
    image: blog2,
    tag: 'SPOTLIGHTS',
    title: 'Master Knife Skills for Effortless Cooking Prep',
    author: 'Olivia Thompson',
    time: '6 months ago',
    comments: 4,
    readTime: '5 Min',
    link: '/blog/master-knife-skills',
    authorLink:'/author/olivia-thompson',
    tagLink: '/tag/spotlights'
  },
   {
    image: blog3,
    tag: 'COLLCETIONS',
    title: 'Savor Every Bite: A Celebration of Pizza Moments',
    author: 'Olivia Thompson',
    time: '6 months ago',
    comments: 4,
    readTime: '5 Min',
    link: '/blog/celebration-of-pizza-moments',
    authorLink:'/author/olivia-thompson',
    tagLink:'/tag/collections',
  },
];

const tagData = [
  { name: 'COMFORT FOOD', link: '/tags/comfort-food' },
  { name: 'DAIRY-FREE', link: '/tags/dairy-free' },
  { name: 'DESSERTS', link: '/tags/desserts' },
  { name: 'GLUTEN-FREE', link: '/tags/gluten-free' },
  { name: 'HEALTHY', link: '/tags/healthy' },
  { name: 'HIGH-PROTEiN', link: '/tags/high-protein' },
  { name: 'HOLIDAY', link: '/tags/holiday' },
  { name: 'KID-FRIENDLY', link: '/tags/kid-friendly'},
  
];

const tagData2 = [
  { name: 'LOW-CARB', link: '/tags/low-carb' },
  { name: 'MEAL PREP', link: '/tags/meal-prep' },
  { name: 'MEAT', link: '/tags/meat' },
  { name: 'ONE-POT', link: '/tags/one-pot' },
  { name: 'QUICK MEALS', link: '/tags/quick-meals' },
  { name: 'SPICY', link: '/tags/spicy' },
  { name: 'VEGETARIAN', link: '/tags/vegetarian' },
  { name: 'VIDEO RECIPE', link: '/tags/video-recipe'},
]



const Landingpage = () => {
  return (
    <>
    <div className='land-hero-sec'>
      <h3>Find inspiration with delicious recipes for every taste, meal, and special occasion.</h3>
      <p>Discover a wide variety of easy and flavorful recipes for every meal and occasion. From quick snacks to gourmet dishes, find inspiration to elevate your cooking and bring joy to your table.</p>
      <a href="/all-recipes"><button>View All Recipes</button></a>
    </div>
    <div className="widget-sec">
    {widgets.map((item, i) => (
      <div key={i} className="widget-card">
        <div className="widget-icon border">{item.icon}</div>
        <div className='widget-cont'>
          <h5 className="widget-title">{item.title}</h5>
          <p className="widget-description">{item.description}</p>
        </div>
      </div>
    ))}
    </div>
    <div className="category-sec">
    {categories.map((item, i) => (
      <a href={item.link} key={i}>
        <div key={i} className="category-card">
        <div className="category-icon">{item.icon}</div>
        <div className='category-cont'>
          <h5 className="category-title">{item.title}</h5>
          <p className="category-count">{item.count}</p>
        </div>
      </div>
      </a>
    ))}
    </div>
    <div className='elementor'>
      <div className='elementor-card-1'>
        <h3>Learn from the best and create culinary magic at home.</h3>
        <p>Get inspired by expert tips and techniques to perfect your skills. Explore recipes that help you master new dishes, adding confidence and creativity to your home cooking experience.</p>
        <a href="/overall-filter"><button>View Recipes</button></a>
      </div>
      <div className='elementor-card-2'>
        <h3>Add flavor, flair, and a touch of creativity to your meals.</h3>
        <p>Elevate your dishes with bold flavors and creative twists. From vibrant ingredients to expert techniques, discover recipes that transform your everyday cooking into something extraordinary.</p>
        <a href="/a-z-recipes"><button>View Recipes</button></a>
      </div>
    </div>
    <div className='recipes-section'>
      <SectionHeader
        title="New Recipes"
        subtitle="Explore our latest recipes, from quick snacks to hearty meals and indulgent desserts."
      />
      <div className='recipes-btn'>
        <a href="/all-recipes"><button>All Recipes</button></a>
        <a href="/category/appetizers"><button>Appetizers</button></a>
        <a href="/category/main-dishes"><button>Main Dishes</button></a>
        <a href="/category/desserts"><button>Desserts</button></a>
        <a href="/category/drinks"><button>Drinks</button></a>
        <a href="/category/healthy"><button>Healthy</button></a>
        <a href="/category/other-recipes"><button>Other Recipes</button></a>
      </div>
      <div className='recipes-container'>
          {recipecards.map((recipe, i) => (
        <RecipeCard key={i} {...recipe} />
          ))}
      </div>
      <div className='explore-btn'>
        <hr />
        <a href="/all-recipes"><button>Explore All Recipies</button></a>
        <hr />
      </div>
    </div>
    <div className='sec-bg'>
          <h3>Discover fresh and easy recipes to inspire your meals every day.</h3>
          <p>Discover fresh and easy recipes for every meal. From quick breakfasts and light lunches to hearty dinners and indulgent desserts, find endless inspiration to make cooking simple, fun, and enjoyable for any occasion or gathering!</p>
          <a href="/video-recipes"><button>View Recipes</button></a>
    </div>
    <div className='video-recipes'>
       <SectionHeader
        title="Video Recipes"
        subtitle="Watch our latest recipe videos and learn step-by-step cooking tips and techniques!"
    />
    <div className='recipes-container'>
      {videos.map((video, i) => (
      <VideoCard key={i} {...video} />
      ))}
    </div>
  </div>
  <div className='blog-section'>
    <SectionHeader
        title="Our Journal"
        subtitle="Discover stories, tips, and trends to inspire your culinary journey and creativity!"
        
    />
       <div className='blog-container'>
         {blogData.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
       </div>
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
  )
}

export default Landingpage