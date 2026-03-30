import React, { useEffect, useMemo, useState } from 'react';
import './Downloads.css';

const Downloads = () => {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDownloads = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/downloads');
        const data = await response.json();
        setDownloads(Array.isArray(data) ? data : []);
      } catch (error) {
        setDownloads([]);
      } finally {
        setLoading(false);
      }
    };

    loadDownloads();
  }, []);

  const mostDownloadedType = useMemo(() => {
    if (!downloads.length) return '-';

    const counts = downloads.reduce((accumulator, item) => {
      const key = item.itemType || 'recipe';
      accumulator[key] = (accumulator[key] || 0) + 1;
      return accumulator;
    }, {});

    return Object.entries(counts).sort((left, right) => right[1] - left[1])[0][0];
  }, [downloads]);

  return (
    <div className="download-container">
      <div className="download-header">
        <div className="page-title-group">
          <h1>Downloads</h1>
          <p>Track downloaded content across users and formats.</p>
        </div>
      </div>

      <div className="download-content">
        <div className="page-grid">
          <div className="metric-tile">
            <span>Total downloads</span>
            <strong>{loading ? '...' : downloads.length}</strong>
          </div>
          <div className="metric-tile">
            <span>Most downloaded type</span>
            <strong>{mostDownloadedType}</strong>
          </div>
        </div>

        <div className="download-table">
          <table>
            <thead>
              <tr>
                <th>No.</th>
                <th>Title</th>
                <th>Category</th>
                <th>Type</th>
                <th>Format</th>
                <th>User</th>
                <th>Email</th>
                <th>Downloaded At</th>
              </tr>
            </thead>
            <tbody>
              {downloads.length ? (
                downloads.map((item, index) => (
                  <tr key={item._id || `${item.recipeTitle}-${index}`}>
                    <td>{index + 1}</td>
                    <td>{item.recipeTitle || '-'}</td>
                    <td>{item.category || '-'}</td>
                    <td>{item.itemType || '-'}</td>
                    <td>{(item.format || '-').toUpperCase()}</td>
                    <td>{item.userName || '-'}</td>
                    <td>{item.userEmail || '-'}</td>
                    <td>{item.createdAt ? new Date(item.createdAt).toLocaleString() : '-'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="table-empty">
                    {loading ? 'Loading downloads...' : 'No downloads recorded yet.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
