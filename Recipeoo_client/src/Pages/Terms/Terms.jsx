import React from 'react'
import './Terms.css'
import Pageheader from '../../Resuable Components/Page Header/Pageheader';
import PopularTags from '../../Resuable Components/Populartags/Populatags';

const pageProps = {
  title: "Terms & Conditions",
  description: "Welcome to Recipeoo! By accessing or using this website, you agree to follow the terms outlined below.",
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

const Terms = () => {
  return (
    <>
    <div className='page-header-sec'>
        <Pageheader pageheader={pageProps} />
      </div>
    <div className='terms-container'>
        <div className='terms-contents'>
            <h2>1. Use of Content</h2>
            <h5>All recipes, tips, and images on this website are provided for informational and personal use only. You may:</h5>
            <ul>
                <li>Browse, read, and try the recipes for personal use.</li>
                <li>Share links to the site (not the full content) with credit.</li>
            </ul>
            <p>Please do not copy or republish content without permission.</p>
        </div>
        <div className='policy-contents'>
            <h2>2. No Professional Advice</h2>
            <p>Recipes are created based on personal experience or inspiration. I am not a professional chef or nutritionist, and the content is not meant to replace expert advice. Please use your best judgment or consult a professional when needed.</p>
        </div>
        <div className='policy-contents'>
            <h2>3. Comments & Contributions</h2>
            <h5>You are welcome to leave comments! Please be respectful and do not post:</h5>
            <ul>
                <li>Inappropriate language or hate speech.</li>
                <li>Spam or promotional links.</li>
            </ul>
            <p>Comments that violate this may be removed.</p>
        </div>  
         <div className='policy-contents'>
            <h2>4. Changes</h2>
            <p>We may update these terms at any time. Continued use of the site means you accept any updates.</p>
            <p>If you have questions, feel free to contact me at recipeoo@gmail.com.</p>
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

export default Terms