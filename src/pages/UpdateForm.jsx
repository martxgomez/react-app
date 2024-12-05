import { useState } from "react";
import { useParams } from "react-router-dom";

function UpdateForm({ recipes, setRecipes, updateRecipe }) {
  const { recipeId } = useParams();
  const recipeToUpdate = recipes.find((recipe) => recipe.id === recipeId);

  const [formFields, setFormFields] = useState({
    name: recipeToUpdate.name,
    calories: recipeToUpdate.calories,
    image: recipeToUpdate.image,
    servings: recipeToUpdate.servings,
    description: recipeToUpdate.description,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe({ ...formFields, id: recipeToUpdate.id });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <h2>Update the recipe</h2>
          <div className="inputs-container">
            <label htmlFor="name">Name:</label>
            <input
              value={formFields.name}
              onChange={(e) =>
                setFormFields({
                  ...formFields,
                  name: e.target.value,
                })
              }
              id="name"
              type="text"
            />

            <label htmlFor="calories">Calories:</label>
            <input
              id="calories"
              onChange={(e) =>
                setFormFields({
                  ...formFields,
                  calories: e.target.value,
                })
              }
              value={formFields.calories}
              type="number"
            />

            <label htmlFor="image">Image:</label>
            <input
              id="image"
              type="url"
              onChange={(e) =>
                setFormFields({
                  ...formFields,
                  image: e.target.value,
                })
              }
              value={formFields.image}
            />
            <label htmlFor="servings">Servings:</label>
            <input
              id="servings"
              type="number"
              onChange={(e) =>
                setFormFields({
                  ...formFields,
                  servings: e.target.value,
                })
              }
              value={formFields.servings}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              type="text"
              onChange={(e) =>
                setFormFields({
                  ...formFields,
                  description: e.target.value,
                })
              }
              value={formFields.description}
            />
            <button className="submit-btn" type="submit">
              Update Recipe
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default UpdateForm;
