import "./RecipeCard.css";
import { Link } from "react-router-dom";

function RecipeCard({ id, name, calories, image, servings, deleteRecipe }) {

  return (
    <Link to={`/recipes/${id}`} className="recipe-card">
      <li className="card">
        <button className="close">✖️</button>
        <h3>{name}</h3>
        <p>Calories: {calories > 150 ? "👎🏻" : "👍🏻"}</p>
        <img src={image} alt="recipe image" />
        <p>Servings: {servings}</p>
      </li>
      <button onClick = {() => deleteRecipe(id)}>Delete</button>
    </Link>
    )
}

export default RecipeCard;
