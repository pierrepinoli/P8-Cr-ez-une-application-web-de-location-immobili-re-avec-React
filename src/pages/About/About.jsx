// importations des dependances
import Banner from "../../components/Banners/Banner.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";

// importations des fichiers annexes
import bannerpicPath from '../../assets/images/mountains.png';


function About() {
     // établissement du DOM
    return (
        <main className="main__about">
            {/* importation de l'image de la bannière*/}
            <Banner imageSrc={bannerpicPath} />
            
            <section>
                <div className="collapse__box">
                {/* utilisation des props enfants pour remplir les collapses */}
                    <Collapse 
                        title="Fiabilité" 
                        content="Les annonces postées sur Kasa garantissent une fiabilité totale. 
                        Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes.">
                        
                    </Collapse>
                    <Collapse 
                        title="Respect" 
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                        Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.">
                      
                    </Collapse>
                    <Collapse 
                        title="Service" 
                        content="La bienveillance fait partie des valeurs fondatrices de Kasa. 
                        Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.">
                       
                    </Collapse>
                    <Collapse 
                        title="Securité" 
                        content="La sécurité est la priorité de Kasa. 
                        Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
                        En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
                        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.">
                       
                    </Collapse>
                </div>
            </section>
        </main>
    )
}

//exportation du composant
export default About;