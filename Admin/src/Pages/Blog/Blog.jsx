import React, { useEffect, useMemo, useState } from 'react';
import './Blog.css';
import { getAdminApiUrl, getAdminMediaUrl } from '../../config/api';

const API_BASE = getAdminApiUrl('/blogs');

const emptyCardForm = {
  title: '',
  category: '',
  heroImage: null,
  author: '',
  publishedAt: '',
  comments: '',
  readTime: '',
};

const emptyOpeningSection = { heading: '', text: '' };
const emptyListSection = { heading: '', items: ['', '', '', '', ''] };

const emptyBlogForm = {
  title: '',
  category: '',
  heroImage: null,
  author: '',
  publishedAt: '',
  comments: '',
  readTime: '',
  shortInfo: '',
  excerpt: '',
  openingSections: [{ ...emptyOpeningSection }],
  numberedSections: [{ ...emptyListSection }],
  pointedSections: [{ ...emptyListSection }],
  conclusion: '',
  galleryImages: [],
};

const formatDate = (value) => {
  if (!value) return '-';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString([], { day: '2-digit', month: 'short', year: 'numeric' });
};

const normalizeOpeningSections = (item) => {
  if (Array.isArray(item.openingSections) && item.openingSections.length) {
    return item.openingSections.map((section) => ({
      heading: section.heading || '',
      text: section.text || '',
    }));
  }

  if (item.intro) {
    return [{ heading: '', text: item.intro }];
  }

  return [{ ...emptyOpeningSection }];
};

const normalizeListSections = (sections, legacyTitle = '', legacyItems = []) => {
  if (Array.isArray(sections) && sections.length) {
    return sections.map((section) => ({
      heading: section.heading || '',
      items:
        Array.isArray(section.items) && section.items.length
          ? section.items
          : ['', '', '', '', ''],
    }));
  }

  if (legacyTitle || legacyItems.length) {
    return [{ heading: legacyTitle || '', items: legacyItems.length ? legacyItems : ['', '', '', '', ''] }];
  }

  return [{ ...emptyListSection }];
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
    const { name, value, files, type } = event.target;
    setCardForm((current) => ({ ...current, [name]: type === 'file' ? files[0] : value }));
  };

  const handleBlogChange = (event) => {
    const { name, value, files, type, multiple } = event.target;
    setBlogForm((current) => ({
      ...current,
      [name]: type === 'file' ? (multiple ? Array.from(files) : files[0]) : value,
    }));
  };

  const updateOpeningSection = (index, field, value) => {
    setBlogForm((current) => ({
      ...current,
      openingSections: current.openingSections.map((section, sectionIndex) =>
        sectionIndex === index ? { ...section, [field]: value } : section
      ),
    }));
  };

  const addOpeningSection = () => {
    setBlogForm((current) => ({
      ...current,
      openingSections: [...current.openingSections, { ...emptyOpeningSection }],
    }));
  };

  const removeOpeningSection = (index) => {
    setBlogForm((current) => ({
      ...current,
      openingSections:
        current.openingSections.length > 1
          ? current.openingSections.filter((_, sectionIndex) => sectionIndex !== index)
          : current.openingSections,
    }));
  };

  const updateListSectionHeading = (sectionField, sectionIndex, value) => {
    setBlogForm((current) => ({
      ...current,
      [sectionField]: current[sectionField].map((section, index) =>
        index === sectionIndex ? { ...section, heading: value } : section
      ),
    }));
  };

  const updateListSectionItem = (sectionField, sectionIndex, itemIndex, value) => {
    setBlogForm((current) => ({
      ...current,
      [sectionField]: current[sectionField].map((section, index) =>
        index === sectionIndex
          ? {
              ...section,
              items: section.items.map((item, currentItemIndex) =>
                currentItemIndex === itemIndex ? value : item
              ),
            }
          : section
      ),
    }));
  };

  const addListSection = (sectionField) => {
    setBlogForm((current) => ({
      ...current,
      [sectionField]: [...current[sectionField], { ...emptyListSection, items: ['', '', '', '', ''] }],
    }));
  };

  const removeListSection = (sectionField, sectionIndex) => {
    setBlogForm((current) => ({
      ...current,
      [sectionField]:
        current[sectionField].length > 1
          ? current[sectionField].filter((_, index) => index !== sectionIndex)
          : current[sectionField],
    }));
  };

  const addListItem = (sectionField, sectionIndex) => {
    setBlogForm((current) => ({
      ...current,
      [sectionField]: current[sectionField].map((section, index) =>
        index === sectionIndex && section.items.length < 8
          ? { ...section, items: [...section.items, ''] }
          : section
      ),
    }));
  };

  const removeListItem = (sectionField, sectionIndex, itemIndex) => {
    setBlogForm((current) => ({
      ...current,
      [sectionField]: current[sectionField].map((section, index) =>
        index === sectionIndex
          ? {
              ...section,
              items:
                section.items.length > 5
                  ? section.items.filter((_, currentItemIndex) => currentItemIndex !== itemIndex)
                  : section.items,
            }
          : section
      ),
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
        category: item.category || '',
        heroImage: null,
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
      shortInfo: item.shortInfo || '',
      excerpt: item.excerpt || '',
      openingSections: normalizeOpeningSections(item),
      numberedSections: normalizeListSections(
        item.numberedSections,
        item.sectionOneTitle,
        item.sectionOneBody ? [item.sectionOneBody] : []
      ),
      pointedSections: normalizeListSections(
        item.pointedSections,
        item.tipsTitle,
        Array.isArray(item.tipsList) ? item.tipsList : []
      ),
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
    if (!cardForm.title || !cardForm.category || !cardForm.author || !cardForm.publishedAt || !cardForm.comments || !cardForm.readTime) {
      alert('Please fill all blog card fields.');
      return;
    }

    const formData = new FormData();
    formData.append('type', 'Card');
    Object.entries(cardForm).forEach(([key, value]) => {
      if (key === 'heroImage') return;
      formData.append(key, value);
    });
    if (cardForm.heroImage) formData.append('heroImage', cardForm.heroImage);

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

  const handleBlogSubmit = async () => {
    const requiredFields = [
      'title',
      'category',
      'author',
      'publishedAt',
      'comments',
      'readTime',
      'shortInfo',
      'excerpt',
      'conclusion',
    ];

    if (requiredFields.some((field) => !blogForm[field])) {
      alert('Please complete the blog article form.');
      return;
    }

    const openingSections = blogForm.openingSections.filter(
  (section) => section.heading || section.text
);

const numberedSections = blogForm.numberedSections
  .map((section) => ({
    heading: section.heading,
    items: section.items.filter(Boolean),
  }))
  .filter((section) => section.heading || section.items.length);

if (numberedSections.some((section) => section.items.length < 5)) {
  alert('Please add at least 5 numbered tips in each numbered section.');
  return;
}

const pointedSections = blogForm.pointedSections
  .map((section) => ({
    heading: section.heading,
    items: section.items.filter(Boolean),
  }))
  .filter((section) => section.heading || section.items.length);

if (pointedSections.some((section) => section.items.length < 5)) {
  alert('Please add at least 5 bullet tips in each bullet section.');
  return;
}
    const formData = new FormData();
    formData.append('type', 'Blog');
    Object.entries(blogForm).forEach(([key, value]) => {
      if (
        key === 'heroImage' ||
        key === 'galleryImages' ||
        key === 'openingSections' ||
        key === 'numberedSections' ||
        key === 'pointedSections'
      ) {
        return;
      }
      formData.append(key, value);
    });
    formData.append('openingSections', JSON.stringify(openingSections));
    formData.append('numberedSections', JSON.stringify(numberedSections));
    formData.append('pointedSections', JSON.stringify(pointedSections));
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

  const renderListSections = (sectionField, title, itemPlaceholder) => (
    <div className="dynamic-form-section blog-dynamic-section">
      <div className="dynamic-form-heading">
        <h3>{title}</h3>
        <button type="button" onClick={() => addListSection(sectionField)}>+</button>
      </div>
      {blogForm[sectionField].map((section, sectionIndex) => (
        <div className="blog-list-section" key={`${sectionField}-${sectionIndex}`}>
          <div className="dynamic-form-row blog-section-heading-row">
            <input
              placeholder="Heading"
              value={section.heading}
              onChange={(event) => updateListSectionHeading(sectionField, sectionIndex, event.target.value)}
            />
            <button type="button" onClick={() => removeListSection(sectionField, sectionIndex)}>-</button>
          </div>
          {section.items.map((item, itemIndex) => (
            <div className="dynamic-form-row blog-list-item-row" key={`${sectionField}-${sectionIndex}-${itemIndex}`}>
              <input
                placeholder={itemPlaceholder}
                value={item}
                onChange={(event) =>
                  updateListSectionItem(sectionField, sectionIndex, itemIndex, event.target.value)
                }
              />
              <button type="button" onClick={() => removeListItem(sectionField, sectionIndex, itemIndex)}>-</button>
            </div>
          ))}
          <button
            className="inline-add-button"
            type="button"
            onClick={() => addListItem(sectionField, sectionIndex)}
          >
            + Add item
          </button>
        </div>
      ))}
    </div>
  );

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
                  <th>Image</th>
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
                    <td>
                      {item.cardImage || item.heroImage ? (
                        <img
                          src={getAdminMediaUrl(item.cardImage || item.heroImage)}
                          alt={item.title}
                          width="56"
                          height="56"
                        />
                      ) : (
                        '-'
                      )}
                    </td>
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
                    <td colSpan="11" className="table-empty">No blog data available yet.</td>
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
            <input name="category" placeholder="Blog Category" value={cardForm.category} onChange={handleCardChange} />
            <label className="field-label">Blog Card Image</label>
            <input name="heroImage" type="file" onChange={handleCardChange} />
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
            <input name="shortInfo" placeholder="Short info" value={blogForm.shortInfo} onChange={handleBlogChange} />
            <textarea className="text-box" name="excerpt" placeholder="Short hero excerpt" value={blogForm.excerpt} onChange={handleBlogChange} />

            <div className="dynamic-form-section blog-dynamic-section">
              <div className="dynamic-form-heading">
                <h3>Content Blocks</h3>
                <button type="button" onClick={addOpeningSection}>+</button>
              </div>
              {blogForm.openingSections.map((section, index) => (
                <div className="dynamic-form-row blog-opening-row" key={`opening-${index}`}>
                  <input
                    placeholder="Heading"
                    value={section.heading}
                    onChange={(event) => updateOpeningSection(index, 'heading', event.target.value)}
                  />
                  <textarea
                    className="text-box"
                    placeholder="Opening paragraph"
                    value={section.text}
                    onChange={(event) => updateOpeningSection(index, 'text', event.target.value)}
                  />
                  <button type="button" onClick={() => removeOpeningSection(index)}>-</button>
                </div>
              ))}
            </div>

            {renderListSections('numberedSections', 'Numbered Lists', 'Numbered list item')}
            {renderListSections('pointedSections', 'Pointed Lists', 'Pointed list item')}

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
