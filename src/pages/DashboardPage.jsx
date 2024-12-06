import RecipeList from "../components/Recipes/RecipeList";
import "./DashboardPage.css";

function DashboardPage({ recipes, deleteRecipe, isOn}) {
  console.log(recipes);
  return (
    <div className= {isOn ? "dashboard-container-on": "dashboard-container-off"} >
      <h2>Recipe List</h2>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
    </div>
  );
}

export default DashboardPage;
