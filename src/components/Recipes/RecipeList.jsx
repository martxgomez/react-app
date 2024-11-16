import recipesArray from "../../data/recipes.json"
import RecipeCard from "./RecipeCard";
import "./RecipeList.css"

function RecipeList() {
  console.log(recipesArray);
  return (
    <ul className="recipe-container">
      {recipesArray.map((eachRecipe, index) => {
        return <RecipeCard key={index} eachRecipe={eachRecipe}  />;
      })}
    </ul>
  );
}

export default RecipeList;
