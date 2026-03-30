import logo from './logo.svg';
import './App.css';
import './Styles/AdminTheme.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';
import Dashboard from './Pages/Dashboard/Dashboard';
import Downloads from './Pages/Downloads/Downloads';
import Users from './Pages/Users';
import Recipe from './Pages/Recipe/Recipe';
import Blog from './Pages/Blog/Blog';
import Category from './Pages/Category/Category';
import VideoRecipe from './Pages/Recipe/VideoRecipe';
import Cuisine from './Pages/Cuisine/Cuisine';
// import Landingpage from '../../Client/src/Pages/Landingpage';


function App() {
  return (
    <div className="App">
       <Router>
      <div className="admin-container">
        <Sidebar />
        <div className="admin-contents">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/admin" element={<Dashboard />} />
            <Route path="/recipe" element={<Recipe />} />
            <Route path="/videorecipe" element={<VideoRecipe />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/users" element={<Users />} />
            <Route path="/category" element={<Category />} />
            <Route path="/cuisine" element={<Cuisine />} />
          </Routes>
        </div>
      </div>
    </Router>
    </div>
  );
}

export default App;
