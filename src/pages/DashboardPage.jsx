import { useState } from "react";
import recipesData from "../data/recipes.json"
import RecipeCard from "../components/Recipes/RecipeCard"

function DashboardPage() {
  const [recipes, setRecipes] = useState(recipesData);

  return (
    <div className= "dashboard-container">
        <h1>Dashboard</h1>
    {recipes &&
        recipes.map((recipe) => {
          return <RecipeCard key={recipe.id} {...recipe} />;
        })}
    
    </div>
  );
}

export default DashboardPage;
