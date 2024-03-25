
//utilisation d'une props pour exporter le composant bannière vers le composant parent //

const Banner = (props) => { 

  // établissement du DOM 
  return (
    <div className={`banner ${props.className}`}>
      <img className="image--size" src={props.imageSrc} alt="bannière" />
    </div>
  )
}

//exportation du composant
export default Banner;