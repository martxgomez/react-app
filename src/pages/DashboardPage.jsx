import RecipeList from "../components/Recipes/RecipeList";
import "./DashboardPage.css"

function DashboardPage({recipes, deleteRecipe}) {
  console.log(recipes)
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
    </div>
  );
}

export default DashboardPage;
