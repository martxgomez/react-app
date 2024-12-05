import RecipeList from "../components/Recipes/RecipeList";
import "./DashboardPage.css";

function DashboardPage({ recipes, deleteRecipe }) {
  console.log(recipes);
  return (
    <div className="dashboard-container">
      <h2>Recipe List</h2>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
    </div>
  );
}

export default DashboardPage;
