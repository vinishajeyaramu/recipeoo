import React from 'react';
import './Blog.css';
import Pageheader from '../../Resuable Components/Page Header/Pageheader';
import PopularTags from '../../Resuable Components/Populartags/Populatags';
import BlogCard from '../../Resuable Components/Blogcards/Blogcards';
import blogData from './blogData';

const drinksProps = {
  title: 'Blog',
  description:
    'Discover tips, trends, and stories to enhance your culinary journey. From expert advice to creative ideas, explore everything food enthusiasts need to stay inspired!',
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

const Blog = () => {
  return (
    <>
      <div className="page-header-sec">
        <Pageheader pageheader={drinksProps} />
      </div>
      <div className="blog-container">
        {blogData.length ? (
          blogData.map((blog, index) => (
            <BlogCard
              key={`${blog.title}-${index}`}
              blog={{
                ...blog,
                link: `/blog/${blog.slug}`,
                authorLink: `/blog/${blog.slug}`,
                tagLink: `/blog/${blog.slug}`,
              }}
            />
          ))
        ) : (
          <p>No blog posts available yet.</p>
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

export default Blog;
