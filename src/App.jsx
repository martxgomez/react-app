import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import RecipeCard from "./components/Recipes/RecipeCard";

import recipesData from "./data/recipes.json"

import { useState } from "react";

function App() {
  const [recipes, setRecipes]=useState(recipesData)
  return (
    <>
      <Navbar />
      <body>
        <DashboardPage />
      </body>
      <Sidebar />
      {recipes &&
        recipes.map((recipe) => {
          return (
              <RecipeCard key={recipe.id} {...recipe} />
          );
        })}
      <Footer />
    </>
  );
}

export default App;
