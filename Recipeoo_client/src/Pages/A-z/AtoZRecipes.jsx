import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './AtoZRecipes.css'; // style it like the demo
import RecipeCard from '../../Resuable Components/Recipercards/Recipecards'
import Pageheader from '../../Resuable Components/Page Header/Pageheader';
import PopularTags from '../../Resuable Components/Populartags/Populatags';
import recipe1 from '../../Assets/Images/garlic mushroom.jpg'
import recipe2 from '../../Assets/Images/zesty lemon quinoa.jpg'
import recipe3 from '../../Assets/Images/recipe-4-630x785.jpg'
import recipe4 from '../../Assets/Images/recipe-5-630x785.jpg'
import recipe5 from '../../Assets/Images/recipe-6-630x785.jpg'
import recipe6 from '../../Assets/Images/recipe-7-630x785.jpg'
import recipe7 from '../../Assets/Images/recipe-30-630x785.jpg'
import recipe8 from '../../Assets/Images/recipe-9-630x785.jpg'
import recipe9 from '../../Assets/Images/recipe-35-630x785.jpg'
import recipe10 from '../../Assets/Images/recipe-34-630x785.jpg'
import recipe11 from '../../Assets/Images/recipe-33-630x785.jpg'
import recipe12 from '../../Assets/Images/recipe-32-630x785.jpg'
import recipe13 from '../../Assets/Images/recipe-29-630x785.jpg'
import recipe14 from '../../Assets/Images/recipe-28-630x785.jpg'
import recipe15 from '../../Assets/Images/recipe-27-630x785.jpg'
import recipe16 from '../../Assets/Images/recipe-26-630x785.jpg'
import recipe17 from '../../Assets/Images/recipe-25-630x785.jpg'
import recipe18 from '../../Assets/Images/recipe-24-630x785.jpg'
import recipe19 from '../../Assets/Images/recipe-23-630x785.jpg'
import recipe20 from '../../Assets/Images/recipe-10-630x785.jpg'
import recipe21 from '../../Assets/Images/recipe-12-630x785.jpg'
import recipe22 from '../../Assets/Images/recipe-13-630x785.jpg'
import recipe23 from '../../Assets/Images/recipe-1-630x785.jpg'
import recipe24 from '../../Assets/Images/recipe-14-630x785.jpg'
import recipe25 from '../../Assets/Images/recipe-15-630x785.jpg'
import recipe26 from '../../Assets/Images/recipe-16-630x785.jpg'
import recipe27 from '../../Assets/Images/recipe-17-630x785.jpg'
import recipe28 from '../../Assets/Images/recipe-18-630x785.jpg'
import recipe29 from '../../Assets/Images/recipe-19-630x785.jpg'
import recipe30 from '../../Assets/Images/recipe-20-630x785.jpg'
import recipe31 from '../../Assets/Images/recipe-21-630x785.jpg'
import recipe32 from '../../Assets/Images/recipe-11-630x785.jpg'
import recipe33 from '../../Assets/Images/recipe-22-630x785.jpg'
import recipe34 from '../../Assets/Images/recipe-36-630x785.jpg'
import recipe35 from '../../Assets/Images/recipe-50-630x785.jpg'
import recipe36 from '../../Assets/Images/recipe-49-630x785.jpg'
import recipe37 from '../../Assets/Images/recipe-48-630x785.jpg'
import recipe38 from '../../Assets/Images/recipe-47-630x785.jpg'
import recipe39 from '../../Assets/Images/recipe-46-630x785.jpg'
import recipe40 from '../../Assets/Images/recipe-45-630x785.jpg'
import recipe41 from '../../Assets/Images/recipe-51-630x785.jpg'
import recipe42 from '../../Assets/Images/recipe-44-630x785.jpg'
import recipe43 from '../../Assets/Images/recipe-43-630x785.jpg'
import recipe44 from '../../Assets/Images/recipe-42-630x785 (1).jpg'
import recipe45 from '../../Assets/Images/rsz_how-to-cook-steamed-lobster-tails-recipe-10-scaled.jpg'
import recipe46 from '../../Assets/Images/rsz_spinach-and-feta-stuffed-chicken-breast-10.jpg'
import recipe47 from '../../Assets/Images/recipe-39-630x785.jpg'
import recipe48 from '../../Assets/Images/recipe-38-630x785.jpg'
import recipe49 from '../../Assets/Images/recipe-37-630x785.jpg'
import recipe50 from '../../Assets/Images/recipe-59-630x785.jpg'
import recipe51 from '../../Assets/Images/recipe-58-630x785.jpg'
import recipe52 from '../../Assets/Images/recipe-57-630x785.jpg'
import recipe53 from '../../Assets/Images/recipe-52-630x785.jpg'
import recipe54 from '../../Assets/Images/recipe-56-630x785.jpg'
import recipe55 from '../../Assets/Images/recipe-55-630x785.jpg'
import recipe56 from '../../Assets/Images/rsz_1garlic-butter-baked-tilapia-3.jpg'
import recipe57 from '../../Assets/Images/recipe-53-630x785.jpg'
import recipe58 from '../../Assets/Images/recipe-60-630x785.jpg'
import recipe59 from '../../Assets/Images/recipe-61-630x785.jpg'
import recipe60 from '../../Assets/Images/recipe-62-630x785.jpg'
import recipe61 from '../../Assets/Images/recipe-31-630x785.jpg'
import recipe62 from '../../Assets/Images/recipe-63-630x785.jpg'
import recipe63 from '../../Assets/Images/recipe-64-630x785.jpg'
import recipe64 from '../../Assets/Images/recipe-65-630x785.jpg'

import flag1 from '../../Assets/Images/lb.png'
import flag2 from '../../Assets/Images/ma.png'
import flag3 from '../../Assets/Images/fr.png'
import flag4 from '../../Assets/Images/th.png'
import flag5 from '../../Assets/Images/et.png'
import flag6 from '../../Assets/Images/kr.png'
import flag7 from '../../Assets/Images/tr.png'
import flag8 from '../../Assets/Images/mx.png'
import flag9 from '../../Assets/Images/us.png'
import flag10 from '../../Assets/Images/de.png'
import flag11 from '../../Assets/Images/gr.png'
import flag12 from '../../Assets/Images/in.png'
import flag13 from '../../Assets/Images/ir.png'
import flag14 from '../../Assets/Images/it.png'
import flag15 from '../../Assets/Images/vn.png'
import flag16 from '../../Assets/Images/br.png'
import flag17 from '../../Assets/Images/cn.png'
import flag18 from '../../Assets/Images/es.png'
import flag19 from '../../Assets/Images/jp.png'

const letters = [ ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')];
const pageProps = {
  title: "A-Z Recipes",
  description:
    "Discover an alphabetical collection of recipes, making it easy to find your favorites or explore something new. Perfect for every craving and occasion!",
  subtitle: "Recipes from A to Z",
};
 const tagData = [
  { name: 'COMFORT FOOD', link: '/tags/comfort-food' },
  { name: 'DAIRY-FREE', link: '/tags/dairy-free' },
  { name: 'DESSERTS', link: '/tags/desserts' },
  { name: 'GLUTEN-FREE', link: '/tags/gluten-free' },
  { name: 'HEALTHY', link: '/tags/healthy' },
  { name: 'HIGH-PROTEIN', link: '/tags/high-protein' },
  { name: 'HOLIDAY', link: '/tags/holiday' },
  { name: 'KID-FRIENDLY', link: '/tags/kid-friendly' },
];

const tagData2 = [
  { name: 'LOW-CARB', link: '/tags/low-carb' },
  { name: 'MEAL PREP', link: '/tags/meal-prep' },
  { name: 'MEAT', link: '/tags/meat' },
  { name: 'ONE-POT', link: '/tags/one-pot' },
  { name: 'QUICK MEALS', link: '/tags/quick-meals' },
  { name: 'SPICY', link: '/tags/spicy' },
  { name: 'VEGETARIAN', link: '/tags/vegetarian' },
  { name: 'VIDEO RECIPE', link: '/tags/video-recipe' },
];
const recipecards = [
    {
      id:0,
      image: recipe1,
      rating: 4.8,
      category: 'Pasta',
      title: 'Creamy Garlic Mushroom Penne Pasta',
      time: '5 min',
      cuisine: 'Lebanese',
      servings:"Serves 4",
      flag: flag1,
      
      
    },
    {
      id:1,
      image: recipe2,
      rating: 4.5,
      category: 'Salads',
      title: 'Zesty Lemon Quinoa with Fresh Herbs',
      time: '60 min',
      cuisine: 'Moroccan',
      servings:"Serves 1",
      flag: flag2,
      
      
    },
     {
      id:2,
      image: recipe3,
      rating: 4.8,
      category: 'Meat',
      title: 'Smoky Barbecue Pulled Beef Sandwiches',
      time: '15 min',
      cuisine: 'French',
      servings:"Serves 11",
      flag: flag3,
      
      
      
    },
    {
      id:3,
      image: recipe4,
      rating: 4.8,
      category: 'Breakfasts',
      title: 'Fluffy Banana Pancakes with Maple Syrup',
      time: '60 min',
      cuisine: 'Thai',
      servings:"Serves 1",
      flag: flag4,
      
      
    },
    { 
      id:4,
      image: recipe5,
      rating: 4.9,
      category: 'Desserts',
      title: 'Molten Chocolate Lava Cake Dessert',
      time: '80 min',
      cuisine: 'Ethiopian',
      servings:"Serves 2",
      flag: flag5,
      
      
    },
    {
      id:5,
      image: recipe6,
      rating: 4.4,
      category: 'Side Dishes',
      title: 'Crispy Parmesan Garlic Zucchini Sticks',
      time: '100 min',
      cuisine: 'Korean',
      servings:"Serves 1",
      flag: flag6,
     
      
    },
     {
      id:6,
      image: recipe7,
      rating: 4.9,
      category: 'BBQ & Grilling',
      title: 'Smoky Barbeque Beef Ribs with Dry Rub',
      time: '85 min',
      cuisine: 'Lebanese',
      servings:"Serves 11",
      flag: flag1,
      
      
    },
    {
      id:7,
      image: recipe8,
      rating: 4.8,
      category: 'Gluten-Free',
      title: 'Gluten-Free Almond Waffles with Berries',
      time: '20 min',
      cuisine: 'Lebanese',
      servings:"Serves 11",
      flag: flag1,
     
      
    },
    {
      id:8,
      image: recipe9,
      rating: 4.8,
      category: 'Meat',
      title: 'Slow Cooker Beef and Black Bean Chili',
      time: '45 min',
      cuisine: 'Turkish',
      servings:"Serves 5",
      flag: flag7,
     
      
    },
    {
      id:9,
      image: recipe10,
      rating: 4.8,
      category: 'Drinks',
      title: 'Cucumber Mint Smoothie with Lime Zest',
      time: '100 min',
      cuisine: 'French',
      servings:"Serves 4",
      flag: flag3,
      
     
    },
     {
      id:10,
      image: recipe11,
      rating: 4.5,
      category: 'Side Dishes',
      title: 'Butternut Squash Risotto with Parmesan',
      time: '115 min',
      cuisine: 'Mexican',
      servings:"Serves 3",
      flag: flag8,
      
    },
    {
      id:11,
      image: recipe12,
      rating: 4.6,
      category: 'Vegetarian',
      title: 'Vegetable and Halloumi Grilled Skewers',
      time: '75 min',
      cuisine: 'American',
      servings:"Serves 1",
      flag: flag9,
      
      
    },
    { 
      id:12,
      image: recipe13,
      rating: 5,
      category: 'Breakfasts',
      title: 'Ham and Cheese Croissant Breakfast Bake',
      time: '110 min',
      cuisine: 'Greek',
      servings:"Serves 8",
      flag: flag11,
    
    },
    {
      id:13,
      image: recipe14,
      rating: 4.5,
      category: 'Salads',
      title: 'Asian Sesame Noodles with Crunchy Veggies',
      time: '60 min',
      cuisine: 'Moroccan',
      servings:"Serves 10",
      flag: flag2,
     
    },
     {
      id:14,
      image: recipe15,
      rating: 4.5,
      category: 'Breads',
      title: 'Herbed Focaccia Bread with Olive Oil Drizzle',
      time: '80 min',
      cuisine: 'Spanish',
      servings:"Serves 2",
      flag: flag18,
     
    },
    {
      id:15,
      image: recipe16,
      rating: 4.9,
      category: 'Gluten-Free',
      title: 'Flourless Peanut Butter Chocolate Cookies',
      time: '115 min',
      cuisine: 'Spanish',
      servings:"Serves 5",
      flag: flag18,
      
      
    },
    {
      id:16,
      image: recipe17,
      rating: 4.9,
      category: 'Drinks',
      title: 'Refreshing Mint and Cucumber Lemonade',
      time: '85 min',
      cuisine: 'Italian',
      servings:"Serves 6",
      flag: flag14,
    
      
    },
     {
      id:17,
      image: recipe18,
      rating: 4.9,
      category: 'Seafoods',
      title: 'Grilled Salmon with Lemon Butter Sauce',
      time: '50 min',
      cuisine: 'Korean',
      servings:"Serves 3",
      flag: flag6,
      
      
    },
    { 
      id:18,
      image: recipe19,
      rating: 4.5,
      category: 'Soups',
      title: 'Vegetable Lentil Stew with Fresh Herbs',
      time: '80 min',
      cuisine: 'Brazilian',
      servings:"Serves 1",
      flag: flag16,
      
      
    },
     {
      id:19,
      image: recipe20,
      rating: 4.8,
      category: 'Soups',
      title: 'Classic Minestrone Soup with Fresh Vegetables',
      time: '45 min',
      cuisine: 'Brazilian',
      servings:"Serves 3",
      flag: flag4,
     
    },
    { 
      id:20,
      image: recipe21,
      rating: 5,
      category: 'Appetizers',
      title: 'Cheesy Spinach and Artichoke Dip Platter',
      time: '65 min',
      cuisine: 'American',
      servings:"Serves 6",
      flag: flag9,
      
      
    },
    { 
      id:21,
      image: recipe22,
      rating: 4.8,
      category: 'Breads',
      title: 'Savory Garlic Herb Butter Dinner Rolls',
      time: '85 min',
      cuisine: 'Mexican',
      servings:"Serves 3",
      flag: flag8,
      
      
    },
    {
      id:22,
      image: recipe23,
      rating: 4.5,
      category: 'BBQ & Grilling',
      title: 'Spicy Grilled Chicken Skewers with Lemon and Herbs',
      time: '30 min',
      cuisine: 'Turkish',
      servings:"Serves 10",
      flag: flag7,
      
      
    },
     {
      id:23,
      image: recipe24,
      rating: 4.6,
      category: 'Seafoods',
      title: 'Garlic Butter Shrimp with Lemon Sauce',
      time: '60 min',
      cuisine: 'Italian',
      servings:"Serves 6",
      flag: flag14,
      
      
    },
    {
      id:24,
      image: recipe25,
      rating: 4.6,
      category: 'BBQ & Grilling',
      title: 'Honey BBQ Chicken Wings with Smoky Glaze',
      time: '45 min',
      cuisine: 'American',
      servings:"Serves 2",
      flag: flag9,
     
      
    },
    {
      id:25,
      image: recipe26,
      rating: 5,
      category: 'Instant Pot',
      title: 'Instant Pot Creamy Beef Stroganoff',
      time: '45 min',
      cuisine: 'Italian',
      servings:"Serves 2",
      flag: flag14,
     
      
    },
    { 
      id:26,
      image: recipe27,
      rating: 4.8,
      category: 'Sugar-Free',
      title: 'Golden Turmeric Soup with Fresh Veggies',
      time: '10 min',
      cuisine: 'Vietnamese',
      servings:"Serves 4",
      flag: flag15,
    
    },
     {
      id:27,
      image: recipe28,
      rating: 4.6,
      category: 'Healthy',
      title: 'Chickpea and Kale Salad with Lemon Dressing',
      time: '5 min',
      cuisine: 'Spanish',
      servings:"Serves 1",
      flag: flag18,
     
      
    },
    {
      id:28,
      image: recipe29,
      rating: 4.6,
      category: 'Vegan',
      title: 'Vegan Black Bean Tacos with Avocado Salsa',
      time: '15 min',
      cuisine: 'Greek',
      servings:"Serves 12",
      flag: flag11,
      
    },
    {
      id:29,
      image: recipe30,
      rating: 5,
      category: 'Desserts',
      title: 'Apple Crumble with Cinnamon Oat Topping',
      time: '35 min',
      cuisine: 'Korean',
      servings:"Serves 7",
      flag: flag6,
      
    },
    {
      id:30,
      image: recipe31,
      rating: 4.6,
      category: 'Vegetarian',
      title: 'Spinach Ricotta Stuffed Vegan Pasta Shells',
      time: '25 min',
      cuisine: 'Italian',
      servings:"Serves 8",
      flag: flag14,
      
      
    },
     {
      id:31,
      image: recipe32,
      rating: 4.6,
      category: 'Vegan',
      title: 'Maple Roasted Sweet Potatoes with Pecans',
      time: '60 min',
      cuisine: 'Turkish',
      servings:"Serves 3",
      flag: flag7,
     
      
    },
    {
      id:32,
      image: recipe33,
      rating: 4.4,
      category: 'Snacks',
      title: 'Baked Chicken Tenders with Parmesan Crust',
      time: '90 min',
      cuisine: 'German',
      servings:"Serves 7",
      flag: flag10,
      
      
    },
    {
      id:33,
      image: recipe34,
      rating: 4.6,
      category: 'Vegan',
      title: 'Vegan Chocolate Mousse with Avocado',
      time: '85 min',
      cuisine: 'French',
      servings:"Serves 6",
      flag: flag3,
      
      
    },
    {
      id:34,
      image: recipe35,
      rating: 4.9,
      category: 'Gluten-Free',
      title: 'Zucchini Noodles with Creamy Avocado Sauce',
      time: '90 min',
      cuisine: 'Ethiopian',
      servings:"Serves 3",
      flag: flag5,
    
    },
     {
      id:35,
      image: recipe36,
      rating: 4.8,
      category: 'Breads',
      title: 'Cheese Stuffed Flatbread with Fresh Herbs',
      time: '5 min',
      cuisine: 'Vietnamese',
      servings:"Serves 5",
      flag: flag15,
     
      
    },
    {
      id:36,
      image: recipe37,
      rating: 4.6,
      category: 'Sugar-Free',
      title: 'Berry Chia Jam Bars with Oat Crumble',
      time: '10 min',
      cuisine: 'Mexican',
      servings:"Serves 2",
      flag: flag8,
      
    },
    {
      id:37,
      image: recipe38,
      rating: 4.6,
      category: 'Side Dishes',
      title: 'Crispy Garlic Roasted Baby Potatoes',
      time: '110 min',
      cuisine: 'Moroccan',
      servings:"Serves 6",
      flag: flag2,
      
    },
    {
      id:38,
      image: recipe39,
      rating: 4.8,
      category: 'Pasta',
      title: 'Mexican Street Corn Salad with Pasta',
      time: '55 min',
      cuisine: 'Mexican',
      servings:"Serves 10",
      flag: flag8,
      
      
    },
     {
      id:39,
      image: recipe40,
      rating: 4.9,
      category: 'Breakfasts',
      title: 'Breakfast Muffins with Lemon Poppy Seeds',
      time: '70 min',
      cuisine: 'Turkish',
      servings:"Serves 12",
      flag: flag7,
     
      
    },
    {
      id:40,
      image: recipe41,
      rating: 4.9,
      category: 'Vegetarian',
      title: 'Black Bean and Corn Tacos with Salsa',
      time: '45 min',
      cuisine: 'American',
      servings:"Serves 6",
      flag: flag9,
      
      
    },
    {
      id:41,
      image: recipe42,
      rating: 4.6,
      category: 'Desserts',
      title: 'Spiced Apple Cake with Cinnamon Glaze',
      time: '55 min',
      cuisine: 'Chinese',
      servings:"Serves 5",
      flag: flag17,
      
      
    },
    {
      id:42,
      image: recipe43,
      rating: 4.8,
      category: 'BBQ & Grilling',
      title: 'Grilled Shrimp Skewers with Honey Lime Glaze',
      time: '55 min',
      cuisine: 'Indian',
      servings:"Serves 8",
      flag: flag12,
      
      
    },
    {
      id:43,
      image: recipe44,
      rating: 4.8,
      category: 'Instant Pot',
      title: 'Vegetarian Chili in the Instant Pot',
      time: '85 min',
      cuisine: 'Thai',
      servings:"Serves 3",
      flag: flag4,
      
      
    },
    {
      id:44,
      image: recipe45,
      rating: 4.4,
      category: 'Seafoods',
      title: 'Garlic Butter Lobster Tails with Lemon',
      time: '15 min',
      cuisine: 'German',
      servings:"Serves 5",
      flag: flag10,
     
      
    },
     {
      id:45,
      image: recipe46,
      rating: 4.8,
      category: 'Meat',
      title: 'Spinach and Feta Stuffed Chicken Breasts',
      time: '55 min',
      cuisine: 'Turkish',
      servings:"Serves 8",
      flag: flag7,
      
      
    },
    {
      id:46,
      image: recipe47,
      rating: 4.5,
      category: 'Healthy',
      title: 'Air-Fried Cauliflower Bites with Spices',
      time: '45 min',
      cuisine: 'Spanish',
      servings:"Serves 2",
      flag: flag18,
     
      
    },
    {
      id:47,
      image: recipe48,
      rating: 4.8,
      category: 'Soups',
      title: 'Tomato Basil Cream Soup with Croutons',
      time: '80 min',
      cuisine: 'German',
      servings:"Serves 3",
      flag: flag10,
     
      
    },
    {
      id:48,
      image: recipe49,
      rating: 4.6,
      category: 'Snacks',
      title: 'Crispy Sesame Glazed Chicken Wings',
      time: '80 min',
      cuisine: 'Lebanese',
      servings:"Serves 6",
      flag: flag1,
      
     
    },
     {
      id:49,
      image: recipe50,
      rating: 4.9,
      category: 'Meate',
      title: 'Grilled Lamb Chops with Rosemary Marinade',
      time: '80 min',
      cuisine: 'Thai',
      servings:"Serves 8",
      flag: flag4,
      
    },
    {
      id:50,
      image: recipe51,
      rating: 4.5,
      category: 'Healthy',
      title: 'Asian Slaw with Tangy Sesame Dressing',
      time: '10 min',
      cuisine: 'Italian',
      servings:"Serves 4",
      flag: flag14,
      
      
    },
    {
      id:51,
      image: recipe52,
      rating: 4.6,
      category: 'Desserts',
      title: 'Chocolate Chip Cookies with Gooey Marshmallows',
      time: '85 min',
      cuisine: 'Greek',
      servings:"Serves 1",
      flag: flag11,
    
    },
    {
      id:52,
      image: recipe53,
      rating: 4.6,
      category: 'Snacks',
      title: 'Classic Italian Margherita Pizza Slices',
      time: '90 min',
      cuisine: 'Italian',
      servings:"Serves 2",
      flag: flag14,
     
    },
     {
      id:53,
      image: recipe54,
      rating: 4.5,
      category: 'Instant Pot',
      title: 'Instant Pot Honey Garlic Beef Chops',
      time: '15 min',
      cuisine: 'Turkish',
      servings:"Serves 12",
      flag: flag7,
     
    },
    {
      id:54,
      image: recipe55,
      rating: 4.9,
      category: 'BBQ & Grilling',
      title: 'Grilled Pineapple Shrimp Skewers with Sweet Chili',
      time: '55 min',
      cuisine: 'American',
      servings:"Serves 1",
      flag: flag9,
      
      
    },
    {
      id:55,
      image: recipe56,
      rating: 4.8,
      category: 'Seafoods',
      title: 'Herb Crusted Tilapia with Lemon Garlic Butter',
      time: '60 min',
      cuisine: 'Italian',
      servings:"Serves 5",
      flag: flag14,
    
      
    },
     {
      id:56,
      image: recipe57,
      rating: 4.9,
      category: 'Vegan',
      title: 'Creamy Vegan Stroganoff with Mushrooms',
      time: '20 min',
      cuisine: 'Persian',
      servings:"Serves 1",
      flag: flag13,
      
      
    },
    {
      id:57,
      image: recipe58,
      rating: 4.9,
      category: 'Breads',
      title: 'Cheddar Biscuits with Fresh Chives',
      time: '25 min',
      cuisine: 'Japanese',
      servings:"Serves 3",
      flag: flag19,
      
      
    },
     {
      id:58,
      image: recipe59,
      rating: 4.9,
      category: 'Appetizers',
      title: 'Red Pepper Hummus with Crispy Pita Chips',
      time: '95 min',
      cuisine: 'Mexicnan',
      servings:"Serves 5",
      flag: flag8,
     
    },
    {
      id:59,
      image: recipe60,
      rating: 4.9,
      category: 'Soups',
      title: 'Thai Coconut Curry Soup with Shrimp',
      time: '45 min',
      cuisine: 'Moroccan',
      servings:"Serves 11",
      flag: flag2,
      
      
    },
    {
      id:60,
      image: recipe61,
      rating: 4.9,
      category: 'Salads',
      title: 'Peach and Burrata Salad with Balsamic Glaze',
      time: '80 min',
      cuisine: 'Ethiopian',
      servings:"Serves 7",
      flag: flag5,
      
      
    },
    {
      id:61,
      image: recipe62,
      rating: 4.4,
      category: 'Instant Pot',
      title: 'Vegan Lentil Curry in the Instant Pot',
      time: '5 min',
      cuisine: 'Ethiopian',
      servings:"Serves 6",
      flag: flag5,
      
      
    },
     {
      id:62,
      image: recipe63,
      rating: 4.6,
      category: 'Breakfasts',
      title: 'Homemade Cinnamon Raisin Bagels with Honey',
      time: '85 min',
      cuisine: 'Italian',
      servings:"Serves 11",
      flag: flag14,
      
      
    },
    {
      id:63,
      image: recipe64,
      rating: 4.6,
      category: 'Meat',
      title: 'Roasted Chicken Thighs with Garlic Herb Butter',
      time: '15 min',
      cuisine: 'Indian',
      servings:"Serves 1",
      flag: flag12,
     
      
    },
  
  ];
  const RECIPES_PER_PAGE = 16;
const AtoZRecipes = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
    // Calculate total pages
    const totalPages = Math.ceil(recipecards.length / RECIPES_PER_PAGE);
  
    // Paginated recipes
    const startIdx = (currentPage - 1) * RECIPES_PER_PAGE;
    const paginatedRecipes = recipecards.slice(startIdx, startIdx + RECIPES_PER_PAGE);
  
    // Page change handler
    const changePage = (pageNum) => {
      if (pageNum >= 1 && pageNum <= totalPages) {
        setCurrentPage(pageNum);
      }
    };
    
  return (
    <>
     <div className='page-header-sec'>
        <Pageheader pageheader={pageProps} />
    </div>
    <div className="az-filter-bar">
      {letters.map((letter, idx) => (
        <Link key={idx} to={`/recipes/recipe-letter/${letter.toLowerCase()}`} className="az-letter-link">
          {letter}
        </Link>
      ))}
    </div>
     <div className='recipes-container'>
  {paginatedRecipes.map((recipe, i) => (
    <RecipeCard key={i} {...recipe} />
  ))}
</div>
     <div className='pagination'>
        {currentPage > 1 && (
          <button onClick={() => changePage(currentPage - 1)} className="pagination-btn">
            ← Previous
          </button>
        )}

        {[...Array(totalPages)].map((_, i) => {
          const pageNum = i + 1;
          return (
            <button
              key={pageNum}
              onClick={() => changePage(pageNum)}
              className={`pagination-btn ${currentPage === pageNum ? 'active' : ''}`}
            >
              {pageNum}
            </button>
          );
        })}

        {currentPage < totalPages && (
          <button onClick={() => changePage(currentPage + 1)} className="pagination-btn">
            Next →
          </button>
        )}
      </div>
    <div className='tags-sec'>
        <PopularTags
          tags={tagData}
          tags2={tagData2}
          heading="Explore Popular Tags"
          subheading="From quick meals to healthy dishes, our popular tags make it easy to explore delicious options with one click."
        />
    </div>
    </>
  );
};

export default AtoZRecipes;
