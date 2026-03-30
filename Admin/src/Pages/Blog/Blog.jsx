import React, { useEffect, useMemo, useState } from 'react';
import './Blog.css';

const API_BASE = 'http://localhost:5000/api/blogs';

const emptyCardForm = {
  title: '',
  author: '',
  publishedAt: '',
  comments: '',
  readTime: '',
};

const emptyBlogForm = {
  title: '',
  category: '',
  heroImage: null,
  author: '',
  publishedAt: '',
  comments: '',
  readTime: '',
  excerpt: '',
  intro: '',
  sectionOneTitle: '',
  sectionOneBody: '',
  sectionTwoTitle: '',
  sectionTwoBody: '',
  tipsTitle: '',
  tipsList: '',
  conclusion: '',
  galleryImages: [],
};

const formatDate = (value) => {
  if (!value) return '-';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString([], { day: '2-digit', month: 'short', year: 'numeric' });
};

const Blog = () => {
  const [data, setData] = useState([]);
  const [showCardModal, setShowCardModal] = useState(false);
  const [showBlogModal, setShowBlogModal] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [filter, setFilter] = useState('');
  const [cardForm, setCardForm] = useState(emptyCardForm);
  const [blogForm, setBlogForm] = useState(emptyBlogForm);

  const loadBlogs = async () => {
    try {
      const response = await fetch(API_BASE);
      const items = await response.json();
      setData(Array.isArray(items) ? items : []);
    } catch (error) {
      setData([]);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const closeModals = () => {
    setShowCardModal(false);
    setShowBlogModal(false);
    setEditingItem(null);
    setCardForm(emptyCardForm);
    setBlogForm(emptyBlogForm);
  };

  const handleCardChange = (event) => {
    const { name, value } = event.target;
    setCardForm((current) => ({ ...current, [name]: value }));
  };

  const handleBlogChange = (event) => {
    const { name, value, files, type, multiple } = event.target;
    setBlogForm((current) => ({
      ...current,
      [name]: type === 'file' ? (multiple ? Array.from(files) : files[0]) : value,
    }));
  };

  const openCardModal = () => {
    setEditingItem(null);
    setCardForm(emptyCardForm);
    setShowCardModal(true);
  };

  const openBlogModal = () => {
    setEditingItem(null);
    setBlogForm(emptyBlogForm);
    setShowBlogModal(true);
  };

  const openEditModal = (item) => {
    setEditingItem(item);

    if (item.type === 'Card') {
      setCardForm({
        title: item.title || '',
        author: item.author || '',
        publishedAt: item.publishedAt || '',
        comments: item.comments || '',
        readTime: item.readTime || '',
      });
      setShowCardModal(true);
      return;
    }

    setBlogForm({
      title: item.title || '',
      category: item.category || '',
      heroImage: null,
      author: item.author || '',
      publishedAt: item.publishedAt || '',
      comments: item.comments || '',
      readTime: item.readTime || '',
      excerpt: item.excerpt || '',
      intro: item.intro || '',
      sectionOneTitle: item.sectionOneTitle || '',
      sectionOneBody: item.sectionOneBody || '',
      sectionTwoTitle: item.sectionTwoTitle || '',
      sectionTwoBody: item.sectionTwoBody || '',
      tipsTitle: item.tipsTitle || '',
      tipsList: Array.isArray(item.tipsList) ? item.tipsList.join('\n') : '',
      conclusion: item.conclusion || '',
      galleryImages: [],
    });
    setShowBlogModal(true);
  };

  const handleDelete = async (item) => {
    if (!window.confirm(`Delete "${item.title}"?`)) return;

    await fetch(`${API_BASE}/${item._id}`, { method: 'DELETE' });
    setData((current) => current.filter((entry) => entry._id !== item._id));
  };

  const handleCardSubmit = async () => {
    if (!cardForm.title || !cardForm.author || !cardForm.publishedAt || !cardForm.comments || !cardForm.readTime) {
      alert('Please fill all blog card fields.');
      return;
    }

    const payload = {
      type: 'Card',
      ...cardForm,
    };

    const response = await fetch(editingItem ? `${API_BASE}/${editingItem._id}` : API_BASE, {
      method: editingItem ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const saved = await response.json();
    setData((current) =>
      editingItem ? current.map((item) => (item._id === saved._id ? saved : item)) : [saved, ...current]
    );
    closeModals();
  };

  const handleBlogSubmit = async () => {
    const requiredFields = [
      'title',
      'category',
      'author',
      'publishedAt',
      'comments',
      'readTime',
      'excerpt',
      'intro',
      'sectionOneTitle',
      'sectionOneBody',
      'sectionTwoTitle',
      'sectionTwoBody',
      'tipsTitle',
      'conclusion',
    ];

    if (requiredFields.some((field) => !blogForm[field])) {
      alert('Please complete the blog article form.');
      return;
    }

    const formData = new FormData();
    formData.append('type', 'Blog');
    Object.entries(blogForm).forEach(([key, value]) => {
      if (key === 'heroImage' || key === 'galleryImages') return;
      formData.append(key, value);
    });
    if (blogForm.heroImage) formData.append('heroImage', blogForm.heroImage);
    blogForm.galleryImages.forEach((file) => formData.append('galleryImages', file));

    const response = await fetch(editingItem ? `${API_BASE}/${editingItem._id}` : API_BASE, {
      method: editingItem ? 'PUT' : 'POST',
      body: formData,
    });

    const saved = await response.json();
    setData((current) =>
      editingItem ? current.map((item) => (item._id === saved._id ? saved : item)) : [saved, ...current]
    );
    closeModals();
  };

  const filteredData = useMemo(
    () =>
      data.filter((item) =>
        [item.title, item.author, item.category, item.readTime]
          .filter(Boolean)
          .some((field) => field.toLowerCase().includes(filter.toLowerCase()))
      ),
    [data, filter]
  );

  const articleCount = data.filter((item) => item.type === 'Blog').length;

  return (
    <>
      <div className="blog-container">
        <div className="blog-header">
          <div className="page-title-group">
            <h1>BLOG</h1>
            <p>Manage blog cards and detailed articles from MongoDB-backed data.</p>
          </div>
        </div>

        <div className="blog-content">
          <div className="page-grid">
            <div className="metric-tile">
              <span>Blog cards</span>
              <strong>{data.filter((item) => item.type === 'Card').length}</strong>
            </div>
            <div className="metric-tile">
              <span>Blog articles</span>
              <strong>{articleCount}</strong>
            </div>
          </div>

          <div className="blog-actions">
            <button onClick={openCardModal}>Add New Blog Card</button>
            <button onClick={openBlogModal}>Add New Blog</button>
            <input
              type="text"
              className="filter-input"
              placeholder="Filter title/author/category/read time"
              value={filter}
              onChange={(event) => setFilter(event.target.value)}
            />
          </div>

          <div className="blog-table">
            <table>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Type</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th>Published</th>
                  <th>Category</th>
                  <th>Comments</th>
                  <th>Read Time</th>
                  <th>Excerpt</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>{item.type}</td>
                    <td>{item.title}</td>
                    <td>{item.author || '-'}</td>
                    <td>{formatDate(item.publishedAt)}</td>
                    <td>{item.category || '-'}</td>
                    <td>{item.comments || '-'}</td>
                    <td>{item.readTime || '-'}</td>
                    <td>{item.excerpt || '-'}</td>
                    <td>
                      <div className="table-action-group">
                        <button className="table-action-button edit" onClick={() => openEditModal(item)}>Edit</button>
                        <button className="table-action-button delete" onClick={() => handleDelete(item)}>Delete</button>
                      </div>
                    </td>
                  </tr>
                ))}
                {!filteredData.length && (
                  <tr>
                    <td colSpan="10" className="table-empty">No blog data available yet.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showCardModal && (
        <div className="card-modal-overlay">
          <div className="card-modal">
            <h2>{editingItem ? 'Edit Blog Card' : 'Add New Blog Card'}</h2>
            <input name="title" placeholder="Title" value={cardForm.title} onChange={handleCardChange} />
            <input name="author" placeholder="Author" value={cardForm.author} onChange={handleCardChange} />
            <input name="publishedAt" type="date" value={cardForm.publishedAt} onChange={handleCardChange} />
            <input name="comments" placeholder="Comment count" value={cardForm.comments} onChange={handleCardChange} />
            <input name="readTime" placeholder="Read time (example: 5 min)" value={cardForm.readTime} onChange={handleCardChange} />
            <div className="modal-buttons">
              <button onClick={handleCardSubmit}>{editingItem ? 'Update' : 'Save'}</button>
              <button onClick={closeModals}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {showBlogModal && (
        <div className="blog-modal-overlay">
          <div className="blog-modal">
            <h2>{editingItem ? 'Edit Blog Article' : 'Add New Blog Article'}</h2>
            <div className="blog-form-grid">
              <input name="title" placeholder="Article title" value={blogForm.title} onChange={handleBlogChange} />
              <input name="category" placeholder="Category" value={blogForm.category} onChange={handleBlogChange} />
              <input name="author" placeholder="Author" value={blogForm.author} onChange={handleBlogChange} />
              <input name="publishedAt" type="date" value={blogForm.publishedAt} onChange={handleBlogChange} />
              <input name="comments" placeholder="Comment count" value={blogForm.comments} onChange={handleBlogChange} />
              <input name="readTime" placeholder="Read time (example: 5 min)" value={blogForm.readTime} onChange={handleBlogChange} />
            </div>
            <input name="heroImage" type="file" onChange={handleBlogChange} />
            <textarea className="text-box" name="excerpt" placeholder="Short hero excerpt" value={blogForm.excerpt} onChange={handleBlogChange} />
            <textarea className="text-box" name="intro" placeholder="Opening paragraph" value={blogForm.intro} onChange={handleBlogChange} />
            <input name="sectionOneTitle" placeholder="Section one title" value={blogForm.sectionOneTitle} onChange={handleBlogChange} />
            <textarea className="text-box" name="sectionOneBody" placeholder="Section one content" value={blogForm.sectionOneBody} onChange={handleBlogChange} />
            <input name="sectionTwoTitle" placeholder="Section two title" value={blogForm.sectionTwoTitle} onChange={handleBlogChange} />
            <textarea className="text-box" name="sectionTwoBody" placeholder="Section two content" value={blogForm.sectionTwoBody} onChange={handleBlogChange} />
            <input name="tipsTitle" placeholder="Tips block title" value={blogForm.tipsTitle} onChange={handleBlogChange} />
            <textarea className="text-box" name="tipsList" placeholder="Tips list, one tip per line" value={blogForm.tipsList} onChange={handleBlogChange} />
            <textarea className="text-box" name="conclusion" placeholder="Closing paragraph" value={blogForm.conclusion} onChange={handleBlogChange} />
            <input name="galleryImages" type="file" multiple onChange={handleBlogChange} />
            <div className="modal-buttons">
              <button onClick={handleBlogSubmit}>{editingItem ? 'Update' : 'Save'}</button>
              <button onClick={closeModals}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
