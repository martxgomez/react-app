import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RecipeList from './components/Recipes/RecipeList';
import Sidebar from './components/Sidebar';
import {Routes, Route} from 'react-router-dom';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';


function App() {
    return (
        <>
            <Navbar />
            <body>
              <RecipeList /> 
            </body>
            <Sidebar />
            <Footer />
            <Routes>
              <Route path="/about" element={<AboutPage />}/>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
        );
}

export default App
