import recipesArray from "../../data/recipes.json"
import RecipeCard from "./RecipeCard";
import "./RecipeList.css"
import { useState } from "react";

function RecipeList() {
  const [recipes, setRecipes] = useState(recipesArray);
  console.log(recipesArray);
  function deleteRecipe(recipeId) {
    const filteredRecipes = recipes.filter (recipe => {
      return recipe.id !==recipeId;
    });
    setRecipes(filteredRecipes);
  }
  return (
    <>
    <div className="recipe-container">
      {recipes.map((recipe, index) => {
        return <RecipeCard key={index} recipe={recipe} deleteRecipe = {deleteRecipe} />;
        
      })}
    </div>
    
    </>
  );
}

export default RecipeList;
