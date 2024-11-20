import "./RecipeCard.css";

function RecipeCard(props) {
  const {
    recipe: {name, calories, image, servings, id},
  } = props;

/* function deleteRecipe (recipeId) {
  const filteredRecipes = 
} */

  return (
    <>
    <li className="card">
      <button className="close">✖️</button>
      <h3>{name}</h3>
      <p>Calories: {calories > 150 ? "👎🏻" : "👍🏻"}</p>
      <img src={image} alt="recipe image" />
      <p>Servings: {servings}</p>
    </li>
    <button onClick = {() => props.deleteRecipe(id)}>Delete</button>
    </>
  );
}

export default RecipeCard;
