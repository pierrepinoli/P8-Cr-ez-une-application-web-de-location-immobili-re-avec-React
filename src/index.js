// importation des dependances
import React from 'react';
import ReactDOM from 'react-dom/client';

// importation du css via SASS
import './SASS/index.scss';

// importation du composant APP
import App from './App';

// établissement du lien avec le fichier HTML
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* importation du composant principal App */}
    <App />
  </React.StrictMode>
);

