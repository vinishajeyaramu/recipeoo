import React from 'react';
import './Blogcards.css';
import { FaClock } from "react-icons/fa";
import { LiaComments } from "react-icons/lia";
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  const { image, tag, title, author,authorLink, time,tagLink,link, comments, readTime } = blog;

  return (
    <div className="blog-card">
      <div className="blog-img">
        <Link to={link}><img src={image} alt={title} className="blog-image" /></Link>
        {tag && <Link to={tagLink}><div className="blog-tag">{tag}</div></Link>}
      </div>
      <Link to={link}>
        <h3 className="blog-title">{title}</h3>
      </Link>
      <div className='blog-meta'>
        <li>
          <Link to={authorLink}>
            <p>by<strong>{author}</strong></p>
          </Link>
        </li>
        <li className='blog-time'>
          <p><FaClock />{time}</p>
        </li>
        <li className='blog-comments'>
          <p><LiaComments />{comments}</p>
        </li>
        <li className='blog-read'>
           <p>{readTime} Read</p>
        </li>
      </div>
    </div>
  );
};

export default BlogCard;
