import { useState } from "react";
import { useNavigate } from "react-router-dom"
import "./Form.css";

function Form({ recipes, setRecipes, isOn}) {
  //creamos constantes de estado para añadir cada prop
  const [name, setName] = useState("");
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState("");
  const [servings, setServings] = useState(0);
  const [description, setDescription] = useState("");

  //creamos el hook para redirigir
  const navigate = useNavigate()

  //creamos una función para crear un nuevo id
  function createRandomId() {
    const randomId = Math.floor(Math.random() * 99999) + "a";
    return randomId;
  }

  //creamos la función para añadir una nueva receta
  function handleSubmit(event) {
    event.preventDefault(); // previene el comportamiento del form por defecto que es recargar la página

    //creamos la constante para la nueva receta
    const newRecipe = {
      id: createRandomId(),
      name,
      calories,
      image,
      servings,
      description,
    };

    //añadimos la nueva receta al array anterior
    setRecipes([...recipes, newRecipe]);
    
    //redirigimos a la página principal cuando le demos al submit
    navigate("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={isOn?"form-container-on":"form-container-off"}>
        <h2>Add a recipe</h2>
        <div className="inputs-container">
          {" "}
          <label htmlFor="name">Name:</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
            id="name"
            type="text"
          />
          <label htmlFor="calories">Calories:</label>
          <input
            id="calories"
            onChange={(e) => setCalories(e.target.value)}
            value={calories}
            type="number"
          />
          <label htmlFor="image">Image:</label>
          <input
            id="image"
            type="url"
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
          <label htmlFor="servings">Servings:</label>
          <input
            id="servings"
            type="number"
            onChange={(e) => setServings(e.target.value)}
            value={servings}
          />
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <button className="submit-btn" type="submit">Add Recipe</button>
        </div>
      </div>
    </form>
  );
}

export default Form;
