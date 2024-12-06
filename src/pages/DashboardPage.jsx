import RecipeList from "../components/Recipes/RecipeList";
import "./DashboardPage.css";

function DashboardPage({ recipes, deleteRecipe, isOn}) {
  console.log(recipes);
  return (
    <div className= {isOn ? "dashboard-container-on": "dashboard-container-off"} >
      <div className="title-container">
      <h2>Recipe List</h2>
      </div>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
    </div>
  );
}

export default DashboardPage;
