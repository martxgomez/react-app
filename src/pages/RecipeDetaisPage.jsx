//data
import recipesData from "../data/recipes.json"

//hooks
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function RecipeDetailsPage(){

    //encontrar la receta actual por el id
    const {recipeId}=useParams()
    const recipeInfo = recipesData.find((recipe) => recipe.id === recipeId);

    return(
        <div className="recipe-detail-page">
            <h1>Recipe Details Page</h1>
       {/* me he quedado aqui, he modificado app y recipeCard */}

        <div>
            {recipeInfo}
        </div>
        <Link to= "/" className= "close">
              Back
            </Link>
        </div>
    )
}
export default RecipeDetailsPage