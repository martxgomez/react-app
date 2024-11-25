import { useState } from "react";
import {Link, useParams} from "react-router-dom";
function UpdateForm() {

    //creamos los campos del form
    const [name, setName] = useState("");
    const [calories, setCalories] = useState(0);
    const [image, setImage] = useState("");
    const [servings, setServings] = useState(0);
    const [description, setDescription] = useState("");

    //creamos la función para añadir una nueva receta
    function handleSubmit(event) {
    event.preventDefault();


     }

    return (
        <>
 <form onSubmit={handleSubmit}>
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
      <button type="submit">Update</button>
    </form>
        </>
    )
}

export default UpdateForm;