
import RecipeCard from "./RecipeCard";
import "./RecipeList.css"

function RecipeList({recipes, deleteRecipe}) {

  // console.log(recipes)
  

  return (
    <>
    <div className="recipe-container">
      {recipes.map((recipes, index) => {
        return <RecipeCard key={index}  deleteRecipe = {deleteRecipe} {...recipes}/>;
        
      })}
    </div>
    
    </>
  );
}

export default RecipeList;
