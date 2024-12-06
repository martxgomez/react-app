//style
import "./App.css";

//data
import recipesArray from "./data/recipes.json";

//react
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

//routes
import DashboardPage from "./pages/DashboardPage";
import RecipeDetailsPage from "./pages/RecipeDetailsPage";
import AboutPage from "./pages/AboutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Form from "./pages/Form";
import UpdateForm from "./pages/UpdateForm";

function App() {
  const [recipes, setRecipes] = useState(recipesArray);

  function deleteRecipe(recipeId) {
    const filteredRecipes = recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
    setRecipes(filteredRecipes);
  }

  function updateRecipe(updatedRecipe) {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.id === updatedRecipe.id
          ? { ...recipe, ...updatedRecipe }
          : recipe
      )
    );
  }

  //App.jsx RENDERS THE SIDEBAR, WE CREATE BELOW THE STATE AND THE FUNCTION TO CONTROL THE SIDEBAR (VISIBLE OR NOT) - lines 45-49 + lines 53 and 55
  const [sidebarOn, setSidebarOn] = useState(false);

  const toggleSidebar=()=> {
    console.log("Toggling sidebar");
    setSidebarOn(!sidebarOn);
  }

  return (
    <div>
      <Navbar onClick={toggleSidebar}/> {/* toggleSidebar added  */}
      <section>
        <Sidebar isOn={sidebarOn}/> {/* added sidebarOn */}
        <Routes>
          <Route
            path="/"
            element={
              <DashboardPage recipes={recipes} deleteRecipe={deleteRecipe} isOn={sidebarOn} />
            }
          />
          <Route path="/about" element={<AboutPage /> }  isOn={sidebarOn}/>
          <Route
            path="/form"
            element={<Form recipes={recipes} setRecipes={setRecipes} isOn={sidebarOn}/>}
          />
          <Route
            path="/update/:recipeId"
            element={
              <UpdateForm
                recipes={recipes}
                setRecipes={setRecipes}
                updateRecipe={updateRecipe}
                isOn={sidebarOn}
              />
            }
          />
          <Route
            path="/recipes/:recipeId"
            element={<RecipeDetailsPage recipes={recipes} isOn={sidebarOn}/>}
          />
          <Route path="*" element={<NotFoundPage />} isOn={sidebarOn}/>
        </Routes>
      </section>

      <Footer />
    </div>
  );
}

export default App;
