// importations des dependances
import { NavLink } from "react-router-dom";


// utilisation d'une props pour exporter facilement les données propres à chaque cartes
function Card({ item }) {
    return (

        // utilisation d'une clé pour identifier les éléments nécessaires à l'affichage voulues des cartes //
        <div key={item.id} className="card">

             {/* appel de la dépendance navLink pour acceder aux pages housing liées aux ID*/}
            <NavLink to={`/Housing/${item.id}`}>
                <div className="card__image" style={{ backgroundImage: `url(${item.cover})` }}></div>
                <div className="card__title">{item.title}</div>
            </NavLink>
        </div>
    );
}

export default Card;