import React, { useEffect, useMemo, useState } from 'react';
import './Dashboard.css';

const API_BASE_URL = 'http://localhost:5000/api';

const metricPalette = [
  { key: 'recipes', label: 'Recipe Cards', color: '#EBB22F' },
  { key: 'blogs', label: 'Blogs', color: '#2E8B57' },
  { key: 'users', label: 'Users', color: '#D96C06' },
  { key: 'videoRecipes', label: 'Video Recipes', color: '#6B5B95' },
  { key: 'categories', label: 'Categories', color: '#008B8B' },
];

const endpointGroups = {
  recipes: ['cards', 'recipes'],
  blogs: ['blogs', 'blog'],
  users: ['users'],
  videoRecipes: ['video-cards', 'video-recipes'],
  categories: ['categories'],
};

const formatLabel = (value) =>
  value
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^./, (char) => char.toUpperCase());

const normalizeArray = (data) => (Array.isArray(data) ? data : []);

const fetchCollection = async (endpoint) => {
  const response = await fetch(`${API_BASE_URL}/${endpoint}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }
  const json = await response.json();
  return normalizeArray(json);
};

const buildArc = (cx, cy, radius, startAngle, endAngle) => {
  const start = {
    x: cx + radius * Math.cos(startAngle),
    y: cy + radius * Math.sin(startAngle),
  };
  const end = {
    x: cx + radius * Math.cos(endAngle),
    y: cy + radius * Math.sin(endAngle),
  };
  const largeArcFlag = endAngle - startAngle > Math.PI ? 1 : 0;

  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${end.x} ${end.y} Z`;
};

const Dashboard = () => {
  const [collections, setCollections] = useState({
    recipes: [],
    blogs: [],
    users: [],
    videoRecipes: [],
    categories: [],
  });
  const [loading, setLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    let isMounted = true;

    const loadDashboardData = async () => {
      setLoading(true);

      const results = await Promise.all(
        Object.entries(endpointGroups).map(async ([key, endpoints]) => {
          const settled = await Promise.allSettled(endpoints.map(fetchCollection));
          const data = settled
            .filter((result) => result.status === 'fulfilled')
            .flatMap((result) => result.value);

          return [key, data];
        })
      );

      if (!isMounted) return;

      setCollections(Object.fromEntries(results));
      setLastUpdated(new Date());
      setLoading(false);
    };

    loadDashboardData();

    return () => {
      isMounted = false;
    };
  }, []);

  const metrics = useMemo(
    () =>
      metricPalette.map((item) => ({
        ...item,
        value: collections[item.key]?.length ?? 0,
      })),
    [collections]
  );

  const totalItems = metrics.reduce((sum, metric) => sum + metric.value, 0);
  const maxValue = Math.max(...metrics.map((metric) => metric.value), 1);

  const categoryBreakdown = useMemo(() => {
    const counts = collections.recipes.reduce((accumulator, item) => {
      const categoryName = item.category || 'Uncategorized';
      accumulator[categoryName] = (accumulator[categoryName] || 0) + 1;
      return accumulator;
    }, {});

    return Object.entries(counts)
      .map(([label, value]) => ({ label, value }))
      .sort((first, second) => second.value - first.value)
      .slice(0, 5);
  }, [collections.recipes]);

  const cuisineBreakdown = useMemo(() => {
    const counts = collections.recipes.reduce((accumulator, item) => {
      const cuisineName = item.cuisine || 'Unspecified';
      accumulator[cuisineName] = (accumulator[cuisineName] || 0) + 1;
      return accumulator;
    }, {});

    return Object.entries(counts)
      .map(([label, value]) => ({ label, value }))
      .sort((first, second) => second.value - first.value)
      .slice(0, 5);
  }, [collections.recipes]);

  let runningAngle = -Math.PI / 2;
  const pieSegments = metrics.map((metric) => {
    const sliceAngle = totalItems === 0 ? 0 : (metric.value / totalItems) * Math.PI * 2;
    const segment = {
      ...metric,
      path:
        sliceAngle === 0
          ? null
          : buildArc(80, 80, 68, runningAngle, runningAngle + sliceAngle),
      percentage: totalItems === 0 ? 0 : Math.round((metric.value / totalItems) * 100),
    };
    runningAngle += sliceAngle;
    return segment;
  });

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div>
          <h1>Dashboard Overview</h1>
          <p>Track recipes, blogs, users, video recipes, and categories from one place.</p>
        </div>
        <div className="dashboard-status">
          <span className={`status-pill ${loading ? 'loading' : 'ready'}`}>
            {loading ? 'Loading data...' : 'Live snapshot'}
          </span>
          <small>
            {lastUpdated
              ? `Updated ${lastUpdated.toLocaleTimeString([], {
                  hour: '2-digit',
                  minute: '2-digit',
                })}`
              : 'Waiting for data'}
          </small>
        </div>
      </div>

      <div className="dashboard-content">
        <section className="stats-grid">
          {metrics.map((metric) => (
            <article className="stats-card" key={metric.key}>
              <span className="stats-accent" style={{ backgroundColor: metric.color }} />
              <h2>{metric.label}</h2>
              <strong>{metric.value}</strong>
              <p>
                {totalItems === 0
                  ? 'No data loaded yet'
                  : `${Math.round((metric.value / totalItems) * 100)}% of tracked items`}
              </p>
            </article>
          ))}
        </section>

        <section className="dashboard-panels">
          <article className="chart-card">
            <div className="card-heading">
              <h3>Content Mix</h3>
              <p>Pie chart of all major content types in the admin panel.</p>
            </div>
            <div className="pie-layout">
              <svg viewBox="0 0 160 160" className="pie-chart" aria-label="Content mix pie chart">
                {pieSegments.map(
                  (segment) =>
                    segment.path && (
                      <path
                        key={segment.key}
                        d={segment.path}
                        fill={segment.color}
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                    )
                )}
                {!totalItems && <circle cx="80" cy="80" r="68" fill="#f4efe2" />}
                <circle cx="80" cy="80" r="34" fill="#ffffff" />
                <text x="80" y="76" textAnchor="middle" className="pie-total-label">
                  Total
                </text>
                <text x="80" y="96" textAnchor="middle" className="pie-total-value">
                  {totalItems}
                </text>
              </svg>

              <div className="chart-legend">
                {pieSegments.map((segment) => (
                  <div className="legend-item" key={segment.key}>
                    <span className="legend-dot" style={{ backgroundColor: segment.color }} />
                    <div>
                      <strong>{segment.label}</strong>
                      <p>
                        {segment.value} items
                        {!loading && ` | ${segment.percentage}%`}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </article>

          <article className="chart-card">
            <div className="card-heading">
              <h3>Count Comparison</h3>
              <p>Bar chart to compare how each section is performing right now.</p>
            </div>

            <div className="bar-chart">
              {metrics.map((metric) => (
                <div className="bar-row" key={metric.key}>
                  <div className="bar-row-header">
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                  </div>
                  <div className="bar-track">
                    <div
                      className="bar-fill"
                      style={{
                        width: `${(metric.value / maxValue) * 100}%`,
                        background: `linear-gradient(90deg, ${metric.color}, ${metric.color}CC)`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="dashboard-panels">
          <article className="chart-card">
            <div className="card-heading">
              <h3>Recipe Categories</h3>
              <p>Top categories based on recipe card and recipe entries.</p>
            </div>

            <div className="category-list">
              {categoryBreakdown.length ? (
                categoryBreakdown.map((category, index) => (
                  <div className="category-row" key={category.label}>
                    <span className="category-rank">{index + 1}</span>
                    <div className="category-meta">
                      <strong>{category.label}</strong>
                      <p>{category.value} recipes</p>
                    </div>
                    <div className="category-bar-track">
                      <div
                        className="category-bar-fill"
                        style={{ width: `${(category.value / categoryBreakdown[0].value) * 100}%` }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state">No recipe category data available yet.</div>
              )}
            </div>
          </article>

          <article className="chart-card">
            <div className="card-heading">
              <h3>Quick Summary</h3>
              <p>A simple snapshot for admin monitoring.</p>
            </div>
            <div className="summary-grid">
              {Object.entries(collections).map(([key, value]) => (
                <div className="summary-item" key={key}>
                  <span>{formatLabel(key)}</span>
                  <strong>{value.length}</strong>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="dashboard-panels">
          <article className="chart-card">
            <div className="card-heading">
              <h3>Top Cuisines</h3>
              <p>Most used cuisines across recipe cards and recipe detail entries.</p>
            </div>

            <div className="category-list">
              {cuisineBreakdown.length ? (
                cuisineBreakdown.map((cuisine, index) => (
                  <div className="category-row" key={cuisine.label}>
                    <span className="category-rank">{index + 1}</span>
                    <div className="category-meta">
                      <strong>{cuisine.label}</strong>
                      <p>{cuisine.value} recipes</p>
                    </div>
                    <div className="category-bar-track">
                      <div
                        className="category-bar-fill"
                        style={{ width: `${(cuisine.value / cuisineBreakdown[0].value) * 100}%` }}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-state">No cuisine data available yet.</div>
              )}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
