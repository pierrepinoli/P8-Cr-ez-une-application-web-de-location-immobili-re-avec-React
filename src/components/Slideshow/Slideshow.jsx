// importations des dependances
import React, { useState  } from 'react';

// importations des fichiers annexes (logos des fleches)
import Arrow from "../../assets/logo/arrow.svg";

  // utilisation du hook useState afin de gérer l'ordre d'apparition des images
const Slideshow = ({ pictures }) => {
  // initialisation de l'état local "currentSlide" à 0 avec l'aide du hook "useState"
  const [currentSlide, setCurrentSlide] = useState(0);

  // affiche le slide précédent au clic sur l'icone gauche
  const prevSlide = () => {
    
    setCurrentSlide(
      // si currentSlide = 0 alors on affiche la derniere image 
      //sinon currentSlide - 1 pour afficher l'image précédente.
      currentSlide === 0 ? pictures.length - 1 : currentSlide - 1
      );
  };

  // affiche le slide suivant au clic sur l'icone droite
  const nextSlide = () => {
    setCurrentSlide(currentSlide === pictures.length - 1 ? 0 : currentSlide + 1 );
  };

  // établissement du DOM
  return (
    <div className="slideshow">
      {/* affiche seulement s'il y a plusieurs images*/}
      {pictures.length > 1 && (
        
      <div className="arrow__box">
          {/* création des fleches avec une mise en place d'un event listener grace à "onClick" */}
          {/* importation locale des icones de fontawesome */}
            <img className="arrow arrow__left" src={Arrow} alt="Flèche gauche" onClick={prevSlide} />
            <img className="arrow arrow__right"  src={Arrow} alt="Flèche droite" onClick={nextSlide} />
      </div>
      )}
 
      {/* affichage des images du slideshow en fonction de la valeur du currentSlide */}
      <img className="slideshow__img" src={pictures[currentSlide]} alt={`Slide numéro ${currentSlide + 1}`} />

      {/* affichage du compteur d'image en bas du carrousel */}
      <div className="slideshow__counter">
        <p>
          {pictures.length > 1 ? `${currentSlide + 1 }/${pictures.length}` : ""}
        </p>
      </div>
      
    </div>
  );
};

export default Slideshow;

