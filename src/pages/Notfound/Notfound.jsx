// importations des dependances
import { NavLink } from "react-router-dom";


function Notfound () {
     // établissement du DOM
    return ( 
        <main className="notfound__main">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            {/* utilisation de NavLink pour retourner à la page d'acceuil */}
            <NavLink to="/" className="navbar__links link__notfound">Retourner sur la page d’accueil</NavLink>
        </main>
    )
}

//exportation du composant
export default Notfound;