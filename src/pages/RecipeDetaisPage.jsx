//data
import recipesData from "../data/recipes.json";

//hooks
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function RecipeDetailsPage() {
  //encontrar la receta actual por el id
  const { recipeId } = useParams();
  const recipeInfo = recipesData.find((recipe) => recipe.id === recipeId);

  const { name, calories, image, servings } = recipeInfo;
  return (
    <div className="recipe-detail-page">
      <h2>Recipe Details</h2>
      <h3>{name}</h3>
      <p>Calories: {calories}</p>
      <img width="300" src={image} alt="recipe image" />
      <p>Servings: {servings}</p>
      <div></div>
      <Link to="/" className="close">
        Back
      </Link>
    </div>
  );
}
export default RecipeDetailsPage;
