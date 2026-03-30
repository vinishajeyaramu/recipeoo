import React, { useEffect, useState } from 'react';

const CUISINE_ENDPOINTS = [
  'http://localhost:5000/api/cuisines',
  'http://localhost:5000/api/cuisine',
];

const Cuisine = () => {
  const [cuisines, setCuisines] = useState([]);
  const [newCuisine, setNewCuisine] = useState('');
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
          if (!response.ok) {
            continue;
          }

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
        setInfo('Cuisine backend endpoint is not available yet. The page UI is ready once the API is added.');
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
      const response = await fetch(activeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newCuisine.trim() }),
      });

      if (!response.ok) {
        throw new Error('Failed to add cuisine');
      }

      const cuisine = await response.json();
      setCuisines((current) => [...current, cuisine]);
      setNewCuisine('');
    } catch (submitError) {
      setError(submitError.message);
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
              placeholder="Add a new cuisine"
            />
            <button type="submit">Add Cuisine</button>
          </form>
          {error && <div className="page-error" style={{ marginTop: '14px' }}>{error}</div>}
          {info && <div className="page-note" style={{ marginTop: '14px' }}>{info}</div>}
        </div>

        <div className="page-card" style={{ padding: '20px' }}>
          <div className="page-list">
            {cuisines.length ? (
              cuisines.map((cuisine) => (
                <div className="page-list-item" key={cuisine._id || cuisine.id || cuisine.name}>
                  <strong>{cuisine.name || cuisine.title || 'Cuisine'}</strong>
                  <span className="page-badge">Active</span>
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
