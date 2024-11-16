import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";

function App() {
  return (
    <>
      <Navbar />
      <body>
        <DashboardPage />
      </body>
      <Sidebar />

      <Footer />
    </>
  );
}

export default App;
