import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RecipeList from './components/Recipes/RecipeList';
import Sidebar from './components/Sidebar'


function App() {
    return (
        <>
            <Navbar />
            <body>
              <RecipeList /> 
            </body>
            <Sidebar />
            <Footer />
        </>
        );
}

export default App
