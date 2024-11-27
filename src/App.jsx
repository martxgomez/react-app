//style
import "./App.css";

//data
import recipesArray from "./data/recipes.json"

//react
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

//routes
import DashboardPage from "./pages/DashboardPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import AboutPage from "./components/AboutPage";
import NotFoundPage from "./components/NotFoundPage";
import Form from "./components/Recipes/Form";
import UpdateForm from "./components/Recipes/UpdateForm";

function App() {
  const [recipes, setRecipes] = useState(recipesArray);


  function deleteRecipe(recipeId) {
    const filteredRecipes = recipes.filter (recipe => {
      return recipe.id !==recipeId;
    });
    setRecipes(filteredRecipes);
  }

  function updateRecipe (updatedRecipe) {
    setRecipes((prevRecipes) => prevRecipes.map((recipe)=> recipe.id === updatedRecipe.id ? {...recipe, ...updatedRecipe}: recipe) )
  }

  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardPage recipes={recipes} deleteRecipe={deleteRecipe} />}  />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/form" element={<Form recipes={recipes} setRecipes={setRecipes} />} />
        <Route path="/update/:recipeId" element={<UpdateForm recipes={recipes} setRecipes={setRecipes} updateRecipe={updateRecipe} />} />
        <Route
          path="/recipes/:recipeId"
          element={<RecipeDetailsPage recipes={recipes}/>}
    
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
