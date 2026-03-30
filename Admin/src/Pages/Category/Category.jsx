import React, { useState, useEffect } from 'react';

const createMongoLikeId = () =>
  Array.from({ length: 24 }, () => Math.floor(Math.random() * 16).toString(16)).join('');

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [newCat, setNewCat] = useState('');
  const [error, setError] = useState('');

  // Fetch categories
  useEffect(() => {
    fetch('http://localhost:5000/api/categories')
      .then(res => res.json())
      .then(data => setCategories(data));
  }, []);

  // Add category
  const handleAdd = async (e) => {
    e.preventDefault();
    setError('');
    if (!newCat.trim()) {
      setError('Category name required');
      return;
    }
    try {
      const res = await fetch('http://localhost:5000/api/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ _id: createMongoLikeId(), name: newCat.trim() })
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
      setCategories([...categories, cat]);
      setNewCat('');
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
              placeholder="Add a new category"
            />
            <button type="submit">Add Category</button>
          </form>
          {error && <div className="page-error" style={{ marginTop: '14px' }}>{error}</div>}
        </div>

        <div className="page-card" style={{ padding: '20px' }}>
          <div className="page-list">
            {categories.length ? (
              categories.map(cat => (
                <div className="page-list-item" key={cat._id}>
                  <strong>{cat.name}</strong>
                  <span className="page-badge">Available</span>
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
