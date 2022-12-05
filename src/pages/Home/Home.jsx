import Layout from '../../components/Layout';
import ItemListContainer from '../../components/ItemListContainer';
import banner1 from "../../assets/images/banner-1.png";
import banner2 from "../../assets/images/banner-2.png";
import banner3 from "../../assets/images/banner-3.png";
import banner4 from "../../assets/images/banner-4.png";
import './Home.css';

const Home = () => {
    return(
        <div>
            <Layout>
                {/* <h1 className="home__body">Milan Libros</h1>
                <h4 className="home__body">Todos tus libros en un solo lugar</h4>
                 */}
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={banner1} class="d-block w-100" alt="No disponible" />
                        </div>
                        <div class="carousel-item">
                            <img src={banner2} class="d-block w-100" alt="No disponible" />
                        </div>
                        <div class="carousel-item">
                            <img src={banner3} class="d-block w-100" alt="No disponible" />
                        </div>
                        <div class="carousel-item">
                            <img src={banner4} class="d-block w-100" alt="No disponible" />
                        </div>
                    </div>
                </div>

                <ItemListContainer greeting="Todos tus libros en un solo lugar" />
            </Layout>
        </div>
    )
}

export default Home;