import "./RecipeCard.css";
import { Link } from "react-router-dom";

function RecipeCard({ id, name, calories, image, servings, deleteRecipe }) {
  return (
    <div className="card-container">
      <Link to={`/update/${id}`} className="update-btn">
        ✏️
      </Link>

      <button onClick={() => deleteRecipe(id)} className="close-btn">
        ✖️
      </button>

      <Link to={`/recipes/${id}`} className="recipe-card">
        <li className="card">
          <div className="card-image">
            <img src={image} alt={`${name}`} />
          </div>
          <div className="card-container">
            <h3 className="card-title">{name}</h3>
            <p className="card-servings">Servings: {servings}</p>
            <p className="card-calories">
              Calories: {calories} kcal {calories > 150 ? "👎🏻" : "👍🏻"}
            </p>
          </div>
        </li>
      </Link>
    </div>
  );
}

export default RecipeCard;
