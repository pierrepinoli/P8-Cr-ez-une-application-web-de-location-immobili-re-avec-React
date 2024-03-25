// importations des dependances
import Banner from "../../components/Banners/Banner.jsx";
import Card from "../../components/Card/Card.jsx";

// importations des fichiers annexes
import bannerpicPath from "../../assets/images/cliffs.png";
import data from '../../assets/logements.json';

function Home() {
    return ( 
        <main className="main__home">
            <div className="banner__home">
                <Banner className="image--brightness" imageSrc={bannerpicPath} />
                <h1>Chez vous, <br className="mobile-break"/> partout et ailleurs</h1>
            </div>
            
            <section>
                <div className="cards__grid">
                    {/* Utilisation de la fonction map pour créer les cartes de la grille en fonction du fichier logements.json*/}
                    {data.map(item => <Card key={item.id} item={item} />)}
                </div>
            </section>
        </main>
    );
}

export default Home;