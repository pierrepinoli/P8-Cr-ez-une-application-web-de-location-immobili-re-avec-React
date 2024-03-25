// importations des dependances
import { NavLink } from "react-router-dom";

// importations des fichiers annexes
import logo from "../../assets/logo/logo-kasa.png";


function Header() {
    // établissement du DOM
    return (
        <header className="header--margin">
            <div className="navbar__box navbar__box--typography">
                <NavLink to="/"> <img className="header__logo--size" src={logo} alt="Logo Kasa" /></NavLink>
               
                <nav className="navbar">
                    <ul>
                        <li>
                            {/* utilisation de la fonction isActive de NavLink afin de definir l'état actif du lien */}
                            <NavLink to="/" className={({isActive}) => (isActive ? "active" : "")}>Accueil</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About" className={({isActive}) => (isActive ? "active" : "")}>A Propos</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

//exportation du composant
export default Header;