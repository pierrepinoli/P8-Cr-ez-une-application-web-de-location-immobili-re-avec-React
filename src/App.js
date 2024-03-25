import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Housing from "./pages/Housing/Housing.jsx";
import Notfound from "./pages/Notfound/Notfound.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  // etablisement du DOM
  return (
    // utilisation des balises Router, Routes, Route de react-router-dom pour definir les chemins de navigations 
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* determine le chemin en fonction de l'id */}
        <Route path="/Housing/:id" element={<Housing />} />
        {/* si le chemin n'existe pas l'utilisateur est redirigé vers la page 404 */}
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

//exportation du composant app
export default App;