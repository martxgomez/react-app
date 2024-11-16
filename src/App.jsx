import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RecipeList from './components/Recipes/RecipeList';


function App() {
    return (
        <>
            <Navbar />
            <body>
              <RecipeList /> 
            </body>
            <Footer />
        </>
        );
}

export default App
