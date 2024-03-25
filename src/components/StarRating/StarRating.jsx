// importations des dependances
import React from 'react';

// importation des icones de Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

  //utilisation de props afin d'exporter les étoiles vers le composant parent
const StarRating = ({ rating }) => {
  // vérifie si la note est comprise entre 1 et 5
  const clampedRating = Math.min(5, Math.max(1, rating));

  // Création d'un tableau de 5 étoiles avec des étoiles remplies ou vides en fonction de la note
  const stars = Array.from({ length: 5 }, (_, index) => index < clampedRating);

  // établissement du DOM
  return (
    <div className="starrating__box">
      {/* utilisation de map distinguer l'état rempli d'une etoile et son index */}
      {stars.map((isFilled, index) => (
        // importation des icones de Fontawesome
        <FontAwesomeIcon
          key={index}
          icon={faStar}
          className={isFilled ? 'filled-star' : 'empty-star'}/>
      ))}
    </div>
  );
};

//exportation du composant
export default StarRating;