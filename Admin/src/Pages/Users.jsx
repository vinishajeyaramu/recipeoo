import React, { useEffect, useMemo, useState } from 'react';

const USER_ENDPOINTS = ['http://localhost:5000/api/users'];

const normalizeUsers = (payload) => (Array.isArray(payload) ? payload : []);

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    const fetchUsers = async () => {
      setLoading(true);
      setError('');

      const settled = await Promise.allSettled(
        USER_ENDPOINTS.map(async (endpoint) => {
          const response = await fetch(endpoint);
          if (!response.ok) {
            throw new Error('User endpoint unavailable');
          }
          return normalizeUsers(await response.json());
        })
      );

      if (!isMounted) return;

      const loadedUsers = settled
        .filter((result) => result.status === 'fulfilled')
        .flatMap((result) => result.value);

      setUsers(loadedUsers);
      setLoading(false);

      if (!loadedUsers.length) {
        setError('No users were returned. If the backend uses a different endpoint, we can hook it up quickly.');
      }
    };

    fetchUsers();

    return () => {
      isMounted = false;
    };
  }, []);

  const activeUsers = useMemo(
    () => users.filter((user) => user.status === 'active' || user.isActive === true).length,
    [users]
  );

  return (
    <div className="page-shell">
      <div className="page-header">
        <div className="page-title-group">
          <h1>Users</h1>
          <p>Monitor registered users and keep an eye on account activity.</p>
        </div>
        <span className="page-badge">{loading ? 'Loading...' : `${users.length} total users`}</span>
      </div>

      <div className="page-content">
        <div className="page-grid">
          <div className="metric-tile">
            <span>Total users</span>
            <strong>{users.length}</strong>
          </div>
          <div className="metric-tile">
            <span>Active users</span>
            <strong>{activeUsers}</strong>
          </div>
        </div>

        {error && <div className="page-note">{error}</div>}

        <div className="page-card page-table-wrap">
          <table className="page-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.length ? (
                users.map((user, index) => (
                  <tr key={user._id || user.id || index}>
                    <td>{index + 1}</td>
                    <td>{user.name || user.username || 'Unknown user'}</td>
                    <td>{user.email || '-'}</td>
                    <td>{user.status || (user.isActive ? 'active' : 'inactive') || '-'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="table-empty">
                    {loading ? 'Loading users...' : 'No user data available yet.'}
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

export default Users;
