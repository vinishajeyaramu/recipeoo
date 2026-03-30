import React from 'react'
import './Privacypolicy.css'
import Pageheader from '../../Resuable Components/Page Header/Pageheader';
import PopularTags from '../../Resuable Components/Populartags/Populatags';

const pageProps = {
  title: "Privacy Policy",
  description: "This Privacy Policy explains how we collect, use, and protect your information on Recipeoo."
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

const Privacypolicy = () => {
  return (
    <>
    <div className='page-header-sec'>
        <Pageheader pageheader={pageProps} />
    </div>
    <div className='policy-container'>
        <div className='policy-contents'>
            <h2>1. Information Collected</h2>
            <h5>We may collect:</h5>
            <ul>
                <li>Your name and email if you sign up, comment, or contact me.</li>
                <li>Basic data like browser type and visit duration for analytics (to improve the site experience).</li>
            </ul>
        </div>
        <div className='policy-contents'>
            <h2>2. How Your Data Is Used</h2>
            <ul>
                <li>To respond to your messages or feedback.</li>
                <li>To improve site functionality or recipes based on general usage patterns.</li>
                <li>We never sell or share your personal data with third parties.</li>
            </ul>
        </div>
        <div className='policy-contents'>
            <h2>3. Cookies </h2>
            <h5>This site may use basic cookies to help with:</h5>
            <ul>
                <li>Remembering user preferences.</li>
                <li>Basic analytics like page views.</li>
            </ul>
            <p>You can disable cookies in your browser settings.</p>
        </div>  
         <div className='policy-contents'>
            <h2>4. Security </h2>
            <p>We take reasonable steps to keep your information safe, but please remember that no internet transmission is 100% secure.</p>
        </div> 
         <div className='policy-contents'>
            <h2>5. Your Rights</h2>
            <p>You can ask to see, correct, or delete your personal info by contacting me at recipeoo@gmail.com .</p>
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

export default Privacypolicy