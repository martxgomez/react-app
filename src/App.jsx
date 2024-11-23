import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeList from './components/Recipes/RecipeList';
import Sidebar from './components/Sidebar';
import {Routes, Route} from 'react-router-dom';


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
