// importation des dépendances
import React, { useState } from 'react';

// importation des icones de Fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// définition du composant 
// utilisation du Hook useState pour determineur deux etats : "ouvert" ou "non-ouvert"
// utilisation de props "title" et "content" pour transmettre aux parents le titre et le contenu 
const Collapse = ({ title, content }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  // établissement du DOM
  return (
    <div className="collapse__container">
    
      <div className="collapse__header" onClick={toggleCollapse}>
        <span>{title}</span>
        <span>
          {/* appel des icônes de Fontawesome */}
          <FontAwesomeIcon
            icon={faChevronUp}
            // définition des classes CSS
            className={`chevron__icon ${isCollapsed ? 'chevron__rotate--close' : 'chevron__rotate--open'}` }
          />
        </span>
      </div>

      <div className={`collapse__content ${isCollapsed ? 'collapse__content--reduce' : 'collapse__content--expand'}`}>
        <div className={`collapse__txt ${isCollapsed ? 'collapse__txt--reduce' : 'collapse__txt--expand'}`}>{content}</div>
      </div>
      
    </div>  
  );
};


// exportation du composant
export default Collapse;
