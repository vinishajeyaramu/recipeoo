import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Landingpage from '../Pages/Landingpage';
import Category from '../Pages/Category/Category';
import Navbar from '../Components/Header/Navbar';
import Footer from '../Components/Footer/Footer';
import Blog from '../Pages/Blog/Blog';
import BlogDetails from '../Pages/Blog/BlogDetails';
import Cuisines from '../Pages/Cuisines/Cuisines';
import AllRecipe from '../Pages/All Recipies/AllRecipe';
import CuisineDetail from '../Pages/Cuisines/CuisineDetail';
import CategoryDetail from '../Pages/Category/CategoryDetail';
import AllVideoRecipe from '../Pages/All Recipies/AllVideoRecipe';
import Account from '../Components/Account/Account';
import UseraccountPage from '../Components/Account/UseraccountPage';
import Fav from '../Pages/Favorites/Fav';
import Terms from '../Pages/Terms/Terms';
import Privacypolicy from '../Pages/Privacy/Privacypolicy';
import Contact from '../Pages/Contact/Contact';
import Downloads from '../Pages/Downloads/Downloads';
import SearchResults from '../Pages/Search/Search';
import AtoZRecipes from '../Pages/A-z/AtoZRecipes';
import RecipesByLetter from '../Pages/A-z/RecipesByLetter';
import RecipeDetails from '../Pages/Recipe Details/RecipeDetails';
import TagsPage from '../Pages/Tags/TagsPage';
import Overallfilter from '../Pages/Overall FIlter/Overallfilter';

const Router = () => {
  const UserRoute = ({ children }) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return userInfo ? children : <Navigate to="/" />;
  };

  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/home" element={<Landingpage />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:title" element={<BlogDetails />} />
          <Route path="/cuisines" element={<Cuisines />} />
          <Route path="/all-recipes" element={<AllRecipe />} />
          <Route path="/cuisine/:cuisineName" element={<CuisineDetail />} />
          <Route path="/category/:categoryName" element={<CategoryDetail />} />
          <Route path="/video-recipes" element={<AllVideoRecipe />} />
          <Route path="/video-recipe/:title" element={<RecipeDetails />} />
          <Route path="/account" element={<Account />} />
          <Route path="/useraccount" element={<UserRoute><UseraccountPage /></UserRoute>} />
          <Route path="/favorites" element={<Fav />} />
          <Route path="/terms&conditions" element={<Terms />} />
          <Route path="/privacypolicy" element={<Privacypolicy />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/download" element={<Downloads />} />
          <Route path="/search-results" element={<SearchResults />} />
          <Route path="/a-z-recipes" element={<AtoZRecipes />} />
          <Route path="/recipes/recipe-letter/:letter" element={<RecipesByLetter />} />
          <Route path="/recipe/:title" element={<RecipeDetails />} />
          <Route path="/recipe/:title" element={<RecipeDetails />} />    
          <Route path="/tags/:tagname" element={<TagsPage />} />
          <Route path='/overall-filter' element={<Overallfilter/>}/>
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
