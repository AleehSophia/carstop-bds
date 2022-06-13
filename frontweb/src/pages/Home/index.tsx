import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Navbar from 'components/Navbar';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
          <div className="home-card">
              <div className="home-content-container">
                  <h1>O carro perfeito para você</h1>
              </div>
              <div className="home-image-container">
                  <MainImage />
              </div>
          </div>
      </div>
    </>
  );
};

export default Home;
