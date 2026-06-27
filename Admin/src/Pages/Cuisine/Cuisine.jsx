import React, { useEffect, useState } from 'react';
import { getAdminApiUrl, getAdminMediaUrl } from '../../config/api';

const CUISINE_ENDPOINTS = [getAdminApiUrl('/cuisines'), getAdminApiUrl('/cuisine')];

const Cuisine = () => {
  const [cuisines, setCuisines] = useState([]);
  const [newCuisine, setNewCuisine] = useState('');
  const [cuisineImage, setCuisineImage] = useState(null);
  const [editingCuisine, setEditingCuisine] = useState(null);
  const [error, setError] = useState('');
  const [info, setInfo] = useState('');
  const [activeEndpoint, setActiveEndpoint] = useState('');

  useEffect(() => {
    let isMounted = true;

    const loadCuisines = async () => {
      setError('');
      setInfo('');

      for (const endpoint of CUISINE_ENDPOINTS) {
        try {
          const response = await fetch(endpoint);
          if (!response.ok) continue;

          const data = await response.json();
          if (!isMounted) return;

          setCuisines(Array.isArray(data) ? data : []);
          setActiveEndpoint(endpoint);
          return;
        } catch (loadError) {
          continue;
        }
      }

      if (isMounted) {
        setInfo('Cuisine backend endpoint is not available yet.');
      }
    };

    loadCuisines();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleAddCuisine = async (event) => {
    event.preventDefault();
    setError('');
    setInfo('');

    if (!newCuisine.trim()) {
      setError('Cuisine name required');
      return;
    }

    if (!activeEndpoint) {
      setInfo('Add cuisine API first, then this form can save data.');
      return;
    }

    try {
      const isEditing = Boolean(editingCuisine?._id || editingCuisine?.id);
      const cuisineId = editingCuisine?._id || editingCuisine?.id;
      const formData = new FormData();
      formData.append('name', newCuisine.trim());
      if (cuisineImage) {
        formData.append('image', cuisineImage);
      }

      const response = await fetch(`${activeEndpoint}${isEditing ? `/${cuisineId}` : ''}`, {
        method: isEditing ? 'PUT' : 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to add cuisine');
      }

      const cuisine = await response.json();
      setCuisines((current) =>
        isEditing
          ? current.map((item) => ((item._id || item.id) === (cuisine._id || cuisine.id) ? cuisine : item))
          : [...current, cuisine]
      );
      setNewCuisine('');
      setCuisineImage(null);
      setEditingCuisine(null);
    } catch (submitError) {
      setError(submitError.message);
    }
  };

  const handleEditCuisine = (cuisine) => {
    setEditingCuisine(cuisine);
    setNewCuisine(cuisine.name || cuisine.title || '');
    setCuisineImage(null);
    setError('');
    setInfo('');
  };

  const handleCancelEdit = () => {
    setEditingCuisine(null);
    setNewCuisine('');
    setCuisineImage(null);
    setError('');
    setInfo('');
  };

  const handleDeleteCuisine = async (cuisine) => {
    if (!activeEndpoint) {
      setInfo('Cuisine endpoint is not available.');
      return;
    }

    if (!window.confirm(`Delete "${cuisine.name || cuisine.title || 'Cuisine'}"?`)) return;

    try {
      const cuisineId = cuisine._id || cuisine.id;
      const response = await fetch(`${activeEndpoint}/${cuisineId}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete cuisine');
      }

      setCuisines((current) => current.filter((item) => (item._id || item.id) !== cuisineId));
      if ((editingCuisine?._id || editingCuisine?.id) === cuisineId) {
        handleCancelEdit();
      }
    } catch (deleteError) {
      setError(deleteError.message);
    }
  };

  return (
    <div className="page-shell">
      <div className="page-header">
        <div className="page-title-group">
          <h1>Cuisine</h1>
          <p>Organize cuisine types like Indian, Italian, Chinese, and more.</p>
        </div>
        <span className="page-badge">{cuisines.length} cuisines</span>
      </div>

      <div className="page-content">
        <div className="page-grid">
          <div className="metric-tile">
            <span>Total cuisines</span>
            <strong>{cuisines.length}</strong>
          </div>
        </div>

        <div className="page-card" style={{ padding: '20px' }}>
          <form onSubmit={handleAddCuisine} className="page-form">
            <input
              className="page-input"
              value={newCuisine}
              onChange={(event) => setNewCuisine(event.target.value)}
              placeholder={editingCuisine ? 'Edit cuisine' : 'Add a new cuisine'}
            />
            <input
              className="page-input"
              type="file"
              accept="image/*"
              onChange={(event) => setCuisineImage(event.target.files?.[0] || null)}
            />
            <button type="submit">{editingCuisine ? 'Update Cuisine' : 'Add Cuisine'}</button>
            {editingCuisine && <button type="button" onClick={handleCancelEdit}>Cancel</button>}
          </form>
          {error && <div className="page-error" style={{ marginTop: '14px' }}>{error}</div>}
          {info && <div className="page-note" style={{ marginTop: '14px' }}>{info}</div>}
        </div>

        <div className="page-card" style={{ padding: '20px' }}>
          <div className="page-list">
            {cuisines.length ? (
              cuisines.map((cuisine) => (
                <div className="page-list-item" key={cuisine._id || cuisine.id || cuisine.name}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {cuisine.image ? (
                      <img
                        src={getAdminMediaUrl(cuisine.image)}
                        alt={cuisine.name || 'Cuisine'}
                        width="42"
                        height="42"
                        style={{ borderRadius: '999px', objectFit: 'cover' }}
                      />
                    ) : null}
                    <strong>{cuisine.name || cuisine.title || 'Cuisine'}</strong>
                  </div>
                  <div className="table-action-group">
                    <button className="table-action-button edit" onClick={() => handleEditCuisine(cuisine)}>Edit</button>
                    <button className="table-action-button delete" onClick={() => handleDeleteCuisine(cuisine)}>Delete</button>
                  </div>
                </div>
              ))
            ) : (
              <div className="table-empty">No cuisines available yet.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuisine;
