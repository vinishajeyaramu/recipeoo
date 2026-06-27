import React, { useState, useEffect } from 'react';
import { getAdminApiUrl } from '../../config/api';

const createMongoLikeId = () =>
  Array.from({ length: 24 }, () => Math.floor(Math.random() * 16).toString(16)).join('');

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [newCat, setNewCat] = useState('');
  const [editingCategory, setEditingCategory] = useState(null);
  const [error, setError] = useState('');

  // Fetch categories
  useEffect(() => {
    fetch(getAdminApiUrl('/categories'))
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    setError('');
    if (!newCat.trim()) {
      setError('Category name required');
      return;
    }
    try {
      const isEditing = Boolean(editingCategory?._id);
      const res = await fetch(`${getAdminApiUrl('/categories')}${isEditing ? `/${editingCategory._id}` : ''}`, {
        method: isEditing ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(isEditing ? { name: newCat.trim() } : { _id: createMongoLikeId(), name: newCat.trim() })
      });
      if (!res.ok) {
        const errorText = await res.text();
        let errData = {};
        try {
          errData = JSON.parse(errorText);
        } catch (parseError) {
          errData = { error: errorText };
        }
        throw new Error(errData.error || 'Category already exists or invalid');
      }
      const cat = await res.json();
      setCategories((current) =>
        isEditing ? current.map((item) => (item._id === cat._id ? cat : item)) : [...current, cat]
      );
      setNewCat('');
      setEditingCategory(null);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleEdit = (category) => {
    setEditingCategory(category);
    setNewCat(category.name || '');
    setError('');
  };

  const handleCancelEdit = () => {
    setEditingCategory(null);
    setNewCat('');
    setError('');
  };

  const handleDelete = async (category) => {
    if (!window.confirm(`Delete "${category.name}"?`)) return;

    try {
      const res = await fetch(`${getAdminApiUrl('/categories')}/${category._id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        throw new Error('Unable to delete category');
      }

      setCategories((current) => current.filter((item) => item._id !== category._id));
      if (editingCategory?._id === category._id) {
        handleCancelEdit();
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="page-shell">
      <div className="page-header">
        <div className="page-title-group">
          <h1>Category</h1>
          <p>Manage the recipe categories available across the platform.</p>
        </div>
        <span className="page-badge">{categories.length} categories</span>
      </div>

      <div className="page-content">
        <div className="page-grid">
          <div className="metric-tile">
            <span>Total categories</span>
            <strong>{categories.length}</strong>
          </div>
        </div>

        <div className="page-card" style={{ padding: '20px' }}>
          <form onSubmit={handleAdd} className="page-form">
            <input
              className="page-input"
              value={newCat}
              onChange={e => setNewCat(e.target.value)}
              placeholder={editingCategory ? 'Edit category' : 'Add a new category'}
            />
            <button type="submit">{editingCategory ? 'Update Category' : 'Add Category'}</button>
            {editingCategory && <button type="button" onClick={handleCancelEdit}>Cancel</button>}
          </form>
          {error && <div className="page-error" style={{ marginTop: '14px' }}>{error}</div>}
        </div>

        <div className="page-card" style={{ padding: '20px' }}>
          <div className="page-list">
            {categories.length ? (
              categories.map(cat => (
                <div className="page-list-item" key={cat._id}>
                  <strong>{cat.name}</strong>
                  <div className="table-action-group">
                    <button className="table-action-button edit" onClick={() => handleEdit(cat)}>Edit</button>
                    <button className="table-action-button delete" onClick={() => handleDelete(cat)}>Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="table-empty">No categories added yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
