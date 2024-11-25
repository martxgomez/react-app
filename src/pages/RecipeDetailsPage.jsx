
//hooks
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function RecipeDetailsPage({recipes}) {
  //encontrar la receta actual por el id
  const { recipeId } = useParams();
  const recipeInfo = recipes.find((recipe) => recipe.id === recipeId);

  const { name, calories, image, servings, description } = recipeInfo;
  return (
    <div className="recipe-detail-page">
      <h2>Recipe Details</h2>
      <h3>{name}</h3>
      <p>Calories: {calories}</p>
      <img width="300" src={image} alt="recipe image" />
      <p>Servings: {servings}</p>
      <p>Description: {description}</p>
      <div></div>
      <Link to="/" className="close">
        Back
      </Link>
    </div>
  );
}
export default RecipeDetailsPage;
