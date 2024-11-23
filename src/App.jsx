import './App.css';

import {Routes, Route} from 'react-router-dom';
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

//components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

//routes
import DashboardPage from "./pages/DashboardPage";
import RecipeDetailsPage from "./pages/RecipeDetaisPage"

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetailsPage />} />
        <Route path="/about" element={<AboutPage />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
  
}

export default App;
