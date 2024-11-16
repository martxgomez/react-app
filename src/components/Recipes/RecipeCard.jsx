import "./RecipeCard.css";

function RecipeCard(props) {
  const {
    eachRecipe: {name, calories, image, servings},
  } = props;

  return (
    <li className="card">
      <button className="close">✖️</button>
      <h3>{name}</h3>
      <p>Calories: {calories > 150 ? "👎🏻" : "👍🏻"}</p>
      <img src={image} alt="recipe image" />
      <p>Servings: {servings}</p>
    </li>
  );
}

export default RecipeCard;
