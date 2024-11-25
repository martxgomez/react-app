import "./RecipeCard.css";
import { Link } from "react-router-dom";

function RecipeCard({ id, name, calories, image, servings, deleteRecipe }) {
  return (
    <>
      <button onClick={() => deleteRecipe(id)} className="close">
        ✖️
      </button>
      <button <Link to="/update">Update</NavLink>onClick={() => deleteRecipe(id)} className="close">
      ✍️
      
      <Link to={`/recipes/${id}`} className="recipe-card">
        <li className="card">
          <h3>{name}</h3>
          <p>Calories: {calories} kcal {calories > 150 ? "👎🏻" : "👍🏻"}</p>
          <img width="300" src={image} alt="recipe image" />
          <p>Servings: {servings}</p>
        </li>
      </Link>
    </>
  );
}

export default RecipeCard;
