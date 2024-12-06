//hooks
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./RecipeDetailsPage.css"

function RecipeDetailsPage({ recipes, isOn}) {
  //encontrar la receta actual por el id
  const { recipeId } = useParams();
  const recipeInfo = recipes.find((recipe) => recipe.id === recipeId);

  const { name, calories, image, servings, description } = recipeInfo;
  return (
    <div className={isOn?"recipe-detail-page-on":"recipe-detail-page-off"}>
      <h2>Recipe Details</h2>
      <div className="detail-container">
        <img width="300" src={image} alt="recipe image" />

        <div className="info-container">
          <h3>{name}</h3>
          <h4>Calories </h4>
          <p>{calories}</p>

          <h4>Servings </h4>
          <p>{servings}</p>

          <h4>Description </h4>
          <p>{description}</p>
        
        </div>
        
      </div>
      <Link to="/" className="back-btn">
            Back
          </Link>
    </div>
  );
}
export default RecipeDetailsPage;
