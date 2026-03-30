import React from 'react';
import './Populartags.css';

const PopularTags = ({ tags, tags2,heading, subheading }) => {
  return (
    <section className="popular-tags-section">
      <h2 className="popular-tags-title">{heading}</h2>
      <p className="popular-tags-subtitle">{subheading}</p>
      <div className="tags-container">
        {tags.map((tag, index) => (
          <a href={tag.link} key={index}>
            <button className="tag-pill">
              {tag.name}
            </button>
          </a>
        ))}
      </div>
      <div className="tags-container-2">
        {tags2.map((tag, index) => (
          <a href={tag.link} key={index}>
            <button className="tag-pill">
              {tag.name}
            </button>
          </a>
        ))}
      </div>
    </section>
  );
};

export default PopularTags;
