import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      <body>
        <Dashboard />
      </body>
      <Sidebar />

      <Footer />
    </>
  );
}

export default App;
