import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import PopularTags from '../../Resuable Components/Populartags/Populatags';
import './BlogDetails.css';
import blogData from './blogData';

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

const placeholderGallery = Array.from({ length: 4 }, (_, index) => ({
  id: `blog-placeholder-${index + 1}`,
}));

const BlogDetails = () => {
  const { title } = useParams();
  const blog = blogData.find((item) => item.slug === title) || null;

  const galleryItems = useMemo(() => {
    if (blog?.galleryImages?.length) return blog.galleryImages;
    return placeholderGallery;
  }, [blog]);

  if (!blog) {
    return <div className="blog-details-page"><p>Blog not found.</p></div>;
  }

  return (
    <>
      <div className="blog-details-page">
        <div className="blog-details-shell">
          <div className="blog-hero">
            {blog.heroImage ? (
              <img src={blog.heroImage} alt={blog.title} className="blog-hero-image" />
            ) : (
              <div className="blog-hero-placeholder"></div>
            )}
          </div>

          <div className="blog-copy">
            <span className="blog-chip">{blog.category || 'Blog'}</span>
            <h1>{blog.title}</h1>
            <div className="blog-meta-row">
              <span>{blog.author || 'Recipeoo'}</span>
              <span>{blog.publishedAt || 'Recently'}</span>
              <span>{blog.comments || 0} comments</span>
              <span>{blog.readTime || '5 Min'} read</span>
            </div>
            <p className="blog-excerpt">{blog.excerpt || ''}</p>
          </div>

          <div className="blog-content-section">
            <h2>Introduction</h2>
            <p>{blog.intro || ''}</p>
          </div>

          <div className="blog-content-section">
            <h2>{blog.sectionOneTitle || 'Section One'}</h2>
            <p>{blog.sectionOneBody || ''}</p>
          </div>

          <div className="blog-content-section">
            <h2>{blog.sectionTwoTitle || 'Section Two'}</h2>
            <p>{blog.sectionTwoBody || ''}</p>
          </div>

          <div className="blog-content-section">
            <h2>{blog.tipsTitle || 'Tips'}</h2>
            <ul className="blog-tip-list">
              {(blog.tipsList || []).map((tip, index) => (
                <li key={`${tip}-${index}`}>{tip}</li>
              ))}
            </ul>
          </div>

          <div className="blog-gallery-section">
            <h2>Gallery</h2>
            <div className="blog-gallery-grid">
              {galleryItems.map((image, index) => (
                <div key={image.id || `${image}-${index}`} className="blog-gallery-item">
                  {typeof image === 'string' && image ? (
                    <img src={image} alt={`${blog.title} ${index + 1}`} />
                  ) : (
                    <div className="blog-gallery-placeholder"></div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="blog-content-section">
            <h2>Conclusion</h2>
            <p>{blog.conclusion || ''}</p>
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

export default BlogDetails;
