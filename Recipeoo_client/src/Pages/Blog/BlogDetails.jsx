import React, { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import PopularTags from '../../Resuable Components/Populartags/Populatags';
import './BlogDetails.css';
import { blogData } from './Blog';
import { recipecards, categories as recipeCategories } from '../All Recipies/AllRecipe';
import { Videorecipecards } from '../All Recipies/AllVideoRecipe';
import { FaClock, FaStar } from 'react-icons/fa';

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

// const placeholderGallery = Array.from({ length: 4 }, (_, index) => ({
//   id: `blog-placeholder-${index + 1}`,
// }));

const BlogDetails = () => {
  const { title } = useParams();
  const blog = blogData.find((item) => item.slug === title) || null;

  // const galleryItems = useMemo(() => {
  //   if (blog?.galleryImages?.length) return blog.galleryImages;
  //   return placeholderGallery;
  // }, [blog]);
  const relatedPosts = useMemo(
    () => blogData.filter((item) => item.slug !== title).slice(0, 3),
    [title]
  );
  const sidebarRecipes = useMemo(() => recipecards.slice(0, 3), []);
  const sidebarVideoRecipes = useMemo(() => Videorecipecards.slice(3, 6), []);

  if (!blog) {
    return <div className="blog-details-page"><p>Blog not found.</p></div>;
  }

  return (
    <>
      <div className="blog-details-page">
        <div className="blog-details-shell">
          <div className="blog-main-layout">
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

            <div className="blog-lower-layout">
              <div className="blog-primary-column">
              
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

              {!!blog.sectionThreeBody && (
                <div className="blog-content-section">
                  <h2>{blog.sectionThreeTitle || 'Section Three'}</h2>
                  <p className="blog-multiline-copy">{blog.sectionThreeBody || ''}</p>
                </div>
              )}

              <div className="blog-content-section">
                <h2>{blog.tipsTitle || 'Tips'}</h2>
                <ul className="blog-tip-list">
                  {(blog.tipsList || []).map((tip, index) => (
                    <li key={`${tip}-${index}`}>{tip}</li>
                  ))}
                </ul>
              </div>
              <div className="blog-content-section">
                <h2>Related Posts</h2>
                <div className="blog-related-posts-grid">
                  {relatedPosts.map((item) => (
                    <Link
                      key={item.slug}
                      className="blog-related-post"
                      to={`/blog/${item.slug}`}
                    >
                      <div className="blog-related-post-image">
                        {item.image ? (
                          <img src={item.image} alt={item.title} />
                        ) : (
                          <div className="blog-gallery-placeholder"></div>
                        )}
                      </div>
                      <div className="blog-related-post-copy">
                        <p>{item.tag || 'Blog'}</p>
                        <h3>{item.title}</h3>
                        <span>{item.readTime || '5 Min'} read</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              </div>

              <aside className="blog-sidebar">
                <div className="blog-sidebar-card">
                  <h3>Categories</h3>
                  <div className="blog-sidebar-links">
                    {recipeCategories.slice(0, 6).map((item) => (
                      <Link key={item.title} to={item.link} className="blog-category-link">
                        <span>{item.title}</span>
                        <small>{item.count}</small>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="blog-sidebar-card">
                  <h3>Related Recipes</h3>
                  <div className="blog-sidebar-list">
                    {sidebarRecipes.map((item) => (
                      <Link
                        key={item.id}
                        to={`/recipe/${slugify(item.title)}`}
                        className="blog-sidebar-entry"
                      >
                        <div className="blog-sidebar-entry-image">
                          <img src={item.image || ''} alt={item.title} />
                        </div>
                        <div className="blog-sidebar-entry-copy">
                          <p>{item.category}</p>
                          <h4>{item.title}</h4>
                          <span><FaClock /> {item.time || '15 min'}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="blog-sidebar-card">
                  <h3>Video Recipes</h3>
                  <div className="blog-sidebar-list">
                    {sidebarVideoRecipes.map((item) => (
                      <Link
                        key={item.id}
                        to={`/video-recipe/${slugify(item.title)}`}
                        className="blog-sidebar-entry"
                      >
                        <div className="blog-sidebar-entry-image">
                          <img src={item.image || ''} alt={item.title} />
                        </div>
                        <div className="blog-sidebar-entry-copy">
                          <p>{item.category}</p>
                          <h4>{item.title}</h4>
                          <span className="blog-sidebar-stars">
                            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                          </span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
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

export default BlogDetails;
